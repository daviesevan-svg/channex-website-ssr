import { env } from "cloudflare:workers";
import { z } from "zod";

// Contact-form handling. Two independent things happen per submission:
//
//  1. the enquiry is stored (D1, when a DB binding exists), and
//  2. an email is sent to the sales inbox via Resend.
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
  RESEND_API_KEY?: string;
  /** Override the Resend endpoint (a proxy, or a stub in tests). */
  RESEND_API_URL?: string;
  /** Where enquiries are sent. Defaults to the published address. */
  CONTACT_TO?: string;
  /** Must be a Resend-verified sender on your domain. */
  CONTACT_FROM?: string;
  DB?: D1Database;
}

const bindings = () => env as unknown as ContactEnv;

const DEFAULT_TO = "hello@channex.io";
const DEFAULT_FROM = "Channex website <noreply@channex.io>";

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
  schemaReady = true;
}

async function store(
  db: D1Database,
  input: ContactInput,
  meta: SubmitMeta,
  emailed: boolean,
): Promise<boolean> {
  try {
    await ensureSchema(db);
    await db
      .prepare(
        `INSERT INTO contact_enquiry
           (ts, first_name, last_name, email, company, message, source, country, user_agent, emailed)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
        emailed ? 1 : 0,
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

async function sendEmail(input: ContactInput, meta: SubmitMeta): Promise<boolean> {
  const env = bindings();
  if (!env.RESEND_API_KEY) {
    console.error("contact: RESEND_API_KEY is not set — enquiry not emailed");
    return false;
  }
  try {
    const res = await fetch(env.RESEND_API_URL || "https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM || DEFAULT_FROM,
        to: [env.CONTACT_TO || DEFAULT_TO],
        // So a reply from the inbox goes straight back to the prospect.
        reply_to: input.email,
        subject: `Website enquiry — ${input.company} (${input.firstName} ${input.lastName})`,
        text: plainBody(input, meta),
      }),
    });
    if (!res.ok) {
      console.error(`contact: Resend responded ${res.status}`, await res.text().catch(() => ""));
      return false;
    }
    return true;
  } catch (err) {
    console.error("contact: failed to send email", err);
    return false;
  }
}

export async function submitEnquiry(input: ContactInput, meta: SubmitMeta): Promise<SubmitResult> {
  const env = bindings();
  const emailed = await sendEmail(input, meta);
  const stored = env.DB ? await store(env.DB, input, meta, emailed) : false;
  if (!env.DB) {
    console.warn("contact: no DB binding — enquiries are not being stored, email only");
  }
  return { stored, emailed };
}
