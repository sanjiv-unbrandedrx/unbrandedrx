// File: src/components/how-it-works/faq-section.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    value: "faq-1",
    question: "Do I need insurance?",
    answer:
      "No. unbrandedrx operates on a direct-to-patient model, which means we do not accept insurance. This allows us to offer transparent, straightforward pricing without the complexities of co-pays, deductibles, or insurance approvals. The price you see is the price you pay.",
  },
  {
    value: "faq-2",
    question: "Is this a subscription?",
    answer:
      "We offer flexible recurring plans for your convenience to ensure you never miss a treatment. However, you are in complete control. You can easily adjust your refill frequency, pause your plan, or cancel at any time directly from your secure account dashboard.",
  },
  {
    value: "faq-3",
    question: "How do I contact my provider?",
    answer:
      "After your initial consultation, your treatment plan includes unlimited messaging with your provider at no extra cost. You can ask questions, discuss your progress, or request adjustments through our secure patient portal.",
  },
];

export default function FaqSection() {
  return (
    <section className="container mx-auto my-10 px-4 py-10 xl:my-20 xl:px-0">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center font-title text-3xl font-medium tracking-tight xl:text-4xl">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.value}
              value={faq.value}
              className="rounded-3xl border bg-white px-5"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}