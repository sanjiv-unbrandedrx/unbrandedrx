export default function DeepDiveSection() {
  return (
    <section className="container mx-auto my-4 py-6 px-4 xl:my-15 xl:py-10 xl:px-0">
      <div className="flex flex-col justify-between gap-y-8 gap-x-19 xl:flex-row">
        <div className="flex min-h-[360px] flex-1 flex-col items-stretch justify-stretch rounded-3xl bg-[url('/products/topical-finasteride-ingredients.png')] bg-cover bg-center xl:min-h-[522px]">
          <div className="flex h-full w-full flex-1 flex-col items-start justify-end gap-y-5 rounded-3xl bg-gradient-to-t from-white/60 to-transparent p-8">
            <h4 className="font-title text-3xl font-medium">
              Key Active Ingredients
            </h4>
            <div className="space-y-2 text-neutral-800">
              <p>
                <span className="font-semibold">Finasteride 0.25%</span> is a
                DHT-blocker that works at the scalp level to help prevent
                follicle miniaturization.
              </p>
              <p>
                <span className="font-semibold">Minoxidil 7.5%</span> is a
                vasodilator that helps improve blood flow to the scalp,
                promoting growth in dormant follicles.
              </p>
              <p>
                <span className="font-semibold">Tretinoin 0.0125%</span> is a
                retinoid that enhances the penetration and effectiveness of the
                other active ingredients.
              </p>
              <p>
                <span className="font-semibold">Fluocinolone 0.01%</span> is a
                mild anti-inflammatory that helps reduce scalp irritation,
                creating a healthier environment for hair growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}