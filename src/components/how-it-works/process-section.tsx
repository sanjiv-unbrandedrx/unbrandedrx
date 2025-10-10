// File: src/components/how-it-works/process-section.tsx
const steps = [
  {
    step: "01",
    title: "Build Your Secure Health Profile",
    description:
      "Answer a few questions about your health and medical history in our secure, confidential online visit. It only takes a few minutes.",
  },
  {
    step: "02",
    title: "A Licensed Provider Reviews Your Case",
    description:
      "A U.S. licensed healthcare provider will review your information and, if appropriate, create a personalized prescription treatment plan for you.",
  },
  {
    step: "03",
    title: "Medication Delivered to You",
    description:
      "Your treatment is shipped directly to your door in discreet, unbranded packaging. Shipping is always free.",
  },
];

const promises = [
  {
    title: "Genuine Medication, Honest Prices",
    // TASK 27: Removed the sentence "We dispense FDA-approved ingredients from certified pharmacies."
    description:
      "By eliminating brand markups, we pass the savings directly to you.",
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

export default function ProcessSection() {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto grid grid-cols-1 gap-16 px-4 py-20 lg:grid-cols-2 lg:gap-24 xl:px-0">
        {/* Left Column: The Process */}
        <div className="flex flex-col gap-12">
          {steps.map((item) => (
            <div key={item.step} className="relative pl-16">
              <span className="absolute left-0 top-0 font-title text-5xl font-bold text-neutral-200">
                {item.step}
              </span>
              <h3 className="font-title text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Right Column: The Promise */}
        <div className="flex flex-col gap-8 rounded-2xl bg-white p-8 lg:p-12">
          <h2 className="font-title text-3xl font-medium tracking-tight">
            The unbrandedrx Promise
          </h2>
          <div className="flex flex-col gap-8">
            {promises.map((promise) => (
              <div key={promise.title}>
                <h3 className="font-title text-xl font-semibold">
                  {promise.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {promise.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}