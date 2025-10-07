// @/components/category/all-products/hero-section.tsx
import Header from "@/components/common/Header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Button from "@/components/ui/button-custom";
import { getNameFromSlug } from "@/lib/utils";

export default function HeroSection() {
  const slug = "all-products";
  return (
    <section className="container mx-auto pb-20 bg-none xl:bg-[url(/categories/hair-loss.webp)] bg-right bg-cover bg-no-repeat px-4 xl:px-0">
      <Header />
      <Breadcrumb className="mt-4 mb-9 container mx-auto">
        <BreadcrumbList className="lowercase text-xs font-light tracking-tight">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/shop/category/all-products">
              {getNameFromSlug(slug)}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="max-w-md space-y-6 mb-9">
        <h2 className="font-title font-medium text-2xl xl:text-4xl tracking-tight">
          All Prescription Treatments.
          <br />
          No Brand Markup.
        </h2>
        <p className="font-light text-xl xl:text-2xl text-muted-foreground">
          Browse all clinically-backed formulas prescribed by licensed
          providers — without paying for celebrity ads or flashy packaging.
        </p>
      </div>
      <Button size="xl" variant="filled">
        Get Started
      </Button>
    </section>
  );
}