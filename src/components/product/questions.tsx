import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Questions() {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto flex justify-start items-start gap-x-10">
        <h3 className="font-title font-medium text-3xl min-w-sm">
          Product Questions
        </h3>
        <div className="flex-1">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="bg-white px-5 rounded-3xl border-0"
            >
              <AccordionTrigger className="font-semibold hover:no-underline">
                How to use?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Apply 1-2 pumps of the solution to the scalp once daily. Massage
                in gently. Wash hands after application. Initial results may be
                visible within 3-6 months of consistent daily use. Some
                temporary shedding may occur initially. Common side effects are
                minimal but can include scalp irritation. For a full list of
                potential side effects, please consult the safety information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="bg-white px-5 rounded-3xl border-0"
            >
              <AccordionTrigger className="font-semibold hover:no-underline">
                What happens if I miss a dose?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Apply 1-2 pumps of the solution to the scalp once daily. Massage
                in gently. Wash hands after application. Initial results may be
                visible within 3-6 months of consistent daily use. Some
                temporary shedding may occur initially. Common side effects are
                minimal but can include scalp irritation. For a full list of
                potential side effects, please consult the safety information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="bg-white px-5 rounded-3xl border-0"
            >
              <AccordionTrigger className="font-semibold hover:no-underline">
                Is the packaging discreet?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Apply 1-2 pumps of the solution to the scalp once daily. Massage
                in gently. Wash hands after application. Initial results may be
                visible within 3-6 months of consistent daily use. Some
                temporary shedding may occur initially. Common side effects are
                minimal but can include scalp irritation. For a full list of
                potential side effects, please consult the safety information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="bg-white px-5 rounded-3xl border-0"
            >
              <AccordionTrigger className="font-semibold hover:no-underline">
                Are there any side effects?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Apply 1-2 pumps of the solution to the scalp once daily. Massage
                in gently. Wash hands after application. Initial results may be
                visible within 3-6 months of consistent daily use. Some
                temporary shedding may occur initially. Common side effects are
                minimal but can include scalp irritation. For a full list of
                potential side effects, please consult the safety information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="bg-white px-5 rounded-3xl border-0"
            >
              <AccordionTrigger className="font-semibold hover:no-underline">
                How long before I see results?
              </AccordionTrigger>
              <AccordionContent className="text-xs">
                Apply 1-2 pumps of the solution to the scalp once daily. Massage
                in gently. Wash hands after application. Initial results may be
                visible within 3-6 months of consistent daily use. Some
                temporary shedding may occur initially. Common side effects are
                minimal but can include scalp irritation. For a full list of
                potential side effects, please consult the safety information.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
