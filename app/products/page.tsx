import Marquee from "@/components/Marquee";
import ProductGrid from "@/components/ProductGrid";

export const metadata = {
  title: "Catalogue — BONDI",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#3A2415_0%,#1E0F07_70%)] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/60 to-espresso" />
        <div className="relative z-2 max-w-2xl px-6 py-16 text-center">
          <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-aged-gold">
            Catalogue
          </div>
          <h1 className="mb-5 font-serif text-[clamp(36px,5vw,56px)] leading-[1.1] text-ivory">
            The <em className="not-italic text-aged-gold">collection</em>.
          </h1>
          <p className="mx-auto max-w-md text-base leading-relaxed text-smoke">
            Chaque pièce est coupée, cousue et finie à la main à Casablanca, en cuir pleine fleur
            tanné végétal.
          </p>
        </div>
      </section>
      <Marquee />
      <ProductGrid />
    </>
  );
}
