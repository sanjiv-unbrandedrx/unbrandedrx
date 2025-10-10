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
// REFACTOR: Import icons for the new feature list.
import { BarChart, Zap, Package, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  // BUILD FIX: Removed unused 'isClient' state variable.

  return (
    <section className="container mx-auto my-4 px-4 xl:my-15 xl:px-0">
      <div className="flex flex-col justify-between gap-x-4 xl:flex-row xl:items-stretch">
        <div className="relative h-full min-h-[590px] w-full overflow-hidden rounded-3xl">
          <Image
            src="/products/enclomiphene-hero.png"
            alt="Enclomiphene"
            fill
            // REFACTOR: Changed image treatment to 'object-contain' for consistency.
            className="object-contain object-center"
          />
        </div>
        <div className="flex w-full flex-col gap-y-10 py-6 px-1 xl:py-0 xl:px-19">
          <div className="space-y-3">
            <p className="font-title text-2xl font-medium tracking-tight xl:text-4xl">
              Enclomiphene
            </p>
            <p className="text-sm xl:text-base">
              A modern, oral medication designed to support your body&apos;s
              natural testosterone production.
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

            {/* REFACTOR: Replaced the old text-based list with a new icon-based list. */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-x-3">
                <BarChart className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Promotes healthy testosterone levels.
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <Zap className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Supports your body&apos;s own hormone production.
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <Package className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Convenient once-a-day capsule.
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
                  From $79
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
                  From $189
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
                  From $319
                </p>
                <p className="text-muted-foreground">
                  Billed and delivered every 5 months. Save up to 25%.
                </p>
              </div>
            </label>
          </div>

          {/* SURGICAL STRIKE: Removed the strength label and dropdown component. */}

          <a
            href="https://checkout.unbranded.co/enclomiphine?priceId=1998"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="filled" size="xl">
              Start My Visit
            </Button>
          </a>
          {/* TASK 44: Added comprehensive safety information accordion. */}
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
                    <li>
                      You have a history of hormone-related cancers.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Consult Your Provider Before Use</h4>
                  <p>
                    To ensure Enclomiphene is safe for you, inform your
                    provider if you have ever had:
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
                    Get emergency medical help for signs of an allergic
                    reaction (hives, difficulty breathing, swelling of your
                    face, lips, tongue, or throat) or signs of a blood clot
                    (shortness of breath, chest pain, swelling in the legs).
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
                  occur. Call your doctor for medical advice about side
                  effects. You may report side effects to the FDA at
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