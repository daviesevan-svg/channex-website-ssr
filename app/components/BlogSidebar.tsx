import type { BlogCategory, BlogPost } from "@/types/blog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { Calendar, User } from "lucide-react";

interface BlogSidebarProps {
  categories: BlogCategory[];
  recentPosts: BlogPost[];
  onCategoryFilter: (categoryId: string | null) => void;
  selectedCategory: string | null;
}

const BlogSidebar = ({ categories, recentPosts, onCategoryFilter, selectedCategory }: BlogSidebarProps) => {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button
            variant={selectedCategory === null ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => onCategoryFilter(null)}
          >
            All Articles
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => onCategoryFilter(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Posts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.slice(0, 5).map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="block group"
            >
              <div className="flex gap-3">
                <img 
                  src={post.featuredImage} 
                  alt={post.title}
                  className="w-16 h-12 object-cover rounded flex-shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>

    </div>
  );
};

export default BlogSidebar;