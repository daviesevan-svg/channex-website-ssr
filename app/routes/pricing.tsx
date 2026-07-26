import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router";
import {
  Check,
  RefreshCw,
  ArrowRight,
  Building2,
  Home,
  MessageSquare,
  Calculator,
  ChevronDown,
  ChevronUp,
  Code2,
  FlaskConical,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  faqs,
  plan,
  featureRows,
  channels,
  PLATFORM_FEE,
  HOTEL_BASE_RATE,
  VR_BASE_RATE,
  HOTEL_TIERS,
  VR_TIERS,
  goodFit,
  wrongFit,
} from "@/data/pricing";
import { OTA_CHANNEL_COUNT } from "@/data/counts";
import type { Route } from "./+types/pricing";

export const meta: Route.MetaFunction = ({ location }) => [
  ...pageMeta(
    {
      title: "Pricing | White-label Channel Manager API",
      description: `One plan: $${PLATFORM_FEE}/month plus $${HOTEL_BASE_RATE} per connected hotel or $${VR_BASE_RATE.toFixed(2)} per vacation rental unit, with volume discounts at scale.`,
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

const money = (n: number) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20 font-inter">
              One plan · no tiers · no sales negotiation
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">Pricing</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-inter">
              A flat monthly platform fee plus a small charge per connected property. We only bill
              properties with at least one active channel, and the per-property rate falls
              automatically as your portfolio grows.
            </p>
          </div>

          {/* The plan */}
          <div className="flex justify-center mb-20">
            <Card className="relative w-full max-w-2xl border-primary/30 shadow-lg">
              <CardHeader className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-foreground font-inter">{plan.name}</h2>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground font-inter">Platform fee, from</div>
                  <div className="text-5xl font-bold text-foreground font-inter">{plan.price}</div>
                  <div className="text-sm text-muted-foreground font-inter">
                    {plan.period} + per connected property
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center font-inter">{plan.description}</p>

                <ul className="grid sm:grid-cols-2 gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full font-inter" size="lg">
                  <Link to="/contact">Talk to us about your integration</Link>
                </Button>
                <p className="text-center text-xs text-muted-foreground font-inter">
                  No setup fee. Billed monthly, cancel any time.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Per-property rates */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground font-inter mb-3">
                What you pay per property
              </h2>
              <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
                On top of the {money(PLATFORM_FEE)} platform fee, billed monthly for properties with
                at least one active channel connection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-primary/30 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <RefreshCw className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground font-inter">Channel Manager</h3>
                  </div>
                  <p className="text-sm text-muted-foreground font-inter">
                    Rates, availability, restrictions and reservations — two-way
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted/40 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground font-inter">Hotels</span>
                    </div>
                    <span className="text-2xl font-bold text-primary font-inter">
                      ${HOTEL_BASE_RATE}
                      <span className="text-sm font-normal text-muted-foreground"> / property</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/40 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Home className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground font-inter">Vacation Rentals</span>
                    </div>
                    <span className="text-2xl font-bold text-primary font-inter">
                      {money(VR_BASE_RATE)}
                      <span className="text-sm font-normal text-muted-foreground"> / unit</span>
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/30 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground font-inter">Chat &amp; Reviews</h3>
                  </div>
                  <p className="text-sm text-muted-foreground font-inter">
                    Optional add-on — guest messaging and review management
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted/40 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground font-inter">Hotels</span>
                    </div>
                    <span className="text-2xl font-bold text-primary font-inter">
                      ${HOTEL_BASE_RATE}
                      <span className="text-sm font-normal text-muted-foreground"> / property</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-muted/40 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Home className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground font-inter">Vacation Rentals</span>
                    </div>
                    <span className="text-2xl font-bold text-primary font-inter">
                      {money(VR_BASE_RATE)}
                      <span className="text-sm font-normal text-muted-foreground"> / unit</span>
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6 font-inter">
              All prices exclude VAT. Only properties with at least one active channel connection are
              billed.
            </p>
          </div>

          {/* Volume discounts — previously only visible inside the calculator. */}
          <div className="mb-20 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground font-inter mb-3">Volume discounts</h2>
              <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
                Applied automatically — there's nothing to negotiate and no minimum commitment to
                unlock them.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-border bg-card/50 p-6">
                <h3 className="font-semibold text-foreground font-inter mb-4 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" /> Hotels
                </h3>
                <ul className="space-y-2 font-inter text-sm">
                  <li className="flex justify-between py-1.5 border-b border-border/50">
                    <span className="text-muted-foreground">Standard</span>
                    <span className="font-semibold text-foreground tabular-nums">
                      {money(HOTEL_BASE_RATE)}
                    </span>
                  </li>
                  {HOTEL_TIERS.map((t) => (
                    <li key={t.thresh} className="flex justify-between py-1.5 border-b border-border/50 last:border-0">
                      <span className="text-muted-foreground">
                        {t.thresh.toLocaleString("en-US")}+ properties
                      </span>
                      <span className="font-semibold text-foreground tabular-nums">{money(t.rate)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card/50 p-6">
                <h3 className="font-semibold text-foreground font-inter mb-4 flex items-center gap-2">
                  <Home className="h-5 w-5 text-primary" /> Vacation rentals
                </h3>
                <ul className="space-y-2 font-inter text-sm">
                  <li className="flex justify-between py-1.5 border-b border-border/50">
                    <span className="text-muted-foreground">Standard</span>
                    <span className="font-semibold text-foreground tabular-nums">
                      {money(VR_BASE_RATE)}
                    </span>
                  </li>
                  {VR_TIERS.map((t) => (
                    <li key={t.thresh} className="flex justify-between py-1.5 border-b border-border/50 last:border-0">
                      <span className="text-muted-foreground">
                        {t.thresh.toLocaleString("en-US")}+ units
                      </span>
                      <span className="font-semibold text-foreground tabular-nums">{money(t.rate)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <Calculator className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground font-inter mb-3">
                Work out your monthly cost
              </h3>
              <p className="text-muted-foreground font-inter mb-6 max-w-xl mx-auto">
                Enter your portfolio size for an exact figure, including the discounts above.
              </p>
              <Button asChild size="lg" className="font-inter">
                <Link to="/pricing-calculator">
                  Open pricing calculator
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Fit — the qualifier */}
          <div className="mb-20 max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground font-inter mb-3">
                Is this the right product for you?
              </h2>
              <p className="text-muted-foreground font-inter max-w-2xl mx-auto">
                Channex is wholesale infrastructure sold to the people who build hotel software. That
                makes it a great fit for some teams and the wrong tool for others — worth knowing
                before you get in touch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
                <h3 className="font-semibold text-foreground font-inter mb-4 flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" /> A good fit if
                </h3>
                <ul className="space-y-3">
                  {goodFit.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground font-inter leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-muted/30 p-6">
                <h3 className="font-semibold text-foreground font-inter mb-4 flex items-center gap-2">
                  <X className="h-5 w-5 text-muted-foreground" /> Probably not, if
                </h3>
                <ul className="space-y-3">
                  {wrongFit.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <X className="mt-0.5 h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm text-muted-foreground font-inter leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* What's included — a list, not a one-column comparison table */}
          <div className="mb-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-10 font-inter">
              What's included
            </h2>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1">
              {featureRows.map((row) => (
                <li
                  key={row.feature}
                  className="flex items-center justify-between gap-4 border-b border-border/50 py-3"
                >
                  <span className="text-foreground font-inter text-sm">{row.feature}</span>
                  {row.whitelabel === "✓" ? (
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <span className="font-semibold text-foreground font-inter text-sm whitespace-nowrap">
                      {row.whitelabel}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <h3 className="text-xl font-bold text-foreground mb-2 font-inter">Channels included</h3>
              <p className="text-sm text-muted-foreground font-inter mb-5">
                Every channel is available on the plan — there's no tier that unlocks more of them.
              </p>
              <div className="flex flex-wrap gap-2">
                {channels
                  .filter((c) => !c.startsWith("Other Channels"))
                  .map((channel) => (
                    <span
                      key={channel}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1.5 text-sm text-foreground font-inter"
                    >
                      <Check className="h-3.5 w-3.5 text-primary" />
                      {channel}
                    </span>
                  ))}
                <Link
                  to="/integrations"
                  className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-sm text-primary font-inter hover:bg-primary/10"
                >
                  + all {OTA_CHANNEL_COUNT} channels
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12 font-inter">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={faq.question} className="border border-border rounded-xl overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-6 text-left bg-background hover:bg-muted/30 transition-colors"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold text-foreground font-inter pr-4">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
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

          {/* OTAs */}
          <div className="text-center mb-16 p-8 bg-muted/50 rounded-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-inter">Are you an OTA?</h2>
            <p className="text-muted-foreground font-inter">
              Get in touch if you'd like to connect Channex as a channel — that's a different
              conversation, and there's no fee for it.
            </p>
          </div>

          {/* Reassurance a technical partner actually cares about. */}
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <FlaskConical className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground font-inter">Test before you pay</h3>
              <p className="text-muted-foreground font-inter">
                A full sandbox to build and certify your integration against.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <RefreshCw className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground font-inter">No lock-in</h3>
              <p className="text-muted-foreground font-inter">
                Billed monthly, no long-term contract, no setup fee. Scale up or down as you go.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground font-inter">
                One API, every channel
              </h3>
              <p className="text-muted-foreground font-inter">
                No per-channel fees and no tier that withholds connections.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
