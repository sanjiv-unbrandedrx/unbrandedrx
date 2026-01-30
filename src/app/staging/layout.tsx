import Footer from "@/components/common/Footer";

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
