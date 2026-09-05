import { SUPPORT_HOURS, SUPPORT_NOTE } from "@/data/integration-copy";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pageMeta } from "@/lib/seo";
import ContactForm from "@/components/ContactForm";
import { contactSchema, submitEnquiry } from "@/lib/contact.server";
import { verifyTurnstile } from "@/lib/turnstile.server";
import type { Route } from "./+types/contact";

// The form on every page posts here. Always returns a plain result object:
// React Router hands it to the component as `actionData` for a document POST
// (no JS — the browser lands on /contact showing the outcome) and as
// `fetcher.data` for a JS submission, so one code path covers both.
export async function action({ request }: Route.ActionArgs) {
  const form = await request.formData();

  const parsed = contactSchema.safeParse({
    firstName: form.get("firstName") ?? "",
    lastName: form.get("lastName") ?? "",
    email: form.get("email") ?? "",
    company: form.get("company") ?? "",
    message: form.get("message") ?? "",
    botField: form.get("botField") ?? "",
  });

  if (!parsed.success) {
    // A filled honeypot is a bot: report success so it doesn't retry, drop it.
    if (String(form.get("botField") ?? "") !== "") {
      return { ok: true as const };
    }
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "");
      if (key && !errors[key]) errors[key] = issue.message;
    }
    const values = Object.fromEntries(
      ["firstName", "lastName", "email", "company", "message"].map((k) => [k, String(form.get(k) ?? "")]),
    );
    return { ok: false as const, errors, values };
  }

  const ip = request.headers.get("cf-connecting-ip");
  const turnstile = await verifyTurnstile(String(form.get("cf-turnstile-response") ?? ""), ip);

  const result = await submitEnquiry(parsed.data, {
    source: request.headers.get("referer") ?? "/contact",
    country: request.headers.get("cf-ipcountry"),
    userAgent: request.headers.get("user-agent"),
    origin: request.headers.get("origin"),
    host: new URL(request.url).host,
    ip,
    turnstile,
  });

  // Spam is quarantined, not rejected — report success so a bot has no signal
  // to adapt to, exactly as the honeypot branch above does.
  if (result.spam) return { ok: true as const };

  // Stored OR emailed is enough to promise a reply. Neither means we lost it,
  // so say so rather than showing a success message that isn't true.
  const delivered = result.stored || result.emailed;
  return delivered ? { ok: true as const } : { ok: false as const, failed: true as const };
}

export const meta: Route.MetaFunction = ({ location }) =>
  pageMeta(
    {
      title: "Contact Sales | Channel Manager API for PMS",
      description: "Talk to Channex about our white-label channel manager API for PMS providers.",
    },
    location,
  );

const Contact = ({ actionData }: Route.ComponentProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
              Ready to
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Get Started?</span>
            </h1>
            
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              Join hundreds of PMS providers and in-house teams already using Channex to connect their properties worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* `result` carries the outcome of a no-JS document POST; with JS
                the form reads its own fetcher instead. */}
            <ContactForm result={actionData} />

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground font-inter">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Our technical team is ready to help you integrate Channex with your PMS. 
                  We provide comprehensive support throughout the integration process.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground font-inter">Email Us</h3>
                    <p className="text-muted-foreground font-inter">hello@channex.io</p>
                    <p className="text-sm text-muted-foreground font-inter">{SUPPORT_HOURS}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MessageSquare size={20} className="text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground font-inter">Live Chat</h3>
                    <p className="text-muted-foreground font-inter">{SUPPORT_HOURS}</p>
                    <p className="text-sm text-muted-foreground font-inter">{SUPPORT_NOTE}</p>
                  </div>
                </div>

              </div>

              <div className="bg-gradient-subtle border border-border/50 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold text-foreground font-inter">
                  Self-Service Integration
                </h3>
                <p className="text-sm text-muted-foreground font-inter">
                  Ready to start immediately? Access our staging environment and begin testing your integration today.
                </p>
                <Button variant="outline" className="border-primary/20 hover:bg-primary/5 font-inter" asChild>
                  <a href="https://staging.channex.io/" target="_blank" rel="noopener noreferrer">Access Staging Environment</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;