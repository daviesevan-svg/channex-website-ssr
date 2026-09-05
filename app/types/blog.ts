export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishDate: string;
  category: BlogCategory;
  tags: string[];
  featuredImage: string;
  readTime: number;
  metaDescription: string;
}

/** A post without its article body — what the cards, sidebar and related-posts
 *  lists render. Loaders project down to this so `content` (the bulk of the
 *  dataset) never reaches the browser. Lives here rather than in
 *  blog.server.ts so client components can import the type. */
export type BlogListItem = Omit<BlogPost, "content">;

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}