import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Check } from "lucide-react";
import { useNavigate } from "react-router";
const heroImage = "/channex-og-image.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10 animate-glow"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10 animate-glow" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container mx-auto px-4 lg:px-6 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
              <Zap size={16} className="animate-pulse" />
              For PMS Providers Only
            </div>
            
            {/* Main headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground font-inter leading-tight">
                White-Label
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Channel Manager </span>
                API
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground font-inter leading-relaxed max-w-xl">
                Connect your PMS to Booking.com, Airbnb, Expedia, and 50+ OTAs with a modern REST API. No CSV mapping. No XML files.
              </p>
            </div>

            {/* Key benefits */}
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center gap-3 text-foreground">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20">
                  <Check size={14} className="text-primary" />
                </div>
                <span className="text-lg font-inter">Low fee per property</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20">
                  <Check size={14} className="text-primary" />
                </div>
                <span className="text-lg font-inter">2-4 weeks integration time</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20">
                  <Check size={14} className="text-primary" />
                </div>
                <span className="text-lg font-inter">We never compete with your customers</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-elegant transition-all duration-300 font-inter text-lg px-8 py-7 h-auto group"
                onClick={() => navigate('/start-integration')}
              >
                Start Integration
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/40 font-inter text-lg px-8 py-7 h-auto transition-all duration-300"
                asChild
              >
                <a href="https://docs.channex.io/" target="_blank" rel="noopener noreferrer">
                  <Code size={20} className="mr-2" />
                  API Documentation
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent font-inter">5000+</div>
                <div className="text-sm text-muted-foreground font-inter mt-1">Properties</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent font-inter">99.9%</div>
                <div className="text-sm text-muted-foreground font-inter mt-1">Uptime</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent font-inter">&lt;100ms</div>
                <div className="text-sm text-muted-foreground font-inter mt-1">Response</div>
              </div>
            </div>
          </div>

          {/* Right content - Dashboard image */}
          <div className="relative animate-scale-in lg:block hidden" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Channex Dashboard Interface" 
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-primary/5 rounded-2xl"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-primary animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <div className="text-sm font-medium text-foreground font-inter">Live Sync</div>
              <div className="text-xs text-muted-foreground font-inter">Real-time updates</div>
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 animate-pulse"></div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-primary animate-fade-in" style={{ animationDelay: "1s" }}>
              <div className="text-sm font-medium text-foreground font-inter">API Calls Today</div>
              <div className="text-2xl font-bold text-primary font-inter">2.4M</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
