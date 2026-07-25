import { integrations } from "@/data/integrations";
import type { Integration } from "@/types/integration";

// Which integrations get their own page, and the slim projections the pages
// render from.
//
// Only OTA/booking channels keep a detail page: those answer a question our
// buyer actually asks ("do you support Agoda, and how?"), and they carry real
// written content. The ~360 PMS/tech partners are listed on /integrations
// instead — as a set they were near-duplicate thin pages (dozens shared one
// identical description), which is a site-quality liability rather than an
// asset. Removed URLs 301 to the listing (see integrations.$slug.tsx) so any
// inbound links a partner made still land somewhere useful.

/** Categories that mean "this is a booking channel we connect to". */
const CHANNEL_CATEGORIES = new Set(["OTA"]);

export function hasDetailPage(int: Integration): boolean {
  return int.categories.some((c) => CHANNEL_CATEGORIES.has(c));
}

/** Canonical URL path segment for an integration. */
export function integrationSlug(int: Integration): string {
  return int.slug || int.id;
}

export const detailPageIntegrations = () => integrations.filter(hasDetailPage);

/** A card on the listing page: a channel, with description and its own page. */
export interface ChannelRow {
  id: string;
  name: string;
  slug: string;
  categories: string[];
  description: string;
  logo: string | null;
}

/** A tile on the listing page: a partner, name + categories only. */
export interface PartnerRow {
  id: string;
  name: string;
  categories: string[];
  logo: string | null;
}

export interface IntegrationsIndex {
  channels: ChannelRow[];
  partners: PartnerRow[];
  /** Category -> how many integrations carry it (for the filter chips). */
  categoryCounts: Record<string, number>;
  total: number;
}

/** Everything the listing page needs — deliberately without longDescription,
 *  features, useCases, setupSteps or the partner contact fields, so the full
 *  dataset never ships to the browser. */
export function integrationsIndex(): IntegrationsIndex {
  const byName = (a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name);

  const channels: ChannelRow[] = integrations
    .filter(hasDetailPage)
    .map((i) => ({
      id: i.id,
      name: i.name,
      slug: integrationSlug(i),
      categories: i.categories,
      description: i.description,
      logo: i.icon || null,
    }))
    .sort(byName);

  const partners: PartnerRow[] = integrations
    .filter((i) => !hasDetailPage(i))
    .map((i) => ({ id: i.id, name: i.name, categories: i.categories, logo: i.icon || null }))
    .sort(byName);

  const categoryCounts: Record<string, number> = {};
  for (const int of integrations) {
    for (const c of int.categories) categoryCounts[c] = (categoryCounts[c] ?? 0) + 1;
  }

  return { channels, partners, categoryCounts, total: integrations.length };
}

/** Related channels for a detail page — only ones that still have a page. */
export function relatedChannels(current: Integration, limit = 3): ChannelRow[] {
  return integrations
    .filter(
      (i) =>
        i.id !== current.id &&
        hasDetailPage(i) &&
        i.categories.some((c) => current.categories.includes(c)),
    )
    .slice(0, limit)
    .map((i) => ({
      id: i.id,
      name: i.name,
      slug: integrationSlug(i),
      categories: i.categories,
      description: i.description,
      logo: i.icon || null,
    }));
}
