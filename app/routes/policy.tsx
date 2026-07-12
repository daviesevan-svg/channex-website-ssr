import { useEffect } from "react";
import { useLocation } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pageMeta } from "@/lib/seo";
import PolicyNavigation from "@/components/policy/PolicyNavigation";
import CustomerAgreement from "@/components/policy/CustomerAgreement";
import PrivacyPolicy from "@/components/policy/PrivacyPolicy";
import AcceptableUsePolicy from "@/components/policy/AcceptableUsePolicy";
import SecurityPolicy from "@/components/policy/SecurityPolicy";
import PolicyContact from "@/components/policy/PolicyContact";
import type { Route } from "./+types/policy";

export const meta: Route.MetaFunction = ({ location }) =>
  pageMeta(
    {
      title: "Terms & Policies | Channex",
      description: "Legal terms, privacy, security, and acceptable use policies.",
    },
    location,
  );

const Policy = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Small delay to ensure the page has loaded
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
                Terms & Policies
              </h1>
              <p className="text-muted-foreground font-inter">
                Updated on January 3, 2021
              </p>
            </div>

            {/* Navigation */}
            <PolicyNavigation />

            {/* Policy Sections */}
            <CustomerAgreement />
            <PrivacyPolicy />
            <AcceptableUsePolicy />
            <SecurityPolicy />
            <PolicyContact />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Policy;