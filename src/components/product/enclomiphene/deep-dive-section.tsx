export default function DeepDiveSection() {
  return (
    <section className="container mx-auto my-4 py-6 px-4 xl:my-15 xl:py-10 xl:px-0">
      <div className="flex flex-col justify-between gap-y-8 gap-x-19 xl:flex-row">
        <div className="flex min-h-[360px] flex-1 flex-col items-stretch justify-stretch rounded-3xl bg-[url('/products/enclomiphene-ingredients.png')] bg-cover bg-center xl:min-h-[522px]">
          <div className="flex h-full w-full flex-1 flex-col items-start justify-end gap-y-5 rounded-3xl bg-gradient-to-t from-white/60 to-transparent p-8">
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
      </div>
    </section>
  );
}