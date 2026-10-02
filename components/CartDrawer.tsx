"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/product";

export default function CartDrawer() {
  const { items, total, isOpen, toast, updateQty, close } = useCart();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Toast */}
      <div
        className={`fixed bottom-6 left-1/2 z-[100] flex -translate-x-1/2 items-center gap-2.5 rounded-[10px] border border-aged-gold/40 bg-espresso px-5 py-3 text-[13px] text-champagne shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300 ${
          toast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[100px] opacity-0"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 7h14l-1.3 9.5a2 2 0 0 1-2 1.5H8.3a2 2 0 0 1-2-1.5Z" />
          <path d="M9 10V6a3 3 0 0 1 6 0v4" />
        </svg>
        <span>{toast}</span>
      </div>

      {/* Overlay */}
      <div
        onClick={close}
        className={`fixed inset-0 z-[90] bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[95] flex h-full w-full max-w-[420px] flex-col border-l border-aged-gold/20 bg-espresso transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-aged-gold/20 px-6 py-5">
          <h2 className="font-serif text-lg text-ivory">Votre panier</h2>
          <button
            onClick={close}
            aria-label="Close"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-aged-gold/30 text-aged-gold transition-colors hover:bg-aged-gold/10"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="py-12 text-center">
              <svg className="mx-auto mb-4 text-smoke/40" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 7h14l-1.3 9.5a2 2 0 0 1-2 1.5H8.3a2 2 0 0 1-2-1.5Z" />
                <path d="M9 10V6a3 3 0 0 1 6 0v4" />
              </svg>
              <p className="text-sm text-smoke">Votre panier est vide</p>
            </div>
          ) : (
            items.map(({ product, qty }) => (
              <div
                key={product.id}
                className="mb-3 flex gap-3 rounded-xl border border-aged-gold/10 bg-cognac/10 p-3"
              >
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[72px] w-[72px] shrink-0 rounded-lg object-cover"
                  />
                ) : (
                  <div
                    className="h-[72px] w-[72px] shrink-0 rounded-lg"
                    style={{
                      background: `linear-gradient(135deg, ${product.hue ?? "#A9713D"}, #1E0F07)`,
                    }}
                  />
                )}
                <div className="flex-1">
                  <div className="mb-0.5 text-sm font-medium text-ivory">{product.name}</div>
                  <div className="mb-2 text-xs text-smoke">{product.sub}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-cognac">
                      {formatPrice(product.price)}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(product.id, -1)}
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-aged-gold/30 text-aged-gold transition-colors hover:bg-aged-gold/10"
                      >
                        -
                      </button>
                      <span className="min-w-5 text-center text-sm text-ivory tabular-nums">{qty}</span>
                      <button
                        onClick={() => updateQty(product.id, 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-md border border-aged-gold/30 text-aged-gold transition-colors hover:bg-aged-gold/10"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-aged-gold/20 px-6 py-5">
            <div className="mb-4 flex justify-between">
              <span className="text-sm text-smoke">Total</span>
              <strong className="text-lg text-ivory tabular-nums">{formatPrice(total)}</strong>
            </div>
            <Link
              href="/order"
              onClick={close}
              className="block w-full rounded-[10px] bg-cognac py-3.5 text-center text-sm font-medium text-ivory transition-colors hover:bg-cognac-light"
            >
              Passer la commande
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
