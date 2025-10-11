// src/components/home/hero-section.tsx
// SURGICAL STRIKE: Import Link component
import Link from "next/link";
import Header from "@/components/common/Header";
import Button from "@/components/ui/button-custom";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 xl:px-0">
      <div className="pb-16 xl:pb-48 bg-[#f0edf0] xl:bg-[url(/home/hero.webp)] bg-right bg-cover bg-no-repeat rounded-2xl mt-5 px-12">
        <Header />
        <div className="max-w-md space-y-6 mb-9 mt-12 xl:mt-35">
          {/* DEVAN FEEDBACK: Updated headline */}
          {/* SURGICAL STRIKE: Added a line break to match the mockup design. */}
          <h2 className="font-title font-medium text-3xl xl:text-4xl tracking-tight">
            Better Formulas. <br /> Smarter Rx Prices.
          </h2>
          {/* DEVAN FEEDBACK: Updated sub-headline */}
          <p className="font-light text-xl xl:text-2xl text-neutral-700 xl:text-muted-foreground">
            Skip fancy packaging. Save more & have access to better
            prescription formulas.
          </p>
        </div>
        {/* SURGICAL STRIKE: Updated button text and linked to all-products page */}
        <Button size="xl" variant="filled">
          <Link href="/shop/category/all-products">Shop All Treatments</Link>
        </Button>
      </div>
    </section>
  );
}