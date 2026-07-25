import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pageMeta } from "@/lib/seo";
import { Link } from "react-router";
import type { Route } from "./+types/features";
import { OTA_CHANNEL_COUNT } from "@/data/counts";

export const meta: Route.MetaFunction = ({ location }) =>
  pageMeta(
    {
      title: "Channel Manager API Features | White-label Solution for PMS",
      description:
        "Explore features of Channex's white-label channel manager API for PMS providers: real-time OTA connectivity, full logs, and developer tools.",
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What is a white-label channel manager API for PMS systems?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "An API that embeds OTA connectivity into your PMS under your own brand, handling rates, availability, restrictions and reservations across OTAs.",
              },
            },
            {
              "@type": "Question",
              name: "Which OTAs does Channex connect to?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Certified connections include Booking.com, Airbnb, Expedia, Agoda and 40+ regional OTAs with real-time synchronization.",
              },
            },
          ],
        },
      ],
    },
    location,
  );
import { 
  Code2, 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  Smartphone,
  ArrowRight,
  CheckCircle,
  Lock,
  Activity,
  CreditCard,
  Puzzle,
  FileText,
  Webhook,
  Users,
  Eye,
  Lightbulb,
  Rocket,
  TrendingUp
} from "lucide-react";

const Features = () => {
  const coreFeatures = [
    {
      icon: Smartphone,
      title: "White Label Channel Manager",
      description: "Seamlessly integrates into PMS platforms with your brand, your experience — Channex stays invisible. Fast to implement via API or iFrame widget.",
      highlight: "Your Brand",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: Zap,
      title: "Real-Time OTA Connectivity",
      description: "Certified connections with Booking.com, Expedia, Airbnb, Agoda, and more. Instant updates for availability, rates, and restrictions with automatic reservation import & sync.",
      highlight: "Instant Updates",
      color: "from-amber-500/20 to-amber-600/20"
    },
    {
      icon: Code2,
      title: "Powerful API for Developers",
      description: "Fully documented REST API built for fast, scalable integrations with modern authentication, API keys, and granular access control.",
      highlight: "Developer First",
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: BarChart3,
      title: "High Reliability & Speed",
      description: "Built with performance in mind featuring low-latency updates to OTAs and scales seamlessly with your PMS growth.",
      highlight: "99.9% Uptime",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      icon: Users,
      title: "Multi-Property & Group Support",
      description: "Manage multiple properties from a single integration. Scalable for PMS systems with enterprise hotel groups.",
      highlight: "Enterprise Ready",
      color: "from-pink-500/20 to-pink-600/20"
    },
    {
      icon: Eye,
      title: "Full Logs for OTA and PMS",
      description: "See all logs of what was sent to each channel and what the PMS sent to Channex. Find which API call changed availability or prices easily.",
      highlight: "Complete Visibility",
      color: "from-cyan-500/20 to-cyan-600/20"
    }
  ];

  const advancedFeatures = [
    {
      icon: CreditCard,
      title: "Payment Gateway API",
      description: "Charge cards without PCI burden. Supports Stripe & other gateways with simple unified API for payments and refunds.",
      badge: "Optional Add-on"
    },
    {
      icon: Puzzle,
      title: "Marketplace & App Integrations",
      description: "Connect to third-party apps (Pricelabs, Room Price Genie etc.) Future-ready for AI integrations & automation tools.",
      badge: "Optional"
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "GDPR Compliant",
      description: "Secure data handling with full control over access to customer data."
    },
    {
      icon: Activity,
      title: "Activity Logs & Audit Trail",
      description: "Track all API activity for troubleshooting and compliance with transparent data flow."
    }
  ];

  const developerTools = [
    {
      icon: FileText,
      title: "SDKs & Sample Code",
      description: "Easy to get started with comprehensive documentation"
    },
    {
      icon: Lock,
      title: "Sandbox Environment", 
      description: "Test before going live with full API access"
    },
    {
      icon: Webhook,
      title: "Webhooks & Automation Support",
      description: "Connect to Zapier, Make, or your custom workflows"
    }
  ];

  const otaLogos = [
    "Booking.com", "Expedia", "Airbnb", "Agoda", "Hotels.com", "Trip.com"
  ];

  const benefits = [
    { icon: Rocket, title: "Fast Implementation", description: "Get up and running in days, not months" },
    { icon: TrendingUp, title: "Revenue Growth", description: "Increase bookings through expanded distribution" },
    { icon: CheckCircle, title: "Reduced Complexity", description: "We handle OTA integrations, you focus on PMS" }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      
      {/* Hero Section - Enhanced */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
              <Lightbulb size={16} />
              Complete Feature Overview
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white font-inter leading-tight">
              The Invisible
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Advantage</span>
              <br />for PMS Providers
            </h1>
            
            <p className="text-xl text-slate-300 font-inter max-w-2xl mx-auto leading-relaxed">
              Everything you need to connect your Property Management System to the world's leading booking platforms — while keeping your brand front and center.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">99.9%</div>
                <div className="text-slate-300 text-sm mt-1">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">&lt;100ms</div>
                <div className="text-slate-300 text-sm mt-1">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{OTA_CHANNEL_COUNT}+</div>
                <div className="text-slate-300 text-sm mt-1">OTA Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-8 space-y-4">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl w-fit">
                    <benefit.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-slate-900/20 to-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
              Core Capabilities
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
              Powerful Features Built for Scale
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              The foundation of our channel manager API designed specifically for PMS providers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card 
                key={feature.title}
                className="group border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <CardContent className="p-8 space-y-6 relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="p-4 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <feature.icon size={28} className="text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.highlight}
                    </Badge>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground font-inter mb-2">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Integrations */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
              Advanced Options
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
              Advanced Integrations
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Optional add-ons to extend your PMS capabilities even further.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advancedFeatures.map((feature) => (
              <Card 
                key={feature.title}
                className="border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      <feature.icon size={28} className="text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground font-inter mb-2">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24 bg-gradient-to-b from-slate-900/20 to-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
              Enterprise Grade
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
              Security & Compliance
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Enterprise-grade security and compliance built into every integration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {securityFeatures.map((feature) => (
              <Card 
                key={feature.title}
                className="border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="p-4 bg-primary/10 rounded-xl w-fit">
                    <feature.icon size={28} className="text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground font-inter mb-2">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Tools */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
              Developer Experience
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
              Developer-Friendly Tools
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Everything developers need to integrate quickly and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {developerTools.map((tool) => (
              <Card 
                key={tool.title}
                className="border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm text-center group"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="p-4 bg-primary/10 rounded-xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                    <tool.icon size={28} className="text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground font-inter mb-2">
                      {tool.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Distribution & OTA Logos */}
      <section className="py-24 bg-gradient-to-b from-slate-900/20 to-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
              Global Reach
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
              Global Distribution
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Trusted by PMS providers worldwide with regional OTA support across Asia, Europe, and Americas.
            </p>
          </div>

          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-12 shadow-elegant hover:border-primary/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-center text-foreground font-inter mb-12">
              Certified OTA Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center mb-8">
              {otaLogos.map((ota) => (
                <div 
                  key={ota} 
                  className="text-center p-4 bg-background/50 rounded-lg border border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all w-full group"
                >
                  <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{ota}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground">
              {/* Derived so this stays consistent with the channel count above. */}
              <span className="font-semibold">And {OTA_CHANNEL_COUNT - otaLogos.length} more</span>{" "}
              regional and niche booking platforms
            </p>
          </div>
        </div>
      </section>

      {/* How Channex Compares */}
      <section className="py-24 bg-slate-900/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
              How Channex Compares
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              See how Channex stacks up against other channel manager solutions
            </p>
          </div>
          <div className="flex justify-center">
            <Button size="lg" variant="outline" className="font-inter" asChild>
              <Link to="/comparison/siteminder">
                View Channex vs SiteMinder Comparison
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 rounded-3xl p-12 lg:p-20 text-center text-white shadow-2xl shadow-primary/20 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold font-inter leading-tight">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 font-inter max-w-2xl mx-auto leading-relaxed">
                Join hundreds of PMS providers who trust Channex to power their OTA connectivity and drive revenue growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" className="font-inter hover:shadow-lg" onClick={() => window.open('https://docs.channex.io/', '_blank')}>
                  View the API
                  <ArrowRight size={16} className="ml-2" />
                </Button>
                <Button size="lg" variant="ghost" className="border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white font-inter hover:shadow-lg" asChild>
                  <Link to="/contact">Talk to Sales</Link>
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

export default Features;
