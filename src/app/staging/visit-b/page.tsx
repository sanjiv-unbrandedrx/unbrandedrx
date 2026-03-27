"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { QuestionnaireProvider } from "@/lib/questionnaire/context";
import QuestionnaireShellB from "@/components/staging/visit-b/questionnaire-shell-b";
import Link from "next/link";
import Logo from "@/components/svg/logo";
import { ArrowLeft } from "lucide-react";

function VisitBContent() {
  const searchParams = useSearchParams();
  const treatment = searchParams.get("treatment") ?? "enclomiphene";

  return (
    <div className="h-[80vh] bg-white flex flex-col overflow-hidden">
      {/* Minimal header */}
      <header className="border-b border-neutral-100 px-4 py-4 md:px-6 md:py-6 flex items-center justify-between bg-white">
        <Link
          href="/staging/home-v2"
          className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5 md:h-4 md:w-4" />
          <span className="hidden sm:inline">Back to UnbrandedRx</span>
          <span className="sm:hidden">Back</span>
        </Link>
        <Logo className="w-32 md:w-44" />
        <div className="w-12 md:w-24" /> {/* spacer for centering */}
      </header>

      {/* Questionnaire — B variant */}
      <QuestionnaireProvider initialTreatment={treatment}>
        <QuestionnaireShellB />
      </QuestionnaireProvider>
    </div>
  );
}

export default function VisitBPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      }
    >
      <VisitBContent />
    </Suspense>
  );
}
