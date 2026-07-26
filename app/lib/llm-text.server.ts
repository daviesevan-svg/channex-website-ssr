import {
  goodFit,
  wrongFit,
  PLATFORM_FEE,
  HOTEL_BASE_RATE,
  VR_BASE_RATE,
  HOTEL_TIERS,
  VR_TIERS,
  plan,
  featureRows,
  channels,
  faqs,
} from "@/data/pricing";
import { blogPosts } from "@/data/blogPosts";
import { integrations } from "@/data/integrations";
import { hasDetailPage, integrationSlug } from "@/lib/integrations.server";
import { SITE_URL } from "@/lib/seo";

// Plain-text/markdown mirrors of the site for LLMs and agents. Everything is
// generated from the same data modules the pages render from, so it cannot
// drift from what humans see.

export function textResponse(body: string, contentType = "text/markdown") {
  return new Response(body, {
    headers: {
      "Content-Type": `${contentType}; charset=utf-8`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}

const money = (n: number) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Good-enough converter for the blog posts' HTML content: handles the tags the
// posts actually use (headings, paragraphs, lists, links, images, emphasis,
// hr, tables degrade to text). Not a general-purpose HTML parser.
export function htmlToMarkdown(html: string): string {
  let md = html;
  md = md.replace(/<img[^>]*alt="([^"]*)"[^>]*src="([^"]*)"[^>]*\/?>/gi, "![$1]($2)");
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, "![$2]($1)");
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/gi, "![]($1)");
  md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gis, "[$2]($1)");
  md = md.replace(/<h([1-6])[^>]*>(.*?)<\/h\1>/gis, (_m, level, text) => `\n\n${"#".repeat(Number(level))} ${text.trim()}\n\n`);
  md = md.replace(/<(strong|b)[^>]*>(.*?)<\/\1>/gis, "**$2**");
  md = md.replace(/<(em|i)[^>]*>(.*?)<\/\1>/gis, "*$2*");
  md = md.replace(/<li[^>]*>(.*?)<\/li>/gis, (_m, text) => `- ${text.trim()}\n`);
  md = md.replace(/<hr[^>]*\/?>/gi, "\n\n---\n\n");
  md = md.replace(/<br[^>]*\/?>/gi, "\n");
  md = md.replace(/<\/(p|div|ul|ol|table|tr|blockquote)>/gi, "\n\n");
  md = md.replace(/<\/(td|th)>/gi, " ");
  md = md.replace(/<[^>]+>/g, "");
  md = md
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
  // Collapse per-line whitespace without destroying paragraph breaks.
  md = md
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n");
  return md.trim();
}

export function buildPricingMarkdown(): string {
  const tierLines = (tiers: { thresh: number; rate: number }[], unit: string) =>
    tiers.map((t) => `  - ${t.thresh.toLocaleString("en-US")}+ ${unit}: ${money(t.rate)}`).join("\n");

  return `# Channex Pricing

> White-label channel manager API pricing for PMS providers and tech partners.
> Human version: ${SITE_URL}/pricing — interactive estimator: ${SITE_URL}/pricing-calculator

## Plan: ${plan.name}

${plan.description}

- Platform fee: $${PLATFORM_FEE} per month (flat)
- Includes: ${plan.features.join(", ")}

## Per-Property Charges (billed monthly, on top of the platform fee)

### Channel Manager
- Hotels: ${money(HOTEL_BASE_RATE)} per property. Volume discounts:
${tierLines(HOTEL_TIERS, "hotels")}
- Vacation Rentals: ${money(VR_BASE_RATE)} per unit. Volume discounts:
${tierLines(VR_TIERS, "units")}

### Chat & Reviews (optional add-on)
- Hotels: ${money(HOTEL_BASE_RATE)} per property per month
- Vacation Rentals: ${money(VR_BASE_RATE)} per unit per month

### Billing Notes
- Only properties with at least one active channel connection are billed.
- The $${PLATFORM_FEE}/month platform fee applies in addition to per-property charges.
- All prices are excluding VAT.
- Billed monthly, no long-term contract, cancel any time. No setup fees.

## Example Monthly Cost

total = $${PLATFORM_FEE} + (hotels × hotel_rate) + (vr_units × vr_rate), where the rates
step down at the volume thresholds above. Example: 100 hotels = $${PLATFORM_FEE} + 100 × ${money(HOTEL_BASE_RATE)} = ${money(PLATFORM_FEE + 100 * HOTEL_BASE_RATE)}/month.

## Features Included (${plan.name})

${featureRows.map((r) => `- ${r.feature}: ${r.whitelabel === "✓" ? "Included" : r.whitelabel}`).join("\n")}

## Supported Channels

${channels.map((c) => `- ${c}`).join("\n")}

Full directory: ${SITE_URL}/integrations.md

## Is this the right product for you?

Channex is wholesale infrastructure sold to the people who build hotel software.

A good fit if:
${goodFit.map((f) => `- ${f}`).join("\n")}

Probably not, if:
${wrongFit.map((f) => `- ${f}`).join("\n")}

## Frequently Asked Questions

${faqs.map((f) => `### ${f.question}\n\n${f.answer}`).join("\n\n")}
`;
}

export function buildIntegrationsMarkdown(): string {
  const byCategory = new Map<string, typeof integrations>();
  for (const int of integrations) {
    const primary = int.categories[0] ?? "Other";
    if (!byCategory.has(primary)) byCategory.set(primary, []);
    byCategory.get(primary)!.push(int);
  }

  const sections = [...byCategory.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([category, list]) => {
      const rows = list
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((i) => {
          const site = i.website ? ` — ${i.website}` : "";
          // Only booking channels have their own page; link the rest by name
          // only so this file never points at a URL that just redirects.
          const label = hasDetailPage(i)
            ? `[${i.name}](${SITE_URL}/integrations/${encodeURIComponent(integrationSlug(i))})`
            : i.name;
          return `- ${label} (${i.categories.join(", ")})${site}`;
        })
        .join("\n");
      return `## ${category} (${list.length})\n\n${rows}`;
    })
    .join("\n\n");

  return `# Channex Integrations Directory

> ${integrations.length} OTAs, PMS systems, and distribution channels connected to the Channex channel manager API.
> Booking channels have their own page (linked); PMS and technology partners are listed by name.
> Human version: ${SITE_URL}/integrations

${sections}
`;
}

export function buildLlmsTxt(baseProse: string): string {
  const posts = blogPosts
    .slice()
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}.md) (${new Date(p.publishDate).toISOString().slice(0, 10)})`)
    .join("\n");

  return `${baseProse.trim()}

## Machine-Readable Pages (Markdown)
- [Pricing](${SITE_URL}/pricing.md) — full pricing model, volume tiers, FAQ
- [Integrations directory](${SITE_URL}/integrations.md) — all ${integrations.length} connected channels and PMS systems
- Blog posts: append \`.md\` to any post URL for a markdown version

## Blog Posts
${posts}

## Sitemap
${SITE_URL}/sitemap.xml
`;
}
