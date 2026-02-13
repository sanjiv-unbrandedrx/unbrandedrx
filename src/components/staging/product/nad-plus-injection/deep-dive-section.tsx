import Image from "next/image";

export default function DeepDiveSection() {
  return (
    <section className="container mx-auto my-4 py-6 px-4 xl:my-15 xl:py-10 xl:px-0">
      <div className="flex flex-col justify-between gap-y-8 gap-x-19 xl:flex-row">
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-5">
            <h4 className="font-title text-3xl font-medium">
              The Science of NAD+
            </h4>
            <div className="space-y-2 text-neutral-800">
              <p>
                <span className="font-semibold">
                  NAD+ (Nicotinamide Adenine Dinucleotide)
                </span>{" "}
                is a critical coenzyme present in every cell of your body. It
                functions as an electron carrier that facilitates the conversion
                of nutrients into adenosine triphosphate (ATP) — the primary
                energy currency of your cells — within the mitochondria.
              </p>
              <p>
                Beyond energy production, NAD+ activates sirtuins — a family of
                proteins essential for DNA repair, cellular stress response, and
                healthy aging. Research shows that NAD+ levels decline
                significantly with age, which may contribute to reduced energy,
                cognitive decline, and slower recovery.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex min-h-[360px] flex-1 flex-col items-stretch justify-stretch rounded-3xl overflow-hidden xl:min-h-[522px]">
          <Image
            src="/products/nad-plus-injection-science.png"
            alt="The Science of NAD+"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
