import Link from "next/link";
import Header from "@/components/common/Header";
import Button from "@/components/ui/button-custom";
import Placeholder from "@/components/staging/ui/placeholder";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 xl:px-0">
      <div className="relative overflow-hidden rounded-2xl mt-5 px-6 xl:px-12 bg-[#f0edf0]">
        {/* Placeholder for hero background image */}
        <div className="absolute inset-0 hidden xl:flex items-center justify-end pointer-events-none">
          <Placeholder
            width={800}
            height={600}
            label="Hero Background"
            icon="hero"
            className="opacity-30 w-full h-full"
          />
        </div>

        <div className="relative z-10">
          <Header />
          <div className="max-w-lg space-y-6 mb-9 mt-12 xl:mt-35 pb-16 xl:pb-48">
            <h1 className="font-title font-medium text-3xl xl:text-5xl tracking-tight">
              Better Formulas. <br /> Smarter Rx Prices.
            </h1>
            <p className="font-light text-xl xl:text-2xl text-neutral-700">
              Prescription-grade treatments without the pharmacy markup.
              Clinician-led care, delivered to your door.
            </p>
            <Button size="xl" variant="filled">
              <Link href="/staging/treatment/injectable-sermorelin">
                Browse Treatments
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
