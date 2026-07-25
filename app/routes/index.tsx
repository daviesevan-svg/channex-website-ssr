import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { pageMeta } from "@/lib/seo";
import { PLATFORM_FEE, HOTEL_BASE_RATE, VR_BASE_RATE } from "@/data/pricing";
import { OTA_CHANNEL_COUNT } from "@/data/counts";
import type { Route } from "./+types/index";

export const meta: Route.MetaFunction = ({ location }) => [
  ...pageMeta(
    {
      title: "Channel Manager API for PMS | Channex",
      description: `Connect your PMS to ${OTA_CHANNEL_COUNT}+ OTAs via Channex's white-label channel manager API. WhiteLabel plan from $${PLATFORM_FEE}/month plus per-property fees.`,
      structuredData: {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Channex Channel Manager API",
        description:
          "White-label channel manager API for Property Management Systems to connect with online travel agencies",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web-based",
        offers: {
          "@type": "Offer",
          name: "WhiteLabel plan",
          price: String(PLATFORM_FEE),
          priceCurrency: "USD",
          description: `$${PLATFORM_FEE}/month platform fee plus $${HOTEL_BASE_RATE.toFixed(2)} per hotel or $${VR_BASE_RATE.toFixed(2)} per vacation rental unit connected. Volume discounts at scale. Full details: https://channex.io/pricing`,
          url: "https://channex.io/pricing",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: String(PLATFORM_FEE),
            priceCurrency: "USD",
            unitText: "month",
          },
        },
        creator: { "@type": "Organization", name: "Channex", url: "https://channex.io" },
        featureList: [
          "Channel Manager API",
          "PMS Integration",
          "OTA Connectivity",
          "Real-time Synchronization",
          "White Label Solution",
        ],
      },
    },
    location,
  ),
  // Point agents fetching only the homepage at the machine-readable summary.
  { tagName: "link", rel: "alternate", type: "text/plain", href: "/llms.txt" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <Hero />
      <Partners />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
