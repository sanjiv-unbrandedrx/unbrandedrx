"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { QuestionnaireProvider } from "@/lib/questionnaire/context";
import QuestionnaireShell from "@/components/staging/visit/questionnaire-shell";
import Link from "next/link";
import Logo from "@/components/svg/logo";
import { ArrowLeft } from "lucide-react";

function VisitContent() {
  const searchParams = useSearchParams();
  const treatment = searchParams.get("treatment") ?? "enclomiphene";

  return (
    <div className="h-[80vh] bg-white flex flex-col overflow-hidden">
      {/* Minimal header */}
      <header className="border-b border-neutral-100 px-6 py-6 flex items-center justify-between bg-white">
        <Link
          href="/staging/home-v2"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to UnbrandedRx
        </Link>
        <Logo className="w-44" />
        <div className="w-24" /> {/* spacer for centering */}
      </header>

      {/* Questionnaire */}
      <QuestionnaireProvider initialTreatment={treatment}>
        <QuestionnaireShell />
      </QuestionnaireProvider>
    </div>
  );
}

export default function VisitPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      }
    >
      <VisitContent />
    </Suspense>
  );
}
