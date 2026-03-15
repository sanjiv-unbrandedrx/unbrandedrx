import type { Metadata } from "next";
import Header from "@/components/common/Header";
import { MessageCircle, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with your UnbrandedRx order. Chat with our support team live or reach us by email.",
};

export default function SupportPage() {
  return (
    <main>
      <section className="px-4 xl:px-6">
        <Header />
      </section>
      <section className="container mx-auto my-10 px-4 py-10 xl:my-20 xl:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-title text-4xl font-medium tracking-tight">
            How can we help?
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Our support team is here to help with any questions about your
            treatment, order, or account.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
          {/* Submit a Request */}
          <div className="flex flex-col items-center rounded-2xl border bg-secondary p-8 text-center">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-neutral-100">
              <MessageCircle className="size-6 text-neutral-800" />
            </div>
            <h2 className="mt-4 font-title text-lg font-medium">
              Submit a Request
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Use the support widget in the bottom-right corner to submit a
              request. We&apos;ll respond within one business day.
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center rounded-2xl border bg-secondary p-8 text-center">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-neutral-100">
              <Mail className="size-6 text-neutral-800" />
            </div>
            <h2 className="mt-4 font-title text-lg font-medium">Email</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Send us an email and we&apos;ll get back to you within one
              business day.
            </p>
            <a
              href="mailto:support@unbrandedrx.co"
              className="mt-3 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              support@unbrandedrx.co
            </a>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center rounded-2xl border bg-secondary p-8 text-center">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-neutral-100">
              <Clock className="size-6 text-neutral-800" />
            </div>
            <h2 className="mt-4 font-title text-lg font-medium">Hours</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Monday &ndash; Friday
              <br />
              9:00 AM &ndash; 5:00 PM EST
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
