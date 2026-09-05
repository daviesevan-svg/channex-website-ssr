import { Link } from "react-router";
import { CONTENT_ROADMAP, limitations } from "@/data/integration-copy";

export default function IntegrationLimits() {
  return <section id="limitations" className="scroll-mt-28 rounded-xl border bg-card p-6 md:p-8 my-10">
    <h2 className="text-2xl font-semibold mb-6">What Channex doesn’t support yet</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {limitations.map((item) => <div key={item.title}><h3 className="font-semibold mb-2">{item.title}</h3><p className="text-muted-foreground leading-relaxed">{item.description}</p></div>)}
    </div>
    <p className="mt-6 border-t pt-5 text-muted-foreground leading-relaxed">{CONTENT_ROADMAP}</p>
    <Link to="/connect-first-property#limitations" className="inline-block mt-4 text-primary underline underline-offset-4">Plan your first connection</Link>
  </section>;
}
