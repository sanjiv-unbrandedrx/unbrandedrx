import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Your Visit | UnbrandedRx",
  description:
    "Complete your health questionnaire to get started with your personalized treatment plan.",
  robots: { index: false, follow: false },
};

export default function VisitLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Visit pages use their own full-screen layout (no footer/nav)
  return <>{children}</>;
}
