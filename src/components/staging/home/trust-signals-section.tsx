import { ShieldCheck, BadgeCheck, Building2, Star } from "lucide-react";

const signals = [
  {
    icon: ShieldCheck,
    title: "LegitScript Certified",
    description: "Verified healthcare compliance.",
  },
  {
    icon: BadgeCheck,
    title: "U.S. Licensed Providers",
    description: "Prescriptions reviewed by licensed professionals.",
  },
  {
    icon: Building2,
    title: "U.S. Compounding Pharmacy",
    description: "Compounded in accredited U.S. pharmacies.",
  },
  {
    icon: Star,
    title: "Top Patient Ratings",
    description: "Trusted care, nationwide.",
  },
];

export default function TrustSignalsSection() {
  return (
    <section className="container mx-auto py-16 xl:py-20 px-4 xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
        {signals.map((signal) => (
          <div
            key={signal.title}
            className="flex flex-col items-center text-center gap-y-3"
          >
            <div className="size-14 rounded-full bg-neutral-100 flex items-center justify-center">
              <signal.icon className="size-7 text-neutral-800" />
            </div>
            <p className="font-title text-lg font-medium">{signal.title}</p>
            <p className="text-sm text-muted-foreground max-w-xs">
              {signal.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
