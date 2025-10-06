// File: src/components/about/director-section.tsx
import Image from "next/image";

export default function DirectorSection() {
  return (
    <section className="container mx-auto my-10 px-4 py-10 xl:my-20 xl:px-0">
      <div className="flex flex-col items-center gap-12 md:flex-row">
        <div className="relative size-48 flex-shrink-0 md:size-64">
          {/* SURGICAL STRIKE: Replaced placeholder with the local image of Dr. Patel. */}
          <Image
            src="/about/dr-simal-patel.png"
            alt="Dr. Simal Patel"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-title text-3xl font-medium">
            A Message from Our Medical Director
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            &quot;At unbrandedrx, our focus is singular: patient well-being. We
            empower our providers to prescribe the most effective,
            clinically-backed treatments available. By removing the noise of
            brand marketing, we can focus purely on delivering high-quality,
            accessible, and affordable care.&quot;
          </p>
          <p className="mt-6 font-semibold">Dr. Simal Patel</p>
          <p className="text-sm text-muted-foreground">Medical Director</p>
        </div>
      </div>
    </section>
  );
}
