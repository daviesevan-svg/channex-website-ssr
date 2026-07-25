// Single source of truth for pricing facts. Rendered by the /pricing page,
// the /pricing-calculator, the /pricing.md markdown mirror, and /llms.txt —
// change numbers here and every surface stays in sync.
import { OTA_CHANNEL_COUNT, PARTNER_COUNT } from "@/data/counts";

export const PLATFORM_FEE = 130;
export const HOTEL_BASE_RATE = 7;
export const VR_BASE_RATE = 0.5;

export interface VolumeTier {
  thresh: number;
  rate: number;
}

export const HOTEL_TIERS: VolumeTier[] = [
  { thresh: 500, rate: 6 },
  { thresh: 1000, rate: 5 },
  { thresh: 2000, rate: 4 },
];

export const VR_TIERS: VolumeTier[] = [
  { thresh: 2000, rate: 0.45 },
  { thresh: 4000, rate: 0.4 },
  { thresh: 7000, rate: 0.3 },
];

export function tierRate(count: number, baseRate: number, tiers: VolumeTier[]): number {
  let rate = baseRate;
  for (const tier of tiers) {
    if (count >= tier.thresh) rate = tier.rate;
  }
  return rate;
}

export const plan = {
  name: "WhiteLabel",
  price: "$130",
  period: "per Month",
  description: "For tech providers like PMS and Booking Engines. Very Competitive Prices per property.",
  features: [
    "Competitive per-property pricing",
    "API Access",
    "White-label solution",
    "Mapping API",
    "Tech Support",
  ],
};

export const featureRows = [
  { feature: "Hotels Fee (Per Property)", whitelabel: "$7" },
  { feature: "Vacation Rental Fee (Per unit)", whitelabel: "$0.50" },
  { feature: "Dashboard", whitelabel: "✓" },
  { feature: "PMS Integration", whitelabel: "✓" },
  { feature: "API Access", whitelabel: "✓" },
  { feature: "Channel Reports", whitelabel: "✓" },
  { feature: "Support via Chat & Email", whitelabel: "✓" },
  { feature: "Unlimited Users", whitelabel: "✓" },
  { feature: "Onboarding & Training", whitelabel: "✓" },
  { feature: "Messaging & Reviews App (Hotels)", whitelabel: "$7 / property" },
  { feature: "Messaging & Reviews App (VR)", whitelabel: "$0.50 / unit" },
  { feature: "Channel and Mapping API", whitelabel: "✓" },
];

export const channels = [
  "Booking.com",
  "Expedia",
  "Google Hotel Search (Hotels & Vacation Rentals)",
  "Airbnb",
  "Hostelworld",
  "Agoda",
  "Hotelbeds",
  "Ctrip",
  "Other Channels (See integration page for full list)",
];

export const faqs = [
  {
    question: "Is there a free trial or sandbox environment?",
    answer: "Yes — Channex provides a full sandbox environment so you can test the API, map channels, and validate your integration before going live. Contact our team to get sandbox credentials set up."
  },
  {
    question: "What counts as an \"active\" property?",
    answer: "A property is considered active in any month where it has at least one live channel connection. Properties that are set up but have no active channel connections are not billed."
  },
  {
    question: "What does the $130/month platform fee cover?",
    answer: "The platform fee covers your API access, the Channex dashboard, the Mapping API, unlimited user seats, standard tech support, and onboarding assistance. Per-property charges are billed on top of this fee based on the number of active connected properties."
  },
  {
    question: "Are there volume discounts for large deployments?",
    answer: "Yes. Hotel rates reduce from $7.00 to as low as $4.00 per property at scale, and vacation rental unit rates reduce from $0.50 to as low as $0.30 per unit. Use the pricing calculator to see the exact rate that applies to your portfolio size."
  },
  {
    question: "What contract length is required?",
    answer: "Channex is billed monthly with no long-term contract required. You can scale up, scale down, or cancel at any time."
  },
  {
    question: "Is there a setup or onboarding fee?",
    answer: "No. There are no setup fees. Onboarding and technical support are included in the platform fee."
  },
  {
    question: "Can I white-label the Channex interface for my customers?",
    answer: "Yes — the WhiteLabel plan is specifically designed for PMS providers and booking engines who want to offer channel management under their own brand. The interface, API responses, and documentation can all be white-labelled."
  },
  {
    question: "Which channels are supported?",
    answer: `Channex connects to ${OTA_CHANNEL_COUNT} booking channels including Booking.com, Expedia, Airbnb, Google Hotel Search, Agoda, Hotelbeds, Hostelworld, and Trip.com, plus ${PARTNER_COUNT} PMS and technology partners. See the full list on the integrations page.`
  }
];
