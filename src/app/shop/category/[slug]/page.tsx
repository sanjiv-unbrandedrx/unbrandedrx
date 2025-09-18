import HeroSection from "@/components/category/hero-section";
import ProductCarousel from "@/components/common/product-carousel";
import ProductGridSection from "@/components/category/product-grid-section";
import Image from "next/image";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main>
      <HeroSection slug={slug} />
      <ProductGridSection />

      <section className="container mx-auto py-25 px-4 xl:px-0">
        <div className="relative min-h-[500px]">
          <Image
            className="rounded-xl object-center object-cover"
            src={"/categories/category-closeup.png"}
            alt="Category Closeup"
            fill
          />
        </div>
      </section>

      <ProductCarousel title="See Also" />
    </main>
  );
}
