// Edge caching for rendered pages.
//
// Cloudflare does not cache Worker-generated responses on its own — a
// `s-maxage` header on its own does nothing, because the request never reaches
// the part of the stack that reads it. Caching has to be explicit, via the Cache
// API. Without it, every hit re-runs the full React SSR: cheap for the homepage,
// much less so for /integrations, which renders 419 partners into ~390 kB of
// HTML on every single request.
//
// This is safe here because there is nothing per-visitor on the site: no auth,
// no sessions, no cookie-dependent rendering. Every visitor to a URL gets byte
// -identical HTML, so one render can serve all of them.

/** How long the edge may reuse a rendered page. Long, because the cache key is
 *  scoped to the build — see cacheKey(). */
const EDGE_TTL_SECONDS = 86_400;

/** Browsers revalidate every time; only the shared cache holds pages. Keeping
 *  the browser out of it means a deploy is visible on reload, not after a
 *  private cache somewhere decides it's stale. */
const CACHE_CONTROL = `public, max-age=0, must-revalidate, s-maxage=${EDGE_TTL_SECONDS}`;

// Campaign parameters change the URL without changing a single byte of the
// response. Dropping them from the key means an ad campaign's traffic shares one
// cache entry instead of minting a new render per click. Anything not listed is
// kept — notably React Router's `_routes`, which really does select what a
// single-fetch `.data` response contains.
const IGNORED_QUERY_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "msclkid",
  "ttclid",
  "li_fat_id",
  "mc_cid",
  "mc_eid",
  "ref",
  "referrer",
];

/**
 * The build ID makes a deploy invalidate every entry at once: new build, new
 * key, nothing to purge. Without it, a long TTL would mean serving the previous
 * version's HTML — with the previous version's asset hashes in it — until the
 * cache expired.
 */
declare const __BUILD_ID__: string;

function cacheKey(request: Request): Request {
  const url = new URL(request.url);
  for (const param of IGNORED_QUERY_PARAMS) url.searchParams.delete(param);
  url.searchParams.sort();
  // A synthetic hostname keeps these entries clearly ours and namespaced by
  // build, rather than sharing the zone's normal cache entries.
  const key = new URL(`https://edge-cache.invalid/${__BUILD_ID__}${url.pathname}${url.search}`);
  return new Request(key, { method: "GET" });
}

/** Responses worth storing. Anything else is cheap to regenerate, or must not be
 *  shared between visitors. */
function isCacheable(response: Response): boolean {
  // Only plain successes: an error page cached for a day turns a transient
  // failure into a lasting one.
  if (response.status !== 200) return false;
  // The Cache API rejects these anyway, and a shared cache is the last place a
  // per-visitor cookie should end up.
  if (response.headers.has("Set-Cookie")) return false;
  // A route that sets its own policy has a reason to.
  const existing = response.headers.get("Cache-Control");
  if (existing && /no-store|private/.test(existing)) return false;
  return true;
}

/**
 * Serves `request` from the edge cache when possible, otherwise renders it and
 * stores the result.
 *
 * `render` is only called on a miss, so it must be a thunk rather than an
 * already-awaited response.
 */
export async function withEdgeCache(
  request: Request,
  ctx: ExecutionContext,
  render: () => Promise<Response>,
): Promise<Response> {
  // The Cache API is GET-only, and a form POST must never be served from cache.
  if (request.method !== "GET") return render();

  // `caches.default` is Cloudflare's zone cache. This project compiles app/ with
  // the DOM lib (the same components render in the browser), and DOM's
  // CacheStorage — which has no `default` — shadows the Workers one. Keeping the
  // cast at the single point of use rather than widening the tsconfig.
  const cache = (caches as unknown as { default: Cache }).default;
  const key = cacheKey(request);

  const hit = await cache.match(key);
  if (hit) {
    const headers = new Headers(hit.headers);
    headers.set("X-Edge-Cache", "HIT");
    return new Response(hit.body, { status: hit.status, statusText: hit.statusText, headers });
  }

  const response = await render();
  if (!isCacheable(response)) return response;

  const headers = new Headers(response.headers);
  headers.set("Cache-Control", CACHE_CONTROL);

  // Cache the body without consuming the copy we're about to return.
  const cached = new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
  const [toStore, toReturn] = [cached.clone(), cached];
  ctx.waitUntil(cache.put(key, toStore));

  const out = new Headers(toReturn.headers);
  out.set("X-Edge-Cache", "MISS");
  return new Response(toReturn.body, {
    status: toReturn.status,
    statusText: toReturn.statusText,
    headers: out,
  });
}
