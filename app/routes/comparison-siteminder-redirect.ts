import { redirect } from "react-router";

// The Channex vs SiteMinder comparison page was removed on 2026-11-25. Keep
// the old URL alive for search results and inbound links by sending it to
// /features permanently. Don't bring the comparison back.
export function loader() {
  throw redirect("/features", 301);
}
