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

export type TurnstileConfigState = "enforcing" | "half-configured" | "off";

/** Config as a value rather than a log line, so the daily digest can report it
 *  (see digest.server.ts). Nothing here reads a token — it only asks which keys
 *  the Worker was given. */
export function turnstileConfigState(): TurnstileConfigState {
  const site = Boolean(turnstileSiteKey());
  const secret = Boolean(bindings().TURNSTILE_SECRET_KEY?.trim());
  if (site && secret) return "enforcing";
  if (site || secret) return "half-configured";
  return "off";
}

/** Which key is missing, for a message. Empty when both or neither are set. */
export function turnstileMissingKey(): string {
  if (turnstileConfigState() !== "half-configured") return "";
  return turnstileSiteKey() ? "TURNSTILE_SECRET_KEY" : "TURNSTILE_SITE_KEY";
}

// Warn once per isolate, not per request.
let warnedNotEnforcing = false;

/** Verification is only enforced once BOTH keys are present. Anything less
 *  fails open: enforcing with no widget would quarantine every genuine enquiry.
 *
 *  Failing open silently is how this bit us in production on 2026-08-01: the
 *  site key was added as a plaintext dashboard Variable, a later deploy wiped
 *  it (the generated build/server/wrangler.json carries `vars: {}`, and a
 *  deploy replaces the whole plaintext-variable set with that — encrypted
 *  Secrets survive, plain Variables do not), and Turnstile quietly stopped
 *  enforcing after eight minutes with nothing to show it had.
 *
 *  Note that the wipe takes out every plaintext Variable at once, so losing
 *  BOTH keys together is the *expected* shape of that failure, not the exotic
 *  one — "off" therefore has to be as loud as "half-configured". It stays
 *  silent only where it is a real choice: local dev, which sets neither key and
 *  never runs the cron that would nag about it. */
export function turnstileConfigured(): boolean {
  const state = turnstileConfigState();
  if (!warnedNotEnforcing && state !== "enforcing") {
    warnedNotEnforcing = true;
    const cause =
      state === "half-configured"
        ? `HALF CONFIGURED — ${turnstileMissingKey()} is missing`
        : "OFF — neither TURNSTILE_SITE_KEY nor TURNSTILE_SECRET_KEY is set (a deploy wipes both plaintext Variables at once)";
    console.error(
      `turnstile: ${cause}. ` +
        "Verification is disabled and the form is protected by content rules only. " +
        "Add BOTH keys as encrypted Secrets (a plaintext Variable is deleted by the next deploy).",
    );
  }
  return state === "enforcing";
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
