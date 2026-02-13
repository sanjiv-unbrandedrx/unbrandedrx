import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/staging/",
      },
    ],
    sitemap: "https://www.unbrandedrx.co/sitemap.xml",
  };
}
