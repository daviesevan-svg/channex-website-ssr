import { env } from "cloudflare:workers";

// Cloudflare Turnstile verification for the contact form.
//
// The whole point of a token is that it can only be obtained by client-side JS
// running on a page we served — which is exactly what the spam run currently
// bypasses by POSTing straight to /contact. A missing or invalid token is fed
// into the spam score (see spam.server.ts) rather than rejected outright, so
// the rare visitor whose JS never runs still has their enquiry stored and
// recoverable instead of silently thrown away.
//
// Both keys are read from the environment and neither is committed. The site
// key is public (it appears in the HTML) but still lives in the dashboard
// rather than wrangler.jsonc, because adding a `vars` block there re-applies on
// every deploy and would overwrite same-named dashboard values.

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

interface TurnstileEnv {
  /** Public key rendered into the widget. Absent = feature off. */
  TURNSTILE_SITE_KEY?: string;
  /** Dashboard Secret. Absent = verification skipped. */
  TURNSTILE_SECRET_KEY?: string;
}

const bindings = () => env as unknown as TurnstileEnv;

/** The public key, or null when Turnstile isn't configured. */
export function turnstileSiteKey(): string | null {
  return bindings().TURNSTILE_SITE_KEY?.trim() || null;
}

/** Verification is only enforced once BOTH keys are present. Either one alone
 *  is a half-configured state: enforcing with no widget would quarantine every
 *  genuine enquiry, so we deliberately fail open. */
export function turnstileConfigured(): boolean {
  return Boolean(turnstileSiteKey() && bindings().TURNSTILE_SECRET_KEY?.trim());
}

export type TurnstileOutcome = "off" | "ok" | "missing" | "invalid" | "unreachable";

/** Verifies a widget token. Returns "off" when unconfigured, and "unreachable"
 *  if Cloudflare itself can't be reached — that must not be treated as a bot,
 *  so callers leave the score alone in that case. */
export async function verifyTurnstile(
  token: string | null | undefined,
  ip: string | null | undefined,
): Promise<TurnstileOutcome> {
  if (!turnstileConfigured()) return "off";

  const value = (token ?? "").trim();
  if (!value) return "missing";

  const body = new FormData();
  body.append("secret", bindings().TURNSTILE_SECRET_KEY!.trim());
  body.append("response", value);
  if (ip) body.append("remoteip", ip);

  try {
    const res = await fetch(VERIFY_URL, { method: "POST", body });
    if (!res.ok) {
      console.error(`turnstile: siteverify responded ${res.status}`);
      return "unreachable";
    }
    const result = (await res.json()) as { success?: boolean; "error-codes"?: string[] };
    if (result.success) return "ok";
    console.warn(`turnstile: token rejected (${(result["error-codes"] ?? []).join(", ") || "no reason given"})`);
    return "invalid";
  } catch (err) {
    console.error("turnstile: siteverify request failed", err);
    return "unreachable";
  }
}
