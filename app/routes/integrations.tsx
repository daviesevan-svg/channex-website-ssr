import { useState, useMemo } from "react";
import { Search, Filter, Grid, List, Download } from "lucide-react";
import { Link } from "react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { categories } from "@/types/integration";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntegrationLogo from "@/components/IntegrationLogo";
import { pageMeta } from "@/lib/seo";
import { integrationsIndex } from "@/lib/integrations.server";
import type { Route } from "./+types/integrations";

// The index is built server-side so the browser only receives names, categories
// and logo paths — not every partner's full prose. Keeps the client bundle small
// and keeps the detail-only fields off the wire.
export async function loader() {
  return integrationsIndex();
}

export const meta: Route.MetaFunction = ({ loaderData, location }) =>
  pageMeta(
    {
      title: "OTA & PMS Integrations | Channel Manager API",
      description: `Browse ${loaderData?.channels.length ?? 60} OTA booking channels and ${loaderData?.partners.length ?? 360}+ PMS integrations powered by Channex's white-label channel manager API.`,
    },
    location,
  );

const HIDDEN_CATEGORIES = new Set(["Regional", "Budget", "Luxury", "Corporate", "API"]);

const getCategoryColor = (category: string) => {
  const colorMap: Record<string, string> = {
    OTA: "bg-primary/10 text-primary border-primary/20",
    PMS: "bg-accent/10 text-accent border-accent/20",
    Global: "bg-emerald-100 text-emerald-700 border-emerald-200",
    Regional: "bg-orange-100 text-orange-700 border-orange-200",
    B2B: "bg-purple-100 text-purple-700 border-purple-200",
    API: "bg-blue-100 text-blue-700 border-blue-200",
    RMS: "bg-pink-100 text-pink-700 border-pink-200",
    IBE: "bg-indigo-100 text-indigo-700 border-indigo-200",
  };
  return colorMap[category] || "bg-muted text-muted-foreground border-border";
};

const visibleCategories = (cats: string[]) => cats.filter((c) => !HIDDEN_CATEGORIES.has(c));

const Integrations = ({ loaderData }: Route.ComponentProps) => {
  const { channels, partners, categoryCounts, total } = loaderData;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const matches = (item: { name: string; categories: string[] }) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategories =
      selectedCategories.length === 0 || selectedCategories.some((c) => item.categories.includes(c));
    return matchesSearch && matchesCategories;
  };

  const shownChannels = useMemo(
    () => channels.filter(matches),
    [channels, searchTerm, selectedCategories],
  );
  const shownPartners = useMemo(
    () => partners.filter(matches),
    [partners, searchTerm, selectedCategories],
  );
  const shownTotal = shownChannels.length + shownPartners.length;

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchTerm("");
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
              <span className="bg-gradient-primary bg-clip-text text-transparent"> {total} Integrations</span>
            </h1>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Expand your reach with our comprehensive network of OTAs, PMS systems, and distribution
              channels. From Booking.com to specialized platforms, we connect you everywhere.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary" className="text-sm">{channels.length} OTA channels</Badge>
              <Badge variant="secondary" className="text-sm">{partners.length} PMS &amp; tech partners</Badge>
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
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                size={20}
              />
              <Input
                placeholder="Search integrations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
              >
                <Grid size={16} />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                aria-label="List view"
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
              {(selectedCategories.length > 0 || searchTerm) && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear all
                </Button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategories.includes(category) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleCategory(category)}
                  className="text-xs"
                >
                  {category}
                  <span className="ml-1 rounded-full bg-foreground/10 px-1.5 py-0.5 text-xs">
                    {categoryCounts[category] ?? 0}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Showing {shownTotal} of {total} integrations
          </div>
        </div>
      </section>

      {shownTotal === 0 ? (
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <p className="text-muted-foreground">No integrations found matching your criteria.</p>
            <Button variant="outline" onClick={clearFilters} className="mt-4">
              Clear filters
            </Button>
          </div>
        </section>
      ) : (
        <>
          {/* Booking channels — these have their own pages. */}
          {shownChannels.length > 0 && (
            <section className="py-12">
              <div className="container mx-auto px-4 lg:px-6">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground font-inter">
                    OTA &amp; booking channels
                  </h2>
                  <p className="mt-1 text-muted-foreground font-inter">
                    Distribution channels your properties can sell through — {shownChannels.length}{" "}
                    shown.
                  </p>
                </div>

                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                      : "space-y-4"
                  }
                >
                  {shownChannels.map((channel) => (
                    <Card
                      key={channel.id}
                      className={`group hover:shadow-primary transition-all duration-300 hover:scale-[1.02] ${
                        viewMode === "list" ? "flex flex-row" : ""
                      }`}
                    >
                      <CardHeader className={viewMode === "list" ? "pb-3" : ""}>
                        <div className="flex items-start gap-3">
                          <IntegrationLogo
                            name={channel.name}
                            logo={channel.logo}
                            className="w-20 h-20"
                            textClassName="text-xl"
                          />
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {channel.name}
                            </CardTitle>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {visibleCategories(channel.categories)
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
                              {visibleCategories(channel.categories).length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{visibleCategories(channel.categories).length - 3}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className={viewMode === "list" ? "pt-0 flex-1" : ""}>
                        <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                          {channel.description}
                        </CardDescription>
                        <div className="mt-4">
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/integrations/${channel.slug}`}>Learn More</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* PMS & tech partners — a directory, not 360 thin pages. */}
          {shownPartners.length > 0 && (
            <section className="py-12 border-t border-border/50 bg-muted/20">
              <div className="container mx-auto px-4 lg:px-6">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground font-inter">
                    PMS &amp; technology partners
                  </h2>
                  <p className="mt-1 text-muted-foreground font-inter">
                    Property management systems, booking engines and platforms already connected to
                    Channex — {shownPartners.length} shown.
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                  {shownPartners.map((partner) => (
                    <li
                      key={partner.id}
                      className="flex items-center gap-3 rounded-lg border border-border/60 bg-background p-3"
                    >
                      <IntegrationLogo
                        name={partner.name}
                        logo={partner.logo}
                        className="w-10 h-10"
                        textClassName="text-xs"
                      />
                      <div className="min-w-0">
                        <div className="truncate text-sm font-medium text-foreground" title={partner.name}>
                          {partner.name}
                        </div>
                        <div className="truncate text-xs text-muted-foreground">
                          {visibleCategories(partner.categories).slice(0, 2).join(" · ")}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}
        </>
      )}

      <Footer />
    </div>
  );
};

export default Integrations;
