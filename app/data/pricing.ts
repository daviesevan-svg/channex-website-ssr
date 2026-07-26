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
  description:
    "For teams that build hotel software — commercial PMS products, booking engines, and in-house systems.",
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

/** Who the product suits. Stated on the pricing page and in /pricing.md so
 *  unsuitable enquiries self-select out rather than becoming support load:
 *  Channex is a wholesale API needing engineering capacity, and the flat
 *  platform fee makes no sense for a single property. */
export const goodFit = [
  "You build the software a property runs on — a commercial PMS, booking engine, or your own in-house system",
  "You have developers who can integrate a REST API and pass certification (typically 2–4 weeks)",
  "You're connecting a portfolio, not a single property — the platform fee is flat, so cost per property falls as you grow",
];

export const wrongFit = [
  "You run one hotel and want to connect it to OTAs — buy a channel manager directly instead; it will cost less and work out of the box",
  "You don't have development resources — there's no no-code option, this is an API",
  "You want us to manage your listings for you — we're wholesale infrastructure, not a managed service",
];

export const faqs = [
  {
    question: "Is there a free trial or sandbox environment?",
    answer: "Yes. The staging server is free — sign up at staging.channex.io and start building straight away, no sales call and no card required. You get the full API to test against, map channels, and validate your integration before anything goes live or is billed."
  },
  {
    question: "Are there minimums, commissions or hidden fees?",
    answer: "No. There's no minimum number of properties, no certification fee, no commission on bookings, and no hidden charges. You pay the platform fee plus the per-property fee for properties with an active channel — that's the whole bill."
  },
  {
    question: "How and when am I billed?",
    answer: "Your first month is pro-rated from your start date. After that, on the 1st of each month we automatically charge the platform fee plus the per-property fees for that month in advance, and email you the invoice."
  },
  {
    question: "What counts as an \"active\" property?",
    answer: "A property counts as live once it has at least one active channel connection. Properties that are set up but have no active connection are not billed. Because each month is charged in advance on the 1st, adding or removing a property mid-cycle doesn't change that month's invoice — there's no pro rata or credit either way, and the change is reflected on the next one."
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
