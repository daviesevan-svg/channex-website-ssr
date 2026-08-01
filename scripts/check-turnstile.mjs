#!/usr/bin/env node
// Reports whether Turnstile is actually live on a deployed site.
//
//   node scripts/check-turnstile.mjs                     # checks https://channex.io
//   node scripts/check-turnstile.mjs http://localhost:4173
//
// Read-only: it fetches two pages and inspects the HTML. It deliberately does
// NOT submit the form, because if Turnstile turns out to be inactive that
// submission would land in the sales inbox.
//
// There are two halves to "active", and only the first is visible from outside:
//
//   1. TURNSTILE_SITE_KEY reaching the page — checked here.
//   2. TURNSTILE_SECRET_KEY being used to verify — server-side only. This
//      script prints the exact query to confirm it from the enquiry table,
//      because every submission records why it was scored the way it was.

const base = (process.argv[2] ?? "https://channex.io").replace(/\/+$/, "");

// Site keys look like 0x4AAAA…; Cloudflare's documented test keys start 1x/2x/3x.
const KEY_RE = /\b([0-3]x[A-Za-z0-9_-]{18,})\b/;

const label = (s) => s.padEnd(30);
const PASS = "[32mPASS[0m";
const WARN = "[33mWARN[0m";
const FAIL = "[31mFAIL[0m";

// A unique query param per run, because pages are edge-cached (see
// app/lib/edge-cache.server.ts) and a cached copy can predate the config change
// being checked. Only campaign params are stripped from the cache key, so an
// arbitrary one guarantees a fresh render that reflects the Worker's env right
// now. Without this the check happily reports a stale answer — it did, the
// first time it was run.
async function fetchPage(path) {
  const bust = `cachebust=${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
  const url = `${base}${path}${path.includes("?") ? "&" : "?"}${bust}`;
  const res = await fetch(url, { headers: { "cache-control": "no-cache" } });
  return { url, status: res.status, html: await res.text(), headers: res.headers };
}

let problems = 0;

console.log(`\nTurnstile check — ${base}\n${"-".repeat(52)}`);

for (const path of ["/contact", "/"]) {
  let page;
  try {
    page = await fetchPage(path);
  } catch (err) {
    console.log(`${label(path)} ${FAIL}  could not fetch: ${err.message}`);
    problems++;
    continue;
  }

  if (page.status !== 200) {
    console.log(`${label(path)} ${FAIL}  HTTP ${page.status}`);
    problems++;
    continue;
  }

  // The hidden field only renders when the server had a site key, so its
  // presence is proof the key reached the page.
  const wired = page.html.includes('name="cf-turnstile-response"');
  const key = page.html.match(KEY_RE)?.[1] ?? null;
  const eager = page.html.includes("challenges.cloudflare.com");

  if (wired) {
    const masked = key ? `${key.slice(0, 8)}…` : "(key value not visible)";
    const isTestKey = key && /^[123]x0{8,}/.test(key);
    console.log(`${label(path + " site key")} ${isTestKey ? WARN : PASS}  present ${masked}${isTestKey ? "  <-- this is a TEST key, not a real one" : ""}`);
    if (isTestKey) problems++;
  } else {
    console.log(`${label(path + " site key")} ${FAIL}  absent — TURNSTILE_SITE_KEY is not set for the Worker`);
    console.log(
      `${label("")}       NOTE: if you added it and it has since vanished, it was almost\n` +
        `${label("")}       certainly a plaintext dashboard Variable. Deploys ship\n` +
        `${label("")}       \`vars: {}\` and that replaces the whole plaintext set, deleting\n` +
        `${label("")}       it. Re-add BOTH keys as encrypted Secrets — those survive.`,
    );
    problems++;
  }

  // The script must NOT be in the HTML: it is injected on first interaction.
  console.log(
    `${label(path + " lazy loading")} ${eager ? WARN : PASS}  ${eager ? "script referenced in HTML (expected: absent until interaction)" : "script absent from HTML, as intended"}`,
  );
  if (eager) problems++;

  const edge = page.headers.get("x-edge-cache");
  if (edge) console.log(`${label(path + " edge cache")} ${edge}`);
}

console.log(`${"-".repeat(52)}`);

if (problems === 0) {
  console.log(`${PASS}  Site key is live and the widget loads lazily.\n`);
} else {
  console.log(`${problems} issue(s) above.\n`);
}

console.log(`Half two — is the secret actually verifying? Run:

  npx wrangler d1 execute channex-website --remote --command \\
    "SELECT datetime(ts/1000,'unixepoch') AS when_, email, spam_score, spam_reasons \\
     FROM contact_enquiry ORDER BY ts DESC LIMIT 15"

What the rows mean:

  spam_reasons contains 'turnstile-failed'   Turnstile IS enforcing. A token
                                             was missing or invalid and the
                                             submission was held back.

  spam_reasons has no 'turnstile-failed' on  Either every submission carried a
  a tokenless bot post                       valid token, or the SECRET key is
                                             missing so verification is skipped.

  real leads with spam_score 0               Healthy: genuine enquiries are
                                             passing and being emailed.

The bot run posts several times a day, so a tokenless post normally appears
within hours of deploying. Cloudflare's dashboard (Turnstile -> your widget)
also shows solve counts once real visitors start using the form.
`);

process.exit(problems === 0 ? 0 : 1);
