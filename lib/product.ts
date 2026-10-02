export interface Product {
  id: number | string;
  name: string;
  sub: string;
  price: number;
  hue?: string;
  image?: string;
  images?: string[];
  handle?: string;
  description?: string;
  tag?: string;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}
