import { useState, useMemo } from "react";
import { Search, Filter, Grid, List, Download } from "lucide-react";
import { Link } from "react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { integrations } from "@/data/integrations";
import { categories } from "@/types/integration";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pageMeta } from "@/lib/seo";
import type { Route } from "./+types/integrations";

export const meta: Route.MetaFunction = ({ location }) =>
  pageMeta(
    {
      title: "OTA & PMS Integrations | Channel Manager API",
      description: "Browse 50+ OTA and PMS integrations powered by Channex's white-label channel manager API.",
    },
    location,
  );

const HIDDEN_CATEGORIES = new Set(["Regional","Budget","Luxury","Corporate","API"]);

const Integrations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["OTA"]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredIntegrations = useMemo(() => {
    return integrations.filter(integration => {
      const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategories = selectedCategories.length === 0 || 
                               selectedCategories.some(cat => integration.categories.includes(cat));
      
      return matchesSearch && matchesCategories;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchTerm, selectedCategories]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchTerm("");
};

const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      "OTA": "bg-primary/10 text-primary border-primary/20",
      "PMS": "bg-accent/10 text-accent border-accent/20",
      "Global": "bg-emerald-100 text-emerald-700 border-emerald-200",
      "Regional": "bg-orange-100 text-orange-700 border-orange-200",
      "B2B": "bg-purple-100 text-purple-700 border-purple-200",
      "API": "bg-blue-100 text-blue-700 border-blue-200",
      "RMS": "bg-pink-100 text-pink-700 border-pink-200",
      "IBE": "bg-indigo-100 text-indigo-700 border-indigo-200",
    };
    return colorMap[category] || "bg-muted text-muted-foreground border-border";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
              Connect to
              <span className="bg-gradient-primary bg-clip-text text-transparent"> 50+ Integrations</span>
            </h1>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Expand your reach with our comprehensive network of OTAs, PMS systems, and distribution channels. 
              From Booking.com to specialized platforms, we connect you everywhere.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary" className="text-sm">50+ Integrations</Badge>
              <Badge variant="secondary" className="text-sm">Real-time Sync</Badge>
              <Badge variant="secondary" className="text-sm">One API</Badge>
            </div>
            <div className="mt-6 flex justify-center">
              {/* Generated at build time by the emit-ota-xlsx Vite plugin and
                  served as an edge-cached static asset. */}
              <Button size="lg" asChild>
                <a href="/channex-ota-integrations.xlsx" download>
                  <Download size={16} className="mr-2" /> Download OTAs (XLS)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search integrations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* View Mode Toggle + Download */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid size={16} />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List size={16} />
              </Button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Filter by category:</span>
              </div>
              {selectedCategories.length > 0 && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear all
                </Button>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategories.includes(category) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleCategory(category)}
                  className="text-xs"
                >
                  {category}
                  {selectedCategories.includes(category) && (
                    <span className="ml-1 bg-background/20 rounded-full px-1.5 py-0.5 text-xs">
                      {integrations.filter(i => i.categories.includes(category)).length}
                    </span>
                  )}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredIntegrations.length} of {integrations.length} integrations
          </div>
        </div>
      </section>

      {/* Integrations Grid/List */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          {filteredIntegrations.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No integrations found matching your criteria.</p>
              <Button variant="outline" onClick={clearFilters} className="mt-4">
                Clear filters
              </Button>
            </div>
          ) : (
            <div className={viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
              : "space-y-4"
            }>
              {filteredIntegrations.map(integration => (
                <Card 
                  key={integration.id} 
                  className={`group hover:shadow-primary transition-all duration-300 hover:scale-[1.02] ${
                    viewMode === "list" ? "flex flex-row" : ""
                  }`}
                >
                  <CardHeader className={viewMode === "list" ? "pb-3" : ""}>
                    <div className="flex items-start gap-3">
                      <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <img 
                          src={integration.icon} 
                          alt={`${integration.name} logo`}
                          className="w-16 h-16 object-contain"
                          onError={(e) => {
                            // Fallback to gradient placeholder on error
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <div className="w-8 h-8 bg-gradient-primary rounded opacity-80 hidden"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {integration.name}
                        </CardTitle>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {integration.categories
                            .filter((c) => !HIDDEN_CATEGORIES.has(c))
                            .slice(0, 3)
                            .map((category) => (
                              <Badge 
                                key={category} 
                                variant="outline" 
                                className={`text-xs ${getCategoryColor(category)}`}
                              >
                                {category}
                              </Badge>
                            ))}
                          {integration.categories.filter((c) => !HIDDEN_CATEGORIES.has(c)).length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{integration.categories.filter((c) => !HIDDEN_CATEGORIES.has(c)).length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className={viewMode === "list" ? "pt-0 flex-1" : ""}>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                      {integration.description}
                    </CardDescription>
                    
                    <div className="mt-4">
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/integrations/${integration.slug || integration.id}`}>
                          Learn More
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Integrations;