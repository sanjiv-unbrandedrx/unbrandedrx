import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section className="container mx-auto my-4 py-8 px-4 xl:my-15 xl:py-15 xl:px-0">
      <div className="text-center mb-10">
        <h2 className="font-title text-3xl xl:text-4xl tracking-tight font-medium">
          Why Enclomiphene Over Traditional TRT?
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Traditional TRT shuts down your body&apos;s natural production.
          Enclomiphene works with your body to boost what it already makes.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="col-span-1"></div>
          <div className="text-center">
            <div className="bg-emerald-100 text-emerald-800 font-semibold py-2 px-4 rounded-t-xl text-sm">
              Enclomiphene
            </div>
          </div>
          <div className="text-center">
            <div className="bg-neutral-100 text-neutral-600 font-semibold py-2 px-4 rounded-t-xl text-sm">
              Traditional TRT
            </div>
          </div>
        </div>

        <div className="space-y-0">
          <ComparisonRow
            feature="Administration"
            enclomiphene="Daily pill"
            trt="Injections or gels"
            encloBetter={true}
          />
          <ComparisonRow
            feature="Natural Production"
            enclomiphene="Stimulates your own"
            trt="Shuts it down"
            encloBetter={true}
          />
          <ComparisonRow
            feature="Testicular Size"
            enclomiphene="Preserved"
            trt="May shrink"
            encloBetter={true}
          />
          <ComparisonRow
            feature="Fertility"
            enclomiphene="Maintained"
            trt="Often compromised"
            encloBetter={true}
          />
          <ComparisonRow
            feature="Reversibility"
            enclomiphene="Can stop anytime"
            trt="Lifetime commitment"
            encloBetter={true}
          />
          <ComparisonRow
            feature="Estrogen Conversion"
            enclomiphene="Minimal"
            trt="Requires management"
            encloBetter={true}
            isLast
          />
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          Enclomiphene is ideal for men who want to optimize testosterone while
          preserving fertility and avoiding the risks of hormone replacement.
        </p>
      </div>
    </section>
  );
}

function ComparisonRow({
  feature,
  enclomiphene,
  trt,
  encloBetter,
  isLast = false,
}: {
  feature: string;
  enclomiphene: string;
  trt: string;
  encloBetter: boolean;
  isLast?: boolean;
}) {
  return (
    <div
      className={`grid grid-cols-3 gap-4 py-4 px-4 ${
        !isLast ? "border-b border-neutral-100" : ""
      }`}
    >
      <div className="flex items-center">
        <span className="text-sm font-medium text-neutral-800">{feature}</span>
      </div>
      <div className="flex items-center justify-center gap-x-2">
        {encloBetter ? (
          <Check className="size-4 text-emerald-600 flex-shrink-0" />
        ) : (
          <X className="size-4 text-red-500 flex-shrink-0" />
        )}
        <span className="text-sm text-neutral-700">{enclomiphene}</span>
      </div>
      <div className="flex items-center justify-center gap-x-2">
        {!encloBetter ? (
          <Check className="size-4 text-emerald-600 flex-shrink-0" />
        ) : (
          <X className="size-4 text-neutral-400 flex-shrink-0" />
        )}
        <span className="text-sm text-neutral-500">{trt}</span>
      </div>
    </div>
  );
}
