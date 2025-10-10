// src/components/product/topical-finasteride/hero-section.tsx
"use client";

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
import { useEffect, useState } from "react";
import { Droplets, Sparkles, Beaker, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="container mx-auto my-4 px-4 xl:my-15 xl:px-0">
      <div className="flex flex-col justify-between gap-x-4 xl:flex-row xl:items-stretch">
        <div className="relative h-full min-h-[590px] w-full overflow-hidden rounded-3xl">
          {/* SURGICAL STRIKE: Update alt text to match new product name */}
          <Image
            src="/products/topical-finasteride-hero.png"
            alt="Topical Finasteride + Minoxidil + Tretinoin + Fluocinolone + Biotin"
            fill
            className="object-contain object-center"
          />
        </div>
        <div className="flex w-full flex-col gap-y-10 py-6 px-1 xl:py-0 xl:px-19">
          <div className="space-y-3">
            {/* SURGICAL STRIKE: Update product title for consistency and clarity */}
            <p className="font-title text-2xl font-medium tracking-tight xl:text-4xl">
              Topical Finasteride + Minoxidil + Tretinoin + Fluocinolone + Biotin
            </p>
            <p className="text-sm xl:text-base">
              A powerful, multi-action serum that combines four key
              ingredients to fight hair loss directly at the scalp. The perfect
              5-in-1 topical hair loss formula.
            </p>
            <div className="flex items-center justify-start gap-x-3">
              <div className="flex items-center justify-start gap-x-1">
                <StarFillIcon className="size-3.5" />
                <StarFillIcon className="size-3.5" />
                <StarFillIcon className="size-3.5" />
                <StarFillIcon className="size-3.5" />
                <StarFillIcon className="text-muted-foreground size-3.5" />
              </div>
              <p className="text-xs text-neutral-800">
                (<span className="tabular-nums">4.8/5</span>)
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-x-3">
                <Beaker className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Physician & Pharmacist formulated with research-backed
                  clinical ingredients.
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <Droplets className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Copper-infused liposomal formula for optimal bioavailability
                  and absorption.
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <ShieldCheck className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  A pill-free alternative that targets hair loss at the source.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between space-y-3">
            <label className="radio-wrapper">
              <input
                className="peer absolute opacity-0"
                type="radio"
                name="price"
                value="price-1"
                id="price-1"
              />
              <div className="radio-card">
                <div className="flex w-full justify-between">
                  <p className="font-semibold">Monthly Supply</p>
                  <CheckCircleFillIcon className="radio-icon" />
                </div>
                <p className="tabular-nums text-2xl text-muted-foreground">
                  From $59
                </p>
                <p className="text-muted-foreground">
                  Billed and delivered every month.
                </p>
              </div>
            </label>
            <label className="radio-wrapper">
              <input
                className="peer absolute opacity-0"
                type="radio"
                name="price"
                value="price-2"
                id="price-2"
                defaultChecked
              />
              <div className="radio-card">
                <div className="flex w-full justify-between">
                  <Badge>Most Popular</Badge>
                  <CheckCircleFillIcon className="radio-icon" />
                </div>
                <p className="font-semibold">Quarterly Supply</p>
                <p className="tabular-nums text-2xl text-muted-foreground">
                  From $139
                </p>
                <p className="text-muted-foreground">
                  Billed and delivered every 3 months. Save up to 21%.
                </p>
              </div>
            </label>
            <label className="radio-wrapper">
              <input
                className="peer absolute opacity-0"
                type="radio"
                name="price"
                value="price-3"
                id="price-3"
              />
              <div className="radio-card">
                <div className="flex w-full justify-between">
                  <Badge>Best Value</Badge>
                  <CheckCircleFillIcon className="radio-icon" />
                </div>
                <p className="font-semibold">5-Month Supply</p>
                <p className="tabular-nums text-2xl text-muted-foreground">
                  From $199
                </p>
                <p className="text-muted-foreground">
                  Billed and delivered every 5 months. Save up to 32%.
                </p>
              </div>
            </label>
          </div>

          <a
            href="https://checkout.unbranded.co/hair_compound_topical?priceId=2015"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="filled" size="xl" className="mt-4 w-full">
              Start My Visit
            </Button>
          </a>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="hover:no-underline text-sm font-semibold">
                Important Safety Information
              </AccordionTrigger>
              <AccordionContent className="text-xs space-y-4">
                <div>
                  <h4 className="font-bold">How to Use:</h4>
                  <p>
                    Apply once daily at night to a clean, dry scalp. Wash hands
                    after application. Avoid contact with eyes or mouth. Allow
                    to dry for at least 4 hours before washing. Results may take
                    2-4 months to appear.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Important Warnings:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong>For Men Only:</strong> This product is for use by
                      men only.
                    </li>
                    <li>
                      <strong>Pregnancy Risk:</strong> Women who are pregnant or may
                      become pregnant must not handle or use this medication.
                      Finasteride can be absorbed through the skin and cause
                      birth defects in a male fetus.
                    </li>
                    <li>
                      <strong>Prostate Cancer Risk:</strong> Finasteride may
                      increase the risk of a more serious form of prostate
                      cancer.
                    </li>
                    <li>
                      <strong>PSA Levels:</strong> Finasteride can lower PSA levels.
                      Inform your doctor you are using this medication.
                    </li>
                    <li>
                      <strong>Contraindications:</strong> Do not use if you are
                      allergic to any ingredients. Inform your provider of any
                      history of heart, liver, or kidney disease, prostate
                      cancer, or Cushing's Syndrome.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Potential Side Effects:</h4>
                  <p>
                    Common side effects are typically localized to the scalp,
                    such as itching, redness, or irritation. Though rare with
                    topical application, systemic side effects are possible and
                    may include sexual side effects such as decreased libido or
                    trouble with erections, breast tenderness, or dizziness.
                    Seek emergency help for severe allergic reactions.
                  </p>
                </div>
                <p className="italic">
                  This is not an exhaustive list. For complete medical advice,
                  consult your provider. You may report side effects to the FDA
                  at 1-800-FDA-1088.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}