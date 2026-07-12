import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  Palette,
  ArrowRight,
  DollarSign,
  Users
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Code2,
      title: "Modern REST API",
      description: "JSON-based REST API with webhooks. No CSV mapping or XML files. Full documentation and test sandbox included.",
      highlight: "REST + Webhooks",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Fast Integration",
      description: "Most PMS companies go live in 2-4 weeks. Sub-100ms response times with 99.9% uptime SLA.",
      highlight: "2-4 weeks",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Affordable per-property pricing. No hidden fees, no per-room charges, no setup costs. Scale predictably.",
      highlight: "Low fees",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Palette,
      title: "Full White-Label",
      description: "Your brand everywhere. No 'Powered by' badges. Custom domains supported. You own the relationship.",
      highlight: "Your brand",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: "50+ OTA Connections",
      description: "Connect to Booking.com, Airbnb, Expedia, Agoda, Trip.com, and 50+ more booking platforms worldwide.",
      highlight: "50+ OTAs",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Users,
      title: "PMS-Only Focus",
      description: "We only work with PMS providers. We never market to hotels or compete with your customers.",
      highlight: "B2B only",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "GDPR and PCI DSS compliant. Activity logs and audit trails. Industry-standard security practices.",
      highlight: "GDPR + PCI DSS",
      gradient: "from-slate-500 to-gray-600"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Monitor channel errors, booking performance, and system health with detailed dashboards and alerts.",
      highlight: "Live metrics",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
            <Code2 size={16} />
            Built for PMS Providers
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
            Everything you need to
            <span className="bg-gradient-primary bg-clip-text text-transparent"> connect your PMS</span>
          </h2>
          
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            A complete channel manager API designed for Property Management Systems. Modern, reliable, and developer-friendly.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm animate-fade-in overflow-hidden relative"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              <CardContent className="p-6 space-y-4 relative">
                <div className="flex items-start justify-between">
                  <div className={`p-3 bg-gradient-to-br ${feature.gradient} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded font-inter border border-primary/20">
                    {feature.highlight}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground font-inter">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Code Example Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 lg:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full text-sm font-medium text-primary">
                <Code2 size={14} />
                Developer Experience
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white font-inter">
                Start integrating in minutes
              </h3>
              <p className="text-slate-300 font-inter leading-relaxed text-lg">
                Our REST API is designed for developers, by developers. Clean endpoints, comprehensive docs, and a test sandbox to get you started quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://docs.channex.io/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-primary hover:shadow-primary transition-all duration-300 font-inter w-full sm:w-auto">
                    View Documentation
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </a>
                <a href="https://staging.channex.io/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-slate-600 bg-slate-800 text-white hover:bg-slate-700 font-inter w-full sm:w-auto">
                    Try Sandbox
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="bg-slate-950 rounded-xl p-6 overflow-hidden border border-slate-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-400 text-sm ml-2 font-mono">api.channex.io</span>
              </div>
              <pre className="text-sm text-slate-300 font-mono overflow-x-auto">
{`POST /v1/properties
{
  "property": {
    "title": "Luxury Hotel Downtown",
    "currency": "USD",
    "timezone": "UTC"
  }
}

// Response
{
  "id": "prop_123abc",
  "status": "active",
  "channels": ["booking", "expedia"]
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
