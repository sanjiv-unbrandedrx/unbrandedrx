import Header from "@/components/common/Header";

export default function ContactUsPage() {
  return (
    <main>
      <section className="px-4 xl:px-0">
        <Header />
      </section>
      <section className="container mx-auto my-10 px-4 py-10 text-center xl:my-20 xl:px-0">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-title text-4xl font-medium tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question or need help with your order? Our customer support
            team is here to assist you.
          </p>
          <div className="mt-8 rounded-2xl border bg-secondary p-8 text-left">
            <p>
              The best way to reach us is by email. Please send your inquiry to
              the address below, and a member of our team will get back to you
              within one business day.
            </p>
            <p className="mt-4">
              For questions about a specific medical condition, please consult
              with your healthcare provider.
            </p>
            <div className="mt-6">
              <h2 className="font-semibold text-secondary-foreground">
                Contact Information:
              </h2>
              <a
                href="mailto:support@unbrandedrx.co"
                className="text-primary underline-offset-4 hover:underline"
              >
                support@unbrandedrx.co
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}