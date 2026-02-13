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
  metadataBase: new URL("https://www.unbrandedrx.co"),
  title: {
    template: "%s | UnbrandedRx",
    default: "UnbrandedRx — Better Formulas. Smarter Rx Prices.",
  },
  description:
    "Skip fancy packaging and save more on prescription treatments. Clinically-backed formulas for hair loss, sexual health, testosterone, and more — prescribed by licensed U.S. providers.",
  openGraph: {
    type: "website",
    siteName: "UnbrandedRx",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "UnbrandedRx",
              url: "https://www.unbrandedrx.co",
              logo: "https://www.unbrandedrx.co/logo.png",
              description:
                "Prescription treatments without the brand markup. Clinically-backed formulas prescribed by licensed U.S. providers.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                url: "https://www.unbrandedrx.co/contact-us",
              },
            }),
          }}
        />
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MWM47RCD');`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWM47RCD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
