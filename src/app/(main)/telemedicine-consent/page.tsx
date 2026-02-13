// File: src/app/(main)/telemedicine-consent/page.tsx
import type { Metadata } from "next";
import Header from "@/components/common/Header";
import { getMarkdownContent } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Telemedicine Consent",
  description:
    "Read and understand the telemedicine informed consent for UnbrandedRx online provider consultations.",
};

export default async function TelemedicineConsentPage() {
  const contentHtml = await getMarkdownContent("telemedicine-consent");

  return (
    <main>
      <section className="px-4 xl:px-0">
        <Header />
      </section>
      <section className="container mx-auto my-10 px-4 py-10 xl:my-20 xl:px-0">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-title text-4xl font-medium tracking-tight">
            Telemedicine Consent
          </h1>
          <div
            className="legal-content mt-8 rounded-2xl border bg-secondary p-8"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </section>
    </main>
  );
}
