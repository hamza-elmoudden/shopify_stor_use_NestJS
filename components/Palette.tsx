"use client";

import { useState } from "react";

const paletteColors = [
  {
    percent: 60,
    hex: "#1E0F07",
    name: "Deep espresso",
    role: "Primary",
    usage:
      "Dominant canvas: page background, hero, header and footer. Sets the dark, luxurious tone everything else sits on.",
  },
  {
    percent: 30,
    hex: "#7B3F1E",
    name: "Cognac leather",
    role: "Brand",
    usage:
      "Brand blocks: buttons, tags, marquee band and product accents — the leather tone customers remember.",
  },
  {
    percent: 10,
    hex: "#C8A86B",
    name: "Aged gold",
    role: "Accent",
    usage:
      "Precious accents only: prices, dividers, icons, focus rings and hover states — never large fills.",
  },
];

const supportColors = [
  { hex: "#F5ECD7", name: "Ivory cream", role: "backgrounds of cards & light sections, primary text on dark" },
  { hex: "#8C7B6E", name: "Warm smoke", role: "secondary text, captions, muted states" },
  { hex: "#E8D5A3", name: "Champagne gold", role: "highlights, badges, announcement bar" },
];

export default function Palette() {
  const [active, setActive] = useState(paletteColors[0]);

  return (
    <section className="bg-espresso px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-1 font-serif text-[28px] text-ivory">Palette — la règle 60 · 30 · 10</h2>
        <p className="mb-6 text-[11px] uppercase tracking-[0.16em] text-aged-gold">
          Cliquez sur une bande pour voir son rôle
        </p>

        <div className="flex h-[88px] overflow-hidden rounded-xl border border-aged-gold/25 max-sm:h-[72px]">
          {paletteColors.map((color) => (
            <button
              key={color.hex}
              onClick={() => setActive(color)}
              className={`relative cursor-pointer border-none text-left transition-[filter] hover:brightness-115 ${
                active.hex === color.hex ? "brightness-115 outline-2 -outline-offset-2 outline-champagne" : ""
              }`}
              style={{ flexGrow: color.percent, background: color.hex }}
            >
              <span className="absolute top-2.5 left-3 text-[15px] font-medium text-ivory tabular-nums max-sm:top-2 max-sm:left-2 max-sm:text-[13px]">
                {color.percent}
              </span>
              <span className="absolute bottom-2.5 left-3 text-xs text-ivory/85 tracking-[0.06em] max-sm:bottom-2 max-sm:left-2 max-sm:text-[10px]">
                {color.name}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 rounded-xl border border-aged-gold/25 bg-cognac/15 p-4 px-5">
          <div
            className="h-11 w-11 shrink-0 rounded-[10px] border border-ivory/25"
            style={{ background: active.hex }}
          />
          <div className="min-w-55 flex-1">
            <div>
              <span className="text-[15px] font-medium text-ivory">{active.name}</span>
              <code className="ml-2 font-mono text-xs text-champagne">{active.hex}</code>
            </div>
            <p className="mt-1 text-[13px] leading-relaxed text-smoke">{active.usage}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {supportColors.map((color) => (
            <div
              key={color.hex}
              className="flex items-center gap-2 rounded-[10px] border border-aged-gold/25 px-3.5 py-2 text-xs text-smoke"
            >
              <div className="h-3.5 w-3.5 shrink-0 rounded" style={{ background: color.hex }} />
              <span>
                <strong className="font-medium text-ivory">{color.name}</strong> — {color.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
