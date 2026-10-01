import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/hooks/useCart";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "BONDI — Timeless Leather Essentials",
  description:
    "Essentials en cuir cognac tanné végétal, coupés, cousus et finis à la main à Casablanca.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
