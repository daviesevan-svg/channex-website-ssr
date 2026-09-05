import { Link } from "react-router";
import type { Route } from "./+types/connect-first-property";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { pageMeta } from "@/lib/seo";
import { firstRequest, guideDescription, guideIntro, guideSections, guideTitle } from "@/data/first-property-guide";

export const meta: Route.MetaFunction = ({ location }) => [
  ...pageMeta({ title: "Connect Your First Booking.com or Airbnb Property | Channex", description: guideDescription }, location),
  { tagName: "link", rel: "alternate", type: "text/markdown", href: "/connect-first-property.md" },
];

export default function ConnectFirstProperty() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main className="pt-28 pb-20">
        <div className="container mx-auto max-w-6xl px-4 lg:px-6">
          <header className="max-w-3xl mb-10">
            <p className="text-primary font-semibold mb-4">From PMS to your first live connection</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">{guideTitle}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{guideIntro}</p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Button asChild size="lg"><a href="https://staging.channex.io/">Create a free staging account</a></Button>
              <Button asChild variant="outline" size="lg"><Link to="/start-integration">Open the technical walkthrough</Link></Button>
            </div>
            <a href="/connect-first-property.md" className="inline-block mt-4 text-sm text-primary underline underline-offset-4">Read as Markdown</a>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
            <nav aria-label="On this page" className="lg:sticky lg:top-28 rounded-xl border bg-card p-5">
              <h2 className="font-semibold mb-4">Your route to production</h2>
              <ol className="space-y-3 text-sm leading-relaxed">
                {guideSections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="text-muted-foreground hover:text-primary underline-offset-4 hover:underline">{section.title}</a></li>)}
              </ol>
            </nav>
            <div className="min-w-0">
              {guideSections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28 border-b pb-9 mb-9 last:mb-0">
                  <p className="text-sm font-medium text-primary mb-2">{section.owner}</p>
                  <h2 className="text-2xl font-semibold mb-5">{section.title}</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  {section.id === "sandbox" && <div className="mt-6 min-w-0"><h3 className="font-semibold mb-3">Your first authenticated request</h3><pre className="overflow-x-auto rounded-lg bg-slate-900 text-slate-100 p-5 text-sm leading-relaxed" tabIndex={0} aria-label="Staging API curl example"><code>{firstRequest}</code></pre><p className="mt-3 text-sm text-muted-foreground">This reads your accessible staging properties. An empty list is expected before you create any.</p></div>}
                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm">
                    {section.links.map((link) => <li key={link.href}><a href={link.href} className="text-primary underline underline-offset-4 hover:no-underline">{link.label}</a></li>)}
                  </ul>
                </section>
              ))}
              <aside className="rounded-xl border bg-primary/5 p-6 mt-9">
                <h2 className="text-xl font-semibold mb-3">Ready to build?</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">Start in staging, then work through the technical integration guide. For a scope or onboarding question, tell us your property type, target channels and the workflows your PMS supports.</p>
                <div className="flex flex-wrap gap-3"><Button asChild><Link to="/start-integration">Start Integration</Link></Button><Button asChild variant="outline"><Link to="/contact">Talk to the team</Link></Button></div>
              </aside>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
