import { blogPosts, blogCategories } from "@/data/blogPosts";
import { ogImageFor } from "@/lib/og-image";
import type { BlogListItem, BlogPost } from "@/types/blog";

// Server-only projections over the blog dataset.
//
// blog.tsx and blog.$slug.tsx used to `import { blogPosts }` directly, which put
// the whole 102 kB module (every article's full HTML body) into the client
// bundle — 24 kB gzipped shipped to anyone who opened the blog, to render cards
// that only need a title and an excerpt. Loading through here instead means each
// page serialises only the fields it renders. Same approach as
// integrations.server.ts.

const listItem = ({ content: _content, ...rest }: BlogPost): BlogListItem => rest;

const byNewest = (a: BlogListItem, b: BlogListItem) =>
  new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();

export function blogIndex() {
  return {
    posts: [...blogPosts].map(listItem).sort(byNewest),
    categories: blogCategories,
  };
}

export function blogPostBySlug(slug: string | undefined) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return null;

  return {
    post,
    ogImage: ogImageFor(post.featuredImage),
    related: blogPosts
      .filter((p) => p.category.id === post.category.id && p.id !== post.id)
      .map(listItem)
      .sort(byNewest)
      .slice(0, 3),
  };
}

export { ogImageFor };
