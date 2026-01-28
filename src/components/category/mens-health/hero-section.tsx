// File: src/components/category/mens-health/hero-section.tsx
import Header from "@/components/common/Header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
// COFOUNDER NOTE: Replaced Button with a styled Link for anchor functionality.
import Link from "next/link";
import { getNameFromSlug } from "@/lib/utils";

export default function HeroSection() {
  const slug = "mens-health";
  return (
    // Using hair-loss image as a placeholder for now
    <section className="container mx-auto pb-20 bg-none xl:bg-[url(/categories/hair-loss.webp)] bg-right bg-cover bg-no-repeat px-4 xl:px-0">
      <Header />
      <Breadcrumb className="mt-4 mb-9 container mx-auto">
        <BreadcrumbList className="lowercase text-xs font-light tracking-tight">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/find/category/mens-health">
              {getNameFromSlug(slug)}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="max-w-md space-y-6 mb-9">
        <h2 className="font-title font-medium text-2xl xl:text-4xl tracking-tight">
          Prescription Men&apos;s Health Treatments.
          <br />
          No Brand Markup.
        </h2>
        <p className="font-light text-xl xl:text-2xl text-muted-foreground">
          Get clinically-backed treatments for sexual health, performance, and
          vitality, prescribed by licensed providers - without paying for flashy
          packaging.
        </p>
      </div>
      {/* COFOUNDER NOTE: Replaced Button with a styled Link to scroll to the products section. */}
      <Link
        href="#products"
        className="inline-flex items-center justify-center rounded-4xl font-title font-medium tracking-tight bg-zinc-800 text-white border border-neutral-900 hover:bg-zinc-900 py-3.5 px-11 text-xl"
      >
        Get Started
      </Link>
    </section>
  );
}
