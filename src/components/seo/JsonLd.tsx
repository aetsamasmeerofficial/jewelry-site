// src/components/seo/JsonLd.tsx
import Script from "next/script";

type JsonLdProps = {
  id: string; // unique per page (ex: "org-schema", "product-schema-emerald-ring")
  data: Record<string, any>;
};

export function JsonLd({ id, data }: JsonLdProps) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
