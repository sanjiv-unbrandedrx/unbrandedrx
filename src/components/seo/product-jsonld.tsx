interface ProductJsonLdProps {
  name: string;
  description: string;
  image: string;
  price: string;
  sku: string;
  url: string;
}

export default function ProductJsonLd({
  name,
  description,
  image,
  price,
  sku,
  url,
}: ProductJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: `https://www.unbrandedrx.co${image}`,
    sku,
    url: `https://www.unbrandedrx.co${url}`,
    brand: {
      "@type": "Brand",
      name: "UnbrandedRx",
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "UnbrandedRx",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
