// File: src/app/(main)/about/page.tsx
import Header from "@/components/common/Header";
import HeroSection from "@/components/about/hero-section";
import PillarsSection from "@/components/about/pillars-section";
import PartnerSection from "@/components/about/partner-section";
import DirectorSection from "@/components/about/director-section";
import MissionSection from "@/components/about/mission-section";

export default function AboutUsPage() {
  return (
    <main>
      <section className="px-4 xl:px-0">
        <Header />
      </section>
      <HeroSection />
      <PillarsSection />
      <PartnerSection />
      <DirectorSection />
      <MissionSection />
    </main>
  );
}