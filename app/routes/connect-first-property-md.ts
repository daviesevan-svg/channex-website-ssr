import { firstRequest, guideIntro, guideSections, guideTitle } from "@/data/first-property-guide";
import { textResponse } from "@/lib/llm-text.server";
import { SITE_URL } from "@/lib/seo";

export function loader() {
  const sections = guideSections.map((section) => {
    const example = section.id === "sandbox" ? `\n\n### Your first authenticated request\n\n\`\`\`sh\n${firstRequest}\n\`\`\`\n\nThis reads your accessible staging properties. An empty list is expected before you create any.` : "";
    const links = section.links.map(({ label, href }) => `- [${label}](${href.startsWith("/") ? SITE_URL + href : href})`).join("\n");
    return `## ${section.title}\n\nWho: ${section.owner}\n\n${section.paragraphs.join("\n\n")}${example}\n\n${links}`;
  });
  return textResponse(`# ${guideTitle}\n\n${guideIntro}\n\nHuman version: ${SITE_URL}/connect-first-property\n\n${sections.join("\n\n")}\n\nNext: [Start Integration](${SITE_URL}/start-integration) or [talk to the team](${SITE_URL}/contact).\n`);
}
