// src/components/product/dapoxetine/hero-section.tsx
"use client"; // Required for useState and useEffect

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
// REFACTOR: Import icons for the new feature list.
import { Zap, Clock, ShieldCheck, ClipboardCheck } from "lucide-react";

export default function HeroSection() {
  // BUILD FIX: Removed unused 'isClient' state variable.

  return (
    <section className="container mx-auto my-4 px-4 xl:my-15 xl:px-0">
      <div className="flex flex-col justify-between gap-x-4 xl:flex-row xl:items-stretch">
        <div className="relative h-full min-h-[590px] w-full overflow-hidden rounded-3xl">
          {/* SURGICAL STRIKE: Replaced placeholder service with local, product-specific image path */}
          <Image
            src="/products/dapoxetine-hero.png"
            alt="Dapoxetine"
            fill
            // SURGICAL STRIKE: Changed image treatment from 'object-cover' to 'object-contain' to match other product pages.
            className="object-contain object-center"
          />
        </div>
        <div className="flex w-full flex-col gap-y-10 py-6 px-1 xl:py-0 xl:px-19">
          <div className="space-y-3">
            <p className="font-title text-2xl font-medium tracking-tight xl:text-4xl">
              Dapoxetine
            </p>
            {/* TASK 26: Updated description to specify "oral medication". */}
            <p className="text-sm xl:text-base">
              A prescription oral medication taken as needed to help improve
              ejaculatory control and sexual stamina.
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
                (<span className="tabular-nums">4.7/5</span>)
              </p>
            </div>

            {/* REFACTOR: Replaced the old text-based list with a new icon-based list. */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-x-3">
                <ShieldCheck className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Helps address premature ejaculation (PE) for better control.
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <Clock className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Works on-demand, giving you flexibility to take it only when
                  you need it.
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <Zap className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Fast-acting, short-duration formula designed for timely
                  effectiveness.
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <ClipboardCheck className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Prescribed online by a licensed U.S. provider, if appropriate
                  for you.
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
                  From $89
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
              />
              <div className="radio-card">
                <div className="flex w-full justify-between">
                  <Badge>Most Popular</Badge>
                  <CheckCircleFillIcon className="radio-icon" />
                </div>
                <p className="font-semibold">Quarterly Supply</p>
                <p className="tabular-nums text-2xl text-muted-foreground">
                  From $189
                </p>
                <p className="text-muted-foreground">
                  Billed and delivered every 3 months. Save up to 25%.
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
                  From $379
                </p>
                <p className="text-muted-foreground">
                  Billed and delivered every 5 months. Save up to 30%.
                </p>
              </div>
            </label>
          </div>

          {/* SURGICAL STRIKE: Removed the strength label and dropdown component. */}

          {/* TASK: Added checkout link to CTA button. */}
          <a
            href="https://checkout.unbrandedrx.co/StaminaRx?priceId=1978"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="filled" size="xl">
              Start My Visit
            </Button>
          </a>
          {/* TASK 45: Added comprehensive safety information in a collapsible accordion. */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="hover:no-underline text-sm font-semibold">
                Important Safety Information
              </AccordionTrigger>
              <AccordionContent className="text-xs space-y-4">
                <div>
                  <h4 className="font-bold">Active Ingredient: Dapoxetine</h4>
                </div>
                <div>
                  <h4 className="font-bold">
                    BOXED WARNING: SUICIDALITY AND ANTIDEPRESSANT DRUGS
                  </h4>
                  <p className="mt-2">
                    Antidepressants, including Dapoxetine, may increase the risk
                    of suicidal thinking and behavior in children, adolescents,
                    and young adults. This medication is not for use by
                    children. Depression and other psychiatric disorders are
                    themselves associated with an increased risk of suicide. All
                    patients starting on antidepressant therapy should be
                    monitored closely for clinical worsening, suicidality, or
                    unusual changes in behavior.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Do Not Take If:</h4>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                      You have a known allergy or hypersensitivity to Dapoxetine
                      or other SSRIs.
                    </li>
                    <li>
                      You have a history of heart problems, including heart
                      failure or heart rhythm disorders.
                    </li>
                    <li>You have a history of fainting (syncope).</li>
                    <li>You have moderate to severe liver problems.</li>
                    <li>You have a history of mania or severe depression.</li>
                    <li>
                      You are taking interacting medications such as MAOIs,
                      thioridazine, or other antidepressants (see Potential Drug
                      Interactions below).
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">
                    Consult Your Provider Before Use If You Have a History Of:
                  </h4>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Heart problems</li>
                    <li>Fainting or dizziness from low blood pressure</li>
                    <li>
                      Psychotic or mental health issues, including mania or
                      severe depression
                    </li>
                    <li>Impulse control issues</li>
                    <li>Kidney disease</li>
                    <li>History of or current recreational drug use</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Potential Drug Interactions:</h4>
                  <p>
                    Inform your provider of all medications you take. Do not use
                    Dapoxetine if you are taking or have recently taken:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Monoamine oxidase inhibitors (MAOIs)</li>
                    <li>Thioridazine</li>
                    <li>Lithium</li>
                    <li>Linezolid</li>
                    <li>Tryptophan</li>
                    <li>St. John’s Wort</li>
                    <li>Tramadol</li>
                    <li>Other medicines that treat depression or migraines</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Potential Side Effects:</h4>
                  <p>
                    Seek emergency medical help for signs of an allergic
                    reaction (hives, difficulty breathing, swelling of your
                    face, lips, tongue, or throat) or if you experience thoughts
                    of suicide or harming yourself.
                  </p>
                  <p className="mt-2">
                    Common side effects of Dapoxetine may include:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Dizziness, Headache, Nausea</li>
                    <li>Diarrhea, constipation, bloating, or upset stomach</li>
                    <li>Sleeping problems, strange dreams, or sleepiness</li>
                    <li>Feeling irritable, anxious, or agitated</li>
                    <li>Numbness or &quot;pins and needles&quot;</li>
                    <li>Shakiness (tremor)</li>
                    <li>Trouble concentrating</li>
                    <li>Ringing in the ears (tinnitus)</li>
                    <li>Blurred vision, flushing, sweating</li>
                    <li>Nasal congestion</li>
                    <li>Increased blood pressure</li>
                    <li>Dry mouth</li>
                    <li>Reduced libido</li>
                  </ul>
                </div>
                <p className="mt-2 italic">
                  This is not a complete list of side effects. For medical
                  advice, consult your provider. You may report side effects to
                  the FDA at 1-800-FDA-1088.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}