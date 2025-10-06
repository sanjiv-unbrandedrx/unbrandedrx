// File: src/app/(main)/terms-and-conditions/page.tsx
import Header from "@/components/common/Header";

export default function TermsAndConditionsPage() {
  return (
    <main>
      <section className="px-4 xl:px-0">
        <Header />
      </section>
      <section className="container mx-auto my-10 px-4 py-10 text-center xl:my-20 xl:px-0">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-title text-4xl font-medium tracking-tight">
            Terms & Conditions
          </h1>
          <div className="mt-8 rounded-2xl border bg-secondary p-8 text-center">
            <p className="text-lg italic text-muted-foreground">
              An old silent pond...
              <br />A frog jumps into the pond,
              <br />
              splash! Silence again.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}