// src/components/product/dapoxetine/deep-dive-section.tsx
export default function DeepDiveSection() {
  return (
    <section className="container mx-auto my-4 py-6 px-4 xl:my-15 xl:py-10 xl:px-0">
      <div className="flex flex-col justify-between gap-y-8 gap-x-19 xl:flex-row">
        {/* SURGICAL STRIKE: Replaced placeholder service with local, product-specific image path */}
        <div className="flex min-h-[360px] flex-1 flex-col items-stretch justify-stretch rounded-3xl bg-[url('/products/dapoxetine-ingredients.png')] bg-cover bg-center xl:min-h-[522px]">
          <div className="flex h-full w-full flex-1 flex-col items-start justify-end gap-y-5 rounded-3xl bg-gradient-to-t from-white/60 to-transparent p-8">
            <h4 className="font-title text-3xl font-medium">
              The Science of Dapoxetine
            </h4>
            <p className="text-neutral-800">
              Dapoxetine is a short-acting selective serotonin reuptake
              inhibitor (SSRI) specifically designed for premature ejaculation.
              It works on the central nervous system to delay the ejaculatory
              reflex, giving you more control over timing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}