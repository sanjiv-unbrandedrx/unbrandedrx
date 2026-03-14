// src/app/(main)/page.tsx
import type { Metadata } from "next";
import HeroSection from "@/components/home/hero-section";
import CategoryCard, { CategoryItem } from "@/components/home/category-card";
import CardsSection from "@/components/home/cards-section";
import ProductCarousel from "@/components/common/product-carousel";
import { Product } from "@/components/shop/product-card";

const DUMMY_CATEGORIES: CategoryItem[] = [
  {
    id: "hair-loss",
    name: "Hair Loss",
    description: "Solutions for preventing hair loss and promoting regrowth",
    image: "/home/hair-loss.webp",
    slug: "hair-loss",
  },
  {
    id: "mens-health",
    name: "Men's Health",
    description: "Overall solutions for male vitality and well-being",
    image: "/home/sexual-health.webp",
    slug: "mens-health",
  },
  {
    id: "sexual-health",
    name: "Sexual Health",
    description: "Treatments for erectile dysfunction and improved performance",
    image: "/home/sexual-health.webp",
    slug: "sexual-health",
  },
  {
    id: "testosterone",
    name: "Testosterone",
    description: "Support for healthy testosterone levels and vitality",
    image: "/home/hair-loss.webp",
    slug: "testosterone",
  },
];

const BEST_SELLERS: Product[] = [
  {
    id: "enclomiphene",
    name: "Enclomiphene",
    medicalName: "Enclomiphene Citrate",
    price: "79.00",
    image: "/products/enclomiphene-hero.png",
    slug: "enclomiphene",
  },
  {
    id: "ed-rapid-dissolve-tablet",
    name: "4-in-1 ED Rapid Dissolve Tablet",
    medicalName: "Tadalafil + Vardenafil + Apomorphine",
    price: "79.00",
    image: "/products/ed-rapid-dissolve-tablet-hero.png",
    slug: "ed-rapid-dissolve-tablet",
  },
  {
    id: "topical-dutasteride",
    name: "Topical Dutasteride",
    medicalName: "Minoxidil + Dutasteride + Tretinoin",
    price: "69.00",
    image: "/products/topical-dutasteride-hero.png",
    slug: "topical-dutasteride",
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
  title: "Better Formulas. Smarter Rx Prices.",
  description:
    "Skip fancy packaging and save more on prescription treatments for hair loss, ED, testosterone, and more. Prescribed by licensed U.S. providers.",
};

export default function Home() {
  return (
    <main>
      <HeroSection />

      <section className="max-w-[1200px] mx-auto mt-8 xl:mt-16 px-4 xl:px-0">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-3">
          {DUMMY_CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <CardsSection />
      <ProductCarousel title="Our Best Sellers" products={BEST_SELLERS} />
    </main>
  );
}