// File: src/components/about/pillars-section.tsx
import { ShieldCheck, Sparkles, TestTube } from "lucide-react";

const pillars = [
  {
    icon: <ShieldCheck className="size-8 text-primary" />,
    title: "Clinical Expertise",
    // COFOUNDER NOTE: Added LegitScript certification mention per team feedback.
    description:
      "Every treatment is prescribed by a licensed U.S. provider and dispensed from a licensed US pharmacy, ensuring you receive the highest standard of care. We are proud to be LegitScript-certified, reflecting our commitment to the highest standards of safety and transparency.",
  },
  {
    icon: <Sparkles className="size-8 text-primary" />,
    title: "Radical Transparency",
    description:
      "We believe in honest, straightforward pricing. The price you see is the price you pay for the same active ingredients found in brand-name medications.",
  },
  {
    icon: <TestTube className="size-8 text-primary" />,
    title: "Unmatched Convenience",
    description:
      "From online consultations to discreet delivery, we've designed a seamless experience that fits your life. No waiting rooms, no pharmacy lines.",
  },
];

export default function PillarsSection() {
  return (
    <section className="container mx-auto my-10 px-4 py-10 xl:my-20 xl:px-0">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-secondary">
              {pillar.icon}
            </div>
            <h3 className="mt-6 font-title text-2xl font-semibold">
              {pillar.title}
            </h3>
            <p className="mt-4 text-muted-foreground">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}