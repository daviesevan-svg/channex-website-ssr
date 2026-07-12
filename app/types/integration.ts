export type Integration = {
  id: string;
  name: string;
  description: string;
  icon: string;
  categories: string[];
  slug?: string;
  longDescription?: string;
  features?: string[];
  useCases?: string[];
  apiCapabilities?: string[];
  setupSteps?: string[];
  website?: string;
  documentation?: string;
  screenshots?: string[];
  videoUrl?: string;
  supportedLanguages?: string[];
  supportEmail?: string;
  setupGuideUrl?: string;
  privacyPolicyUrl?: string;
  pricing?: {
    model: string;
    details: string;
    features: string[];
  };
  integrationFeatures?: {
    dataSync: string[];
    realTime: boolean;
    webhooks: boolean;
    bulkOperations: boolean;
    customFields: boolean;
  };
};

export const categories = [
  "OTA",
  "Distribution",
  "Global",
  "B2B",
  "Vacation Rentals",
  "Outdoor",
  "Asia",
  "Europe",
  "Australia",
  "Latin America",
  "RMS",
  "IBE",
  "PMS",
  "Payment Gateway"
];