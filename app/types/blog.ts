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

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}