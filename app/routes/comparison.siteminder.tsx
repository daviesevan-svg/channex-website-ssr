import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pageMeta } from "@/lib/seo";
import { Link } from "react-router";
import type { Route } from "./+types/comparison.siteminder";

export const meta: Route.MetaFunction = ({ location }) =>
  pageMeta(
    {
      title: "Channex vs SiteMinder: Detailed Comparison for PMS Providers",
      description:
        "Compare Channex and SiteMinder channel managers. See which solution is best for PMS providers, developers, and vacation rental platforms with pricing, features, and integration comparison.",
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "ComparisonChart",
          name: "Channex vs SiteMinder Comparison",
          itemCompared: [
            { "@type": "Product", name: "Channex" },
            { "@type": "Product", name: "SiteMinder" },
          ],
        },
      ],
    },
    location,
  );
import { OTA_CHANNEL_COUNT } from "@/data/counts";
import {
  Check,
  X,
  ArrowRight,
  Code2,
  Zap,
  DollarSign,
  Users,
  Gauge,
  Shield,
  BarChart3,
  Clock,
  Smartphone,
  Globe,
  Lock
} from "lucide-react";

const ComparisonSiteMinder = () => {
  const comparisonData: Array<{
    category: string;
    channex: string;
    siteminder: string;
    channexWins: boolean;
    bothHaveFeature?: boolean;
  }> = [
    {
      category: "Pricing Model",
      channex: "Transparent, usage-based pricing with no setup fees",
      siteminder: "Starting at $95/month, with additional fees for features and setup",
      channexWins: true
    },
    {
      category: "Target Audience",
      channex: "PMS providers and developers looking to embed OTA connectivity",
      siteminder: "Independent hotels and hotel groups managing their own bookings",
      channexWins: true
    },
    {
      category: "Integration Type",
      channex: "White-label API, embeddable in your PMS via API or iFrame",
      siteminder: "Standalone platform accessed directly by hotels",
      channexWins: true
    },
    {
      category: "OTA Connections",
      channex: `${OTA_CHANNEL_COUNT}+ certified OTA integrations with real-time sync`,
      siteminder: "450+ distribution channels (includes metasearch and GDS)",
      channexWins: false
    },
    {
      category: "PMS Integrations",
      channex: "Custom API-first integration for any PMS system",
      siteminder: "350+ pre-built 2-way PMS integrations",
      channexWins: true
    },
    {
      category: "Response Time",
      channex: "Sub-100ms response times for real-time sync",
      siteminder: "Instant updates (specific timing not published)",
      channexWins: true
    },
    {
      category: "Uptime SLA",
      channex: "99.9% uptime SLA",
      siteminder: "99.95% uptime",
      channexWins: false
    },
    {
      category: "Setup Complexity",
      channex: "Simple API integration, minimal setup required",
      siteminder: "Requires hotel staff training and ongoing management",
      channexWins: true
    },
    {
      category: "Booking Engine",
      channex: "Not included (focus on OTA connectivity)",
      siteminder: "Included in SiteMinder Plus ($129/month)",
      channexWins: false
    },
    {
      category: "Website Builder",
      channex: "Not included (focus on OTA connectivity)",
      siteminder: "Included in SiteMinder Plus",
      channexWins: false
    },
    {
      category: "Developer Experience",
      channex: "Comprehensive API documentation, SDKs, sandbox environment",
      siteminder: "Limited API documentation, primarily UI-based",
      channexWins: true
    },
    {
      category: "White-Label Options",
      channex: "Full white-label solution available",
      siteminder: "Not white-label (hotel-facing platform)",
      channexWins: true
    },
    {
      category: "Revenue Model",
      channex: "Partner revenue share opportunities",
      siteminder: "Direct hotel customer relationship",
      channexWins: true
    },
    {
      category: "Compliance",
      channex: "GDPR, PCI DSS compliant with activity logs and audit trails",
      siteminder: "GDPR, PCI DSS, PSD2 SCA compliant",
      channexWins: false,
      bothHaveFeature: true
    },
    {
      category: "Support",
      channex: "Developer-focused support with API documentation",
      siteminder: "24/7 hotel support included in all plans",
      channexWins: true
    }
  ];

  const useCases = [
    {
      title: "PMS Providers",
      description: "Add OTA connectivity to your PMS without building it from scratch",
      icon: Code2,
      channex: true,
      siteminder: false
    },
    {
      title: "Independent Hotels",
      description: "Manage your bookings across multiple OTAs from one platform",
      icon: Smartphone,
      channex: false,
      siteminder: true
    },
    {
      title: "Hotel Groups",
      description: "Centralized management for multiple properties",
      icon: Users,
      channex: false,
      siteminder: true
    },
    {
      title: "Vacation Rental Platforms",
      description: "Embed OTA connectivity into your vacation rental management system",
      icon: Globe,
      channex: true,
      siteminder: false
    },
    {
      title: "Revenue Optimization",
      description: "Advanced pricing and revenue management tools",
      icon: BarChart3,
      channex: false,
      siteminder: true
    },
    {
      title: "API-First Integration",
      description: "Seamless integration with custom development and automation",
      icon: Zap,
      channex: true,
      siteminder: false
    }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
              <BarChart3 size={16} />
              Detailed Comparison
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white font-inter leading-tight">
              Channex vs
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> SiteMinder</span>
            </h1>

            <p className="text-xl text-slate-300 font-inter max-w-2xl mx-auto leading-relaxed">
              Understand the key differences between Channex's white-label API and SiteMinder's all-in-one platform to choose the right solution for your business.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15</div>
                <div className="text-slate-300 text-sm mt-1">Feature Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{OTA_CHANNEL_COUNT}+</div>
                <div className="text-slate-300 text-sm mt-1">OTA Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-slate-300 text-sm mt-1">Uptime SLA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Channex Summary */}
            <Card className="border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/2">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Channex</h3>
                  <p className="text-muted-foreground">White-Label Channel Manager API</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">API-First Architecture</p>
                      <p className="text-sm text-muted-foreground">Embed directly into your PMS</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">For PMS Providers</p>
                      <p className="text-sm text-muted-foreground">Build OTA connectivity into your platform</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Transparent Pricing</p>
                      <p className="text-sm text-muted-foreground">No setup fees or hidden charges</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Sub-100ms Response Times</p>
                      <p className="text-sm text-muted-foreground">Real-time OTA synchronization</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full" asChild>
                  <Link to="/features">
                    Learn More About Channex
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* SiteMinder Summary */}
            <Card className="border border-border/50">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">SiteMinder</h3>
                  <p className="text-muted-foreground">All-in-One Hotel Platform</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Comprehensive Platform</p>
                      <p className="text-sm text-muted-foreground">Channel manager + booking engine + website builder</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">For Hotels & Groups</p>
                      <p className="text-sm text-muted-foreground">Direct hotel management interface</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">450+ Distribution Channels</p>
                      <p className="text-sm text-muted-foreground">Massive OTA and GDS network</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">99.95% Uptime</p>
                      <p className="text-sm text-muted-foreground">Enterprise-grade reliability</p>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Visit SiteMinder
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-24 bg-slate-900/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Feature Comparison
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Detailed side-by-side comparison of key features and capabilities
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-4 px-6 font-semibold text-foreground">Feature</th>
                  <th className="text-center py-4 px-6 font-semibold text-foreground">Channex</th>
                  <th className="text-center py-4 px-6 font-semibold text-foreground">SiteMinder</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className="border-b border-border/30 hover:bg-slate-900/20 transition-colors">
                    <td className="py-4 px-6 font-medium text-foreground">{item.category}</td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {item.bothHaveFeature || item.channexWins ? (
                          <>
                            <Check className="text-green-500" size={20} />
                            <span className="text-sm text-muted-foreground hidden sm:inline">{item.channex}</span>
                          </>
                        ) : (
                          <>
                            <X className="text-muted-foreground/50" size={20} />
                            <span className="text-sm text-muted-foreground hidden sm:inline">{item.channex}</span>
                          </>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground sm:hidden mt-2">{item.channex}</p>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        {item.bothHaveFeature || !item.channexWins ? (
                          <>
                            <Check className="text-green-500" size={20} />
                            <span className="text-sm text-muted-foreground hidden sm:inline">{item.siteminder}</span>
                          </>
                        ) : (
                          <>
                            <X className="text-muted-foreground/50" size={20} />
                            <span className="text-sm text-muted-foreground hidden sm:inline">{item.siteminder}</span>
                          </>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground sm:hidden mt-2">{item.siteminder}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Which Solution is Right for You?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose based on your business model and use case
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <Card key={useCase.title} className="border border-border/50">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <Icon size={24} className="text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">{useCase.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{useCase.description}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-4">
                      {useCase.channex && (
                        <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Channex</Badge>
                      )}
                      {useCase.siteminder && (
                        <Badge variant="outline">SiteMinder</Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-24 bg-slate-900/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Pricing Comparison
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing models for different business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Channex Pricing */}
            <Card className="border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/2">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Channex</h3>
                  <p className="text-muted-foreground">Usage-based pricing</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">No Setup Fees</p>
                      <p className="text-sm text-muted-foreground">Start immediately</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">No Hidden Charges</p>
                      <p className="text-sm text-muted-foreground">Transparent per-booking pricing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Compliance</p>
                      <p className="text-sm text-muted-foreground">GDPR & PCI DSS compliant with activity logs and audit trails</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Partner Revenue Share</p>
                      <p className="text-sm text-muted-foreground">Earn from integrations</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full" asChild>
                  <Link to="/pricing">
                    View Pricing
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* SiteMinder Pricing */}
            <Card className="border border-border/50">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">SiteMinder</h3>
                  <p className="text-muted-foreground">Feature-based pricing</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <X className="text-muted-foreground/50 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Starting at $95/month</p>
                      <p className="text-sm text-muted-foreground">For 5-room property</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="text-muted-foreground/50 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Setup & Modification Fees</p>
                      <p className="text-sm text-muted-foreground">Additional charges apply</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="text-muted-foreground/50 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">Transactional Fees</p>
                      <p className="text-sm text-muted-foreground">For some features</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-foreground">All-in-One Solution</p>
                      <p className="text-sm text-muted-foreground">Multiple modules included</p>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Visit SiteMinder Pricing
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 rounded-3xl p-12 lg:p-20 text-center text-white shadow-2xl shadow-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold font-inter leading-tight">
                Ready to Embed OTA Connectivity?
              </h2>
              <p className="text-xl text-white/90 font-inter max-w-2xl mx-auto leading-relaxed">
                If you're a PMS provider or developer looking to add channel manager capabilities to your platform, Channex is the solution you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" className="font-inter hover:shadow-lg" onClick={() => window.open('https://docs.channex.io/', '_blank')}>
                  View API Documentation
                  <ArrowRight size={16} className="ml-2" />
                </Button>
                <Button size="lg" variant="ghost" className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white font-inter hover:shadow-lg" asChild>
                  <Link to="/contact">Schedule a Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComparisonSiteMinder;
