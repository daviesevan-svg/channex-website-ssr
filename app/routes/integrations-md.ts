import { textResponse, buildIntegrationsMarkdown } from "@/lib/llm-text.server";

// /integrations.md — the full integrations directory as markdown, generated
// from the same data the listing page renders from.
export async function loader() {
  return textResponse(buildIntegrationsMarkdown());
}
