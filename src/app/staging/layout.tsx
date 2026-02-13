import type { Metadata } from "next";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function StagingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
}
