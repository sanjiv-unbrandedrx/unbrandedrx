export default function DeepDiveSection() {
  return (
    <section className="container mx-auto my-4 py-6 px-4 xl:my-15 xl:py-10 xl:px-0">
      <div className="flex flex-col justify-between gap-y-8 gap-x-19 xl:flex-row">
        <div className="flex min-h-[360px] flex-1 flex-col items-stretch justify-stretch rounded-3xl bg-[url('/products/ed-troche-ingredients.png')] bg-cover bg-center xl:min-h-[522px]">
          <div className="flex h-full w-full flex-1 flex-col items-start justify-end gap-y-5 rounded-3xl bg-gradient-to-t from-white/60 to-transparent p-8">
            <h4 className="font-title text-3xl font-medium">
              Four Ingredients, One Comprehensive Solution
            </h4>
            <div className="space-y-2 text-neutral-800">
              <p>
                <span className="font-semibold">
                  Tadalafil & Vardenafil
                </span>{" "}
                are powerful PDE5 inhibitors that increase blood flow to the
                penis, helping to achieve and maintain a firm erection.
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
      </div>
    </section>
  );
}