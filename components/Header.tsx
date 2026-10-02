"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/hooks/useCart";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Catalog" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const { count, open } = useCart();
  const pathname = usePathname();

  return (
    <>
      <div className="bg-champagne px-4 py-2 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-espresso">
        Livraison offerte au Maroc — pièces cousues main à Casablanca
      </div>
      <header className="sticky top-0 z-50 border-b border-aged-gold/20 bg-espresso/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="text-xl font-medium tracking-[0.42em] text-ivory">
            B<span className="text-aged-gold">O</span>NDI
          </Link>
          <nav className="hidden items-center gap-8 sm:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b pb-0.5 text-sm transition-colors ${
                  pathname === link.href
                    ? "border-aged-gold text-ivory"
                    : "border-transparent text-smoke hover:border-aged-gold hover:text-ivory"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-aged-gold/30 text-aged-gold transition-colors hover:bg-aged-gold/10"
              aria-label="Cart"
              onClick={open}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 7h14l-1.3 9.5a2 2 0 0 1-2 1.5H8.3a2 2 0 0 1-2-1.5Z" />
                <path d="M9 10V6a3 3 0 0 1 6 0v4" />
              </svg>
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-cognac text-[10px] font-medium text-ivory">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
