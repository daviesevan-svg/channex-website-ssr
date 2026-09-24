import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// A fixed locale and time zone, so the server and every browser print the same
// string. Without them the date followed the reader's locale ("9/12/2025" or
// "12/09/2025"), which didn't match the server-rendered HTML and broke
// hydration, and a date-only string parsed as UTC midnight showed as the
// previous day west of Greenwich.
const publishDateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** "2025-09-08" → "8 September 2025". Long month names, because ICU versions
 *  disagree on the short en-GB form ("Sep" vs "Sept"). */
export function formatPublishDate(isoDate: string) {
  return publishDateFormat.format(new Date(isoDate));
}
