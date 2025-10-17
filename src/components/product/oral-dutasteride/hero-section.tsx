// src/components/product/oral-dutasteride/hero-section.tsx
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
            src="/products/oral-dutasteride-hero.png"
            alt="Oral Dutasteride + Oral Minoxidil + 6 Hair Health Supplements"
            fill
            className="object-contain object-center"
          />
        </div>
        <div className="flex w-full flex-col gap-y-10 py-6 px-1 xl:py-0 xl:px-19">
          <div className="space-y-3">
            <p className="font-title text-2xl font-medium tracking-tight xl:text-4xl">
              Oral Dutasteride + Oral Minoxidil + 6 Hair Health Supplements
            </p>
            <p className="text-sm xl:text-base">
              A powerful daily capsule with prescription Dutasteride and
              Minoxidil for more advanced hair loss. The 8-in-1 perfect
              prescription + supplement hair loss formula.
            </p>
            <div className="flex items-center justify-start gap-x-3">
              <div className="flex items-center justify-start gap-x-1">
                <StarFillIcon className="size-3.5" />
                <StarFillIcon className="size-3.5" />
                <StarFillIcon className="size-3.5" />
                <StarFillIcon className="size-3.5" />
                <StarFillIcon className="size-3.5" />
              </div>
              <p className="text-xs text-neutral-800">
                (<span className="tabular-nums">4.9/5</span>)
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-x-3">
                <Beaker className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Potent, research-backed clinical ingredients for advanced hair
                  loss.
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
                  Fortified with bioavailable Biotin, vitamins, and minerals.
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <ShieldCheck className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Formulated by physicians and pharmacists; prescribed online.
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
                <p className="tabular-nums text-2xl text-muted-foreground">
                  From $169
                </p>
                <p className="text-muted-foreground">
                  Billed and delivered every 3 months.
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
                  From $249
                </p>
                <p className="text-muted-foreground">
                  Billed and delivered every 5 months.
                </p>
              </div>
            </label>
          </div>

          <a
            href="https://checkout.unbrandedrx.co/hair-compound-oral?priceId=2082"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="filled" size="xl" className="mt-4 w-full">
              Start My Visit
            </Button>
          </a>

          {/* SURGICAL STRIKE: Replaced condensed safety info with the new comprehensive version. */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="hover:no-underline text-sm font-semibold">
                Important Safety Information
              </AccordionTrigger>
              <AccordionContent className="text-xs space-y-4">
                <p>
                  <strong>Active Ingredients:</strong> Minoxidil, Dutasteride.
                  This medication contains multiple active ingredients. Review
                  all sections carefully.
                </p>
                <div>
                  <h4 className="font-bold">A. Minoxidil Information</h4>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                      <strong>Important Warnings:</strong> Minoxidil is a potent
                      medication and must be administered under close
                      supervision. It can cause serious cardiac effects,
                      including pericardial effusion (fluid around the heart),
                      and may worsen angina.
                    </li>
                    <li>
                      <strong>Do Not Use If:</strong> You have a pheochromocytoma
                      (adrenal gland tumor) or are allergic to any ingredients.
                    </li>
                    <li>
                      <strong>Seek Immediate Care If:</strong> You experience new
                      or worsening chest pain, shortness of breath, pain upon
                      breathing, or a rapid or pounding heartbeat.
                    </li>
                    <li>
                      <strong>Monitoring:</strong> You should monitor your weight
                      and blood pressure regularly. Contact your provider if you
                      gain 5 or more pounds rapidly.
                    </li>
                    <li>
                      <strong>Pregnancy/Breastfeeding:</strong> Minoxidil should
                      not be used by women who are pregnant, may become
                      pregnant, or are breastfeeding.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">B. Dutasteride Information</h4>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                      <strong>For Men Only:</strong> This medication is not for
                      use by women or children.
                    </li>
                    <li>
                      <strong>Pregnancy Risk:</strong> Women who are pregnant or may
                      become pregnant must not handle crushed or broken
                      capsules. The active ingredient can be absorbed through
                      the skin and cause birth defects in a male fetus. If
                      contact occurs, wash the area immediately with soap and
                      water.
                    </li>
                    <li>
                      <strong>Prostate Cancer Risk:</strong> 5-alpha-reductase
                      inhibitors, including Dutasteride, may increase the risk
                      of a more serious form of prostate cancer.
                    </li>
                    <li>
                      <strong>PSA Levels:</strong> Dutasteride lowers
                      Prostate-Specific Antigen (PSA) levels. Inform your
                      {/* BUILD FIX: Escaped unescaped apostrophe in "doctor's". */}
                      doctor that you are taking this medication. Any
                      subsequent rise in your PSA levels should be carefully
                      evaluated.
                    </li>
                    <li>
                      <strong>Potential Drug Interactions:</strong> Do not take
                      this medication if you are also taking Avodart®,
                      Propecia®, or Proscar®. Inform your provider of all
                      medications you take, including St. John&apos;s wort.
                    </li>
                    <li>
                      <strong>Potential Side Effects:</strong> Common side effects may
                      include sexual side effects such as impotence, a decrease
                      in libido, and ejaculation disorders. Less common side
                      effects may include breast tenderness or enlargement.
                      Report any changes in your breasts to your provider.
                    </li>
                  </ul>
                </div>
                <p className="mt-2 italic">
                  This is not a complete list of contraindications, warnings, or
                  side effects. For complete medical advice, consult your
                  provider. You may report side effects to the FDA at
                  1-800-FDA-1088.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}