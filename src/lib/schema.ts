// src/lib/schema.ts
import { SITE_NAME, SITE_URL, BRAND_EMAIL, BRAND_PHONE } from "./site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`, // optional (put /public/logo.png)
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: BRAND_EMAIL,
        telephone: BRAND_PHONE,
        availableLanguage: ["en"],
      },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function productSchema(input: {
  name: string;
  description: string;
  slug: string;
  imageUrl: string;
  brand?: string;
}) {
  const url = `${SITE_URL}/products/${input.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: input.name,
    description: input.description,
    image: [input.imageUrl],
    url,
    brand: {
      "@type": "Brand",
      name: input.brand || SITE_NAME,
    },
    // You can add offer/price later when you have actual pricing:
    // offers: { "@type":"Offer", priceCurrency:"USD", price:"...", availability:"https://schema.org/InStock", url }
  };
}

export function faqSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}
