import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pageMeta } from "@/lib/seo";
import { Code2, Users, Globe, Target, Award, ArrowRight, Building, Calendar, MapPin, Zap, Shield, Lightbulb, Handshake } from "lucide-react";
import { Link } from "react-router";
import type { Route } from "./+types/about";
import { OTA_CHANNEL_COUNT, PMS_COUNT } from "@/data/counts";

export const meta: Route.MetaFunction = ({ location }) =>
  pageMeta(
    {
      title: "About Channex | White-label Channel Manager API for PMS",
      description:
        "Learn about Channex, the white-label channel manager API helping PMS systems connect to OTAs like Booking.com, Airbnb, and Expedia.",
    },
    location,
  );

const About = () => {
  const stats = [{
    number: `${OTA_CHANNEL_COUNT}+`,
    label: "OTA Partners",
    icon: Globe,
    description: "Connected to the world's leading booking platforms"
  }, {
    number: "99.9%",
    label: "Uptime SLA",
    icon: Shield,
    description: "Enterprise-grade reliability you can depend on"
  }, {
    number: `${PMS_COUNT}+`,
    label: "PMS Integrations",
    icon: Building,
    description: "Seamless connectivity across all major systems"
  }, {
    number: "2020",
    label: "Founded",
    icon: Calendar,
    description: "By a hotelier who had already built and sold a PMS"
  }];

  const values = [{
    icon: Code2,
    title: "Developer First",
    description: "We build APIs that developers love to work with. Clean, well-documented, and reliable.",
    color: "from-blue-500/20 to-blue-600/20"
  }, {
    icon: Handshake,
    title: "Partnership Focused",
    description: "We sell through software, never direct to hotels. Your product stays the one your customers rely on; we just make it better connected.",
    color: "from-purple-500/20 to-purple-600/20"
  }, {
    icon: Target,
    title: "White Label by Design",
    description: "Your brand stays front and center. We remain invisible while powering your connections behind the scenes.",
    color: "from-pink-500/20 to-pink-600/20"
  }, {
    icon: Zap,
    title: "Global Scale",
    description: "From boutique hotels to enterprise chains, our infrastructure scales to meet any demand worldwide.",
    color: "from-amber-500/20 to-amber-600/20"
  }];

  const teamMembers = [{
    name: "Evan Davies",
    role: "CEO & Co-Founder",
    bio: "Former hotelier. Built his own PMS in 2015 and sold it in 2019 — Channex is the channel manager he wanted back then.",
    image: "/lovable-uploads/578448c6-4f90-414e-bbbd-a0d0d3ee17f2.png"
  }, {
    name: "Andrew Yudin",
    role: "CTO & Co-Founder",
    bio: "API architecture expert who's built scalable systems for millions of bookings.",
    image: "/lovable-uploads/c4fc7035-fd21-4f38-a290-7b8ae1bb38f9.png"
  }, {
    name: "Andrew Mamotko",
    role: "Senior Developer",
    bio: "15 years experience building enterprise integrations and scalable solutions.",
    image: "/lovable-uploads/2bba953c-5623-4d9e-9fd9-fd30a724a83a.png"
  }, {
    name: "Andrew Sokolov",
    role: "Senior Developer",
    bio: "Over 15 years experience in Front End development and secure system design.",
    image: "/lovable-uploads/0a736d36-ed1f-4265-b5e6-c267de944708.png"
  }, {
    name: "Dawwalee Davies (Tikky)",
    role: "Co-Founder",
    bio: "Deep knowledge of the hotel industry.",
    image: "/lovable-uploads/b27de44c-9399-4ca2-aa2e-9d7990932c5a.png"
  }, {
    name: "Paloma Sanchez",
    role: "Head of Partnerships",
    bio: "Over 15 years experience in sales and partnerships in hotel technology.",
    image: "/lovable-uploads/72ae10b3-884b-4f73-8f5a-1d2acb353b9d.png"
  }, {
    name: "Dmitry Krakosevich",
    role: "Senior Developer",
    bio: "Deep experience in integrations with PMS and OTA.",
    image: "/lovable-uploads/c1982ae2-6167-4942-8ed6-7d753e056b5e.png"
  }, {
    name: "Sergey Kurmaev",
    role: "Senior DevOps",
    bio: "Automating pipelines, scaling infrastructure, and championing reliability across cloud platforms.",
    image: "/lovable-uploads/f5dcca07-0e62-4c9f-8548-d08cee857114.png"
  }];

  const milestones = [
    { year: "2015", title: "The problem, first-hand", description: "Our founder builds his own PMS while running hotels — and hits the channel-manager wall" },
    { year: "2019", title: "PMS sold", description: "The PMS is sold in December, but the connectivity gap it exposed is still there" },
    { year: "2020", title: "Channex founded", description: "Launched in January to build the channel manager that PMS had needed: modern API, per-property pricing, wholesale only" },
    { year: "2022", title: "Enterprise scale", description: "Hundreds of PMS integrations live, on a 99.9% uptime SLA" },
    { year: "Today", title: `${PMS_COUNT}+ PMS partners`, description: `${OTA_CHANNEL_COUNT} booking channels behind one API, serving partners worldwide` }
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
              Our Story
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white font-inter leading-tight">
              Connecting the
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Hospitality</span>
              <br />Ecosystem
            </h1>
            
            <p className="text-xl text-slate-300 font-inter max-w-2xl mx-auto leading-relaxed">
              We're on a mission to make OTA connectivity seamless for everyone who builds the software a property runs on — commercial PMS vendors and hotel groups building their own — so properties can focus on what they do best: creating great guest experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label} 
                className="border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <stat.icon size={28} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-sm text-muted-foreground font-medium mt-1">{stat.label}</div>
                    <p className="text-xs text-muted-foreground/70 mt-2">{stat.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section - Redesigned */}
      <section className="py-24 bg-gradient-to-b from-background to-slate-900/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
                  Our Mission
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-inter leading-tight">
                  Simplifying Hospitality Tech
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                  The hospitality industry should be about creating great guest experiences — not struggling with technical integrations. We believe Property Management System providers should focus on what they do best: building powerful, user-friendly PMS platforms.
                </p>
                <p className="text-lg text-muted-foreground font-inter leading-relaxed">
                  That's why we created Channex: the invisible infrastructure that connects your PMS to the world's leading booking platforms. We handle the complexity of OTA integrations, so you can deliver seamless connectivity without the hassle.
                </p>
              </div>
              
              <Button className="bg-gradient-primary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-inter w-fit" asChild>
                <a href="https://docs.channex.io/" target="_blank" rel="noopener noreferrer">
                  Explore Our API
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg flex-shrink-0">
                    <MapPin size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">
                      Built by a hotelier who'd already built a PMS
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our founder built his own property management system in 2015 while running
                      hotels, and sold it in December 2019. The hardest part was never the PMS — it
                      was the channel managers it had to plug into: expensive, no modern API worth
                      the name, and unwilling to bend to fit the product. Channex opened in January
                      2020 to be the thing he'd needed.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg flex-shrink-0">
                    <Target size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">Developer-Centric Approach</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Every decision we make is viewed through the lens of developer experience. If it's not simple, fast, and reliable, it doesn't ship.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Enhanced Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
              Core Values
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
              What We Stand For
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              The principles that guide everything we build and every partnership we form.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm group overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <CardContent className="p-8 space-y-6 relative z-10">
                  <div className="p-4 bg-primary/10 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <value.icon size={28} className="text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground font-inter mb-3">
                      {value.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900/20 to-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
              Our Journey
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
              Milestones & Growth
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="relative">
                <Card className="border border-border/50 hover:border-primary/30 transition-all duration-300 h-full bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8 space-y-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {milestone.year}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                    </div>
                  </CardContent>
                </Card>
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Enhanced */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
              Meet the Team
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
              Industry Veterans & Innovators
            </h2>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              We've been in your shoes and understand the challenges you face. Our team brings decades of combined experience in hospitality tech.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name} 
                className="border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-card/50 backdrop-blur-sm overflow-hidden group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="relative overflow-hidden rounded-xl">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                        <span className="text-white font-bold text-4xl">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground font-inter">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm">{member.role}</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-background to-slate-900/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 rounded-3xl p-12 lg:p-20 text-center text-white shadow-2xl shadow-primary/20 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold font-inter leading-tight">
                Ready to Transform Your OTA Connectivity?
              </h2>
              <p className="text-xl text-white/90 font-inter max-w-2xl mx-auto leading-relaxed">
                Join hundreds of PMS providers who trust Channex to power their channel management and drive revenue growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" className="font-inter hover:shadow-lg" asChild>
                  <Link to="/start-integration">
                    Start Integration
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
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

export default About;
