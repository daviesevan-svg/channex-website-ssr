import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router";
import { Check, CreditCard, Shield, RefreshCw, ArrowRight, Building2, Home, MessageSquare, Calculator, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { faqs, plan, featureRows, channels } from "@/data/pricing";
import type { Route } from "./+types/pricing";

export const meta: Route.MetaFunction = ({ location }) => [
  ...pageMeta(
    {
      title: "Pricing | White-label Channel Manager API",
      description: "Flexible pricing for PMS providers using Channex's white-label channel manager API.",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    },
    location,
  ),
  // Machine-readable mirror of this page for LLMs/agents.
  { tagName: "link", rel: "alternate", type: "text/markdown", href: "/pricing.md" },
];

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Header Section */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
              Price plans
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-inter">
              Our prices are a fixed fee per month and then a small charge per hotel or vacation rental 
              connected. We only charge for properties with active channels.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="flex justify-center mb-20">
            <Card className="relative w-full max-w-sm border-primary/30 shadow-lg">
              <CardHeader className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-inter">{plan.name}</h3>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground font-inter">From</div>
                  <div className="text-4xl font-bold text-foreground font-inter">{plan.price}</div>
                  <div className="text-sm text-muted-foreground font-inter">{plan.period}</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center font-inter">{plan.description}</p>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild
                  className="w-full font-inter"
                  variant="default"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Calculator CTA */}
          <div className="mb-20">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <Calculator className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground font-inter mb-3">
                Estimate Your Monthly Cost
              </h2>
              <p className="text-muted-foreground font-inter mb-6 max-w-xl mx-auto">
                Enter your hotel and vacation rental portfolio size to get an instant cost estimate — including volume discounts. No commitment required.
              </p>
              <Button asChild size="lg" className="font-inter">
                <a href="/pricing-calculator" target="_blank" rel="noopener noreferrer">
                  Open Pricing Calculator
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
              <p className="text-xs text-muted-foreground font-inter mt-4">
                Volume discounts apply automatically from 500+ hotels or 2,000+ VR units
              </p>
            </div>
          </div>

          {/* White Label Pricing Breakdown */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground font-inter mb-3">White Label Pricing</h2>
              <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
                Transparent per-property pricing for PMS providers and tech partners. The monthly platform fee covers your subscription — you only pay per active connected property on top.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Channel Manager Card */}
              <Card className="border-primary/30 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <RefreshCw className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground font-inter">Channel Manager</h3>
                  </div>
                  <p className="text-sm text-muted-foreground font-inter">Per active connected property, billed monthly</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted/40 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground font-inter">Hotels</span>
                    </div>
                    <span className="text-2xl font-bold text-primary font-inter">$7<span className="text-sm font-normal text-muted-foreground"> / property</span></span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/40 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Home className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground font-inter">Vacation Rentals</span>
                    </div>
                    <span className="text-2xl font-bold text-primary font-inter">$0.50<span className="text-sm font-normal text-muted-foreground"> / unit</span></span>
                  </div>
                </CardContent>
              </Card>

              {/* Chat & Reviews Add-on Card */}
              <Card className="border-primary/30 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground font-inter">Chat &amp; Reviews</h3>
                  </div>
                  <p className="text-sm text-muted-foreground font-inter">Optional add-on — messaging and review management per property</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted/40 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground font-inter">Hotels</span>
                    </div>
                    <span className="text-2xl font-bold text-primary font-inter">$7<span className="text-sm font-normal text-muted-foreground"> / property</span></span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/40 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Home className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground font-inter">Vacation Rentals</span>
                    </div>
                    <span className="text-2xl font-bold text-primary font-inter">$0.50<span className="text-sm font-normal text-muted-foreground"> / unit</span></span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6 font-inter">
              * Only properties with at least one active channel connection are billed. The $130/month platform fee applies in addition to per-property charges.
            </p>
            <p className="text-center text-sm text-muted-foreground mt-2 font-inter">
              All prices are excluding VAT.
            </p>
          </div>

          {/* Feature Comparison Table */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-inter">
              Features
            </h2>
            
            <div className="overflow-x-auto max-w-2xl mx-auto">
              <table className="w-full border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-6 font-semibold text-foreground font-inter">Feature</th>
                    <th className="text-center p-6 font-semibold text-foreground font-inter">WhiteLabel</th>
                  </tr>
                </thead>
                <tbody>
                  {featureRows.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/25"}>
                      <td className="p-6 font-medium text-foreground font-inter">{row.feature}</td>
                      <td className="p-6 text-center text-muted-foreground font-inter">
                        {row.whitelabel === "✓" ? (
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        ) : (
                          <span className="font-semibold text-foreground">{row.whitelabel}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Channels Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center text-foreground mb-8 font-inter">
                Supported Channels
              </h3>
              <div className="overflow-x-auto max-w-2xl mx-auto">
                <table className="w-full border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-6 font-semibold text-foreground font-inter">Channel</th>
                      <th className="text-center p-6 font-semibold text-foreground font-inter">WhiteLabel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {channels.map((channel, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/25"}>
                        <td className="p-6 font-medium text-foreground font-inter">{channel}</td>
                        <td className="p-6 text-center">
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-inter">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-border rounded-xl overflow-hidden"
                  >
                    <button
                      className="w-full flex items-center justify-between p-6 text-left bg-background hover:bg-muted/30 transition-colors"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold text-foreground font-inter pr-4">{faq.question}</span>
                      {isOpen
                        ? <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        : <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      }
                    </button>
                    {/* Always in the DOM (hidden when collapsed) so crawlers
                        and LLMs see the answers in the SSR HTML. */}
                    <div className={isOpen ? "px-6 pb-6 bg-muted/20" : "hidden"}>
                      <p className="text-muted-foreground font-inter leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* OTA Section */}
          <div className="text-center mb-16 p-8 bg-muted/50 rounded-lg">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-inter">Are you an OTA?</h2>
            <p className="text-muted-foreground font-inter">
              Please get in touch if you would like to connect Channex as a channel
            </p>
          </div>

          {/* Trust Signals */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground font-inter">Accepted Payment Methods</h3>
              <p className="text-muted-foreground font-inter">Visa, Mastercard, and more secure payment options</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <RefreshCw className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground font-inter">Money Back Guarantee</h3>
              <p className="text-muted-foreground font-inter">If you're not 100% satisfied, get your money back</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground font-inter">SSL Secure Payment</h3>
              <p className="text-muted-foreground font-inter">Your information is protected by 256-bit SSL encryption</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
