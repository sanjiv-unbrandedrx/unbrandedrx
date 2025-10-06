// File: src/components/how-it-works/hero-section.tsx
export default function HeroSection() {
  return (
    <section className="container mx-auto my-10 px-4 py-10 text-center xl:my-20 xl:px-0">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-title text-4xl font-medium tracking-tight xl:text-6xl">
          Prescription Care. Radically Simple.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground xl:text-xl">
          Get the treatment you need from a licensed provider, delivered to your
          door. All online. No waiting rooms, no pharmacy lines.
        </p>
      </div>
    </section>
  );
}