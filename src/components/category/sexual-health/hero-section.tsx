// File: src/components/category/sexual-health/hero-section.tsx
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
  const slug = "sexual-health";
  return (
    <section className="container mx-auto pb-20 bg-none xl:bg-[url(/home/sexual-health.webp)] bg-right bg-cover bg-no-repeat px-4 xl:px-0">
      <Header />
      <Breadcrumb className="mt-4 mb-9 container mx-auto">
        <BreadcrumbList className="lowercase text-xs font-light tracking-tight">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/shop/category/sexual-health">
              {getNameFromSlug(slug)}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="max-w-md space-y-6 mb-9">
        <h2 className="font-title font-medium text-2xl xl:text-4xl tracking-tight">
          Prescription Sexual Health Treatments.
          <br />
          No Brand Markup.
        </h2>
        <p className="font-light text-xl xl:text-2xl text-muted-foreground">
          Get clinically-backed treatments for performance and stamina,
          prescribed by licensed providers — without paying for flashy
          packaging.
        </p>
      </div>
      <Button size="xl" variant="filled">
        Get Started
      </Button>
    </section>
  );
}