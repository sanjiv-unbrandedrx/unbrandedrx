// File: src/components/about/partner-section.tsx
export default function PartnerSection() {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto px-4 py-20 text-center xl:px-0">
        <h2 className="font-title text-3xl font-medium tracking-tight xl:text-4xl">
          Expertise You Can Trust. Powered by Strut Health.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          Our platform is built in partnership with Strut Health, a leader in
          telehealth innovation. This collaboration allows us to provide you with
          a secure, best-in-class patient portal, access to a nationwide network
          of licensed medical providers, and reliable pharmacy services,
          ensuring your health is always in expert hands.
        </p>
      </div>
    </section>
  );
}