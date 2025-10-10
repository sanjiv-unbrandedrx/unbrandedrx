// src/components/product/ed-rapid-dissolve-tablet/hero-section.tsx
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
// SURGICAL STRIKE: Import icons for the new feature list.
import { Zap, Clock, Droplets, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  // BUILD FIX: Removed unused 'isClient' state variable.

  return (
    <section className="container mx-auto my-4 px-4 xl:my-15 xl:px-0">
      <div className="flex flex-col justify-between gap-x-4 xl:flex-row xl:items-stretch">
        <div className="relative h-full min-h-[590px] w-full overflow-hidden rounded-3xl">
          <Image
            src="/products/ed-rapid-dissolve-tablet-hero.png"
            alt="4-in-1 ED Rapid Dissolve Tablet"
            fill
            className="object-contain object-center"
          />
        </div>
        <div className="flex w-full flex-col gap-y-10 py-6 px-1 xl:py-0 xl:px-19">
          <div className="space-y-3">
            <p className="font-title text-2xl font-medium tracking-tight xl:text-4xl">
              4-in-1 ED Rapid Dissolve Tablet
            </p>
            <p className="text-sm xl:text-base">
              A fast-acting, multi-symptom solution for erectile dysfunction
              in a discreet, rapid-dissolving tablet.
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

            {/* SURGICAL STRIKE: Replaced the old text-based list with a new icon-based list. */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-x-3">
                <Zap className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Multi-pathway formula targets both the physical and
                  psychological aspects of arousal.
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <Clock className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Fast-acting RDT dissolves in the cheek, working in as little
                  as 15-30 minutes.
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <Droplets className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Convenient and discreet — no pills to swallow and no water
                  needed.
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <ShieldCheck className="size-5 text-primary flex-shrink-0" />
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
                  From $199
                </p>
                <p className="text-muted-foreground">
                  Billed and delivered every 3 months. Save up to 15%.
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
                  Billed and delivered every 5 months. Save up to 20%.
                </p>
              </div>
            </label>
          </div>

          <a
            href="https://checkout.unbrandedrx.co/4n1?priceId=2064"
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
                  <ul className="list-disc pl-5">
                    <li>
                      You are using any nitrate-based medications for chest pain
                      or heart conditions. This includes nitroglycerin,
                      isosorbide dinitrate, and isosorbide mononitrate.
                      Combining this medication with nitrates can cause a
                      sudden, dangerous drop in blood pressure.
                    </li>
                    <li>
                      You use recreational drugs known as &quot;poppers&quot; (amyl
                      nitrate or nitrite).
                    </li>
                    <li>
                      You are taking riociguat (Adempas) for pulmonary
                      arterial hypertension.
                    </li>
                    <li>You have a known allergy to any of the active ingredients.</li>
                    <li>
                      You are taking 5HT3 antagonist medications such as
                      ondansetron (Zofran), granisetron, or dolasetron.
                    </li>
                    <li>
                      You have congenital long QT syndrome or are taking class
                      IA (e.g., quinidine, procainamide) or class III (e.g.,
                      amiodarone, sotalol) antiarrhythmic medications.
                    </li>
                  </ul>
                  <p className="mt-2 italic">
                    Seek immediate medical attention if you experience an
                    erection that is painful or lasts for more than 4 hours. A
                    prolonged erection, known as priapism, can cause permanent
                    damage.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Consult Your Provider Before Use</h4>
                  <p>
                    To ensure this medication is safe for you, inform your
                    provider of your complete medical history, especially if you
                    have or have ever had:
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      <strong>Cardiovascular Issues:</strong> Heart problems
                      (including chest pain, heart rhythm disorders, heart
                      failure, or a history of heart attack), previous stroke,
                      high or low blood pressure, or poor blood circulation.
                    </li>
                    <li>
                      <strong>Vision Problems:</strong> Severe vision loss,
                      blindness in one or both eyes, retinitis pigmentosa, or a
                      condition called NAION (Non-arteritic anterior ischemic
                      optic neuropathy). Patients with a &quot;crowded&quot; optic disc
                      may be at higher risk.
                    </li>
                    <li>
                      <strong>Other Medical Conditions:</strong> Liver or
                      kidney disease, pulmonary veno-occlusive disease (PVOD),
                      blood cell disorders (e.g., sickle cell anemia,
                      leukemia), stomach ulcers, bleeding problems, or a
                      physical deformity of the penis (e.g., Peyronie&apos;s
                      disease).
                    </li>
                    <li>
                      <strong>Other Factors:</strong> If you have been advised
                      to avoid sexual activity for health reasons, a history of
                      priapism, electrolyte imbalances, or mental health
                      conditions including impulse control issues.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Potential Drug Interactions</h4>
                  <p>
                    {/* BUILD FIX: Escaped unescaped apostrophe in "provider's". */}
                    Inform your provider of all medications you are currently
                    taking. Be particularly cautious with nitrates, guanylate
                    cyclase stimulators, alpha-blockers, HIV protease
                    inhibitors, oral antifungal medications, certain
                    antibiotics, and other ED medications. This is not an
                    exhaustive list.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Potential Side Effects</h4>
                  <p>
                    Common side effects may include headache, flushing,
                    dizziness, upset stomach, and changes in vision. Seek
                    emergency help for allergic reactions, symptoms of a heart
                    attack, or an erection lasting more than 4 hours.
                  </p>
                  <p className="mt-2 italic">
                    This is not a complete list of side effects. For medical
                    advice, consult your provider.
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