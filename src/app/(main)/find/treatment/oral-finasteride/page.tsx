import type { Metadata } from "next";
import Header from "@/components/common/Header";
import ContentModule from "@/components/product/oral-finasteride/content-module";
import DeepDiveSection from "@/components/product/oral-finasteride/deep-dive-section";
import HeroSection from "@/components/product/oral-finasteride/hero-section";
import QuestionsSection from "@/components/product/oral-finasteride/questions";
import HowItWorksSection from "@/components/product/how-it-works-section";
import ProductJsonLd from "@/components/seo/product-jsonld";

export const metadata: Metadata = {
  title: "Oral Finasteride",
  description:
    "Oral Finasteride for hair loss — an FDA-approved DHT blocker to slow hair loss and support regrowth. Prescribed by a licensed U.S. provider.",
};

export default function ProductPage() {
  return (
    <main>
      <ProductJsonLd
        name="Oral Finasteride"
        description="A daily capsule combining prescription Finasteride and Minoxidil to fight hair loss from within."
        image="/products/oral-finasteride-hero.png"
        price="59.00"
        sku="oral-finasteride"
        url="/find/treatment/oral-finasteride"
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