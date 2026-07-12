import { textResponse, buildLlmsTxt, buildPricingMarkdown } from "@/lib/llm-text.server";
import { LLMS_PROSE_INTRO, LLMS_PROSE_REST } from "@/data/llms-prose";

// /llms.txt — the LLM-facing summary of the whole site (llmstxt.org
// convention). Prose is hand-written; the pricing section and page/blog links
// are generated from the same data the pages render from.
export async function loader() {
  const pricingSection = buildPricingMarkdown()
    .split("\n")
    .filter((line) => !line.startsWith("# ") && !line.startsWith("> ")) // drop doc header
    .map((line) => (line.startsWith("#") ? `#${line}` : line)) // demote headings one level
    .join("\n")
    .trim();

  const base = `${LLMS_PROSE_INTRO}\n\n## Pricing Model\n\n${pricingSection}\n\n${LLMS_PROSE_REST}`;
  return textResponse(buildLlmsTxt(base), "text/plain");
}
