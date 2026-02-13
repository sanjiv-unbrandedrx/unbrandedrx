// File: src/app/(main)/privacy-policy/page.tsx
import type { Metadata } from "next";
import Header from "@/components/common/Header";
import { getMarkdownContent } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the UnbrandedRx Privacy Policy to understand how we collect, use, and protect your personal and health information.",
};

export default async function PrivacyPolicyPage() {
  const contentHtml = await getMarkdownContent("privacy-policy");

  return (
    <main>
      <section className="px-4 xl:px-0">
        <Header />
      </section>
      <section className="container mx-auto my-10 px-4 py-10 xl:my-20 xl:px-0">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-title text-4xl font-medium tracking-tight">
            Privacy Policy
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