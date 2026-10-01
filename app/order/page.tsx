"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/product";

export default function OrderPage() {
  const { items, total, clear } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    clear();
  };

  if (submitted) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center px-6 py-16">
        <div className="max-w-md text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-aged-gold/40 bg-espresso">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-aged-gold">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h1 className="mb-4 font-serif text-[clamp(28px,4vw,40px)] text-ivory">
            Merci pour votre commande !
          </h1>
          <p className="mb-8 text-sm leading-relaxed text-smoke">
            Nous avons bien reçu votre commande. Vous recevrez un e-mail de confirmation
            avec le suivi de la livraison.
          </p>
          <Link
            href="/products"
            className="inline-block rounded-[10px] bg-cognac px-8 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-cognac-light"
          >
            Retour au catalogue
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.24em] text-aged-gold">
            Commande
          </div>
          <h1 className="font-serif text-[clamp(32px,5vw,48px)] text-ivory">
            Finaliser votre commande
          </h1>
        </div>

        {items.length === 0 ? (
          <div className="mx-auto max-w-md text-center">
            <p className="mb-8 text-sm text-smoke">Votre panier est vide.</p>
            <Link
              href="/products"
              className="inline-block rounded-[10px] bg-cognac px-8 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-cognac-light"
            >
              Découvrir la collection
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-aged-gold/20 bg-espresso/60 p-6"
            >
              <h2 className="mb-5 font-serif text-lg text-ivory">Coordonnées</h2>
              <div className="mb-4 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-smoke">Prénom</span>
                  <input
                    required
                    name="firstName"
                    className="w-full rounded-[10px] border border-aged-gold/20 bg-transparent px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-aged-gold"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-smoke">Nom</span>
                  <input
                    required
                    name="lastName"
                    className="w-full rounded-[10px] border border-aged-gold/20 bg-transparent px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-aged-gold"
                  />
                </label>
              </div>
              <label className="mb-4 block">
                <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-smoke">E-mail</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full rounded-[10px] border border-aged-gold/20 bg-transparent px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-aged-gold"
                />
              </label>
              <label className="mb-4 block">
                <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-smoke">Adresse</span>
                <input
                  required
                  name="address"
                  className="w-full rounded-[10px] border border-aged-gold/20 bg-transparent px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-aged-gold"
                />
              </label>
              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-smoke">Ville</span>
                  <input
                    required
                    name="city"
                    className="w-full rounded-[10px] border border-aged-gold/20 bg-transparent px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-aged-gold"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-smoke">Téléphone</span>
                  <input
                    required
                    type="tel"
                    name="phone"
                    className="w-full rounded-[10px] border border-aged-gold/20 bg-transparent px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-aged-gold"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="w-full rounded-[10px] bg-cognac py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-cognac-light"
              >
                Confirmer la commande
              </button>
            </form>

            <aside className="h-fit rounded-xl border border-aged-gold/20 bg-espresso/60 p-6">
              <h2 className="mb-5 font-serif text-lg text-ivory">Récapitulatif</h2>
              <div className="mb-5 space-y-3">
                {items.map(({ product, qty }) => (
                  <div key={product.id} className="flex items-center gap-3">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-[56px] w-[56px] shrink-0 rounded-lg object-cover"
                      />
                    ) : (
                      <div
                        className="h-[56px] w-[56px] shrink-0 rounded-lg"
                        style={{
                          background: `linear-gradient(135deg, ${product.hue ?? "#A9713D"}, #1E0F07)`,
                        }}
                      />
                    )}
                    <div className="flex-1">
                      <div className="text-sm font-medium text-ivory">{product.name}</div>
                      <div className="text-xs text-smoke">Quantité : {qty}</div>
                    </div>
                    <span className="text-sm text-cognac tabular-nums">
                      {formatPrice(product.price * qty)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-aged-gold/20 pt-4">
                <div className="flex justify-between">
                  <span className="text-sm text-smoke">Total</span>
                  <strong className="text-lg text-ivory tabular-nums">{formatPrice(total)}</strong>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
