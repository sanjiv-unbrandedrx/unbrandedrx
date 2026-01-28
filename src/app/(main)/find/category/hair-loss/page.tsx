import HeroSection from "@/components/category/hair-loss/hero-section";
import ProductGridSection from "@/components/category/hair-loss/product-grid-section";
import ProductCarousel from "@/components/common/product-carousel";
import Image from "next/image";

export default function HairLossCategoryPage() {
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
