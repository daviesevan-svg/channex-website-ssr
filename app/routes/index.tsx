import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { pageMeta } from "@/lib/seo";
import type { Route } from "./+types/index";

export const meta: Route.MetaFunction = ({ location }) =>
  pageMeta(
    {
      title: "Channel Manager API for PMS | Channex",
      description: "Connect your PMS to 50+ OTAs via Channex's white-label channel manager API.",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Channex Channel Manager API",
        description:
          "White-label channel manager API for Property Management Systems to connect with online travel agencies",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web-based",
        offers: { "@type": "Offer", priceCurrency: "USD", price: "Contact for pricing" },
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
  );

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
