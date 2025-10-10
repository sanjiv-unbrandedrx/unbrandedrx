// src/app/not-found.tsx
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Button from "@/components/ui/button-custom";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main>
        <section className="px-4 xl:px-0">
          <Header />
        </section>
        <section className="container mx-auto my-10 px-4 py-10 text-center xl:my-20 xl:px-0">
          <div className="mx-auto max-w-2xl">
            <h1 className="font-title text-4xl font-medium tracking-tight">
              404 - Page Not Found
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Sorry, the page you are looking for does not exist.
            </p>
            <Button size="lg" variant="filled" className="mt-8">
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}