import { env } from "cloudflare:workers";
import { ensureContactSchema } from "@/lib/contact.server";
import { sendMail, notificationRecipient } from "@/lib/mail.server";

// Daily summary of contact-form submissions that were quarantined instead of
// emailed. Runs from a cron trigger (see workers/app.ts and wrangler.jsonc).
//
// Daily rather than weekly, and silent when there is nothing to report: the
// point is that a genuine enquiry wrongly held back surfaces within a day
// instead of sitting unseen, and on a quiet day no mail is sent at all.
//
// The digest leads with the rows most likely to be real. A submission
// quarantined only because it had no Turnstile token, hit the rate limit or
// duplicated an earlier message could easily be a person whose JS was blocked.
// One quarantined for what it actually *said* — the bot name pattern, a random
// string, brand-company plus a translated price probe — is a bot, and is listed
// separately as a count rather than in detail.

/** Signals that say nothing about the content, so a row carrying only these
 *  deserves a human glance. Everything else is a content judgement. */
const INFRASTRUCTURE_SIGNALS = new Set(["turnstile-failed", "rate-limited", "duplicate"]);

const STATE_KEY = "quarantine_digest_last_id";

interface DigestEnv {
  DB?: D1Database;
}

const bindings = () => env as unknown as DigestEnv;

interface QuarantinedRow {
  id: number;
  ts: number;
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  message: string;
  country: string | null;
  spam_score: number;
  spam_reasons: string | null;
}

async function ensureStateTable(db: D1Database): Promise<void> {
  await db
    .prepare(`CREATE TABLE IF NOT EXISTS app_state (key TEXT PRIMARY KEY, value TEXT NOT NULL)`)
    .run();
}

async function readLastId(db: D1Database): Promise<number> {
  const row = await db
    .prepare(`SELECT value FROM app_state WHERE key = ?`)
    .bind(STATE_KEY)
    .first<{ value: string }>();
  const parsed = Number(row?.value ?? 0);
  return Number.isFinite(parsed) ? parsed : 0;
}

async function writeLastId(db: D1Database, id: number): Promise<void> {
  await db
    .prepare(
      `INSERT INTO app_state (key, value) VALUES (?, ?)
         ON CONFLICT(key) DO UPDATE SET value = excluded.value`,
    )
    .bind(STATE_KEY, String(id))
    .run();
}

const signalsOf = (reasons: string | null): string[] =>
  (reasons ?? "")
    .split(",")
    .map((part) => part.trim().split("+")[0])
    .filter(Boolean);

/** True when nothing about the submission's content was suspicious. */
export function needsAHumanLook(reasons: string | null): boolean {
  const signals = signalsOf(reasons);
  return signals.length > 0 && signals.every((s) => INFRASTRUCTURE_SIGNALS.has(s));
}

const when = (ts: number) => new Date(ts).toISOString().replace("T", " ").slice(0, 16);

function describe(row: QuarantinedRow): string {
  const message = row.message.replace(/\s+/g, " ").trim();
  return [
    `  ${row.first_name} ${row.last_name} — ${row.company}`,
    `  ${row.email}${row.country ? `  (${row.country})` : ""}   ${when(row.ts)}`,
    `  held because: ${row.spam_reasons ?? "unknown"}`,
    `  "${message.length > 220 ? `${message.slice(0, 220)}…` : message}"`,
  ].join("\n");
}

export function buildDigest(rows: QuarantinedRow[]): { subject: string; text: string } {
  const review = rows.filter((r) => needsAHumanLook(r.spam_reasons));
  const bots = rows.filter((r) => !needsAHumanLook(r.spam_reasons));

  const subject =
    review.length > 0
      ? `${review.length} held enquir${review.length === 1 ? "y" : "ies"} worth checking (${rows.length} total held)`
      : `${rows.length} spam submission${rows.length === 1 ? "" : "s"} blocked, nothing needing attention`;

  const lines: string[] = [];
  lines.push(`Contact form: ${rows.length} submission${rows.length === 1 ? "" : "s"} held back and not emailed.`);
  lines.push("");

  if (review.length > 0) {
    lines.push(`WORTH A LOOK (${review.length})`);
    lines.push(
      "These were held for reasons unrelated to what they said — no captcha token,",
      "too many posts from one address, or a repeat of an earlier message. A real",
      "person with JavaScript blocked looks exactly like this.",
      "",
    );
    review.forEach((row) => {
      lines.push(describe(row), "");
    });
  } else {
    lines.push("Nothing needs attention: every held submission was flagged on its content.");
    lines.push("");
  }

  if (bots.length > 0) {
    lines.push(`CLEAR SPAM (${bots.length}) — listed as counts only`);
    const byReason = new Map<string, number>();
    bots.forEach((row) => {
      const key = signalsOf(row.spam_reasons).join(", ") || "unknown";
      byReason.set(key, (byReason.get(key) ?? 0) + 1);
    });
    [...byReason.entries()]
      .sort((a, b) => b[1] - a[1])
      .forEach(([reason, count]) => lines.push(`  ${String(count).padStart(3)} x  ${reason}`));
    lines.push("");
  }

  lines.push(
    "To read any of these in full:",
    "  npx wrangler d1 execute channex-website --remote --command \\",
    '    "SELECT * FROM contact_enquiry WHERE spam_score >= 4 ORDER BY ts DESC LIMIT 20"',
  );

  return { subject, text: lines.join("\n") };
}

export interface DigestResult {
  /** Rows considered this run. */
  found: number;
  /** Of those, how many were flagged for non-content reasons. */
  needsReview: number;
  sent: boolean;
  error?: string;
}

/** Sends the digest for everything quarantined since the last run. Progress is
 *  tracked by row id rather than a time window, so a missed or delayed run
 *  reports late instead of losing the rows entirely. */
export async function sendQuarantineDigest(): Promise<DigestResult> {
  const db = bindings().DB;
  if (!db) {
    console.warn("digest: no DB binding — nothing to summarise");
    return { found: 0, needsReview: 0, sent: false, error: "no DB binding" };
  }

  try {
    await ensureContactSchema(db);
    await ensureStateTable(db);
  } catch (err) {
    console.error("digest: could not prepare schema", err);
    return { found: 0, needsReview: 0, sent: false, error: String(err) };
  }

  const lastId = await readLastId(db);

  // Cap the batch so a first run over a long backlog can't build an enormous
  // email. Anything above the cap is picked up by the following run.
  const BATCH_CAP = 200;
  const { results } = await db
    .prepare(
      `SELECT id, ts, first_name, last_name, email, company, message, country, spam_score, spam_reasons
         FROM contact_enquiry
        WHERE id > ? AND spam_score >= 4
        ORDER BY id
        LIMIT ?`,
    )
    .bind(lastId, BATCH_CAP)
    .all<QuarantinedRow>();

  const rows = results ?? [];
  const hitCap = rows.length === BATCH_CAP;

  // Where to move the marker to once the batch is safely reported. When the cap
  // was hit we can only advance as far as the last row actually included,
  // because there are known spam rows beyond it. Otherwise every row up to the
  // table's current end has been accounted for, so the marker can skip the
  // delivered (non-spam) rows too and save rescanning them.
  const nextMarker = async (): Promise<number> => {
    if (hitCap) return rows[rows.length - 1].id;
    const row = await db
      .prepare(`SELECT MAX(id) AS max_id FROM contact_enquiry`)
      .first<{ max_id: number | null }>();
    return Math.max(row?.max_id ?? lastId, lastId);
  };

  const needsReview = rows.filter((r) => needsAHumanLook(r.spam_reasons)).length;

  if (rows.length === 0) {
    const marker = await nextMarker();
    if (marker > lastId) await writeLastId(db, marker);
    console.log("digest: nothing quarantined since last run, no mail sent");
    return { found: 0, needsReview: 0, sent: false };
  }

  const { subject, text } = buildDigest(rows);
  const mail = await sendMail({ subject: `[Channex site] ${subject}`, text });

  if (!mail.ok) {
    // Deliberately do NOT advance the marker: these rows should appear in the
    // next digest rather than being silently skipped.
    console.error(`digest: send failed, will retry next run — ${mail.error}`);
    console.log(`digest: content that would have been sent to ${notificationRecipient()}:\n${text}`);
    return { found: rows.length, needsReview, sent: false, error: mail.error };
  }

  const marker = await nextMarker();
  await writeLastId(db, marker);
  console.log(
    `digest: sent — ${rows.length} held, ${needsReview} worth a look, marker now ${marker}${hitCap ? " (batch capped, more next run)" : ""}`,
  );
  return { found: rows.length, needsReview, sent: true };
}
