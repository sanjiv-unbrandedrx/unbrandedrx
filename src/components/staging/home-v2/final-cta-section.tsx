import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/button-custom";

export default function FinalCtaSection() {
  return (
    <section className="container mx-auto px-4 xl:px-0 py-10 xl:py-20">
      <div className="relative rounded-3xl overflow-hidden px-8 py-16 xl:px-20 xl:py-24 text-center">
        {/* Background Image */}
        <Image
          src="/home/v2/cta-background.png"
          alt=""
          fill
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10">
          <h2 className="font-title text-3xl xl:text-4xl font-medium tracking-tight text-white">
            Ready to get started?
          </h2>
          <p className="mt-4 text-neutral-300 text-lg max-w-xl mx-auto">
            Choose a treatment, complete a quick online visit, and get
            prescription-grade medication delivered to your door.
          </p>
          <div className="mt-8">
            <Button variant="filledInverse" size="xl">
              <Link href="/find/category/all-products">Browse Treatments</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
