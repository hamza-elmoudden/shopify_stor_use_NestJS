import Link from "next/link";
import Marquee from "@/components/Marquee";
import ProductGrid from "@/components/ProductGrid";
import Palette from "@/components/Palette";

const stats = [
  { value: "100%", label: "full-grain leather" },
  { value: "48h", label: "dispatch Maroc" },
  { value: "5.0", label: "client rating" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,#3A2415_0%,#1E0F07_70%)] opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/60 to-espresso" />
        </div>
        <div className="relative z-2 max-w-2xl px-6 py-16 text-center">
          <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-aged-gold">
            Cuir pleine fleur · Fait main au Maroc
          </div>
          <h1 className="mb-5 font-serif text-[clamp(36px,5vw,56px)] leading-[1.1] text-ivory">
            Timeless leather, <em className="not-italic text-aged-gold">aged to gold</em>.
          </h1>
          <p className="mx-auto mb-7 max-w-md text-base leading-relaxed text-smoke">
            Essentials en cuir cognac tanné végétal. Chaque pièce est coupée, cousue et finie à la
            main pour prendre une patine unique.
          </p>
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-[10px] bg-cognac px-6 py-3 text-sm font-medium text-ivory transition-all hover:bg-cognac-light active:scale-[0.97]"
            >
              Découvrir la collection
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-[10px] border border-aged-gold/50 bg-transparent px-6 py-3 text-sm font-medium text-aged-gold transition-all hover:bg-aged-gold/10 active:scale-[0.97]"
            >
              Notre savoir-faire
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-10 max-sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[22px] font-medium text-champagne tabular-nums">{stat.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.08em] text-smoke">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee />
      <ProductGrid limit={4} />
      <Palette />
    </>
  );
}
