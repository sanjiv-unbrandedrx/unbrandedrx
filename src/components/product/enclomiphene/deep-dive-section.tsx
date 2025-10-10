export default function DeepDiveSection() {
  return (
    <section className="container mx-auto my-4 py-6 px-4 xl:my-15 xl:py-10 xl:px-0">
      {/* REFACTOR: Changed to a two-column layout for consistency. */}
      <div className="flex flex-col justify-between gap-y-8 gap-x-19 xl:flex-row">
        {/* Column 1: Text Content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-5">
            <h4 className="font-title text-3xl font-medium">
              The Science of Enclomiphene
            </h4>
            <div className="space-y-2 text-neutral-800">
              <p>
                <span className="font-semibold">Enclomiphene Citrate</span> is a
                selective estrogen receptor modulator (SERM). It works by
                interacting with receptors in the brain, signaling a natural
                increase in the hormones that stimulate testosterone
                production directly in the testes.
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: Image */}
        <div className="flex min-h-[360px] flex-1 flex-col items-stretch justify-stretch rounded-3xl bg-[url('/products/enclomiphene-ingredients.png')] bg-cover bg-center xl:min-h-[522px]">
          {/* This div is now intentionally empty to serve as the image container. */}
        </div>
      </div>
    </section>
  );
}