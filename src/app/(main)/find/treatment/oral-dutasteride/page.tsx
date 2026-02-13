import type { Metadata } from "next";
import Header from "@/components/common/Header";
import ContentModule from "@/components/product/oral-dutasteride/content-module";
import DeepDiveSection from "@/components/product/oral-dutasteride/deep-dive-section";
import HeroSection from "@/components/product/oral-dutasteride/hero-section";
import QuestionsSection from "@/components/product/oral-dutasteride/questions";
import HowItWorksSection from "@/components/product/how-it-works-section";
import ProductJsonLd from "@/components/seo/product-jsonld";

export const metadata: Metadata = {
  title: "Oral Dutasteride",
  description:
    "Oral Dutasteride for hair loss — a powerful DHT blocker that targets all three types of 5-alpha reductase enzymes. Prescribed by a licensed U.S. provider.",
};

export default function ProductPage() {
  return (
    <main>
      <ProductJsonLd
        name="Oral Dutasteride"
        description="A powerful daily capsule with prescription Dutasteride and Minoxidil for advanced hair loss."
        image="/products/oral-dutasteride-hero.png"
        price="69.00"
        sku="oral-dutasteride"
        url="/find/treatment/oral-dutasteride"
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