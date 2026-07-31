import type { BlogListItem } from "@/types/blog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";
import { Clock, User } from "lucide-react";

interface BlogCardProps {
  post: BlogListItem;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <Link prefetch="intent" to={`/blog/${post.slug}`}>
        <div className="aspect-video overflow-hidden rounded-t-lg">
          {/* Card thumbnails are below the fold on the blog index and in the
              related-posts strip, so they wait until they're scrolled towards
              rather than competing with the article itself. */}
          <img
            src={post.featuredImage}
            alt={post.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="text-xs">
              {post.category.name}
            </Badge>
          </div>
          
          <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </CardHeader>
        
        <CardContent className="pt-0">
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-5 h-5 rounded-full"
              />
              <span>{post.author.name}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{post.readTime} min read</span>
              </div>
              <span>{new Date(post.publishDate).toLocaleDateString()}</span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default BlogCard;