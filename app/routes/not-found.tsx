import { Button } from "@/components/ui/button";
import { Link } from "react-router";

// The catch-all route: any unmatched path lands here and gets a real 404
// status (not a client-side redirect), so crawlers see it as not-indexable.
// The loader always throws; the default export below is reused by the root
// ErrorBoundary to render the same UI for any 404 in the app (including
// bad /integrations/:slug and /blog/:slug lookups).
export async function loader() {
  throw new Response(null, { status: 404, statusText: "Not Found" });
}

export default function NotFound() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-6 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-2">Page not found</h1>
        <p className="text-muted-foreground mb-6">Sorry, we couldn't find that page.</p>
        <Button asChild>
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    </main>
  );
}
