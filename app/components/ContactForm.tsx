import { useEffect, useRef, useState } from "react";
import { useFetcher, useRouteLoaderData } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

// Posts to the /contact action (see routes/contact.tsx), so the same form works
// on the homepage and the contact page. Validation lives on the server —
// browser `required`/`type=email` catch the obvious cases first, but the server
// is authoritative, and its messages render below the relevant field.

const SALES_EMAIL = "hello@channex.io";

// --- Turnstile ---------------------------------------------------------------
// Loaded on first interaction with the form rather than on page load. This form
// sits on the homepage, so loading Cloudflare's script eagerly would put a
// third-party request on the critical path of the site's most important page
// for the vast majority of visitors who never type anything. Arming on focus
// also means the token is being fetched while the visitor fills the fields in,
// so it has normally arrived well before they press Send.

const TURNSTILE_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

interface TurnstileApi {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  remove: (id: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

/** Injects the script at most once per page, whichever form arms first. */
let scriptPromise: Promise<void> | null = null;
function loadTurnstile(): Promise<void> {
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise<void>((resolve, reject) => {
    if (window.turnstile) return resolve();
    const script = document.createElement("script");
    script.src = TURNSTILE_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("turnstile script failed to load"));
    document.head.appendChild(script);
  });
  return scriptPromise;
}

interface ActionData {
  ok: boolean;
  errors?: Record<string, string>;
  values?: Record<string, string>;
  failed?: boolean;
}

const fieldClass = "border-border/50 focus:border-primary/50 font-inter";
const labelClass = "text-sm font-medium text-foreground font-inter";

interface Props {
  /** Result of a document POST (no JS), passed in by the /contact route. */
  result?: ActionData;
}

const ContactForm = ({ result }: Props) => {
  const fetcher = useFetcher<ActionData>();
  // fetcher.data covers the JS path; `result` the no-JS one.
  const data = fetcher.data ?? result;
  const busy = fetcher.state !== "idle";
  const errors = data?.errors ?? {};
  const prev = data?.values ?? {};

  // Public Turnstile key, supplied by the root loader. Null when Turnstile
  // isn't configured, in which case no widget renders and nothing is loaded.
  const rootData = useRouteLoaderData("root") as { turnstileSiteKey?: string | null } | undefined;
  const siteKey = rootData?.turnstileSiteKey ?? null;

  const [armed, setArmed] = useState(false);
  const [token, setToken] = useState("");
  const widgetRef = useRef<HTMLDivElement>(null);

  // Arms on the first focus or input anywhere in the form.
  const arm = () => {
    if (siteKey) setArmed(true);
  };

  useEffect(() => {
    if (!armed || !siteKey || !widgetRef.current) return;
    let widgetId: string | undefined;
    let cancelled = false;

    loadTurnstile()
      .then(() => {
        if (cancelled || !widgetRef.current || !window.turnstile) return;
        widgetId = window.turnstile.render(widgetRef.current, {
          sitekey: siteKey,
          // Stay out of the way unless a challenge is actually needed.
          appearance: "interaction-only",
          // We render the hidden field ourselves so there is exactly one
          // cf-turnstile-response in the form and its value is predictable.
          "response-field": false,
          callback: (value: string) => setToken(value),
          "expired-callback": () => setToken(""),
          "error-callback": () => setToken(""),
        });
      })
      .catch(() => {
        // Script blocked or offline. Submitting is still allowed: the server
        // stores the enquiry and flags it rather than losing it.
        console.warn("contact form: Turnstile unavailable, submitting without a token");
      });

    return () => {
      cancelled = true;
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
    };
  }, [armed, siteKey]);

  if (data?.ok) {
    return (
      <Card className="border-border/50 shadow-elegant">
        <CardContent className="p-8 space-y-4 text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-primary" />
          <h3 className="text-2xl font-semibold text-foreground font-inter">Thanks — message sent</h3>
          <p className="text-muted-foreground font-inter">
            We've got your enquiry and will reply within one business day. If it's urgent, email us
            directly at{" "}
            <a className="text-primary underline" href={`mailto:${SALES_EMAIL}`}>
              {SALES_EMAIL}
            </a>
            .
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border/50 shadow-elegant">
      <CardContent className="p-8 space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-foreground font-inter">Start Your Integration</h3>
          <p className="text-muted-foreground font-inter">
            Get in touch with our team to begin your channel manager integration.
          </p>
        </div>

        {data?.failed && (
          <div className="flex gap-3 rounded-lg border border-destructive/40 bg-destructive/5 p-4">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-none text-destructive" />
            <p className="text-sm text-foreground font-inter">
              Sorry — we couldn't send that just now. Please email us directly at{" "}
              <a className="text-primary underline" href={`mailto:${SALES_EMAIL}`}>
                {SALES_EMAIL}
              </a>{" "}
              so your message isn't lost.
            </p>
          </div>
        )}

        <fetcher.Form
          method="post"
          action="/contact"
          className="space-y-4"
          // Capture phase, so focusing or typing in any field arms Turnstile.
          onFocusCapture={arm}
          onInputCapture={arm}
        >
          {/* Honeypot: hidden from people and assistive tech; bots fill it. */}
          <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
            <label htmlFor="botField">Leave this field empty</label>
            <input id="botField" name="botField" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          {siteKey && <input type="hidden" name="cf-turnstile-response" value={token} />}

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className={labelClass} htmlFor="firstName">First Name *</label>
              <Input
                id="firstName"
                name="firstName"
                required
                maxLength={80}
                defaultValue={prev.firstName}
                placeholder="John"
                className={fieldClass}
                disabled={busy}
                aria-invalid={errors.firstName ? true : undefined}
              />
              {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
            </div>
            <div className="space-y-2">
              <label className={labelClass} htmlFor="lastName">Last Name *</label>
              <Input
                id="lastName"
                name="lastName"
                required
                maxLength={80}
                defaultValue={prev.lastName}
                placeholder="Doe"
                className={fieldClass}
                disabled={busy}
                aria-invalid={errors.lastName ? true : undefined}
              />
              {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label className={labelClass} htmlFor="email">Company Email *</label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              maxLength={200}
              defaultValue={prev.email}
              placeholder="john@company.com"
              className={fieldClass}
              disabled={busy}
              aria-invalid={errors.email ? true : undefined}
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label className={labelClass} htmlFor="company">Company Name *</label>
            <Input
              id="company"
              name="company"
              required
              maxLength={160}
              defaultValue={prev.company}
              placeholder="Your PMS Company"
              className={fieldClass}
              disabled={busy}
              aria-invalid={errors.company ? true : undefined}
            />
            {errors.company && <p className="text-sm text-destructive">{errors.company}</p>}
          </div>

          <div className="space-y-2">
            <label className={labelClass} htmlFor="message">Message *</label>
            <Textarea
              id="message"
              name="message"
              required
              minLength={10}
              maxLength={5000}
              rows={4}
              defaultValue={prev.message}
              placeholder="Tell us about your integration needs..."
              className={`${fieldClass} resize-none`}
              disabled={busy}
              aria-invalid={errors.message ? true : undefined}
            />
            {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
          </div>

          {/* Turnstile renders here when armed. With appearance
              "interaction-only" it stays empty unless a visitor actually has to
              solve something, so it adds no visual weight in the normal case. */}
          {siteKey && <div ref={widgetRef} className="empty:hidden" />}

          <Button
            type="submit"
            className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300 font-inter"
            size="lg"
            disabled={busy}
          >
            {busy ? "Sending..." : "Send Message"}
            <ArrowRight size={16} className="ml-2" />
          </Button>

          <p className="text-center text-xs text-muted-foreground font-inter">
            Or email us directly at{" "}
            <a className="underline hover:text-foreground" href={`mailto:${SALES_EMAIL}`}>
              {SALES_EMAIL}
            </a>
          </p>
        </fetcher.Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
