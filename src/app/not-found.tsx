// src/app/not-found.tsx
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PrescriptionIcon from "@/components/svg/prescription-icon";

const categoryLinks = [
  { name: "Hair Loss", href: "/shop/category/hair-loss" },
  { name: "Men's Health", href: "/shop/category/mens-health" },
  { name: "Sexual Health", href: "/shop/category/sexual-health" },
  { name: "Testosterone", href: "/shop/category/testosterone" },
];

export default function NotFound() {
  return (
    <>
      <main>
        <section className="px-4 xl:px-0">
          <Header />
        </section>
        <section className="container mx-auto my-10 px-4 py-16 text-center xl:my-20 xl:px-0">
          <div className="mx-auto max-w-3xl">
            {/* Prescription Icon */}
            <div className="flex justify-center mb-8">
              <PrescriptionIcon className="text-neutral-400" />
            </div>

            {/* Headline */}
            <h1 className="font-title text-4xl md:text-5xl font-medium tracking-tight text-neutral-900">
              This Page Needs a Prescription
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
              Unfortunately, this page doesn&apos;t exist. But we can help you find what you&apos;re looking for.
            </p>

            {/* Category Quick Links */}
            <div className="mt-12 mb-8">
              <p className="text-sm font-medium text-neutral-700 mb-4 uppercase tracking-wide">
                Browse by Category
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {categoryLinks.map((category) => (
                  <Button
                    key={category.href}
                    variant="outline"
                    asChild
                    className="rounded-full"
                  >
                    <Link href={category.href}>{category.name}</Link>
                  </Button>
                ))}
              </div>
            </div>

            {/* Primary CTA */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="rounded-full bg-neutral-800 hover:bg-neutral-700 text-white">
                <Link href="/shop/category/all-products">Shop All Treatments</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full">
                <Link href="/">Return Home</Link>
              </Button>
            </div>

            {/* Support Link */}
            <p className="mt-12 text-sm text-neutral-500">
              Need help?{" "}
              <Link href="/contact-us" className="text-neutral-800 hover:underline font-medium">
                Contact our support team
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}