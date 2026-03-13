"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

export default function ZendeskWidget() {
  const pathname = usePathname();

  // Hide Zendesk on questionnaire pages
  if (pathname.startsWith("/staging/visit")) return null;

  return (
    <Script
      id="ze-snippet"
      src="https://static.zdassets.com/ekr/snippet.js?key=d9a6b9b3-7260-4bcc-8eb0-913c82f9b355"
      strategy="lazyOnload"
    />
  );
}
