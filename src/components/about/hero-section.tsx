// File: src/components/about/hero-section.tsx
export default function HeroSection() {
  return (
    <section className="container mx-auto my-10 px-4 py-10 text-center xl:my-20 xl:px-0">
      <div className="mx-auto max-w-4xl">
        {/* SURGICAL STRIKE: Updated H1 to be more concise. */}
        <h1 className="font-title text-4xl font-medium tracking-tight xl:text-6xl">
          Smarter Healthcare, Same Medication.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground xl:text-xl">
          We provide direct access to clinically-proven prescription
          ingredients, prescribed by licensed providers, without the brand tax.
        </p>
      </div>
    </section>
  );
}