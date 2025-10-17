// src/components/product/dapoxetine-max/questions.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function QuestionsSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto flex flex-col items-start justify-start gap-x-10 px-4 xl:flex-row xl:px-0">
        <h3 className="min-w-sm mb-6 font-title text-3xl font-medium xl:mb-0">
          Product Questions
        </h3>
        <div className="w-full flex-1">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How and when do I take it?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Take one capsule with a full glass of water 1-3 hours before
                you anticipate sexual activity. Due to the long-acting
                Tadalafil, the effects can last up to 36 hours. Do not exceed
                one dose in a 24-hour period.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Are there any side effects?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Because this is a combination of four active medications,
                it&apos;s essential to disclose your full medical history to your
                provider. Potential side effects can include headache,
                flushing, nausea, or dizziness. [Link to full safety
                information here].
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Can I drink alcohol with this medication?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Alcohol can increase the risk of side effects and may
                decrease the effectiveness of the medication. It is strongly
                recommended to limit or avoid alcohol consumption when taking
                this capsule.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Is this right for me?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                This comprehensive formula is designed for men looking for an
                all-in-one solution for erection quality and stamina. A
                licensed provider will review your online visit to determine
                if you are a suitable candidate.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}