// src/components/product/oral-finasteride/hero-section.tsx
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
// BUILD FIX: Removed unused useState and useEffect imports.
import { Droplets, Sparkles, Beaker, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  // BUILD FIX: Removed unused 'isClient' state variable.

  return (
    <section className="container mx-auto my-4 px-4 xl:my-15 xl:px-0">
      <div className="flex flex-col justify-between gap-x-4 xl:flex-row xl:items-stretch">
        <div className="relative h-full min-h-[590px] w-full overflow-hidden rounded-3xl">
          <Image
            src="/products/oral-finasteride-hero.png"
            alt="Oral Finasteride"
            fill
            className="object-contain object-center"
          />
        </div>
        <div className="flex w-full flex-col gap-y-10 py-6 px-1 xl:py-0 xl:px-19">
          <div className="space-y-3">
            <p className="font-title text-2xl font-medium tracking-tight xl:text-4xl">
              Oral Finasteride
            </p>
            <p className="text-sm xl:text-base">
              A daily capsule combining prescription Finasteride and Minoxidil
              to fight hair loss from within. The 8-in-1 perfect prescription +
              supplement hair loss formula.
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
                  Combines two research-backed clinical ingredients to fight
                  hair loss.
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <Droplets className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Advanced liposomal formula for optimal absorption.
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <Sparkles className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Enhanced with bioavailable Biotin and essential hair-healthy
                  vitamins.
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <ShieldCheck className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Expertly formulated by physicians and pharmacists and
                  prescribed online.
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
                value="price-2"
                id="price-2"
              />
              <div className="radio-card">
                <div className="flex w-full justify-between">
                  <p className="font-semibold">Monthly Supply</p>
                  <CheckCircleFillIcon className="radio-icon" />
                </div>
                {/* SURGICAL STRIKE: Added "From " to the price. */}
                <p className="tabular-nums text-2xl text-muted-foreground">
                  From $69
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
                value="price-1"
                id="price-1"
                defaultChecked
              />
              <div className="radio-card">
                <div className="flex w-full justify-between">
                  <Badge>Most Popular</Badge>
                  <CheckCircleFillIcon className="radio-icon" />
                </div>
                <p className="font-semibold">Quarterly Supply</p>
                {/* SURGICAL STRIKE: Added "From " to the price. */}
                <p className="tabular-nums text-2xl text-muted-foreground">
                  From $169
                </p>
                <p className="text-muted-foreground">
                  Billed and delivered every 3 months. Works out to $56/month.
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
                {/* SURGICAL STRIKE: Added "From " to the price. */}
                <p className="tabular-nums text-2xl text-muted-foreground">
                  From $249
                </p>
                <p className="text-muted-foreground">
                  Billed and delivered every 5 months. Save up to 28%.
                </p>
              </div>
            </label>
          </div>

          <a
            href="https://checkout.unbrandedrx.co/hair-compound-oral?priceId=2082"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="filled" size="xl">
              Start My Visit
            </Button>
          </a>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="hover:no-underline text-sm font-semibold">
                Important Safety Information
              </AccordionTrigger>
              <AccordionContent className="text-xs space-y-4">
                <p>
                  This medication contains multiple active ingredients. Review
                  all sections carefully.
                </p>
                <div>
                  <h4 className="font-bold">A. Minoxidil Information</h4>
                  <p>
                    Minoxidil is a potent medication and must be used under
                    close supervision.
                  </p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      <strong>Contraindications & Warnings:</strong> Do not use
                      if you have a pheochromocytoma (adrenal gland tumor).
                      Minoxidil can cause serious cardiac effects, including
                      fluid around the heart. Seek immediate medical help for new
                      or worsening chest pain, shortness of breath, or rapid
                      heart rate.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">B. Finasteride Information</h4>
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      <strong>For Men Only:</strong> Not for use by women or
                      children.
                    </li>
                    <li>
                      <strong>Pregnancy Risk:</strong> Women who are pregnant or may
                      become pregnant must not handle crushed or broken tablets,
                      as the active ingredient can cause birth defects in a male
                      fetus.
                    </li>
                    <li>
                      <strong>Prostate Cancer Risk:</strong> Finasteride may increase
                      the risk of a serious form of prostate cancer.
                    </li>
                    <li>
                      <strong>PSA Levels:</strong> Finasteride causes a decrease in
                      Prostate-Specific Antigen (PSA) levels. Any subsequent
                      rise in PSA should be evaluated by a physician.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Before Taking This Medication</h4>
                  <p>
                    Inform your provider of your complete medical history,
                    especially heart conditions, high or low blood pressure,
                    kidney or liver disease, and prostate issues.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Potential Side Effects</h4>
                  <p>
                    Seek emergency help for severe allergic reactions. Common
                    side effects of Minoxidil include changes in body hair and
                    rash. Common side effects of Finasteride include decreased
                    libido and erectile dysfunction. Less common side effects
                    include breast tenderness, depression, and testicular pain.
                  </p>
                  <p className="mt-2 italic">
                    This is not an exhaustive list. For complete medical advice
                    about side effects, consult your provider.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}