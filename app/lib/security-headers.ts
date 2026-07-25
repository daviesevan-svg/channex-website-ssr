// Security headers applied to every response by the Worker entry.
//
// Deliberately excludes Content-Security-Policy. A useful CSP here would need
// per-request nonces threaded through the SSR render, because React Router
// injects inline hydration scripts — without that, the policy would need
// script-src 'unsafe-inline', which gives up most of what CSP is for. Intercom
// also pulls scripts, fonts, images and websockets from several hosts, so a
// wrong policy silently kills the chat widget (a lead channel). Worth doing
// properly as its own change with report-only rollout first.

const HEADERS: Record<string, string> = {
  // Force HTTPS for a year. No `preload` — that's a one-way door (removal from
  // the browser preload list takes months), so it should be a deliberate call.
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
  // Don't let a browser second-guess our Content-Type (e.g. treat an upload as
  // a script).
  "X-Content-Type-Options": "nosniff",
  // Send the full URL to our own origin, only the origin cross-site.
  "Referrer-Policy": "strict-origin-when-cross-origin",
  // No framing by other sites (clickjacking). Nothing here is meant to be
  // embedded — the embeddable widget lives in the booking-engine app.
  "X-Frame-Options": "SAMEORIGIN",
  // Nothing on this site uses these, so switch them off rather than leave them
  // available to injected script.
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=()",
};

/** Returns a copy of `response` with the security headers set. Existing values
 *  win, so a route can opt out of a specific header if it ever needs to. */
export function withSecurityHeaders(response: Response): Response {
  // Redirects and 304s must keep their exact body semantics; cloning headers is
  // safe for all of them, but never touch the body.
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(HEADERS)) {
    if (!headers.has(name)) headers.set(name, value);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
