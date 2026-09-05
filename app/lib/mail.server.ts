import { env } from "cloudflare:workers";

// One place that knows how to send mail through SparkPost. Extracted from
// contact.server.ts when the quarantine digest needed to send too — the
// awkward details (region-bound API host, which sending domain is actually
// verified, turning engagement tracking off) are easy to get subtly wrong
// twice.

interface MailEnv {
  SPARKPOST_API_KEY?: string;
  /** API host. SparkPost accounts are region-bound: EU accounts must use
   *  https://api.eu.sparkpost.com, US accounts https://api.sparkpost.com.
   *  Using the wrong one fails auth even with a valid key. */
  SPARKPOST_API_URL?: string;
  /** Where internal notifications go. Defaults to the published address. */
  CONTACT_TO?: string;
  /** Sending address — its domain must be verified in SparkPost. */
  CONTACT_FROM?: string;
}

const bindings = () => env as unknown as MailEnv;

const DEFAULT_TO = "hello@channex.io";
// mail.channex.io is the configured SparkPost sending domain (channex.io
// itself is not — sending from it fails with "Unconfigured Sending Domain").
const DEFAULT_FROM_EMAIL = "noreply@mail.channex.io";
const DEFAULT_FROM_NAME = "Channex website";
// EU host by default, matching the SparkPost account the booking engine uses.
const DEFAULT_API_URL = "https://api.eu.sparkpost.com";

export interface MailResult {
  ok: boolean;
  /** Why it failed, so failures aren't invisible. */
  error?: string;
}

/** Splits an RFC-5322-ish "Name <email>" into SparkPost's from object. */
function parseFrom(value: string): { email: string; name?: string } {
  const m = value.match(/^\s*(.*?)\s*<([^>]+)>\s*$/);
  if (m) return { email: m[2].trim(), name: m[1].trim() || undefined };
  return { email: value.trim() };
}

/** The internal recipient for site notifications. */
export function notificationRecipient(): string {
  return bindings().CONTACT_TO || DEFAULT_TO;
}

export interface SendMailOptions {
  subject: string;
  text: string;
  /** Set so a reply from the inbox reaches the right person. */
  replyTo?: string;
  /** Overrides the default internal recipient. */
  to?: string;
}

export async function sendMail({ subject, text, replyTo, to }: SendMailOptions): Promise<MailResult> {
  const cfg = bindings();
  if (!cfg.SPARKPOST_API_KEY) {
    return { ok: false, error: "SPARKPOST_API_KEY not set" };
  }
  const base = (cfg.SPARKPOST_API_URL || DEFAULT_API_URL).replace(/\/+$/, "");
  try {
    const res = await fetch(`${base}/api/v1/transmissions`, {
      method: "POST",
      headers: {
        // SparkPost takes the raw key — no "Bearer" prefix.
        Authorization: cfg.SPARKPOST_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // No engagement tracking. Both default to on in SparkPost, and open
        // tracking injects a pixel while click tracking rewrites every link
        // through a tracking domain — neither is wanted for an internal
        // notification, and link rewriting can trip spam filters.
        options: { open_tracking: false, click_tracking: false },
        content: {
          from: cfg.CONTACT_FROM
            ? parseFrom(cfg.CONTACT_FROM)
            : { email: DEFAULT_FROM_EMAIL, name: DEFAULT_FROM_NAME },
          ...(replyTo ? { reply_to: replyTo } : {}),
          subject,
          text,
        },
        recipients: [{ address: { email: to || notificationRecipient() } }],
      }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error(`mail: SparkPost responded ${res.status} from ${base}`, body);
      if (res.status === 401 || res.status === 403) {
        console.error(
          "mail: check SPARKPOST_API_KEY, and that SPARKPOST_API_URL matches your " +
            "account region (EU accounts must use https://api.eu.sparkpost.com)",
        );
      }
      return { ok: false, error: `${res.status} from ${base}: ${body}` };
    }
    return { ok: true };
  } catch (err) {
    console.error("mail: request failed", err);
    return { ok: false, error: `fetch failed to ${base}: ${String(err)}` };
  }
}
