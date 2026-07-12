import { blogPosts } from "@/data/blogPosts";
import { textResponse, htmlToMarkdown } from "@/lib/llm-text.server";
import { SITE_URL } from "@/lib/seo";

// Markdown mirror of a blog post for LLMs/agents. Served for
// /blog/{slug}.md by the Worker entry — it can't be a React Router route
// because /blog/:slug is a component route and its param would swallow the
// .md suffix.
export function blogPostMarkdownResponse(pathname: string): Response | null {
  const match = pathname.match(/^\/blog\/(.+)\.md$/);
  if (!match) return null;

  const post = blogPosts.find((p) => p.slug === decodeURIComponent(match[1]));
  if (!post) return new Response("Not Found", { status: 404 });

  const md = [
    `# ${post.title}`,
    "",
    `> ${post.metaDescription || post.excerpt}`,
    "",
    `- Published: ${new Date(post.publishDate).toISOString().slice(0, 10)}`,
    `- Author: ${post.author.name}`,
    `- Category: ${post.category.name}`,
    `- Human version: ${SITE_URL}/blog/${post.slug}`,
    "",
    htmlToMarkdown(post.content),
  ].join("\n");

  return textResponse(md);
}
