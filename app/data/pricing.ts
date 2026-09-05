import { AI_BUILD_DESCRIPTION } from "@/data/integration-copy";
// Single source of truth for pricing facts. Rendered by the /pricing page,
// the /pricing-calculator, the /pricing.md markdown mirror, and /llms.txt —
// change numbers here and every surface stays in sync.
import { OTA_CHANNEL_COUNT, PARTNER_COUNT } from "@/data/counts";

export const PLATFORM_FEE = 130;

/** Flat fee charged when a customer wants us off our standard contract — their
 *  own paper, negotiated terms, or a security questionnaire to complete. */
export const CUSTOM_TERMS_REVIEW_FEE = 1500;
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

/** Fees charged on top of the platform fee and the per-property rate. All of
 *  these come from Appendix 1 of the standard Service Agreement — they were
 *  contract-only until now, which left the pricing page claiming the platform
 *  fee plus per-property fee was "the whole bill". Publishing them here is what
 *  makes the "no hidden fees" line true rather than a liability.
 *
 *  NOTE on DUPLICATE_CHANNEL_FEE: Appendix 1 lists it as a bare "$1" with no
 *  period, unlike the two rows either side of it in the same table, which both
 *  say "/ month". Evan confirmed it is monthly. Worth fixing in the contract
 *  too, so the paper and this page cannot drift apart. */
export const STRIPE_TOKENISATION_FEE = 0.02;
export const DUPLICATE_CHANNEL_FEE = 1;

/** What each property gets before overage kicks in. */
export const INCLUDED_LIMITS = [
  { type: "Hotel", limits: "20 room types, 200 rate plans per property" },
  { type: "Vacation rental", limits: "50 room types, 10 rate plans per room type" },
];

/** Charged only on the part of a property that exceeds the limits above. */
export const OVERAGE_FEES = [
  { item: "Hotel — each room type over 20", fee: "$1", note: "capped at $7 per property" },
  { item: "Hotel — each rate plan over 200", fee: "$0.10", note: "" },
  { item: "Vacation rental — each rate plan over 10 per room type", fee: "$0.10", note: "" },
];

/** Usage-based fees that are not tied to property size. */
export const USAGE_FEES = [
  {
    item: "Duplicate channel connection",
    fee: `$${DUPLICATE_CHANNEL_FEE} / month`,
    note: "When one property connects to the same OTA more than once — five Booking.com connections on one hotel, for example. The first connection to each channel is included.",
  },
  {
    item: "Stripe tokenisation",
    fee: `$${STRIPE_TOKENISATION_FEE.toFixed(2)} / transaction`,
    note: "Optional. Only applies if you have us send card details to Stripe directly from Channex.",
  },
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
  AI_BUILD_DESCRIPTION,
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
    answer: `No minimums and no commission — there's no minimum number of properties, no certification fee, no commission on bookings and no setup cost. Nor is anything hidden: every charge we can raise is published on this page. Most accounts pay the platform fee plus the per-property fee and nothing else, but four things can be added on top. Three are usage-based: $${DUPLICATE_CHANNEL_FEE} a month for each duplicate connection where one property connects to the same OTA twice or more, $${STRIPE_TOKENISATION_FEE.toFixed(2)} per transaction if you use Stripe tokenisation, and overage on properties larger than the included limits of 20 room types and 200 rate plans per hotel. The fourth is optional and entirely in your hands: a $${CUSTOM_TERMS_REVIEW_FEE.toLocaleString("en-US")} review fee if you ask us to leave our standard contract for custom terms or a security review.`
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
    answer: "There's no fixed term or minimum contract — Channex is billed monthly and you can cancel any time, with 30 days' notice. Scaling the number of connected properties up or down needs no notice at all."
  },
  {
    question: "Can we contract on our own terms?",
    answer: `We contract on our standard terms. If you need us to work from your paper instead, negotiate custom terms, or complete a security review or vendor questionnaire, there's a $${CUSTOM_TERMS_REVIEW_FEE.toLocaleString("en-US")} review fee. Our standard agreement is published in full — read it before you sign up, and most partners find they don't need changes.`
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
