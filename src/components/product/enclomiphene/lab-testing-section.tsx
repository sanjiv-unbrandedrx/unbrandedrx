// File: src/components/product/enclomiphene/lab-testing-section.tsx
export default function LabTestingSection() {
  return (
    <section className="container mx-auto my-4 py-6 px-4 xl:my-15 xl:py-10 xl:px-0">
      <div className="flex flex-col justify-between gap-y-8 gap-x-19 xl:flex-row">
        {/* Column 1: Text Content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-5">
            <h4 className="font-title text-3xl font-medium">
              Simple At-Home Lab Testing
            </h4>
            <div className="space-y-2 text-neutral-800">
              <p>
                To ensure Enclomiphene is right for you, we require a baseline
                hormone panel. You can easily complete this with our at-home
                finger-prick test kit, which is mailed directly to you.
              </p>
              <p>
                The process is simple, takes only a few minutes, and is reviewed
                by a CLIA-certified lab. If you have recent lab results from
                your own doctor, you may be able to upload those instead.
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: Image */}
        <div className="flex min-h-[360px] flex-1 flex-col items-stretch justify-stretch rounded-3xl bg-[url('/products/lab-kit.png')] bg-cover bg-center xl:min-h-[522px]">
          {/* This div is for the background image. */}
        </div>
      </div>
    </section>
  );
}