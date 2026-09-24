import type { MetaDescriptor } from "react-router";

export const SITE_URL = "https://channex.io";
const DEFAULT_OG_IMAGE = `${SITE_URL}/channex-og-image.png`;

interface PageSeo {
  title: string;
  description?: string;
  type?: string;
  ogImage?: string;
  noindex?: boolean;
  structuredData?: object | object[];
}

// Search results show roughly 155-160 characters of a description. Several
// pages pass longer prose (an OTA's full blurb ran to 948), which just gets
// cut mid-word by the search engine; cut it here at a word boundary instead.
const DESCRIPTION_MAX = 160;
export function clampDescription(text: string) {
  const flat = text.replace(/\s+/g, " ").trim();
  if (flat.length <= DESCRIPTION_MAX) return flat;
  const cut = flat.slice(0, DESCRIPTION_MAX - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:.—-]+$/, "")}…`;
}

// Builds the full set of per-page meta tags (title, description, canonical,
// robots, Open Graph, Twitter, JSON-LD) so they're present in the initial SSR
// response for crawlers/social unfurls, rather than injected client-side after
// hydration. Canonical/og:url are derived from the route's own pathname so
// individual pages don't need to repeat it.
//
// NOTE: React Router replaces ancestor meta with the leaf route's meta —
// anything defined in root.tsx's meta() never renders on routes that call
// this. Site-wide tags (og:site_name) therefore live here, not in root.tsx.
export function pageMeta(
  { title, description, type = "website", ogImage, noindex, structuredData }: PageSeo,
  { pathname }: { pathname: string },
): MetaDescriptor[] {
  const url = `${SITE_URL}${pathname}`;
  // Social scrapers require absolute image URLs; page code often passes
  // site-relative upload paths.
  const image = ogImage ? (ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`) : DEFAULT_OG_IMAGE;
  // Only the default image has known dimensions. Declaring them for a
  // caller-supplied image would be a guess, and a wrong width/height makes
  // scrapers lay out the card against the wrong aspect ratio.
  const isDefaultImage = image === DEFAULT_OG_IMAGE;
  description = description && clampDescription(description);
  const jsonLd = Array.isArray(structuredData) ? structuredData : structuredData ? [structuredData] : [];

  return [
    { title },
    ...(description ? [{ name: "description", content: description }] : []),
    { tagName: "link", rel: "canonical", href: url },
    { name: "robots", content: noindex ? "noindex, nofollow" : "index, follow" },
    { property: "og:site_name", content: "Channex" },
    { property: "og:title", content: title },
    ...(description ? [{ property: "og:description", content: description }] : []),
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    ...(isDefaultImage
      ? [
          { property: "og:image:width", content: "1200" },
          { property: "og:image:height", content: "754" },
        ]
      : []),
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    ...(description ? [{ name: "twitter:description", content: description }] : []),
    { name: "twitter:image", content: image },
    ...jsonLd.map((data) => ({ "script:ld+json": data })),
  ];
}
