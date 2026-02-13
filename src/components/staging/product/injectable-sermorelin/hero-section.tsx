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
import { Activity, Moon, Syringe, ShieldCheck, Beaker } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="container mx-auto my-4 px-4 xl:my-15 xl:px-0">
      <div className="flex flex-col justify-between gap-x-4 xl:flex-row xl:items-stretch">
        <div className="relative h-full min-h-[590px] w-full overflow-hidden rounded-3xl flex items-center justify-center bg-neutral-50">
          <Image
            src="/products/injectable-sermorelin-hero.png"
            alt="Injectable Sermorelin"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex w-full flex-col gap-y-10 py-6 px-1 xl:py-0 xl:px-19">
          <div className="space-y-3">
            <h1 className="font-title text-2xl font-medium tracking-tight xl:text-4xl">
              Injectable Sermorelin
            </h1>
            <p className="text-sm xl:text-base">
              A modern peptide therapy designed to support your body&apos;s
              natural growth hormone production. May support deeper sleep,
              faster recovery, energy, and lean muscle mass.
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
                <Activity className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Stimulates natural growth hormone production via the pituitary
                  gland.
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <Moon className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  May support deeper sleep, recovery, and metabolic health.
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <Syringe className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Simple subcutaneous injection — 5 days on, 2 days off.
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <Beaker className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Requires baseline lab work to establish safe treatment levels.
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <ShieldCheck className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Prescribed by a licensed U.S. provider.
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
                  From $119
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
                  From $285
                </p>
                <p className="text-muted-foreground">
                  Billed and delivered every 3 months. Save up to 20%.
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
                  From $449
                </p>
                <p className="text-muted-foreground">
                  Billed and delivered every 5 months. Save up to 25%.
                </p>
              </div>
            </label>
          </div>

          <a
            href="https://checkout.unbrandedrx.co/injectable-sermorelin"
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
                <div>
                  <h4 className="font-bold">
                    Contraindications (Do Not Take If):
                  </h4>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                      You have an allergy or hypersensitivity to Sermorelin or
                      similar peptide medications.
                    </li>
                    <li>
                      You are pregnant, breastfeeding, or planning to become
                      pregnant.
                    </li>
                    <li>
                      You have cancerous or benign tumors, or a history of
                      active cancer.
                    </li>
                    <li>You are under 18 years of age.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">
                    Consult Your Provider Before Use:
                  </h4>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Type 1 or type 2 diabetes</li>
                    <li>Thyroid disease or thyroid dysfunction</li>
                    <li>Autoimmune diseases</li>
                    <li>Cancer or tumor history</li>
                    <li>Growth hormone abnormalities</li>
                    <li>Heart disease or other cardiac conditions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Potential Side Effects</h4>
                  <p>
                    Get emergency medical help for signs of an allergic reaction
                    (hives, difficulty breathing, swelling of your face, lips,
                    tongue, or throat).
                  </p>
                  <p className="mt-2">
                    Common side effects of Injectable Sermorelin may include:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Headache</li>
                    <li>Nausea or vomiting</li>
                    <li>Dizziness</li>
                    <li>Flushing</li>
                    <li>Restlessness or hyperactivity</li>
                    <li>Itching</li>
                    <li>Joint pain</li>
                    <li>
                      Pain, redness, or tenderness at the injection site
                    </li>
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
