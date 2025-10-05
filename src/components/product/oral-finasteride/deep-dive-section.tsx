export default function DeepDiveSection() {
  return (
    <section className="container mx-auto my-4 py-6 px-4 xl:my-15 xl:py-10 xl:px-0">
      <div className="flex flex-col justify-between gap-y-8 gap-x-19 xl:flex-row">
        <div className="flex min-h-[360px] flex-1 flex-col items-stretch justify-stretch rounded-3xl bg-[url('/products/oral-finasteride-ingredients.png')] bg-cover bg-center xl:min-h-[522px]">
          <div className="flex h-full w-full flex-1 flex-col items-start justify-end gap-y-5 rounded-3xl bg-gradient-to-t from-white/60 to-transparent p-8">
            <h4 className="font-title text-3xl font-medium">
              Key Active Ingredients
            </h4>
            <div className="space-y-2 text-neutral-800">
              <p>
                <span className="font-semibold">Finasteride 1mg</span> is a
                prescription DHT-blocker that helps prevent further hair loss
                and protects follicles from miniaturization.
              </p>
              <p>
                <span className="font-semibold">Oral Minoxidil</span> helps
                increase blood flow to the scalp, reactivating dormant hair
                follicles to promote new growth.
              </p>
              <p>
                <span className="font-semibold">D-Biotin</span> is an essential
                B-vitamin that supports the production of keratin, improving the
                strength and structure of your hair.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}