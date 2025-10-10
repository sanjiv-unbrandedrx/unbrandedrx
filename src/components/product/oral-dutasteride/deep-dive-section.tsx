// src/components/product/oral-dutasteride/deep-dive-section.tsx
export default function DeepDiveSection() {
  return (
    <section className="container mx-auto my-4 py-6 px-4 xl:my-15 xl:py-10 xl:px-0">
      {/* CONSISTENCY FIX: Refactored to a two-column layout for better readability. */}
      <div className="flex flex-col justify-between gap-y-8 gap-x-19 xl:flex-row">
        {/* Column 1: Text Content (Ingredients) */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-5">
            <h4 className="font-title text-3xl font-medium">
              Key Active Ingredients
            </h4>
            <div className="space-y-2 text-neutral-800">
              <p>
                <span className="font-semibold">Dutasteride</span> is a
                potent prescription DHT-blocker that more comprehensively
                inhibits the enzyme responsible for hair loss.
              </p>
              <p>
                <span className="font-semibold">Minoxidil</span> helps
                increase blood flow and nutrient delivery to the scalp,
                reactivating dormant follicles to promote new growth.
              </p>
              <p>
                <span className="font-semibold">D-Biotin</span> is an essential
                B-vitamin that supports the production of keratin, improving
                the structural integrity of your hair.
              </p>
            </div>
          </div>
        </div>
        {/* Column 2: Image */}
        <div className="flex min-h-[360px] flex-1 flex-col items-stretch justify-stretch rounded-3xl bg-[url('/products/oral-dutasteride-ingredients.png')] bg-cover bg-center xl:min-h-[522px]">
          {/* This div is now intentionally empty to serve as the image container. */}
        </div>
      </div>
    </section>
  );
}