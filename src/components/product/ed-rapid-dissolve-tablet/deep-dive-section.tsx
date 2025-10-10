// src/components/product/ed-rapid-dissolve-tablet/deep-dive-section.tsx
export default function DeepDiveSection() {
  return (
    <section className="container mx-auto my-4 py-6 px-4 xl:my-15 xl:py-10 xl:px-0">
      {/* REFACTOR: Changed to a two-column layout for better readability. */}
      <div className="flex flex-col justify-between gap-y-8 gap-x-19 xl:flex-row">
        {/* Column 1: Text Content (Ingredients) */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-5">
            <h4 className="font-title text-3xl font-medium">
              Four Ingredients, One Comprehensive Solution
            </h4>
            <div className="space-y-2 text-neutral-800">
              <p>
                <span className="font-semibold">Tadalafil</span> is a long
                lasting PDE5 inhibitor for on-going erection support.
              </p>
              <p>
                <span className="font-semibold">Vardenafil</span> is a fast
                acting PDE5 inhibitor for quick aid in achieving and maintaining
                a firm erection.
              </p>
              <p>
                <span className="font-semibold">Apomorphine</span> is a dopamine
                agonist that works on the central nervous system to prime the
                brain for sexual arousal.
              </p>
              <p>
                <span className="font-semibold">Oxytocin</span> is a
                neuropeptide thought to play a role in enhancing sensation and
                emotional connection during intimacy.
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: Image */}
        <div className="flex min-h-[360px] flex-1 flex-col items-stretch justify-stretch rounded-3xl bg-[url('/products/ed-rapid-dissolve-tablet-ingredients.png')] bg-cover bg-center xl:min-h-[522px]">
          {/* This div is now intentionally empty to serve as the image container. */}
        </div>
      </div>
    </section>
  );
}