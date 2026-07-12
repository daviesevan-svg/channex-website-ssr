import { Link } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pageMeta } from "@/lib/seo";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Facebook, Linkedin } from "lucide-react";
import type { Route } from "./+types/blog.$slug";

export async function loader({ params }: Route.LoaderArgs) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    throw new Response(null, { status: 404, statusText: "Not Found" });
  }
  return { post };
}

export const meta: Route.MetaFunction = ({ loaderData, location }) =>
  pageMeta(
    {
      title: `${loaderData.post.title} | Channex Blog`,
      description: loaderData.post.metaDescription || loaderData.post.excerpt,
      type: "article",
      ogImage: loaderData.post.featuredImage,
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: loaderData.post.title,
          description: loaderData.post.metaDescription || loaderData.post.excerpt,
          author: { "@type": "Person", name: loaderData.post.author.name },
          datePublished: new Date(loaderData.post.publishDate).toISOString(),
          image: loaderData.post.featuredImage,
          mainEntityOfPage: `https://channex.io/blog/${loaderData.post.slug}`,
          publisher: { "@type": "Organization", name: "Channex" },
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://channex.io/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://channex.io/blog" },
            { "@type": "ListItem", position: 3, name: loaderData.post.title, item: `https://channex.io/blog/${loaderData.post.slug}` },
          ],
        },
      ],
    },
    location,
  );

const BlogPost = ({ loaderData }: Route.ComponentProps) => {
  const { post } = loaderData;

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category.id === post.category.id && p.id !== post.id)
    .slice(0, 3);

  const shareUrl = `https://channex.io/blog/${post.slug}`;
  const shareTitle = post.title;

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />

      {/* Article Header */}
      <article className="pt-20">
        {/* Back to Blog */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link to="/blog">
            <Button variant="ghost" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img 
              src={post.featuredImage} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Article Meta */}
              <div className="mb-8">
                <Badge variant="secondary" className="mb-4">
                  {post.category.name}
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-6">
                  {post.excerpt}
                </p>
                
                {/* Author and Meta Info */}
                <div className="flex items-center gap-6 text-sm text-muted-foreground border-b pb-6">
                  <div className="flex items-center gap-3">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-medium text-foreground">{post.author.name}</div>
                      <div>{post.author.bio}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-muted prose-pre:border prose-blockquote:border-l-primary prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:bg-primary/5 prose-table:w-full prose-table:border-collapse prose-th:border prose-th:border-gray-300 prose-th:p-3 prose-th:bg-gray-50 prose-th:text-left prose-th:font-semibold prose-td:border prose-td:border-gray-300 prose-td:p-3">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Tags */}
              <div className="mt-12 pt-6 border-t">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Share */}
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-3">Share this article</h3>
                    <div className="space-y-2">
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                        Twitter
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <Facebook className="w-4 h-4" />
                        Facebook
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Author Bio */}
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-3">About the Author</h3>
                    <div className="flex items-start gap-3">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name}
                        className="w-12 h-12 rounded-full flex-shrink-0"
                      />
                      <div>
                        <div className="font-medium">{post.author.name}</div>
                        <div className="text-sm text-muted-foreground">{post.author.bio}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;