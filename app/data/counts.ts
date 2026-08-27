// Headline counts used in marketing copy across the site.
//
// These are literals rather than derived from integrations.ts on purpose: the
// components that show them (Hero, Features, the stat rows) render on the
// client, and importing the integration dataset into them would ship ~225 kB
// of partner prose to the browser.
//
// integrations.server.ts checks these against the real data on every dev
// request and logs a warning if they drift, so adding integrations surfaces a
// reminder to bump them here.

/** Integrations tagged "OTA" — the booking channels with their own page. */
export const OTA_CHANNEL_COUNT = 61;

/** PMS/booking-engine/tech partners listed in the directory (non-OTA). */
export const PARTNER_COUNT = 363;

/** Integrations tagged "PMS" specifically — narrower than PARTNER_COUNT, which
 *  also covers booking engines, RMS and payment gateways. */
export const PMS_COUNT = 349;

/** Everything in the integrations dataset. */
export const INTEGRATION_COUNT = OTA_CHANNEL_COUNT + PARTNER_COUNT;

// ---------------------------------------------------------------------------
// Scale figures. Unlike the counts above these can't be derived from the repo —
// they come from production, so they're maintained by hand. Update them here and
// the homepage, About page and llms.txt all follow.
// Last updated: July 2026.

/** Hotel properties connected through partners. */
export const HOTEL_PROPERTY_COUNT = 15_000;

/** Vacation rental / short-term rental listings connected. */
export const VR_LISTING_COUNT = 65_000;

/** Live property-to-channel connections across the platform. */
export const CHANNEL_CONNECTION_COUNT = 100_000;

/** "15,000+" style label for the figures above. */
export const approx = (n: number) => `${n.toLocaleString("en-US")}+`;
