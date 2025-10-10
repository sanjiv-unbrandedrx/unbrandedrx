// src/app/(main)/shop/product/[slug]/page.tsx
import { notFound } from "next/navigation";

export default function ProductPage() {
  // If a URL reaches this dynamic route, it means a specific product
  // page was not found. We trigger a 404 to show the user a proper
  // "Not Found" page instead of a generic placeholder.
  notFound();

  // The code below is now unreachable but is kept for scaffolding reference.
  // In a future dynamic implementation, we would fetch product data here
  // and call notFound() if the data doesn't exist.

  /*
  import Header from "@/components/common/Header";
  import DeepDiveSection from "@/components/product/deep-dive-section";
  import HeroSection from "@/components/product/hero-section";
  import HowItWorksSection from "@/components/product/how-it-works-section";
  import QuestionsSection from "@/components/product/questions";

  return (
    <main>
      <section className="px-4 xl:px-0">
        <Header />
      </section>
      <HeroSection />
      <HowItWorksSection />
      <DeepDiveSection />
      <QuestionsSection />
    </main>
  );
  */
}