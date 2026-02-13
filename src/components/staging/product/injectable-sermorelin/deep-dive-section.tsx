import Image from "next/image";

export default function DeepDiveSection() {
  return (
    <section className="container mx-auto my-4 py-6 px-4 xl:my-15 xl:py-10 xl:px-0">
      <div className="flex flex-col justify-between gap-y-8 gap-x-19 xl:flex-row">
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-5">
            <h4 className="font-title text-3xl font-medium">
              The Science of Sermorelin
            </h4>
            <div className="space-y-2 text-neutral-800">
              <p>
                <span className="font-semibold">Sermorelin Acetate</span> is a
                growth hormone-releasing hormone (GHRH) analog — a synthetic
                peptide that mirrors the first 29 amino acids of your
                body&apos;s own GHRH. It works by signaling your pituitary
                gland to produce and release more of its own natural growth
                hormone.
              </p>
              <p>
                This is fundamentally different from synthetic HGH injections,
                which introduce external growth hormone directly. Sermorelin
                works with your body&apos;s own feedback loops, stimulating
                natural production for a more physiological, pulsatile release
                pattern.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex min-h-[360px] flex-1 flex-col items-stretch justify-stretch rounded-3xl overflow-hidden xl:min-h-[522px]">
          <Image
            src="/products/injectable-sermorelin-science.png"
            alt="The Science of Sermorelin"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
