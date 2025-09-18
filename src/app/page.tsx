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
    <main className="px-4 xl:px-0">
      <HeroSection />

      <section className="max-w-[1200px] mx-auto mt-16">
        <div className="grid grid-cols-2 gap-x-6">
          {DUMMY_CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <CardsSection />
      <FeaturedSection />
      <ProductCarousel title="Our Best Sellers" />

      <section className="hidden container mx-auto border-2 border-red-400 border-dashed p-4 bg-secondary font-mono mt-40">
        <p className="font-medium mb-4"> DEV MODE LINKS </p>
        <p className="text-muted-foreground text-sm"> Available links: </p>
        <ul className="flex flex-col gap-y-2 font-title font-medium text-lg">
          <li>
            <Link
              href="/shop/category/hair-loss"
              className="underline underline-offset-2 font-mono"
            >
              Hair Loss
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
