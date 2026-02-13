import type { Metadata } from "next";
import Header from "@/components/common/Header";
import ContentModule from "@/components/product/topical-dutasteride/content-module";
import DeepDiveSection from "@/components/product/topical-dutasteride/deep-dive-section";
import HeroSection from "@/components/product/topical-dutasteride/hero-section";
import QuestionsSection from "@/components/product/topical-dutasteride/questions";
import HowItWorksSection from "@/components/product/how-it-works-section";
import ProductJsonLd from "@/components/seo/product-jsonld";

export const metadata: Metadata = {
  title: "Topical Dutasteride",
  description:
    "Topical Dutasteride with Minoxidil and Tretinoin — a compounded hair loss solution applied directly to the scalp. From $69/month.",
};

export default function ProductPage() {
  return (
    <main>
      <ProductJsonLd
        name="Topical Dutasteride"
        description="A maximum-strength topical serum combining Dutasteride, Minoxidil, and Tretinoin for advanced hair loss."
        image="/products/topical-dutasteride-hero.png"
        price="69.00"
        sku="topical-dutasteride"
        url="/find/treatment/topical-dutasteride"
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