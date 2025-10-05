export default function DeepDiveSection() {
  return (
    <section className="container mx-auto my-4 py-6 px-4 xl:my-15 xl:py-10 xl:px-0">
      <div className="flex flex-col justify-between gap-y-8 gap-x-19 xl:flex-row">
        <div className="flex min-h-[360px] flex-1 flex-col items-stretch justify-stretch rounded-3xl bg-[url('/products/ultimate-performance-ingredients.png')] bg-cover bg-center xl:min-h-[522px]">
          <div className="flex h-full w-full flex-1 flex-col items-start justify-end gap-y-5 rounded-3xl bg-gradient-to-t from-white/60 to-transparent p-8">
            <h4 className="font-title text-3xl font-medium">
              The Four Pillars of Performance
            </h4>
            <div className="space-y-2 text-neutral-800">
              <p>
                <span className="font-semibold">Sildenafil & Tadalafil:</span>{" "}
                A dual-action blend of PDE5 inhibitors. Sildenafil works
                quickly to help achieve an erection, while Tadalafil provides
                a longer duration of action, keeping you ready for up to 36
                hours.
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
      </div>
    </section>
  );
}