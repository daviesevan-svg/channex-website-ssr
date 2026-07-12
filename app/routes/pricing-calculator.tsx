import { useState, useEffect } from "react";
import { Link } from "react-router";
import { pageMeta } from "@/lib/seo";
import type { Route } from "./+types/pricing-calculator";

export const meta: Route.MetaFunction = ({ location }) =>
  pageMeta(
    {
      title: "Pricing Calculator | Channex Channel Manager API",
      description: "Estimate your Channex channel manager API costs based on property count and type.",
    },
    location,
  );

function hotelRate(n: number): number {
  if (n >= 2000) return 4;
  if (n >= 1000) return 5;
  if (n >= 500) return 6;
  return 7;
}

function vrRate(n: number): number {
  if (n >= 7000) return 0.30;
  if (n >= 4000) return 0.40;
  if (n >= 2000) return 0.45;
  return 0.50;
}

function fmt(n: number): string {
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function fmtShort(n: number): string {
  if (n >= 1000) return "$" + (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + "k";
  return fmt(n);
}

const HOTEL_TIERS = [
  { thresh: 500,  label: "500+ → $6.00" },
  { thresh: 1000, label: "1,000+ → $5.00" },
  { thresh: 2000, label: "2,000+ → $4.00" },
];

const VR_TIERS = [
  { thresh: 2000, label: "2,000+ → $0.45" },
  { thresh: 4000, label: "4,000+ → $0.40" },
  { thresh: 7000, label: "7,000+ → $0.30" },
];

const PLATFORM_FEE = 130;

export default function PricingCalculator() {
  const [hotels, setHotels] = useState<string>("");
  const [vrs, setVrs] = useState<string>("");

  const h = Math.max(0, parseInt(hotels) || 0);
  const v = Math.max(0, parseInt(vrs) || 0);

  const hr = hotelRate(h);
  const vr = vrRate(v);

  const hotelCost = h * hr;
  const vrCost = v * vr;
  const total = PLATFORM_FEE + hotelCost + vrCost;
  const annual = total * 12;
  const props = h + v;
  const perProp = props > 0 ? total / props : null;

  const savings = h * (7 - hr) + v * (0.5 - vr);

  const savingsParts: string[] = [];
  if (h > 0 && hr < 7) savingsParts.push("hotel volume discount");
  if (v > 0 && vr < 0.5) savingsParts.push("VR volume discount");

  const hints: string[] = [];
  if (h > 0) {
    if (h < 500) hints.push(`${(500 - h).toLocaleString()} more hotels to unlock $6.00/hotel`);
    else if (h < 1000) hints.push(`${(1000 - h).toLocaleString()} more hotels to unlock $5.00/hotel`);
    else if (h < 2000) hints.push(`${(2000 - h).toLocaleString()} more hotels to unlock $4.00/hotel`);
  }
  if (v > 0) {
    if (v < 2000) hints.push(`${(2000 - v).toLocaleString()} more VR units to unlock $0.45/unit`);
    else if (v < 4000) hints.push(`${(4000 - v).toLocaleString()} more VR units to unlock $0.40/unit`);
    else if (v < 7000) hints.push(`${(7000 - v).toLocaleString()} more VR units to unlock $0.30/unit`);
  }

  function tierChipClass(index: number, value: number, tiers: typeof HOTEL_TIERS): string {
    const prevThresh = index === 0 ? 0 : tiers[index - 1].thresh;
    if (value >= tiers[index].thresh) return "reached";
    if (value >= prevThresh && value < tiers[index].thresh) return "next";
    return "";
  }

  return (
    <div className="min-h-screen bg-[#f8f7f4] flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-[580px]">

        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <Link to="/">
            <img src="/lovable-uploads/channex-logo.png" alt="Channex" className="h-8" onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }} />
          </Link>
          <span className="text-lg font-semibold text-[#1a1a18] tracking-tight font-inter">Channex</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1a1a18] tracking-tight font-inter mb-2">
            Pricing Calculator
          </h1>
          <p className="text-[#888780] font-inter">
            Estimate your monthly cost — no commitment required.
          </p>
        </div>

        {/* Hotels Section */}
        <div className="bg-white rounded-2xl border border-[#e8e6df] p-6 mb-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#888780] font-inter">Hotels</span>
            <span className="text-xs text-[#b4b2a9] font-inter">Volume discounts available</span>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="number"
              min="0"
              value={hotels}
              placeholder="0"
              onChange={(e) => setHotels(e.target.value)}
              className="flex-1 px-4 py-2.5 text-base border border-[#d3d1c7] rounded-xl bg-[#fafaf8] text-[#1a1a18] font-inter focus:outline-none focus:border-[#888780] focus:bg-white transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <span className={`text-sm font-medium px-3 py-1.5 rounded-full whitespace-nowrap font-inter transition-colors ${hr < 7 ? "bg-[#eaf3de] text-[#3b6d11]" : "bg-[#f1efe8] text-[#5f5e5a]"}`}>
              ${hr.toFixed(2)} / hotel
            </span>
          </div>
          <div className="flex gap-2 mt-3 flex-wrap">
            {HOTEL_TIERS.map((tier, i) => {
              const cls = tierChipClass(i, h, HOTEL_TIERS);
              return (
                <span key={tier.thresh} className={`text-xs px-3 py-1 rounded-full font-inter transition-colors ${
                  cls === "reached" ? "bg-[#eaf3de] text-[#3b6d11]" :
                  cls === "next"    ? "bg-[#faeeda] text-[#854f0b]" :
                                      "bg-[#f1efe8] text-[#b4b2a9]"
                }`}>
                  {tier.label}
                </span>
              );
            })}
          </div>
        </div>

        {/* Vacation Rentals Section */}
        <div className="bg-white rounded-2xl border border-[#e8e6df] p-6 mb-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#888780] font-inter">Vacation Rentals</span>
            <span className="text-xs text-[#b4b2a9] font-inter">Volume discounts available</span>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="number"
              min="0"
              value={vrs}
              placeholder="0"
              onChange={(e) => setVrs(e.target.value)}
              className="flex-1 px-4 py-2.5 text-base border border-[#d3d1c7] rounded-xl bg-[#fafaf8] text-[#1a1a18] font-inter focus:outline-none focus:border-[#888780] focus:bg-white transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <span className={`text-sm font-medium px-3 py-1.5 rounded-full whitespace-nowrap font-inter transition-colors ${vr < 0.5 ? "bg-[#eaf3de] text-[#3b6d11]" : "bg-[#f1efe8] text-[#5f5e5a]"}`}>
              ${vr.toFixed(2)} / unit
            </span>
          </div>
          <div className="flex gap-2 mt-3 flex-wrap">
            {VR_TIERS.map((tier, i) => {
              const cls = tierChipClass(i, v, VR_TIERS);
              return (
                <span key={tier.thresh} className={`text-xs px-3 py-1 rounded-full font-inter transition-colors ${
                  cls === "reached" ? "bg-[#eaf3de] text-[#3b6d11]" :
                  cls === "next"    ? "bg-[#faeeda] text-[#854f0b]" :
                                      "bg-[#f1efe8] text-[#b4b2a9]"
                }`}>
                  {tier.label}
                </span>
              );
            })}
          </div>
        </div>

        {/* Results */}
        <div className="bg-[#f1efe8] rounded-2xl p-6 mb-4">
          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { label: "Monthly", value: fmtShort(total), sub: "per month" },
              { label: "Annual",  value: fmtShort(annual), sub: "per year" },
              { label: "Per property", value: perProp !== null ? fmt(perProp) : "—", sub: "avg / month" },
            ].map((m) => (
              <div key={m.label} className="bg-white rounded-xl border border-[#e8e6df] p-4 text-center">
                <div className="text-xs text-[#888780] mb-1 font-inter">{m.label}</div>
                <div className="text-xl font-bold text-[#1a1a18] tracking-tight font-inter">{m.value}</div>
                <div className="text-[10px] text-[#b4b2a9] mt-0.5 font-inter">{m.sub}</div>
              </div>
            ))}
          </div>

          {/* Breakdown */}
          <div className="border-t border-[#e8e6df] pt-4 space-y-1.5">
            <div className="flex justify-between text-sm text-[#5f5e5a] font-inter">
              <span>Platform fee</span>
              <span className="tabular-nums">{fmt(PLATFORM_FEE)}</span>
            </div>
            {h > 0 && (
              <div className="flex justify-between text-sm text-[#5f5e5a] font-inter">
                <span>{h.toLocaleString()} hotels × ${hr.toFixed(2)}</span>
                <span className="tabular-nums">{fmt(hotelCost)}</span>
              </div>
            )}
            {v > 0 && (
              <div className="flex justify-between text-sm text-[#5f5e5a] font-inter">
                <span>{v.toLocaleString()} VR units × ${vr.toFixed(2)}</span>
                <span className="tabular-nums">{fmt(vrCost)}</span>
              </div>
            )}
            <div className="flex justify-between text-sm font-bold text-[#1a1a18] border-t border-[#e8e6df] pt-3 mt-2 font-inter">
              <span>Total / month</span>
              <span className="tabular-nums">{fmt(total)}</span>
            </div>
          </div>

          {/* Savings strip */}
          {savings > 0 && (
            <div className="flex items-center justify-between mt-4 px-3 py-2.5 bg-[#eaf3de] rounded-xl">
              <span className="text-xs text-[#3b6d11] font-inter">{savingsParts.join(" + ")} applied</span>
              <span className="text-xs font-semibold text-[#3b6d11] font-inter">{fmt(savings)}/mo saved</span>
            </div>
          )}

          {/* Next tier strip */}
          {savings === 0 && hints.length > 0 && (
            <div className="mt-4 px-3 py-2.5 bg-[#faeeda] rounded-xl">
              <p className="text-xs text-[#854f0b] font-inter leading-relaxed">{hints.join(" · ")}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-[#b4b2a9] font-inter mt-2">
          Questions?{" "}
          <a href="https://channex.io/contact" className="text-[#888780] hover:underline">Talk to our team</a>
          {" "}·{" "}All prices in USD · Excluding VAT
        </p>
      </div>
    </div>
  );
}
