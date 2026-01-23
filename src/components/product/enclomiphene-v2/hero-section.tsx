"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircleFillIcon } from "@/components/svg/check-circle-fill-icon";
import StarFillIcon from "@/components/svg/star-fill-icon";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button-custom";
import Image from "next/image";
import { Zap, Heart, Brain, Dumbbell, Shield, Pill } from "lucide-react";

type PricingTier = "monthly" | "quarterly" | "5-month";

const pricingData: Record<PricingTier, { label: string; price: string; ctaText: string }> = {
  monthly: { label: "Monthly", price: "$79", ctaText: "Get Started — $79/month" },
  quarterly: { label: "Quarterly", price: "$189", ctaText: "Get Started — $189/quarter" },
  "5-month": { label: "5-Month", price: "$319", ctaText: "Get Started — $319 for 5 months" },
};

export default function HeroSection() {
  const [selectedTier, setSelectedTier] = useState<PricingTier>("quarterly");
  return (
    <section className="container mx-auto my-4 px-4 xl:my-15 xl:px-0">
      <div className="flex flex-col justify-between gap-x-4 xl:flex-row xl:items-stretch">
        <div className="relative h-full min-h-[590px] w-full overflow-hidden rounded-3xl">
          <Image
            src="/products/enclomiphene-hero.png"
            alt="Enclomiphene - Natural Testosterone Booster"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
        <div className="flex w-full flex-col gap-y-8 py-6 px-1 xl:py-0 xl:px-19">
          <div className="space-y-4">
            <div className="flex items-center gap-x-2">
              <Badge className="bg-emerald-600">Fertility Safe</Badge>
              <Badge className="bg-blue-600">No Injections</Badge>
            </div>
            <h1 className="font-title text-2xl font-medium tracking-tight xl:text-4xl">
              Enclomiphene
            </h1>
            <p className="text-base xl:text-lg text-neutral-700">
              Boost your testosterone naturally. A daily capsule that works with
              your body—not against it.
            </p>

            {/* Quantified Claim */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <p className="text-emerald-800 font-medium text-sm">
                Most men see a <span className="font-bold">1.5-2x increase</span> in
                testosterone levels within 6-8 weeks of consistent use.
              </p>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-start gap-x-4">
              <div className="flex items-center justify-start gap-x-1">
                <StarFillIcon className="size-4 text-amber-400" />
                <StarFillIcon className="size-4 text-amber-400" />
                <StarFillIcon className="size-4 text-amber-400" />
                <StarFillIcon className="size-4 text-amber-400" />
                <StarFillIcon className="size-4 text-amber-400" />
              </div>
              <p className="text-sm text-neutral-700">
                <span className="font-semibold tabular-nums">4.8/5</span> from{" "}
                <span className="font-semibold">500+ reviews</span>
              </p>
            </div>

            {/* Benefit-Focused Features */}
            <div className="grid grid-cols-1 gap-3 pt-2">
              <div className="flex items-start gap-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Zap className="size-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900">
                    Restore Energy & Drive
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Feel more motivated and alert throughout the day
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Heart className="size-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900">
                    Enhance Libido & Performance
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Support healthy sexual function naturally
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Brain className="size-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900">
                    Sharpen Focus & Mood
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Improved mental clarity and emotional balance
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Dumbbell className="size-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-900">
                    Support Lean Muscle
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Optimize body composition and metabolism
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Options */}
          <div className="flex flex-col justify-between space-y-3">
            <label className="radio-wrapper">
              <input
                className="peer absolute opacity-0"
                type="radio"
                name="price"
                value="monthly"
                id="price-monthly"
                checked={selectedTier === "monthly"}
                onChange={() => setSelectedTier("monthly")}
              />
              <div className="radio-card">
                <div className="flex w-full justify-between">
                  <p className="font-semibold">Monthly</p>
                  <CheckCircleFillIcon className="radio-icon" />
                </div>
                <div className="flex items-baseline gap-x-2">
                  <p className="tabular-nums text-2xl font-bold text-neutral-900">
                    $79
                  </p>
                  <p className="text-sm text-muted-foreground">/month</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  No commitment. Cancel anytime.
                </p>
              </div>
            </label>
            <label className="radio-wrapper">
              <input
                className="peer absolute opacity-0"
                type="radio"
                name="price"
                value="quarterly"
                id="price-quarterly"
                checked={selectedTier === "quarterly"}
                onChange={() => setSelectedTier("quarterly")}
              />
              <div className="radio-card">
                <div className="flex w-full justify-between items-center">
                  <div className="flex items-center gap-x-2">
                    <Badge>Most Popular</Badge>
                    <span className="text-xs font-medium text-emerald-600">
                      Save $48
                    </span>
                  </div>
                  <CheckCircleFillIcon className="radio-icon" />
                </div>
                <p className="font-semibold">Quarterly</p>
                <div className="flex items-baseline gap-x-2">
                  <p className="tabular-nums text-2xl font-bold text-neutral-900">
                    $63
                  </p>
                  <p className="text-sm text-muted-foreground">/month</p>
                  <p className="text-xs text-muted-foreground line-through">
                    $79
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">
                  $189 billed every 3 months. Free shipping.
                </p>
              </div>
            </label>
            <label className="radio-wrapper">
              <input
                className="peer absolute opacity-0"
                type="radio"
                name="price"
                value="5-month"
                id="price-5-month"
                checked={selectedTier === "5-month"}
                onChange={() => setSelectedTier("5-month")}
              />
              <div className="radio-card">
                <div className="flex w-full justify-between items-center">
                  <div className="flex items-center gap-x-2">
                    <Badge className="bg-emerald-600">Best Value</Badge>
                    <span className="text-xs font-medium text-emerald-600">
                      Save $76
                    </span>
                  </div>
                  <CheckCircleFillIcon className="radio-icon" />
                </div>
                <p className="font-semibold">5-Month Supply</p>
                <div className="flex items-baseline gap-x-2">
                  <p className="tabular-nums text-2xl font-bold text-neutral-900">
                    $64
                  </p>
                  <p className="text-sm text-muted-foreground">/month</p>
                  <p className="text-xs text-muted-foreground line-through">
                    $79
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">
                  $319 billed every 5 months. Free shipping + lab kit.
                </p>
              </div>
            </label>
          </div>

          {/* CTA */}
          <a
            href="https://checkout.unbrandedrx.co/enclomiphine?priceId=1998"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="filled" size="xl" fullWidth>
              {pricingData[selectedTier].ctaText}
            </Button>
          </a>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-x-1">
              <Shield className="size-3.5" />
              <span>Licensed U.S. Providers</span>
            </div>
            <div className="flex items-center gap-x-1">
              <Pill className="size-3.5" />
              <span>FDA-Registered Pharmacy</span>
            </div>
            <div className="flex items-center gap-x-1">
              <Zap className="size-3.5" />
              <span>Free Shipping</span>
            </div>
          </div>

          {/* Safety Information */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="hover:no-underline text-sm font-semibold">
                Important Safety Information
              </AccordionTrigger>
              <AccordionContent className="text-xs space-y-4">
                <div>
                  <h4 className="font-bold">
                    Contraindications (Do Not Take If):
                  </h4>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                      You have an allergy or hypersensitivity to Enclomiphene or
                      Clomiphene.
                    </li>
                    <li>
                      You have liver disease or a history of liver dysfunction.
                    </li>
                    <li>
                      You have thyroid dysfunction, adrenal dysfunction, or an
                      intracranial lesion such as a pituitary tumor.
                    </li>
                    <li>
                      You are a woman or child; this medication is intended for
                      use in men only.
                    </li>
                    <li>
                      You have a history of or are at risk for blood clots.
                    </li>
                    <li>You have a history of hormone-related cancers.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">
                    Consult Your Provider Before Use
                  </h4>
                  <p>
                    To ensure Enclomiphene is safe for you, inform your provider
                    if you have ever had:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Liver disease or increased liver enzymes</li>
                    <li>Thyroid or adrenal dysfunction</li>
                    <li>Intracranial lesions including pituitary tumors</li>
                    <li>
                      Blood clots, or if you take blood-thinning medications
                    </li>
                    <li>Heart disease or other cardiac conditions</li>
                    <li>Cancer</li>
                    <li>High cholesterol or triglycerides</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Potential Side Effects</h4>
                  <p>
                    Get emergency medical help for signs of an allergic reaction
                    (hives, difficulty breathing, swelling of your face, lips,
                    tongue, or throat) or signs of a blood clot (shortness of
                    breath, chest pain, swelling in the legs).
                  </p>
                  <p className="mt-2">
                    Common side effects of Enclomiphene may include:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Headache</li>
                    <li>
                      Visual symptoms (blurring, spots, flashes, floaters)
                    </li>
                    <li>Abdominal or pelvic pain or bloating</li>
                    <li>Hot flashes</li>
                    <li>Nausea, vomiting, or diarrhea</li>
                    <li>Breast discomfort or tenderness</li>
                    <li>Dizziness</li>
                    <li>Mood changes (aggression, irritability, anxiety)</li>
                    <li>Acne</li>
                  </ul>
                </div>
                <p className="mt-2 italic">
                  This is not a complete list of side effects and others may
                  occur. Call your doctor for medical advice about side effects.
                  You may report side effects to the FDA at 1-800-FDA-1088.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
