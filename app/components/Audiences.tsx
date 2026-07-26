import { Building2, Code2, Tent } from "lucide-react";
import { OTA_CHANNEL_COUNT } from "@/data/counts";

// Names the audiences explicitly, right under the hero. The rest of the site
// historically addressed commercial PMS vendors only ("For PMS Providers
// Only"), which read as a closed door to hotel groups building their own
// system — a segment that now comes inbound. Each of these is an audience
// Channex already states in llms.txt; none is invented here.

const audiences = [
  {
    icon: Code2,
    title: "PMS & booking engine vendors",
    body:
      "Add channel management to your product without building or maintaining OTA integrations. Resell it under your own brand.",
    fit: "Most common",
  },
  {
    icon: Building2,
    title: "Hotel groups building in-house",
    body:
      "Running your own PMS instead of buying one? Connect it straight to the channels through the same API, rather than bolting a third-party channel manager onto it.",
    fit: "Growing fast",
  },
  {
    icon: Tent,
    title: "Camping, glamping & vacation-rental platforms",
    body:
      "Outdoor hospitality, serviced apartments and short-term rental software — anywhere live rates and availability need to reach the channels.",
    fit: "Specialist",
  },
];

const Audiences = () => {
  return (
    <section className="py-20 bg-background border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-inter">
            Who Channex is for
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto leading-relaxed">
            If you build the software a property runs on, {OTA_CHANNEL_COUNT} booking channels sit
            behind one API. You keep the customer relationship — we never sell direct to hotels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {audiences.map(({ icon: Icon, title, body, fit }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Icon size={22} className="text-primary" />
                </div>
                <span className="rounded border border-primary/20 bg-primary/10 px-2 py-1 text-xs font-medium text-primary font-inter">
                  {fit}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground font-inter">{title}</h3>
              <p className="text-sm text-muted-foreground font-inter leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audiences;
