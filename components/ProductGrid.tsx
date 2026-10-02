import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getShopifyProducts } from "@/lib/products";

export default async function ProductGrid({ limit }: { limit?: number }) {
  const catalog = await getShopifyProducts();
  const list = limit ? catalog.slice(0, limit) : catalog;

  return (
    <section className="bg-ivory px-4 py-16 sm:px-6" id="products">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 max-sm:flex-col max-sm:items-start">
          <div>
            <div className="mb-1.5 text-[11px] uppercase tracking-[0.16em] text-smoke">Nouveautés</div>
            <h2 className="font-serif text-[28px] text-espresso">The essentials</h2>
          </div>
          {limit && (
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-cognac hover:text-espresso"
            >
              Voir tout le catalogue
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {list.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
