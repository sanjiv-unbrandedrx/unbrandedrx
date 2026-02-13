import type { Metadata } from "next";
import Header from "@/components/common/Header";
import ContentModule from "@/components/product/ed-rapid-dissolve-tablet/content-module";
import DeepDiveSection from "@/components/product/ed-rapid-dissolve-tablet/deep-dive-section";
import HeroSection from "@/components/product/ed-rapid-dissolve-tablet/hero-section";
import QuestionsSection from "@/components/product/ed-rapid-dissolve-tablet/questions";
import HowItWorksSection from "@/components/product/how-it-works-section";
import ProductJsonLd from "@/components/seo/product-jsonld";

export const metadata: Metadata = {
  title: "4-in-1 ED Rapid Dissolve Tablet",
  description:
    "A fast-acting, multi-ingredient ED tablet combining Tadalafil, Vardenafil, and Apomorphine in a discreet rapid-dissolve format. From $79/month.",
};

export default function ProductPage() {
  return (
    <main>
      <ProductJsonLd
        name="4-in-1 ED Rapid Dissolve Tablet"
        description="A fast-acting, multi-symptom solution for erectile dysfunction combining Tadalafil, Vardenafil, and Apomorphine."
        image="/products/ed-rapid-dissolve-tablet-hero.png"
        price="79.00"
        sku="ed-rdt-4in1"
        url="/find/treatment/ed-rapid-dissolve-tablet"
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