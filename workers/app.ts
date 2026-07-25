import { createRequestHandler } from "react-router";
import { blogPostMarkdownResponse } from "../app/lib/blog-md.server";
import { withSecurityHeaders } from "../app/lib/security-headers";

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE,
);

export default {
  async fetch(request) {
    // /blog/{slug}.md — markdown mirrors for LLMs; handled before React
    // Router because /blog/:slug is a component route.
    const mdResponse = blogPostMarkdownResponse(new URL(request.url).pathname);
    if (mdResponse) return withSecurityHeaders(mdResponse);

    return withSecurityHeaders(await requestHandler(request));
  },
} satisfies ExportedHandler<Env>;
