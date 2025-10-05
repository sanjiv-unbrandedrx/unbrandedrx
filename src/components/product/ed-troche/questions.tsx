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
                How do I use a troche?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Place one troche under your tongue and allow it to dissolve
                completely. Do not chew or swallow it. This typically takes a
                few minutes. For best results, use 15-30 minutes before
                sexual activity.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How is this different from Viagra® or Cialis®?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                While it contains ingredients from the same class as Cialis®
                (Tadalafil) and Levitra® (Vardenafil), our 4-in-1 formula also
                includes Apomorphine and Oxytocin to support arousal pathways
                in the brain. It&apos;s a more comprehensive approach in a
                fast-acting form.
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
                Common side effects are similar to other ED medications and
                can include headache, flushing, or nasal congestion. It&apos;s
                crucial to discuss your full medical history and any
                medications you are taking with your provider. [Link to full
                safety information here].
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Can I take it with food or alcohol?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Because it is absorbed under the tongue, the troche is less
                likely to be affected by food than some oral pills. However,
                heavy meals or excessive alcohol can still impact its
                effectiveness.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How long do the effects last?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Due to the Tadalafil component, the effects can last up to 36
                hours, but this does not mean you will have an erection for
                that entire time. It means the medication remains active in
                your system, facilitating an erection in response to sexual
                stimulation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}