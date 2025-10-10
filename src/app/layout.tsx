import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@/app/globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "unbrandedrx",
  description: "unbrandedrx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <div>{children}</div>
        <Script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=d9a6b9b3-7260-4bcc-8eb0-913c82f9b355"
        >
          {" "}
        </Script>
      </body>
    </html>
  );
}
