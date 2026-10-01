import Link from "next/link";

const values = [
  {
    title: "Cuir pleine fleur",
    text: "Nous n'utilisons que la couche supérieure de la peau, la plus résistante et la seule qui développe une vraie patine avec le temps.",
  },
  {
    title: "Tannage végétal",
    text: "Des tanins naturels de plantes, sans chrome, pour un cuir qui vieillit en beauté et respecte la peau comme l'environnement.",
  },
  {
    title: "Fait main à Casablanca",
    text: "Chaque pièce est coupée, cousue au point sellier et finie à la main dans notre atelier de Casablanca.",
  },
  {
    title: "Patine garantie à vie",
    text: "Votre pièce raconte votre histoire. Nous réparons et ravivons chaque article Bondi, pour la vie.",
  },
];

export const metadata = {
  title: "Notre savoir-faire — BONDI",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#3A2415_0%,#1E0F07_70%)] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/60 to-espresso" />
        <div className="relative z-2 max-w-2xl px-6 py-16 text-center">
          <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-aged-gold">
            Notre savoir-faire
          </div>
          <h1 className="mb-5 font-serif text-[clamp(36px,5vw,56px)] leading-[1.1] text-ivory">
            De la peau brute à <em className="not-italic text-aged-gold">l&apos;essentiel</em>.
          </h1>
          <p className="mx-auto max-w-md text-base leading-relaxed text-smoke">
            Bondi est né à Casablanca d&apos;une conviction simple : le cuir honnête, travaillé à la
            main, ne se démode jamais.
          </p>
        </div>
      </section>

      <section className="bg-ivory px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <div className="mb-1.5 text-[11px] uppercase tracking-[0.16em] text-smoke">
              Ce qui nous guide
            </div>
            <h2 className="font-serif text-[28px] text-espresso">Quatre engagements</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-espresso/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(30,15,7,0.15)]"
              >
                <h3 className="mb-2 font-serif text-lg text-espresso">{value.title}</h3>
                <p className="text-sm leading-relaxed text-smoke">{value.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-[10px] bg-cognac px-6 py-3 text-sm font-medium text-ivory transition-all hover:bg-cognac-light active:scale-[0.97]"
            >
              Découvrir la collection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
