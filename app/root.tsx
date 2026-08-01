import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Intercom from "@/components/Intercom";
import NotFound from "./routes/not-found";
import { turnstileSiteKey } from "@/lib/turnstile.server";
import type { Route } from "./+types/root";
import "./app.css";

// The only reason the root has a loader: the contact form renders on both the
// homepage and /contact, and needs the public Turnstile key. Reading it here
// means neither key has to be hardcoded or added to wrangler.jsonc `vars`
// (which would re-apply on deploy and overwrite dashboard values). It is a
// short public string and is safe in edge-cached HTML.
export function loader() {
  return { turnstileSiteKey: turnstileSiteKey() };
}

// No meta() here on purpose: React Router replaces ancestor meta with the
// leaf route's, so anything defined at the root never renders on routes that
// export their own meta (all of ours do). Site-wide tags live in pageMeta()
// (app/lib/seo.ts); the SoftwareApplication JSON-LD lives on the homepage.

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/lovable-uploads/147ee0ab-fa42-422d-9c56-59244be54b17.png", type: "image/png" },
  // Inter is declared in app.css and served from our own origin (see the
  // @font-face comment there). Preloading the latin subset starts it in
  // parallel with the stylesheet rather than after the browser has parsed the
  // CSS and matched the unicode-range — that discovery delay is the usual cause
  // of a visible swap from the fallback face. latin-ext is deliberately not
  // preloaded: most pages never need it.
  { rel: "preload", href: "/fonts/inter-latin.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// The site has no client-side data fetching, no toasts and no tooltips: it's
// server-rendered pages with loaders. This used to wrap everything in
// QueryClientProvider + TooltipProvider + two toast portals (Lovable
// scaffolding), which pulled react-query, sonner, next-themes and two Radix
// packages into the chunk loaded on every page for nothing.
export default function App() {
  return (
    <>
      <Intercom />
      <Outlet />
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <NotFound />
        <Footer />
      </div>
    );
  }

  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = `${error.status} ${error.statusText}`;
    details = error.data || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
