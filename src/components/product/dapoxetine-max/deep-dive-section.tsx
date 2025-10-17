// src/components/product/dapoxetine-max/deep-dive-section.tsx
export default function DeepDiveSection() {
  return (
    <section className="container mx-auto my-4 py-6 px-4 xl:my-15 xl:py-10 xl:px-0">
      <div className="flex flex-col justify-between gap-y-8 gap-x-19 xl:flex-row">
        {/* Column 1: Text Content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-5">
            {/* TASK: Renamed product in the title. */}
            <h4 className="font-title text-3xl font-medium">
              The Four Pillars of Dapoxetine Max
            </h4>
            <div className="space-y-2 text-neutral-800">
              <p>
                <span className="font-semibold">Sildenafil:</span> A
                fast-acting PDE5 inhibitor that works quickly to help achieve an
                erection.
              </p>
              <p>
                <span className="font-semibold">Tadalafil:</span> A
                long-lasting PDE5 inhibitor that provides a longer duration of
                action, keeping you ready for up to 36 hours.
              </p>
              <p>
                <span className="font-semibold">Dapoxetine:</span> A
                short-acting SSRI that works on the central nervous system to
                delay the ejaculatory reflex, improving stamina and control.
              </p>
              <p>
                <span className="font-semibold">Apomorphine:</span> A dopamine
                promoter that works on brain receptors to help prime the mind
                for sexual arousal, enhancing the mind-body connection.
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: Image */}
        {/* TASK: Updated image path for the new product name. */}
        <div className="flex min-h-[360px] flex-1 flex-col items-stretch justify-stretch rounded-3xl bg-[url('/products/dapoxetine-max-ingredients.png')] bg-cover bg-center xl:min-h-[522px]">
          {/* This div is now intentionally empty to serve as the image container. */}
        </div>
      </div>
    </section>
  );
}