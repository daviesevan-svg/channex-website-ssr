import { useState } from "react";
import { Link } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Building2, Home, MessageSquare, Calculator, TrendingDown } from "lucide-react";
import {
  PLATFORM_FEE,
  HOTEL_BASE_RATE,
  VR_BASE_RATE,
  HOTEL_TIERS,
  VR_TIERS,
  tierRate,
} from "@/data/pricing";
import type { Route } from "./+types/pricing-calculator";

export const meta: Route.MetaFunction = ({ location }) =>
  pageMeta(
    {
      title: "Pricing Calculator | Channex Channel Manager API",
      description:
        "Estimate your Channex channel manager API cost from your hotel and vacation rental portfolio, including volume discounts.",
    },
    location,
  );

const hotelRate = (n: number) => tierRate(n, HOTEL_BASE_RATE, HOTEL_TIERS);
const vrRate = (n: number) => tierRate(n, VR_BASE_RATE, VR_TIERS);

const fmt = (n: number) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const fmtShort = (n: number) =>
  n >= 1000 ? "$" + (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + "k" : fmt(n);

/** Volume-tier chip state: already earned, the one you're heading for, or later. */
function tierState(index: number, value: number, tiers: typeof HOTEL_TIERS) {
  if (value >= tiers[index].thresh) return "reached";
  const prev = index === 0 ? 0 : tiers[index - 1].thresh;
  if (value >= prev) return "next";
  return "future";
}

const CHIP: Record<string, string> = {
  reached: "bg-primary/10 text-primary border-primary/20",
  next: "bg-amber-100 text-amber-700 border-amber-200",
  future: "bg-muted text-muted-foreground border-border",
};

interface CountFieldProps {
  id: string;
  label: string;
  hint: string;
  icon: typeof Building2;
  value: string;
  onChange: (v: string) => void;
  rate: number;
  baseRate: number;
  rateUnit: string;
  count: number;
  tiers: typeof HOTEL_TIERS;
}

function CountField({
  id,
  label,
  hint,
  icon: Icon,
  value,
  onChange,
  rate,
  baseRate,
  rateUnit,
  count,
  tiers,
}: CountFieldProps) {
  return (
    <Card className="border-border/50">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between gap-3">
          <label htmlFor={id} className="flex items-center gap-2 font-semibold text-foreground font-inter">
            <span className="rounded-lg bg-primary/10 p-2">
              <Icon size={18} className="text-primary" />
            </span>
            {label}
          </label>
          <span className="text-xs text-muted-foreground font-inter">{hint}</span>
        </div>

        <div className="flex items-center gap-3">
          <Input
            id={id}
            type="number"
            min="0"
            inputMode="numeric"
            value={value}
            placeholder="0"
            onChange={(e) => onChange(e.target.value)}
            className="min-w-0 flex-1 border-border/50 focus:border-primary/50 font-inter [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <span
            className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-sm font-medium font-inter ${
              rate < baseRate ? CHIP.reached : "bg-muted text-muted-foreground border-border"
            }`}
          >
            {fmt(rate)} {rateUnit}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {tiers.map((tier, i) => (
            <span
              key={tier.thresh}
              className={`rounded-full border px-2.5 py-1 text-xs font-inter ${CHIP[tierState(i, count, tiers)]}`}
            >
              {tier.thresh.toLocaleString("en-US")}+ → {fmt(tier.rate)}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function PricingCalculator() {
  const [hotels, setHotels] = useState("");
  const [vrs, setVrs] = useState("");
  const [addon, setAddon] = useState(false);

  const h = Math.max(0, parseInt(hotels) || 0);
  const v = Math.max(0, parseInt(vrs) || 0);

  const hr = hotelRate(h);
  const vr = vrRate(v);

  const hotelCost = h * hr;
  const vrCost = v * vr;
  // Chat & Reviews is quoted at the standard per-property rate — the volume
  // tiers published on /pricing apply to the channel manager.
  const addonCost = addon ? h * HOTEL_BASE_RATE + v * VR_BASE_RATE : 0;

  const total = PLATFORM_FEE + hotelCost + vrCost + addonCost;
  const annual = total * 12;
  const props = h + v;
  const perProp = props > 0 ? total / props : null;

  const savings = h * (HOTEL_BASE_RATE - hr) + v * (VR_BASE_RATE - vr);
  const savingsParts = [
    h > 0 && hr < HOTEL_BASE_RATE ? "hotel volume discount" : null,
    v > 0 && vr < VR_BASE_RATE ? "VR volume discount" : null,
  ].filter(Boolean);

  const nextHotelTier = HOTEL_TIERS.find((t) => h < t.thresh);
  const nextVrTier = VR_TIERS.find((t) => v < t.thresh);
  const hints = [
    h > 0 && nextHotelTier
      ? `${(nextHotelTier.thresh - h).toLocaleString("en-US")} more hotels to reach ${fmt(nextHotelTier.rate)}/hotel`
      : null,
    v > 0 && nextVrTier
      ? `${(nextVrTier.thresh - v).toLocaleString("en-US")} more units to reach ${fmt(nextVrTier.rate)}/unit`
      : null,
  ].filter(Boolean) as string[];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary font-inter">
              <Calculator size={16} />
              Instant estimate · no commitment
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground font-inter">
              Pricing calculator
            </h1>
            <p className="text-lg text-muted-foreground font-inter">
              Enter your portfolio size for an exact monthly figure, including the volume discounts
              that apply automatically as you grow.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
            {/* Inputs */}
            <div className="space-y-4">
              <CountField
                id="hotels"
                label="Hotels"
                hint="Volume discounts available"
                icon={Building2}
                value={hotels}
                onChange={setHotels}
                rate={hr}
                baseRate={HOTEL_BASE_RATE}
                rateUnit="/ hotel"
                count={h}
                tiers={HOTEL_TIERS}
              />

              <CountField
                id="vrs"
                label="Vacation rental units"
                hint="Volume discounts available"
                icon={Home}
                value={vrs}
                onChange={setVrs}
                rate={vr}
                baseRate={VR_BASE_RATE}
                rateUnit="/ unit"
                count={v}
                tiers={VR_TIERS}
              />

              {/* Optional add-on */}
              <Card className={`transition-colors ${addon ? "border-primary/40 bg-primary/5" : "border-border/50"}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Checkbox
                      id="addon"
                      checked={addon}
                      onCheckedChange={(c) => setAddon(c === true)}
                      className="mt-1"
                    />
                    <div className="flex-1 space-y-1">
                      <label
                        htmlFor="addon"
                        className="flex cursor-pointer items-center gap-2 font-semibold text-foreground font-inter"
                      >
                        <span className="rounded-lg bg-primary/10 p-2">
                          <MessageSquare size={18} className="text-primary" />
                        </span>
                        Add Chat &amp; Reviews
                      </label>
                      <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                        Guest messaging and review management, {fmt(HOTEL_BASE_RATE)} per hotel and{" "}
                        {fmt(VR_BASE_RATE)} per vacation rental unit on top of the channel manager.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Result */}
            <Card className="border-primary/30 shadow-lg lg:sticky lg:top-24">
              <CardContent className="p-6 space-y-6">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground font-inter">Estimated monthly cost</div>
                  <div className="mt-1 text-4xl font-bold text-foreground font-inter tabular-nums">
                    {fmtShort(total)}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground font-inter">
                    {fmtShort(annual)} / year
                    {/* Blended: averages hotels and VR units together, so label it
                        as an average rather than implying a per-hotel rate. */}
                    {perProp !== null && <> · {fmt(perProp)} avg per property</>}
                  </div>
                </div>

                <div className="space-y-2 border-t border-border/50 pt-4 font-inter">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Platform fee</span>
                    <span className="tabular-nums">{fmt(PLATFORM_FEE)}</span>
                  </div>
                  {h > 0 && (
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>
                        {h.toLocaleString("en-US")} hotels × {fmt(hr)}
                      </span>
                      <span className="tabular-nums">{fmt(hotelCost)}</span>
                    </div>
                  )}
                  {v > 0 && (
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>
                        {v.toLocaleString("en-US")} units × {fmt(vr)}
                      </span>
                      <span className="tabular-nums">{fmt(vrCost)}</span>
                    </div>
                  )}
                  {addon && addonCost > 0 && (
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Chat &amp; Reviews</span>
                      <span className="tabular-nums">{fmt(addonCost)}</span>
                    </div>
                  )}
                  <div className="flex justify-between border-t border-border/50 pt-3 text-sm font-bold text-foreground">
                    <span>Total / month</span>
                    <span className="tabular-nums">{fmt(total)}</span>
                  </div>
                </div>

                {savings > 0 && (
                  <div className="flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-3 py-2.5">
                    <TrendingDown size={16} className="flex-none text-primary" />
                    <span className="text-xs text-primary font-inter">
                      {savingsParts.join(" + ")} applied — {fmt(savings)}/mo saved
                    </span>
                  </div>
                )}

                {savings === 0 && hints.length > 0 && (
                  <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2.5">
                    <p className="text-xs text-amber-800 font-inter leading-relaxed">
                      {hints.join(" · ")}
                    </p>
                  </div>
                )}

                <Button asChild className="w-full font-inter" size="lg">
                  <Link to="/contact">
                    Talk to us about your integration
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>

                <p className="text-center text-xs text-muted-foreground font-inter">
                  All prices in USD, excluding VAT. See{" "}
                  <Link to="/pricing" className="underline hover:text-foreground">
                    full pricing
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
