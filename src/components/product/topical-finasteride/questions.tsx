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
                How do I apply it?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Apply 1ml of the solution to a clean, dry scalp once daily,
                focusing on areas of thinning. Gently massage it into the scalp
                and let it dry. Wash your hands thoroughly after application.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Will it make my hair greasy or sticky?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                The formula is designed to be lightweight and absorb into the
                scalp. To minimize any effect on your hairstyle, we recommend
                applying it at night, at least an hour before going to bed.
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
                The most common side effects are localized to the application
                site, such as scalp itching or irritation. While systemic side
                effects are less common than with oral finasteride, they are
                still possible. [We will add a link to full safety
                information here].
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                Can I use styling products with this?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Yes. Apply the treatment first and allow it to dry completely
                before using any styling products like gels, mousses, or
                sprays.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="border-0 rounded-3xl bg-white px-5"
            >
              <AccordionTrigger className="hover:no-underline font-semibold">
                How long before I see results?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Consistent daily application is crucial. Most users begin to
                see less shedding and early signs of regrowth within 3-6
                months. Maximum results are typically visible after 12 months.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}