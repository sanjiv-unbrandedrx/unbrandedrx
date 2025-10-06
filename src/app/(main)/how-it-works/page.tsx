// File: src/app/(main)/how-it-works/page.tsx
import Header from "@/components/common/Header";
import HeroSection from "@/components/how-it-works/hero-section";
import ProcessSection from "@/components/how-it-works/process-section";
import FaqSection from "@/components/how-it-works/faq-section";

export default function HowItWorksPage() {
  return (
    <main>
      <section className="px-4 xl:px-0">
        <Header />
      </section>
      <HeroSection />
      {/* SURGICAL STRIKE: The Promise section content is now inside ProcessSection */}
      <ProcessSection />
      <FaqSection />
    </main>
  );
}