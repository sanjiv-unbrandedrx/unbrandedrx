import { DollarSign, Stethoscope, Truck, FlaskConical } from "lucide-react";

const valueProps = [
  {
    icon: DollarSign,
    title: "No Pharmacy Markup",
    description:
      "We cut out the middlemen. Get prescription medications at transparent prices without retail markups.",
  },
  {
    icon: Stethoscope,
    title: "Clinician-Led Care",
    description:
      "Every prescription is reviewed and approved by a licensed U.S. healthcare provider.",
  },
  {
    icon: Truck,
    title: "Free Discreet Delivery",
    description:
      "Your medication arrives in plain, unmarked packaging with free shipping on every order.",
  },
  {
    icon: FlaskConical,
    title: "Prescription-Grade Formulas",
    description:
      "Compounded in U.S. licensed pharmacies using pharmaceutical-grade ingredients.",
  },
];

export default function ValuePropsSection() {
  return (
    <section className="bg-secondary py-16 xl:py-20">
      <div className="container mx-auto px-4 xl:px-0">
        <h2 className="font-title text-3xl xl:text-4xl font-medium tracking-tight text-center">
          Why unbrandedrx?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10 xl:mt-14">
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="bg-white rounded-3xl p-8 flex flex-col gap-y-4"
            >
              <div className="size-12 rounded-2xl bg-neutral-100 flex items-center justify-center">
                <prop.icon className="size-6 text-neutral-800" />
              </div>
              <p className="font-title text-lg font-medium">{prop.title}</p>
              <p className="text-sm text-muted-foreground">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
