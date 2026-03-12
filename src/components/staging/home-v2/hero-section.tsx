import Header from "@/components/common/Header";
import Link from "next/link";
import Button from "@/components/ui/button-custom";
import { ShieldCheck, BadgeCheck, Building2, Star } from "lucide-react";

const trustBadges = [
  {
    icon: ShieldCheck,
    title: "LegitScript Certified",
    description: "Verified healthcare compliance.",
  },
  {
    icon: BadgeCheck,
    title: "U.S. Licensed Providers",
    description: "Prescriptions reviewed by licensed professionals.",
  },
  {
    icon: Building2,
    title: "U.S. Compounding Pharmacy",
    description: "Compounded in accredited U.S. pharmacies.",
  },
  {
    icon: Star,
    title: "Top Patient Ratings",
    description: "Trusted care, nationwide.",
  },
];

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 xl:px-0">
      <div className="bg-white rounded-2xl mt-5 px-6 xl:px-12 pb-12 xl:pb-16">
        <Header />
        <div className="flex flex-col xl:flex-row justify-between items-start gap-8 mt-8 xl:mt-20">
          {/* Left: Headline + CTA */}
          <div className="max-w-lg space-y-6">
            <h1 className="font-title font-semibold text-4xl xl:text-5xl tracking-tight">
              Better Formulas. <br /> Smarter Rx Prices.
            </h1>
            <p className="font-light text-lg xl:text-xl text-neutral-600">
              Prescription-grade treatments without the pharmacy markup.
              Clinician-led care, delivered to your door.
            </p>
          </div>

          {/* Right: Trust Badges */}
          <div className="flex flex-col gap-y-4 xl:max-w-sm w-full">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="flex items-start gap-x-3"
              >
                <div className="size-9 rounded-lg bg-white/80 flex items-center justify-center shrink-0">
                  <badge.icon className="size-5 text-neutral-700" />
                </div>
                <div>
                  <p className="font-title font-medium text-sm">
                    {badge.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {badge.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
