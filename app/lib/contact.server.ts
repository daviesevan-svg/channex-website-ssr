import { env } from "cloudflare:workers";
import { z } from "zod";
import { classifySpam, type SpamVerdict } from "@/lib/spam.server";
import { sendMail, type MailResult } from "@/lib/mail.server";
import type { TurnstileOutcome } from "@/lib/turnstile.server";

// Contact-form handling. Two independent things happen per submission:
//
//  1. the enquiry is stored in D1, and
//  2. an email is sent to the sales inbox via SparkPost.
//
// They're independent on purpose: a lead is the whole point of this site, so
// one failing must not lose it. If storage succeeds but email doesn't, the
// submitter still gets a success page and the row is there to follow up from.
// If both fail we say so plainly and show the direct address, rather than
// pretending it sent.
//
// Spam is quarantined rather than rejected (see spam.server.ts): a submission
// that scores over the threshold is still stored, with its score and reasons,
// but no email is sent. That keeps the inbox clean without ever discarding
// something that turns out to be a real enquiry — misjudged rows can be read
// back out of D1. The sender always sees success, because a bot that gets an
// error just retries with different values.

export const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  email: z.string().trim().email("Enter a valid email address").max(200),
  company: z.string().trim().min(1, "Company name is required").max(160),
  message: z.string().trim().min(10, "Please add a little more detail").max(5000),
  // Honeypot: a real person never fills this (it's visually hidden and
  // aria-hidden). Bots that fill every input get silently accepted and dropped.
  botField: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Worker bindings this module reads. Mail configuration lives in
 *  mail.server.ts; DB is optional — without it, enquiries are emailed but not
 *  stored. */
interface ContactEnv {
  DB?: D1Database;
}

const bindings = () => env as unknown as ContactEnv;

export interface SubmitMeta {
  /** Which page the form was submitted from. */
  source: string;
  country: string | null;
  userAgent: string | null;
  /** Origin header, checked against `host` to catch off-site posts. */
  origin?: string | null;
  /** Host the request was addressed to. */
  host?: string | null;
  /** Caller IP (cf-connecting-ip). Never stored raw — only a hash of it. */
  ip?: string | null;
  /** Result of Turnstile verification, already performed by the route. */
  turnstile?: TurnstileOutcome;
}

export interface SubmitResult {
  stored: boolean;
  emailed: boolean;
  /** Quarantined as spam: stored, deliberately not emailed. */
  spam: boolean;
}

let schemaReady = false;
/** Exported so the quarantine digest can guarantee the spam columns exist
 *  before querying them, even if it runs before the first submission of a
 *  deployment. Idempotent and memoised. */
export const ensureContactSchema = (db: D1Database) => ensureSchema(db);
async function ensureSchema(db: D1Database): Promise<void> {
  if (schemaReady) return;
  await db
    .prepare(
      `CREATE TABLE IF NOT EXISTS contact_enquiry (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        ts INTEGER NOT NULL,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL,
        company TEXT NOT NULL,
        message TEXT NOT NULL,
        source TEXT,
        country TEXT,
        user_agent TEXT,
        emailed INTEGER NOT NULL DEFAULT 0
      )`,
    )
    .run();
  // Added after the table shipped; SQLite has no IF NOT EXISTS for columns, so
  // the duplicate-column error on an already-migrated table is expected.
  for (const column of [
    `email_error TEXT`,
    // Spam triage, added 2026-08. NULL on rows predating it.
    `spam_score INTEGER`,
    `spam_reasons TEXT`,
    // Salted hash of the caller IP, for rate limiting. The raw address is
    // never written — this only needs to support equality comparison.
    `ip_hash TEXT`,
  ]) {
    try {
      await db.prepare(`ALTER TABLE contact_enquiry ADD COLUMN ${column}`).run();
    } catch {
      /* column already present */
    }
  }
  try {
    await db.prepare(`CREATE INDEX IF NOT EXISTS contact_enquiry_ip_ts ON contact_enquiry (ip_hash, ts)`).run();
  } catch {
    /* index already present */
  }
  schemaReady = true;
}

// Pseudonymises the caller IP. Not a secret — a fixed pepper is enough here,
// because the only operation performed on the result is comparing it with
// other hashes from the same deployment to count recent submissions.
const IP_PEPPER = "channex-website-contact-v1";

async function hashIp(ip: string): Promise<string> {
  const data = new TextEncoder().encode(`${IP_PEPPER}:${ip}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, 32);
}

/** Submissions allowed from one IP before further ones are quarantined. The
 *  observed spam run sent ~20 in a day from a single source; a genuine
 *  prospect sending five enquiries in an hour is not a scenario worth
 *  optimising for, and even then nothing is lost — just held back from email. */
const RATE_LIMIT_HOUR = 4;
const RATE_LIMIT_DAY = 8;

interface HistoryFlags {
  duplicate: boolean;
  rateLimited: boolean;
}

/** Looks at what this sender has already submitted. Failures here are
 *  swallowed: a broken lookup must never block a real enquiry. */
async function history(
  db: D1Database,
  input: ContactInput,
  ipHash: string | null,
): Promise<HistoryFlags> {
  const now = Date.now();
  try {
    const dup = await db
      .prepare(
        `SELECT 1 FROM contact_enquiry
          WHERE email = ? AND message = ? AND ts > ? LIMIT 1`,
      )
      .bind(input.email, input.message, now - 7 * 86_400_000)
      .first();

    let rateLimited = false;
    if (ipHash) {
      const counts = await db
        .prepare(
          `SELECT
             SUM(CASE WHEN ts > ? THEN 1 ELSE 0 END) AS last_hour,
             COUNT(*) AS last_day
           FROM contact_enquiry
           WHERE ip_hash = ? AND ts > ?`,
        )
        .bind(now - 3_600_000, ipHash, now - 86_400_000)
        .first<{ last_hour: number | null; last_day: number | null }>();
      rateLimited =
        (counts?.last_hour ?? 0) >= RATE_LIMIT_HOUR || (counts?.last_day ?? 0) >= RATE_LIMIT_DAY;
    }
    return { duplicate: dup !== null, rateLimited };
  } catch (err) {
    console.error("contact: history lookup failed, treating as first-time sender", err);
    return { duplicate: false, rateLimited: false };
  }
}

async function store(
  db: D1Database,
  input: ContactInput,
  meta: SubmitMeta,
  email: EmailResult,
  verdict: SpamVerdict,
  ipHash: string | null,
): Promise<boolean> {
  try {
    await ensureSchema(db);
    await db
      .prepare(
        `INSERT INTO contact_enquiry
           (ts, first_name, last_name, email, company, message, source, country, user_agent, emailed, email_error, spam_score, spam_reasons, ip_hash)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .bind(
        Date.now(),
        input.firstName,
        input.lastName,
        input.email,
        input.company,
        input.message,
        meta.source,
        meta.country,
        meta.userAgent?.slice(0, 300) ?? null,
        email.ok ? 1 : 0,
        email.error?.slice(0, 500) ?? null,
        verdict.score,
        verdict.reason || null,
        ipHash,
      )
      .run();
    return true;
  } catch (err) {
    console.error("contact: failed to store enquiry", err);
    return false;
  }
}

function plainBody(input: ContactInput, meta: SubmitMeta): string {
  return [
    `Name:    ${input.firstName} ${input.lastName}`,
    `Company: ${input.company}`,
    `Email:   ${input.email}`,
    meta.country ? `Country: ${meta.country}` : null,
    `Page:    ${meta.source}`,
    "",
    "Message:",
    input.message,
  ]
    .filter((l) => l !== null)
    .join("\n");
}

type EmailResult = MailResult;

async function sendEmail(input: ContactInput, meta: SubmitMeta): Promise<EmailResult> {
  const result = await sendMail({
    subject: `Website enquiry — ${input.company} (${input.firstName} ${input.lastName})`,
    text: plainBody(input, meta),
    // So a reply from the inbox goes straight back to the prospect.
    replyTo: input.email,
  });
  if (!result.ok) console.error(`contact: enquiry not emailed — ${result.error}`);
  return result;
}

export async function submitEnquiry(input: ContactInput, meta: SubmitMeta): Promise<SubmitResult> {
  const env = bindings();
  const ipHash = meta.ip ? await hashIp(meta.ip) : null;

  // Rate and duplicate checks need the database. Without it we still classify
  // on the submission's own content, which is what catches the bulk of spam.
  // The schema has to be ensured first: history() reads ip_hash, which is a
  // column added after the table originally shipped, so querying before the
  // migration runs fails on the first request of a new deployment.
  if (env.DB) await ensureSchema(env.DB).catch(() => {});
  const flags = env.DB
    ? await history(env.DB, input, ipHash)
    : { duplicate: false, rateLimited: false };

  const verdict = classifySpam(input, {
    origin: meta.origin,
    host: meta.host,
    duplicate: flags.duplicate,
    rateLimited: flags.rateLimited,
    // "unreachable" and "off" are deliberately not treated as failures: an
    // outage at Cloudflare, or Turnstile not being configured yet, must not
    // start quarantining real enquiries.
    turnstileFailed: meta.turnstile === "missing" || meta.turnstile === "invalid",
  });

  if (verdict.spam) {
    // Stored for review, never emailed. Logged so a wrong call is visible in
    // Workers logs as well as in the row itself.
    console.warn(
      `contact: quarantined as spam (score ${verdict.score}: ${verdict.reason}) from ${input.email}`,
    );
    const stored = env.DB
      ? await store(env.DB, input, meta, { ok: false, error: "quarantined as spam" }, verdict, ipHash)
      : false;
    return { stored, emailed: false, spam: true };
  }

  const email = await sendEmail(input, meta);
  const stored = env.DB ? await store(env.DB, input, meta, email, verdict, ipHash) : false;
  if (!env.DB) {
    console.warn("contact: no DB binding — enquiries are not being stored, email only");
  }
  return { stored, emailed: email.ok, spam: false };
}
