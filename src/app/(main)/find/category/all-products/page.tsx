// @/app/(main)/shop/category/all-products/page.tsx
import type { Metadata } from "next";
import HeroSection from "@/components/category/all-products/hero-section";
import ProductGridSection from "@/components/category/all-products/product-grid-section";
import ProductCarousel from "@/components/common/product-carousel";
import Image from "next/image";

export const metadata: Metadata = {
  title: "All Prescription Treatments",
  description:
    "Browse all clinically-backed prescription treatments from UnbrandedRx. Hair loss, ED, testosterone, and more — without brand markup.",
};

export default function AllProductsCategoryPage() {
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