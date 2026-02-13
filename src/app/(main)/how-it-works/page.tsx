// File: src/app/(main)/how-it-works/page.tsx
import type { Metadata } from "next";
import Header from "@/components/common/Header";
import HeroSection from "@/components/how-it-works/hero-section";
import ProcessSection from "@/components/how-it-works/process-section";
import FaqSection from "@/components/how-it-works/faq-section";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Complete a quick online visit, get reviewed by a licensed U.S. provider, and receive your prescription medication with free, discreet delivery.",
};

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