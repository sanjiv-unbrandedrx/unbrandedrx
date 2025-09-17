import HeroSection from "@/app/components/category/hero-section";
import ProductGridSection from "@/app/components/category/product-grid-section";
import ProductCard from "@/app/components/shop/product-card";
import LeftCircleIcon from "@/app/components/svg/left-circle-icon";
import RightCircleFillIcon from "@/app/components/svg/right-circle-fill-icon";
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

      <section className="container mx-auto py-25">
        <div className="relative min-h-[500px]">
          <Image
            className="rounded-xl object-center object-cover"
            src={"/categories/category-closeup.png"}
            alt="Category Closeup"
            fill
          />
        </div>
      </section>

      <section className="bg-secondary py-20 px-30">
        <div className="flex justify-between items-center py-6">
          <h3 className="font-title tracking-tight text-4xl font-semibold">
            See Also
          </h3>
          <div className="flex justify-end items-center gap-x-3">
            <LeftCircleIcon className="size-10" />
            <RightCircleFillIcon className="size-10" />
          </div>
        </div>
        <div className="flex gap-x-5 justify-start items-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </main>
  );
}
