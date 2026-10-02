const marqueeItems = [
  "Cousu main à Casablanca",
  "Cuir pleine fleur",
  "Patine garantie à vie",
  "Livraison offerte au Maroc",
];

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];
  return (
    <div className="overflow-hidden border-y border-aged-gold/20 bg-cognac py-2.5 whitespace-nowrap">
      <div className="animate-marquee inline-block">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="mx-6 text-[11px] uppercase tracking-[0.2em] text-ivory">{item}</span>
            <span className="mx-6 text-[10px] text-champagne">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
