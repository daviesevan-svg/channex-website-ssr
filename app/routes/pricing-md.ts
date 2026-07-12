import { textResponse, buildPricingMarkdown } from "@/lib/llm-text.server";

// /pricing.md — markdown mirror of the pricing page for LLMs/agents,
// generated from the same data module the page renders from.
export async function loader() {
  return textResponse(buildPricingMarkdown());
}
