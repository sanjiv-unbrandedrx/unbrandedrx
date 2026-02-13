import type { Metadata } from "next";
import Header from "@/components/common/Header";
import ContentModule from "@/components/product/topical-finasteride/content-module";
import DeepDiveSection from "@/components/product/topical-finasteride/deep-dive-section";
import HeroSection from "@/components/product/topical-finasteride/hero-section";
import QuestionsSection from "@/components/product/topical-finasteride/questions";
import HowItWorksSection from "@/components/product/how-it-works-section";
import ProductJsonLd from "@/components/seo/product-jsonld";

export const metadata: Metadata = {
  title: "Topical Finasteride",
  description:
    "Topical Finasteride with Minoxidil and Tretinoin — a compounded hair loss solution applied directly to the scalp. From $59/month.",
};

export default function ProductPage() {
  return (
    <main>
      <ProductJsonLd
        name="Topical Finasteride"
        description="A compounded topical serum combining Finasteride, Minoxidil, and Tretinoin for targeted hair loss treatment."
        image="/products/topical-finasteride-hero.png"
        price="59.00"
        sku="topical-finasteride"
        url="/find/treatment/topical-finasteride"
      />
      <section className="px-4 xl:px-0">
        <Header />
      </section>
      <HeroSection />
      <HowItWorksSection />
      <DeepDiveSection />
      <ContentModule />
      <QuestionsSection />
    </main>
  );
}