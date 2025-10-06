// File: src/components/how-it-works/promise-section.tsx
const promises = [
  {
    title: "Genuine Medication, Honest Prices",
    description:
      "We dispense FDA-approved ingredients from certified pharmacies. By eliminating brand markups, we pass the savings directly to you.",
  },
  {
    title: "Unlimited Provider Access",
    description:
      "Your treatment plan includes unlimited, on-demand messaging with your provider through our secure portal. Ask questions and get answers, anytime.",
  },
  {
    title: "Flexible Plans, No Commitments",
    description:
      "You are in full control. Easily adjust, pause, or cancel your recurring treatment plan at any time from your account dashboard.",
  },
];

export default function PromiseSection() {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto px-4 py-20 xl:px-0">
        <h2 className="text-center font-title text-3xl font-medium tracking-tight xl:text-4xl">
          The unbrandedrx Promise
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
          {promises.map((promise) => (
            <div key={promise.title}>
              <h3 className="font-title text-2xl font-semibold">
                {promise.title}
              </h3>
              <p className="mt-4 text-muted-foreground">
                {promise.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}