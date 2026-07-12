import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  // Generated from blogPosts + integrations data; public/sitemap.xml must not
  // exist or the static asset would shadow this route.
  route("sitemap.xml", "routes/sitemap.tsx"),
  route("about", "routes/about.tsx"),
  route("features", "routes/features.tsx"),
  route("integrations", "routes/integrations.tsx"),
  route("integrations/:slug", "routes/integrations.$slug.tsx"),
  route("contact", "routes/contact.tsx"),
  route("pricing", "routes/pricing.tsx"),
  route("start-integration", "routes/start-integration.tsx"),
  route("blog", "routes/blog.tsx"),
  route("blog/:slug", "routes/blog.$slug.tsx"),
  route("comparison/siteminder", "routes/comparison.siteminder.tsx"),
  route("policy", "routes/policy.tsx"),
  route("pricing-calculator", "routes/pricing-calculator.tsx"),
  // ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
