export default function ScienceSection() {
  return (
    <section className="container mx-auto my-4 py-6 px-4 xl:my-15 xl:py-10 xl:px-0">
      <div className="flex flex-col justify-between gap-y-8 gap-x-19 xl:flex-row">
        {/* Column 1: Text Content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-6">
            <div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                The Science
              </span>
              <h2 className="font-title text-3xl xl:text-4xl font-medium mt-2">
                How Enclomiphene Works
              </h2>
            </div>

            <div className="space-y-4 text-neutral-700">
              <p>
                <span className="font-semibold">Enclomiphene Citrate</span> is a
                selective estrogen receptor modulator (SERM) that works at the
                source—your brain.
              </p>
              <p>
                By blocking estrogen receptors in the hypothalamus, it signals
                your pituitary gland to release more{" "}
                <span className="font-medium">Luteinizing Hormone (LH)</span>{" "}
                and{" "}
                <span className="font-medium">
                  Follicle-Stimulating Hormone (FSH)
                </span>
                .
              </p>
              <p>
                These hormones then stimulate your testes to produce more
                testosterone naturally—without introducing external hormones
                that can shut down your body&apos;s own production.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">Key difference:</span> Unlike
                traditional TRT which replaces your testosterone, enclomiphene
                helps your body make more of its own. This preserves testicular
                function and fertility.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="text-center">
                <p className="text-2xl font-bold text-neutral-900">LH ↑</p>
                <p className="text-xs text-muted-foreground">
                  Luteinizing Hormone
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-neutral-900">FSH ↑</p>
                <p className="text-xs text-muted-foreground">
                  Follicle-Stimulating
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-emerald-600">T ↑</p>
                <p className="text-xs text-muted-foreground">Testosterone</p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Image */}
        <div className="flex min-h-[360px] flex-1 flex-col items-stretch justify-stretch rounded-3xl bg-[url('/products/enclomiphene-ingredients.png')] bg-cover bg-center xl:min-h-[522px]"></div>
      </div>
    </section>
  );
}
