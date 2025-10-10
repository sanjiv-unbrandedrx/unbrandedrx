// src/components/product/topical-dutasteride/deep-dive-section.tsx
export default function DeepDiveSection() {
  return (
    <section className="container mx-auto my-4 py-6 px-4 xl:my-15 xl:py-10 xl:px-0">
      {/* TASKS 3, 17 & CONSISTENCY FIX: Refactored to a two-column layout and removed ingredient strengths. */}
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
                powerful DHT-blocker that provides a more comprehensive
                defense against follicle miniaturization at the scalp.
              </p>
              <p>
                <span className="font-semibold">Minoxidil</span> is a
                vasodilator that helps improve blood flow to the scalp,
                promoting growth in dormant follicles.
              </p>
              <p>
                <span className="font-semibold">Tretinoin</span> is a
                retinoid that enhances the penetration and effectiveness of the
                other active ingredients.
              </p>
              <p>
                <span className="font-semibold">Fluocinolone</span> is a
                mild anti-inflammatory that helps reduce scalp irritation,
                creating a healthier environment for hair growth.
              </p>
            </div>
          </div>
        </div>
        {/* Column 2: Image */}
        <div className="flex min-h-[360px] flex-1 flex-col items-stretch justify-stretch rounded-3xl bg-[url('/products/topical-dutasteride-ingredients.png')] bg-cover bg-center xl:min-h-[522px]">
          {/* This div is now intentionally empty to serve as the image container. */}
        </div>
      </div>
    </section>
  );
}