import Link from "next/link";
import HeroSection from "../components/home/hero-section";
import CategoryCard, { CategoryItem } from "@/components/home/category-card";
import CardsSection from "@/components/home/cards-section";
import FeaturedSection from "@/components/home/featured-section";
import ProductCarousel from "@/components/common/product-carousel";

const DUMMY_CATEGORIES: CategoryItem[] = [
  {
    id: "hair-loss",
    name: "Hair Loss",
    description: "Solutions for preventing hair loss and promoting regrowth",
    image: "/home/hair-loss.png",
    slug: "hair-loss",
  },
  {
    id: "sexual-health",
    name: "Sexual Health",
    description: "Treatments for erectile dysfunction and improved performance",
    image: "/home/sexual-health.png",
    slug: "sexual-health",
  },
];

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
      <FeaturedSection />
      <ProductCarousel title="Our Best Sellers" />
    </main>
  );
}
