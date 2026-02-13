// File: src/app/(main)/shop/category/sexual-health/page.tsx
import type { Metadata } from "next";
import HeroSection from "@/components/category/sexual-health/hero-section";
import ProductGridSection from "@/components/category/sexual-health/product-grid-section";
import ProductCarousel from "@/components/common/product-carousel";
import { Product } from "@/components/shop/product-card";
import Image from "next/image";

// Placeholder for related products
const RELATED_PRODUCTS: Product[] = [
  {
    id: "enclomiphene",
    name: "Enclomiphene",
    medicalName: "Enclomiphene Citrate",
    price: "79.00",
    image: "/products/enclomiphene-hero.png",
    slug: "enclomiphene",
  },
  {
    id: "topical-finasteride",
    name: "Topical Finasteride",
    medicalName: "Minoxidil + Finasteride + Tretinoin",
    price: "59.00",
    image: "/products/topical-finasteride-hero.png",
    slug: "topical-finasteride",
  },
];

export const metadata: Metadata = {
  title: "Sexual Health Treatments",
  description:
    "Prescription treatments for erectile dysfunction and sexual performance. Fast-acting formulas prescribed online by licensed U.S. providers.",
};

export default function SexualHealthCategoryPage() {
  return (
    <main>
      <HeroSection />
      <ProductGridSection />

      <section className="container mx-auto py-25 px-4 xl:px-0">
        <div className="relative min-h-[500px]">
          <Image
            className="rounded-xl object-center object-cover"
            src={"/categories/category-closeup.webp"}
            alt="Category Closeup"
            fill
          />
        </div>
      </section>

      <ProductCarousel title="See Also" products={RELATED_PRODUCTS} />
    </main>
  );
}