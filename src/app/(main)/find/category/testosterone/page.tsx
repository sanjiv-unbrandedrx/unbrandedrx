// @/app/(main)/shop/category/testosterone/page.tsx
import type { Metadata } from "next";
import HeroSection from "@/components/category/testosterone/hero-section";
import ProductGridSection from "@/components/category/testosterone/product-grid-section";
import ProductCarousel from "@/components/common/product-carousel";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Testosterone Treatments",
  description:
    "Prescription testosterone support treatments including enclomiphene. Promote healthy testosterone levels with clinically-backed formulas.",
};

export default function TestosteroneCategoryPage() {
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

      {/* Note: "See Also" content is not yet dynamic */}
      <ProductCarousel title="See Also" products={[]} />
    </main>
  );
}