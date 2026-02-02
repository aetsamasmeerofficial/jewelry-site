// src/lib/site.ts
export const SITE_NAME = "Your Jewelry Brand";
export const SITE_DESCRIPTION =
  "Ethically sourced collections and bespoke pieces. Our team confirms availability, final pricing, and delivery before purchase.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

export const OG_IMAGE = "/og/default.png"; // create this later in /public/og/default.png
export const BRAND_EMAIL = "hello@yourdomain.com"; // change later
export const BRAND_PHONE = "+886-000-000-000"; // optional
