// File: src/app/(main)/about/page.tsx
import type { Metadata } from "next";
import Header from "@/components/common/Header";
import HeroSection from "@/components/about/hero-section";
import PillarsSection from "@/components/about/pillars-section";
// TASK: Removed PartnerSection import as the section is being removed.
// TASK: Removed DirectorSection import as the section is being removed.
import MissionSection from "@/components/about/mission-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "UnbrandedRx strips away the brand markup to deliver clinically-backed prescription treatments at smarter prices. Learn about our mission.",
};

export default function AboutUsPage() {
  return (
    <main>
      <section className="px-4 xl:px-0">
        <Header />
      </section>
      <HeroSection />
      <PillarsSection />
      {/* TASK: Removed the PartnerSection component. */}
      {/* TASK: Removed the DirectorSection component. */}
      <MissionSection />
    </main>
  );
}