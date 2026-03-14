import type { Metadata } from "next";
import Header from "@/components/common/Header";
import HeroSection from "@/components/staging/product/oral-sermorelin/hero-section";
import HowItWorksSection from "@/components/staging/product/how-it-works-section";
import DeepDiveSection from "@/components/staging/product/oral-sermorelin/deep-dive-section";
import LabTestingSection from "@/components/staging/product/lab-testing-section";
import ContentModule from "@/components/staging/product/oral-sermorelin/content-module";
import QuestionsSection from "@/components/staging/product/oral-sermorelin/questions";
import ProductJsonLd from "@/components/seo/product-jsonld";

export const metadata: Metadata = {
  title: "Oral Sermorelin",
  description:
    "Oral Sermorelin Acetate — a growth hormone-releasing peptide to support recovery, sleep, and body composition. From $119/month, prescribed by a licensed U.S. provider.",
};

export default function ProductPage() {
  return (
    <main>
      <ProductJsonLd
        name="Oral Sermorelin"
        description="A growth hormone-releasing peptide designed to support recovery, sleep quality, and body composition."
        image="/products/oral-sermorelin-hero.png"
        price="119.00"
        sku="oral-sermorelin"
        url="/find/treatment/oral-sermorelin"
      />
      <section className="px-4 xl:px-0">
        <Header />
      </section>
      <HeroSection />
      <HowItWorksSection />
      <DeepDiveSection />
      <LabTestingSection />
      <ContentModule />
      <QuestionsSection />
    </main>
  );
}
