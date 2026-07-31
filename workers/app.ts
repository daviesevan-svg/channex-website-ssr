import { createRequestHandler } from "react-router";
import { blogPostMarkdownResponse } from "../app/lib/blog-md.server";
import { withSecurityHeaders } from "../app/lib/security-headers";
import { withEdgeCache } from "../app/lib/edge-cache.server";

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
} satisfies ExportedHandler<Env>;
