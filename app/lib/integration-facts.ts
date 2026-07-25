import type { Integration } from "@/types/integration";

// The integration `categories` array mixes three unrelated things: where a
// channel sells (Global, Europe, Asia…), what it sells (Vacation Rentals,
// Outdoor…), what kind of channel it is (OTA, B2B, Distribution…), plus a few
// tags that say nothing useful ("Regional", "Corporate").
//
// These helpers split that one bag of strings into the three facts an OTA page
// should state plainly — region, property type, channel type — so every channel
// page has the same shape and adding a channel means adding tags, not prose.

/** Where the channel sells. Order controls display order. */
const REGIONS = [
  "Global",
  "Europe",
  "Germany",
  "Asia",
  "Asia Pacific",
  "Australia",
  "North America",
  "Americas",
  "Latin America",
  "Middle East",
  "Middle East & Africa",
  "Africa",
] as const;

/** What kind of property the channel is for. */
const PROPERTY_TYPES: Record<string, string> = {
  Hotels: "Hotels",
  "Vacation Rentals": "Vacation rentals",
  "Vacation Rental": "Vacation rentals",
  Outdoor: "Camping & outdoor",
  Budget: "Hostels & budget",
  Luxury: "Luxury & boutique",
  Activities: "Activities & experiences",
};

/** What kind of channel it is. */
const CHANNEL_TYPES: Record<string, string> = {
  OTA: "OTA",
  B2B: "B2B / wholesale",
  Distribution: "Distribution / GDS",
  IBE: "Booking engine",
  "Payment Gateway": "Payment gateway",
  RMS: "Revenue management",
  PMS: "PMS",
};

/** Tags that carry no information for a reader — never shown. */
const NOISE = new Set(["Regional", "Corporate", "API"]);

const dedupe = (xs: string[]) => [...new Set(xs)];

export function regionsOf(int: Integration): string[] {
  const found = REGIONS.filter((r) => int.categories.includes(r)).flatMap((r) =>
    // Split the one combined tag so it reads consistently with the others.
    r === "Middle East & Africa" ? ["Middle East", "Africa"] : [r],
  );
  return dedupe(found);
}

export function propertyTypesOf(int: Integration): string[] {
  return dedupe(int.categories.map((c) => PROPERTY_TYPES[c]).filter(Boolean) as string[]);
}

export function channelTypesOf(int: Integration): string[] {
  return dedupe(int.categories.map((c) => CHANNEL_TYPES[c]).filter(Boolean) as string[]);
}

/** Tags worth rendering as chips — everything meaningful, noise removed. */
export function displayCategories(int: Integration): string[] {
  return int.categories.filter((c) => !NOISE.has(c));
}

export interface IntegrationFacts {
  channelTypes: string[];
  regions: string[];
  propertyTypes: string[];
  website: string | null;
}

export function factsOf(int: Integration): IntegrationFacts {
  const propertyTypes = propertyTypesOf(int);
  return {
    channelTypes: channelTypesOf(int),
    regions: regionsOf(int),
    // Booking channels sell hotel/accommodation inventory unless tagged
    // otherwise — the handful that are camping- or activity-led carry an
    // explicit Outdoor/Activities tag, so this default can't mislabel them.
    propertyTypes: propertyTypes.length > 0 ? propertyTypes : ["Hotels"],
    website: int.website || null,
  };
}
