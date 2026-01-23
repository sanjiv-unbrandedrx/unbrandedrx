import StarFillIcon from "@/components/svg/star-fill-icon";

export default function TestimonialsSection() {
  return (
    <section className="container mx-auto my-4 py-8 px-4 xl:my-15 xl:py-15 xl:px-0">
      <div className="text-center mb-10">
        <h2 className="font-title text-3xl xl:text-4xl tracking-tight font-medium">
          Real Results from Real Men
        </h2>
        <p className="mt-3 text-muted-foreground">
          Hear from men who&apos;ve optimized their testosterone with Enclomiphene.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <TestimonialCard
          quote="I was skeptical at first, but after 6 weeks my energy levels are noticeably better. No more afternoon crashes. My wife even commented that I seem more 'present' lately."
          name="Michael R."
          age={42}
          location="Texas"
          benefit="Energy & Focus"
        />
        <TestimonialCard
          quote="Tried TRT before but hated the injections and worried about fertility. Enclomiphene gave me similar benefits without the downsides. Labs confirmed my T went from 320 to 680."
          name="James K."
          age={38}
          location="California"
          benefit="T Levels Doubled"
        />
        <TestimonialCard
          quote="The mental clarity was the surprise benefit. I'm sharper at work, more motivated to hit the gym, and my libido is back to where it was in my 20s."
          name="David L."
          age={45}
          location="Florida"
          benefit="Libido & Clarity"
        />
      </div>

      <div className="mt-10 text-center">
        <div className="inline-flex items-center gap-x-4 bg-neutral-50 rounded-full px-6 py-3">
          <div className="flex items-center gap-x-1">
            <StarFillIcon className="size-4 text-amber-400" />
            <StarFillIcon className="size-4 text-amber-400" />
            <StarFillIcon className="size-4 text-amber-400" />
            <StarFillIcon className="size-4 text-amber-400" />
            <StarFillIcon className="size-4 text-amber-400" />
          </div>
          <p className="text-sm text-neutral-700">
            <span className="font-semibold">4.8 out of 5</span> based on 500+
            reviews
          </p>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  name,
  age,
  location,
  benefit,
}: {
  quote: string;
  name: string;
  age: number;
  location: string;
  benefit: string;
}) {
  return (
    <div className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-x-1 mb-4">
        <StarFillIcon className="size-3.5 text-amber-400" />
        <StarFillIcon className="size-3.5 text-amber-400" />
        <StarFillIcon className="size-3.5 text-amber-400" />
        <StarFillIcon className="size-3.5 text-amber-400" />
        <StarFillIcon className="size-3.5 text-amber-400" />
      </div>
      <p className="text-sm text-neutral-700 mb-4 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-neutral-900">{name}</p>
          <p className="text-xs text-muted-foreground">
            {age}, {location}
          </p>
        </div>
        <span className="text-xs font-medium bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full">
          {benefit}
        </span>
      </div>
    </div>
  );
}
