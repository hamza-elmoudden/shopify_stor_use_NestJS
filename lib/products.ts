import { shopifyFetch } from "./shopify";
import type { Product } from "./product";

export type { Product } from "./product";
export { formatPrice } from "./product";

export const products: Product[] = [
  { id: 1, name: "Sac Cabas Élégance", sub: "Cuir pleine fleur", price: 289, hue: "#A9713D", tag: "Best-seller" },
  { id: 2, name: "Portefeuille Signature", sub: "Cuir de veau", price: 129, hue: "#8B5A2B" },
  { id: 3, name: "Ceinture Héritage", sub: "Cuir tanné végétal", price: 149, hue: "#6F4520" },
  { id: 4, name: "Sac à Dos Voyageur", sub: "Cuir grainé", price: 349, hue: "#4A2E15", tag: "Nouveau" },
  { id: 5, name: "Pochette Minimaliste", sub: "Cuir lisse", price: 99, hue: "#B8824A" },
  { id: 6, name: "Sac Bandoulière Ville", sub: "Cuir pleine fleur", price: 259, hue: "#7A4A22", tag: "Best-seller" },
];

const GET_PRODUCTS = `
  query GetProducts {
    products(first: 10) {
      nodes {
        id
        title
        handle
        description
        featuredImage {
          url
          altText
        }
        variants(first: 1) {
          nodes {
            price {
              amount
            }
          }
        }
      }
    }
  }
`;

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  featuredImage: {
    url: string;
    altText: string | null;
  } | null;
  variants: {
    nodes: {
      price: {
        amount: string;
      };
    }[];
  };
}

export async function getProducts(): Promise<Product[]> {
  const data = await shopifyFetch<{
    products: { nodes: ShopifyProduct[] };
  }>(GET_PRODUCTS);

  return data.products.nodes.map((node) => ({
    id: node.id,
    name: node.title,
    sub: node.description,
    price: Number(node.variants.nodes[0]?.price.amount ?? 0),
    image: node.featuredImage?.url,
    handle: node.handle,
    description: node.description,
  }));
}

const GET_PRODUCT_BY_HANDLE = `
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      description
      featuredImage {
        url
        altText
      }
      images(first: 10) {
        nodes {
          url
          altText
        }
      }
      variants(first: 1) {
        nodes {
          price {
            amount
          }
        }
      }
    }
  }
`;

export async function getProduct(id: string): Promise<Product | null> {
  const local = products.find((p) => String(p.id) === id);
  if (local) return local;

  try {
    const data = await shopifyFetch<{
      product: (ShopifyProduct & { images: { nodes: { url: string; altText: string | null }[] } }) | null;
    }>(GET_PRODUCT_BY_HANDLE, { handle: id });

    if (!data.product) return null;
    const node = data.product;
    return {
      id: node.id,
      name: node.title,
      sub: node.description,
      price: Number(node.variants.nodes[0]?.price.amount ?? 0),
      image: node.featuredImage?.url,
      images: node.images.nodes.map((img) => img.url),
      handle: node.handle,
      description: node.description,
    };
  } catch {
    return null;
  }
}

export async function getShopifyProducts(): Promise<Product[]> {
  try {
    const list = await getProducts();
    return list.length > 0 ? list : products;
  } catch {
    return products;
  }
}
