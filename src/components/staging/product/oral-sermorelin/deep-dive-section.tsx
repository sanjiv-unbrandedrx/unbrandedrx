import Image from "next/image";

export default function DeepDiveSection() {
  return (
    <section className="container mx-auto my-4 py-6 px-4 xl:my-15 xl:py-10 xl:px-0">
      <div className="flex flex-col justify-between gap-y-8 gap-x-19 xl:flex-row">
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-5">
            <h4 className="font-title text-3xl font-medium">
              The Science of Oral Sermorelin
            </h4>
            <div className="space-y-2 text-neutral-800">
              <p>
                <span className="font-semibold">Sermorelin Acetate</span> is a
                growth hormone-releasing hormone (GHRH) analog — a synthetic
                peptide that mirrors your body&apos;s own GHRH. In oral lozenge form,
                it is absorbed through the mucous membranes of the mouth,
                bypassing the digestive system for improved bioavailability.
              </p>
              <p>
                Once absorbed, it signals your pituitary gland to produce and
                release more of its own natural growth hormone — working with
                your body&apos;s feedback loops rather than introducing external
                hormones.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex min-h-[360px] flex-1 flex-col items-stretch justify-stretch rounded-3xl overflow-hidden xl:min-h-[522px]">
          <Image
            src="/products/oral-sermorelin-science.png"
            alt="The Science of Oral Sermorelin"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
