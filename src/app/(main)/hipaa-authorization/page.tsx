// File: src/app/(main)/hipaa-authorization/page.tsx
import type { Metadata } from "next";
import Header from "@/components/common/Header";
import { getMarkdownContent } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "HIPAA Authorization",
  description:
    "Read and understand the HIPAA Authorization for UnbrandedRx lab testing services provided through Junction.",
};

export default async function HipaaAuthorizationPage() {
  const contentHtml = await getMarkdownContent("hipaa-authorization");

  return (
    <main>
      <section className="px-4 xl:px-6">
        <Header />
      </section>
      <section className="container mx-auto my-10 px-4 py-10 xl:my-20 xl:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-title text-4xl font-medium tracking-tight">
            HIPAA Authorization
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
