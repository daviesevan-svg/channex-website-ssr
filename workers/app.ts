import { createRequestHandler } from "react-router";
import { blogPostMarkdownResponse } from "../app/lib/blog-md.server";
import { withSecurityHeaders } from "../app/lib/security-headers";
import { withEdgeCache } from "../app/lib/edge-cache.server";
import { sendQuarantineDigest } from "../app/lib/digest.server";

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE,
);

export default {
  async fetch(request, _env, ctx) {
    // Static files under public/ are served by the assets binding before the
    // Worker runs, so everything reaching here is a rendered page (or a
    // single-fetch .data request) — all cacheable. See edge-cache.server.ts.
    return withEdgeCache(request, ctx, async () => {
      // /blog/{slug}.md — markdown mirrors for LLMs; handled before React
      // Router because /blog/:slug is a component route.
      const mdResponse = blogPostMarkdownResponse(new URL(request.url).pathname);
      if (mdResponse) return withSecurityHeaders(mdResponse);

      return withSecurityHeaders(await requestHandler(request));
    });
  },

  // Cron trigger (schedule in wrangler.jsonc). Emails a summary of contact-form
  // submissions that were quarantined rather than delivered, so a genuine
  // enquiry held back by mistake gets noticed. Sends nothing on a quiet day.
  async scheduled(_controller, _env, ctx) {
    // waitUntil so the handler isn't torn down mid-send: a self-contained job
    // like this must finish its fetch to SparkPost, not race the runtime.
    ctx.waitUntil(
      sendQuarantineDigest().catch((err) => {
        console.error("digest: unhandled failure", err);
      }),
    );
  },
} satisfies ExportedHandler<Env>;
