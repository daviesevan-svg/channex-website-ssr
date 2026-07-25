import { Link, redirect } from "react-router";
import { ArrowLeft, ArrowRight, Building2, ExternalLink, CheckCircle, Code, Users, Zap, Globe, DollarSign } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { integrations } from "@/data/integrations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pageMeta } from "@/lib/seo";
import IntegrationLogo from "@/components/IntegrationLogo";
import { hasDetailPage, integrationSlug, relatedChannels } from "@/lib/integrations.server";
import { displayCategories, factsOf } from "@/lib/integration-facts";
import { useState } from "react";
import type { Route } from "./+types/integrations.$slug";

/** One line of the "At a glance" card. Renders nothing when we have no data
 *  for it, so a page never shows an empty or placeholder fact. */
function FactRow({ icon: Icon, label, values }: { icon: LucideIcon; label: string; values: string[] }) {
  if (values.length === 0) return null;
  return (
    <div>
      <div className="mb-1 flex items-center gap-2 text-sm font-medium text-foreground">
        <Icon size={15} className="text-primary" />
        {label}
      </div>
      <p className="text-sm text-muted-foreground">{values.join(", ")}</p>
    </div>
  );
}

export async function loader({ params }: Route.LoaderArgs) {
  const integration = integrations.find((int) => int.slug === params.slug || int.id === params.slug);
  if (!integration) {
    throw new Response(null, { status: 404, statusText: "Not Found" });
  }
  // Only booking channels keep a page (see integrations.server.ts). PMS/tech
  // partners are listed on /integrations instead — permanent-redirect there so
  // links a partner made to their old page still land somewhere useful.
  if (!hasDetailPage(integration)) {
    throw redirect("/integrations", 301);
  }
  // Legacy id-based URLs (e.g. /integrations/13) serve the same content as the
  // slug URL — permanent-redirect to the slug so only one URL gets indexed.
  const canonicalSlug = integrationSlug(integration);
  if (params.slug !== canonicalSlug) {
    throw redirect(`/integrations/${canonicalSlug}`, 301);
  }
  // Resolved here rather than in the component so the full dataset stays out of
  // the client bundle.
  return { integration, related: relatedChannels(integration) };
}

export const meta: Route.MetaFunction = ({ loaderData, location }) =>
  pageMeta(
    {
      title: `${loaderData.integration.name} Integration | Channex`,
      description: loaderData.integration.longDescription || loaderData.integration.description,
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://channex.io/" },
            { "@type": "ListItem", position: 2, name: "Integrations", item: "https://channex.io/integrations" },
            {
              "@type": "ListItem",
              position: 3,
              name: loaderData.integration.name,
              item: `https://channex.io/integrations/${loaderData.integration.slug || loaderData.integration.id}`,
            },
          ],
        },
      ],
    },
    location,
  );

const IntegrationDetail = ({ loaderData }: Route.ComponentProps) => {
  const { integration } = loaderData;
  const [activeTab, setActiveTab] = useState("overview");

  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      "OTA": "bg-primary/10 text-primary border-primary/20",
      "PMS": "bg-accent/10 text-accent border-accent/20",
      "Global": "bg-emerald-100 text-emerald-700 border-emerald-200",
      "Regional": "bg-orange-100 text-orange-700 border-orange-200",
      "B2B": "bg-purple-100 text-purple-700 border-purple-200",
      "API": "bg-blue-100 text-blue-700 border-blue-200",
      "RMS": "bg-pink-100 text-pink-700 border-pink-200",
      "IBE": "bg-indigo-100 text-indigo-700 border-indigo-200"
    };
    return colorMap[category] || "bg-muted text-muted-foreground border-border";
  };
  const relatedIntegrations = loaderData.related;
  const facts = factsOf(integration);
  const hasFeatures = Boolean(integration.features?.length) || Boolean(integration.apiCapabilities?.length);
  const hasPricing = Boolean(integration.pricing);
  const hasOverviewExtra = Boolean(integration.longDescription) || Boolean(integration.useCases?.length);
  const showTabs = hasOverviewExtra || hasFeatures || hasPricing;
  return <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb and Back Navigation */}
      <section className="pt-24 pb-8 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" asChild>
              <Link to="/integrations" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Integrations
              </Link>
            </Button>
          </div>
          
          <nav className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground">Home</Link>
            {" > "}
            <Link to="/integrations" className="hover:text-foreground">Integrations</Link>
            {" > "}
            <span className="text-foreground">{integration.name}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <IntegrationLogo
                name={integration.name}
                logo={integration.icon || null}
                className="w-20 h-20"
                textClassName="text-2xl"
              />
              
              <div className="flex-1">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-inter mb-4">
                  {integration.name}
                </h1>
                
                {/* Short summary here; the longer write-up (where one exists)
                    lives in the Overview tab, so the two don't repeat. */}
                <p className="text-xl text-muted-foreground font-inter mb-6 leading-relaxed">
                  {integration.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {displayCategories(integration).map(category => <Badge key={category} variant="outline" className={getCategoryColor(category)}>
                        {category}
                      </Badge>)}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button className="bg-gradient-primary hover:shadow-primary transition-all duration-300" asChild>
                    <Link to="/start-integration">
                      Connect this channel
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                  {facts.website && <Button variant="outline" asChild>
                      <a href={facts.website} target="_blank" rel="noopener noreferrer">
                        Visit {integration.name}
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </Button>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className={showTabs ? "grid lg:grid-cols-4 gap-8" : "max-w-4xl mx-auto"}>

            {/* Main Content Area — omitted entirely when a channel has nothing
                beyond its summary, rather than showing empty tabs. */}
            {showTabs && <div className="lg:col-span-3">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                {/* Only offer a tab we actually have content for — most
                    channels carry just a description, and empty tabs read as
                    broken. */}
                <TabsList
                  className="grid w-full"
                  style={{ gridTemplateColumns: `repeat(${1 + (hasFeatures ? 1 : 0) + (hasPricing ? 1 : 0)}, minmax(0, 1fr))` }}
                >
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  {hasFeatures && <TabsTrigger value="features">Features</TabsTrigger>}
                  {hasPricing && <TabsTrigger value="pricing">Pricing</TabsTrigger>}
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">


                  {/* About Section */}
                  <Card>
                    <CardHeader>
                      <CardTitle>About {integration.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {integration.longDescription && (
                        <p className="text-muted-foreground leading-relaxed">
                          {integration.longDescription}
                        </p>
                      )}

                      {/* Use Cases */}
                      {integration.useCases && integration.useCases.length > 0 && <div className="mt-6">
                          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Users size={16} className="text-primary" />
                            Ideal For
                          </h4>
                          <div className="space-y-3">
                            {integration.useCases.map((useCase, index) => <div key={index} className="flex items-start gap-3">
                                <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{useCase}</span>
                              </div>)}
                          </div>
                        </div>}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Features Tab */}
                <TabsContent value="features" className="space-y-6">
                  {integration.features && integration.features.length > 0 && <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Zap className="text-primary" size={20} />
                          Key Features
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          {integration.features.map((feature, index) => <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                              <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>)}
                        </div>
                      </CardContent>
                    </Card>}

                </TabsContent>


                {/* Pricing Tab */}
                <TabsContent value="pricing" className="space-y-6">
                  {integration.pricing ? <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <DollarSign className="text-primary" size={20} />
                          Pricing Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-foreground mb-2">Pricing Model</h4>
                            <p className="text-muted-foreground">{integration.pricing.model}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground mb-2">Details</h4>
                            <p className="text-muted-foreground">{integration.pricing.details}</p>
                          </div>
                          {integration.pricing.features && integration.pricing.features.length > 0 && <div>
                              <h4 className="font-medium text-foreground mb-3">What's Included</h4>
                              <div className="space-y-2">
                                {integration.pricing.features.map((feature, index) => <div key={index} className="flex items-start gap-3">
                                    <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{feature}</span>
                                  </div>)}
                              </div>
                            </div>}
                        </div>
                      </CardContent>
                    </Card> : <Card>
                      <CardContent className="p-8 text-center">
                        <DollarSign className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          Pricing Information
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Contact us for detailed pricing information and custom solutions.
                        </p>
                        <Button asChild>
                          <Link to="/contact">Get Pricing</Link>
                        </Button>
                      </CardContent>
                    </Card>}
                </TabsContent>
              </Tabs>
            </div>}

            {/* Sidebar. Without tabs these two cards sit side by side instead of
                stacking in a narrow column. */}
            <div
              className={
                showTabs
                  ? "lg:col-span-1 space-y-6"
                  : "space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0"
              }
            >

              {/* At a glance — the same four facts on every channel page, all
                  derived from the integration's category tags, so adding a
                  channel means adding tags rather than writing prose. */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">At a glance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FactRow icon={Zap} label="Channel type" values={facts.channelTypes} />
                  <FactRow icon={Globe} label="Sells in" values={facts.regions} />
                  <FactRow icon={Building2} label="Property types" values={facts.propertyTypes} />

                  {facts.website ? (
                    <div>
                      <div className="mb-1 flex items-center gap-2 text-sm font-medium text-foreground">
                        <ExternalLink size={15} className="text-primary" />
                        Official site
                      </div>
                      <a
                        href={facts.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all text-sm text-primary hover:underline"
                      >
                        {facts.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                      </a>
                    </div>
                  ) : null}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Connect {integration.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Available through the Channex API on the WhiteLabel plan. Mapping and
                    certification are handled as part of onboarding.
                  </p>
                  <Button className="w-full" asChild>
                    <Link to="/start-integration">Start an integration</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Talk to sales</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Integrations */}
      {relatedIntegrations.length > 0 && <section className="py-12 border-t border-border/50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-foreground font-inter mb-8">
                Related Integrations
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {relatedIntegrations.map(relatedInt => <Card key={relatedInt.id} className="group hover:shadow-primary transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <IntegrationLogo
                          name={relatedInt.name}
                          logo={relatedInt.logo}
                          className="w-12 h-12"
                          textClassName="text-sm"
                        />
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {relatedInt.name}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {relatedInt.description.slice(0, 120)}...
                      </CardDescription>
                      
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/integrations/${relatedInt.slug || relatedInt.id}`}>
                          Learn More
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </section>}

      <Footer />
    </div>;
};
export default IntegrationDetail;