import { env } from "cloudflare:workers";
import { z } from "zod";

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

/** Worker bindings this module reads. RESEND_API_KEY is a dashboard secret;
 *  CONTACT_TO/CONTACT_FROM are plain vars; DB is optional — without it,
 *  enquiries are emailed but not stored. */
interface ContactEnv {
  SPARKPOST_API_KEY?: string;
  /** API host. SparkPost accounts are region-bound: EU accounts must use
   *  https://api.eu.sparkpost.com, US accounts https://api.sparkpost.com.
   *  Using the wrong one fails auth even with a valid key. */
  SPARKPOST_API_URL?: string;
  /** Where enquiries are sent. Defaults to the published address. */
  CONTACT_TO?: string;
  /** Sending address — its domain must be verified in SparkPost. */
  CONTACT_FROM?: string;
  DB?: D1Database;
}

const bindings = () => env as unknown as ContactEnv;

const DEFAULT_TO = "hello@channex.io";
// mail.channex.io is the configured SparkPost sending domain (channex.io
// itself is not — sending from it fails with "Unconfigured Sending Domain").
const DEFAULT_FROM_EMAIL = "noreply@mail.channex.io";
const DEFAULT_FROM_NAME = "Channex website";
// EU host by default, matching the SparkPost account the booking engine uses.
const DEFAULT_API_URL = "https://api.eu.sparkpost.com";

export interface SubmitMeta {
  /** Which page the form was submitted from. */
  source: string;
  country: string | null;
  userAgent: string | null;
}

export interface SubmitResult {
  stored: boolean;
  emailed: boolean;
}

let schemaReady = false;
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
  try {
    await db.prepare(`ALTER TABLE contact_enquiry ADD COLUMN email_error TEXT`).run();
  } catch {
    /* column already present */
  }
  schemaReady = true;
}

async function store(
  db: D1Database,
  input: ContactInput,
  meta: SubmitMeta,
  email: EmailResult,
): Promise<boolean> {
  try {
    await ensureSchema(db);
    await db
      .prepare(
        `INSERT INTO contact_enquiry
           (ts, first_name, last_name, email, company, message, source, country, user_agent, emailed, email_error)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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

/** Splits an RFC-5322-ish "Name <email>" into SparkPost's from object. */
function parseFrom(value: string): { email: string; name?: string } {
  const m = value.match(/^\s*(.*?)\s*<([^>]+)>\s*$/);
  if (m) return { email: m[2].trim(), name: m[1].trim() || undefined };
  return { email: value.trim() };
}

interface EmailResult {
  ok: boolean;
  /** Why it failed — recorded on the row so failures aren't invisible. */
  error?: string;
}

async function sendEmail(input: ContactInput, meta: SubmitMeta): Promise<EmailResult> {
  const env = bindings();
  if (!env.SPARKPOST_API_KEY) {
    console.error("contact: SPARKPOST_API_KEY is not set — enquiry not emailed");
    return { ok: false, error: "SPARKPOST_API_KEY not set" };
  }
  const base = (env.SPARKPOST_API_URL || DEFAULT_API_URL).replace(/\/+$/, "");
  try {
    const res = await fetch(`${base}/api/v1/transmissions`, {
      method: "POST",
      headers: {
        // SparkPost takes the raw key — no "Bearer" prefix.
        Authorization: env.SPARKPOST_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // No engagement tracking. Both default to on in SparkPost, and open
        // tracking injects a pixel while click tracking rewrites every link
        // through a tracking domain — neither is wanted for an internal
        // notification, and link rewriting can trip spam filters.
        options: { open_tracking: false, click_tracking: false },
        content: {
          from: env.CONTACT_FROM
            ? parseFrom(env.CONTACT_FROM)
            : { email: DEFAULT_FROM_EMAIL, name: DEFAULT_FROM_NAME },
          // So a reply from the inbox goes straight back to the prospect.
          reply_to: input.email,
          subject: `Website enquiry — ${input.company} (${input.firstName} ${input.lastName})`,
          text: plainBody(input, meta),
        },
        recipients: [{ address: { email: env.CONTACT_TO || DEFAULT_TO } }],
      }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error(`contact: SparkPost responded ${res.status} from ${base}`, body);
      if (res.status === 401 || res.status === 403) {
        console.error(
          "contact: check SPARKPOST_API_KEY, and that SPARKPOST_API_URL matches your " +
            "account region (EU accounts must use https://api.eu.sparkpost.com)",
        );
      }
      return { ok: false, error: `${res.status} from ${base}: ${body}` };
    }
    return { ok: true };
  } catch (err) {
    console.error("contact: failed to send email", err);
    return { ok: false, error: `fetch failed to ${base}: ${String(err)}` };
  }
}

export async function submitEnquiry(input: ContactInput, meta: SubmitMeta): Promise<SubmitResult> {
  const env = bindings();
  const email = await sendEmail(input, meta);
  const stored = env.DB ? await store(env.DB, input, meta, email) : false;
  if (!env.DB) {
    console.warn("contact: no DB binding — enquiries are not being stored, email only");
  }
  return { stored, emailed: email.ok };
}
