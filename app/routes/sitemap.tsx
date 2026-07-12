import { blogPosts } from "@/data/blogPosts";
import { integrations } from "@/data/integrations";
import { SITE_URL } from "@/lib/seo";

// Sitemap generated from the same data the pages render from, so every blog
// post and integration page is always listed. Replaces the old hand-maintained
// public/sitemap.xml, which had drifted to ~18% coverage of the site.

const STATIC_PAGES: Array<{ path: string; priority: string; changefreq: string }> = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.9", changefreq: "monthly" },
  { path: "/features", priority: "0.9", changefreq: "monthly" },
  { path: "/integrations", priority: "0.9", changefreq: "weekly" },
  { path: "/pricing", priority: "0.9", changefreq: "monthly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
  { path: "/start-integration", priority: "0.8", changefreq: "monthly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
  { path: "/comparison/siteminder", priority: "0.7", changefreq: "monthly" },
  { path: "/pricing-calculator", priority: "0.6", changefreq: "monthly" },
  { path: "/policy", priority: "0.3", changefreq: "yearly" },
];

// Sitemap locs must be RFC-3986 percent-encoded AND XML-entity-escaped; a few
// legacy integration slugs contain "&", "@" or accented characters.
function xmlLoc(path: string) {
  return `${SITE_URL}${encodeURI(path)}`.replace(/&/g, "&amp;");
}

function entry(path: string, opts: { lastmod?: string; priority?: string; changefreq?: string } = {}) {
  return [
    "  <url>",
    `    <loc>${xmlLoc(path)}</loc>`,
    opts.lastmod ? `    <lastmod>${opts.lastmod}</lastmod>` : null,
    opts.changefreq ? `    <changefreq>${opts.changefreq}</changefreq>` : null,
    opts.priority ? `    <priority>${opts.priority}</priority>` : null,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");
}

export async function loader() {
  const entries = [
    ...STATIC_PAGES.map((p) => entry(p.path, p)),
    ...blogPosts.map((post) =>
      entry(`/blog/${post.slug}`, {
        lastmod: new Date(post.publishDate).toISOString().slice(0, 10),
        changefreq: "monthly",
        priority: "0.6",
      }),
    ),
    ...integrations.map((int) =>
      entry(`/integrations/${int.slug || int.id}`, { changefreq: "monthly", priority: "0.6" }),
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
