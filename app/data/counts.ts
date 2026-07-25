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
export const OTA_CHANNEL_COUNT = 60;

/** PMS/booking-engine/tech partners listed in the directory (non-OTA). */
export const PARTNER_COUNT = 358;

/** Integrations tagged "PMS" specifically — narrower than PARTNER_COUNT, which
 *  also covers booking engines, RMS and payment gateways. */
export const PMS_COUNT = 343;

/** Everything in the integrations dataset. */
export const INTEGRATION_COUNT = OTA_CHANNEL_COUNT + PARTNER_COUNT;
