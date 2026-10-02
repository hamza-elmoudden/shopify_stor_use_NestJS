"use client";

import { useCart } from "@/hooks/useCart";
import { formatPrice, type Product } from "@/lib/product";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <article className="group cursor-pointer overflow-hidden rounded-xl border border-espresso/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(30,15,7,0.15)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${product.hue ?? "#A9713D"}, #1E0F07)`,
            }}
          />
        )}
        {product.tag && (
          <span
            className={`absolute top-2.5 left-2.5 rounded-md px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.1em] ${
              product.tag === "Best-seller" ? "bg-cognac text-ivory" : "bg-champagne text-espresso"
            }`}
          >
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="mb-0.5 text-[15px] font-medium text-espresso">{product.name}</div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-base font-medium text-cognac tabular-nums">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => add(product)}
            aria-label="Add to cart"
            className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-espresso/15 text-espresso transition-colors group-hover:border-espresso group-hover:bg-espresso group-hover:text-champagne"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
