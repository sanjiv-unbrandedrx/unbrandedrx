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
// TASK 8: Import icons for the new ingredient-focused feature list.
import { TrendingUp, ShieldCheck, BrainCircuit, Package } from "lucide-react";

export default function HeroSection() {
  // BUILD FIX: Removed unused 'isClient' state variable.

  return (
    <section className="container mx-auto my-4 px-4 xl:my-15 xl:px-0">
      <div className="flex flex-col justify-between gap-x-4 xl:flex-row xl:items-stretch">
        <div className="relative h-full min-h-[590px] w-full overflow-hidden rounded-3xl">
          <Image
            src="/products/ultimate-performance-hero.png"
            alt="Ultimate Performance Capsule"
            fill
            // SURGICAL STRIKE: Changed image treatment from 'object-cover' to 'object-contain' to ensure the full product is visible.
            className="object-contain object-center"
          />
        </div>
        <div className="flex w-full flex-col gap-y-10 py-6 px-1 xl:py-0 xl:px-19">
          <div className="space-y-3">
            <p className="font-title text-2xl font-medium tracking-tight xl:text-4xl">
              Ultimate Performance Capsule
            </p>
            <p className="text-sm xl:text-base">
              The all-in-one prescription solution for total sexual
              performance, addressing erections, stamina, and arousal in a
              single capsule.
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

            {/* TASK 8: Replaced the old benefit-oriented list with a new ingredient-focused list. */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-x-3">
                <TrendingUp className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Sildenafil + Tadalafil:
                  </span>{" "}
                  For robust, long-lasting erections.
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <ShieldCheck className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Dapoxetine:
                  </span>{" "}
                  For improved ejaculatory control and stamina.
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <BrainCircuit className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Apomorphine:
                  </span>{" "}
                  To prime the brain for sexual arousal.
                </p>
              </div>
              <div className="flex items-start gap-x-3">
                <Package className="size-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    All-in-One Capsule:
                  </span>{" "}
                  For ultimate convenience.
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
                  From $269
                </p>
                <p className="text-muted-foreground">
                  Billed and delivered every 3 months. Save up to 24%.
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
                  From $499
                </p>
                <p className="text-muted-foreground">
                  Billed and delivered every 5 months. Save up to 28%.
                </p>
              </div>
            </label>
          </div>

          {/* SURGICAL STRIKE: Removed the strength label and dropdown component. */}
          {/* SURGICAL STRIKE: Added the correct checkout URL to the CTA button. */}
          <a
            href="https://checkout.unbrandedrx.co/StaminaRx?priceId=1979"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="filled" size="xl">
              Start My Visit
            </Button>
          </a>

          {/* TASK 46: Added comprehensive safety information accordion. */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="hover:no-underline text-sm font-semibold">
                Important Safety Information
              </AccordionTrigger>
              <AccordionContent className="text-xs space-y-4">
                <div>
                  <h4 className="font-bold">
                    Warning for antidepressant medications (Dapoxetine):
                  </h4>
                  <p className="mt-2">
                    Antidepressants increased the risk of suicidal thinking and
                    behavior. Patients of all ages on antidepressant therapy
                    should be monitored and observed closely for clinical
                    worsening, suicidality, or unusual changes in behavior.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">
                    Contraindications (Do Not Take If):
                  </h4>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                      You are using any nitrate-based medications (e.g.,
                      nitroglycerin) or recreational drugs like &quot;poppers&quot;.
                      Combining these with Sildenafil/Tadalafil can cause a
                      sudden, dangerous drop in blood pressure.
                    </li>
                    <li>
                      You are taking riociguat (Adempas) for pulmonary arterial
                      hypertension.
                    </li>
                    <li>
                      You are taking 5HT3 antagonist medications (e.g.,
                      ondansetron) as they can interact with Apomorphine.
                    </li>
                    <li>
                      You have a known allergy to Sildenafil, Tadalafil,
                      Dapoxetine, Apomorphine, or any related medications.
                    </li>
                    <li>
                      You have heart problems (e.g., heart failure), a history
                      of fainting, severe depression or mania, or moderate to
                      severe liver problems.
                    </li>
                  </ul>
                  <p className="mt-2 italic">
                    Seek immediate medical attention for an erection that is
                    painful or lasts longer than 4 hours (priapism), as it can
                    cause permanent damage.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Consult Your Provider Before Use</h4>
                  <p>
                    {/* BUILD FIX: Escaped unescaped apostrophe in "Peyronie's". */}
                    Inform your provider of your complete medical history,
                    especially if you have or have ever had heart, blood
                    pressure, liver, or kidney issues; vision or hearing
                    problems; blood cell disorders; or a physical deformity of
                    the penis (e.g., Peyronie&apos;s disease).
                  </p>
                </div>
                <div>
                  <h4 className="font-bold">Potential Side Effects</h4>
                  <p>
                    Common side effects may include headache, flushing,
                    dizziness, nausea, upset stomach, and changes in vision.
                    More serious side effects can include heart attack symptoms,
                    sudden vision or hearing loss, and prolonged erections. Seek
                    emergency help for allergic reactions or any severe side
                    effects.
                  </p>
                  <p className="mt-2 italic">
                    This is not a complete list. For medical advice about side
                    effects, consult your provider. You may report side effects
                    to the FDA at 1-800-FDA-1088.
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