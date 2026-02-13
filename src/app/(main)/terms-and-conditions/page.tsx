// File: src/app/(main)/terms-and-conditions/page.tsx
import type { Metadata } from "next";
import Header from "@/components/common/Header";
import { getMarkdownContent } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Review the UnbrandedRx Terms and Conditions governing use of our telehealth platform and prescription services.",
};

export default async function TermsAndConditionsPage() {
  const contentHtml = await getMarkdownContent("terms-and-conditions");

  return (
    <main>
      <section className="px-4 xl:px-0">
        <Header />
      </section>
      <section className="container mx-auto my-10 px-4 py-10 xl:my-20 xl:px-0">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-title text-4xl font-medium tracking-tight">
            Terms & Conditions
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