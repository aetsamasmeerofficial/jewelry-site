// src/app/products/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, productSchema } from "@/lib/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function humanizeSlug(slug: string) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const { slug } = await props.params;
  if (!slug) return { title: "Product" };

  const name = humanizeSlug(slug);
  const canonical = `${SITE_URL}/products/${slug}`;

  return {
    title: name,
    description: `Explore ${name} by ${SITE_NAME}. Request to purchase — we confirm availability, final price, and delivery.`,
    alternates: { canonical },
    openGraph: {
      title: `${name} | ${SITE_NAME}`,
      description: `Explore ${name}. Request to purchase — availability and final price confirmed.`,
      url: canonical,
      images: [
        {
          url: "/og/default.png",
          width: 1200,
          height: 630,
          alt: `${name} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} | ${SITE_NAME}`,
      description: `Explore ${name}. Request to purchase — availability and final price confirmed.`,
      images: ["/og/default.png"],
    },
  };
}

export default async function ProductPage(props: PageProps) {
  const { slug } = await props.params;
  if (!slug) notFound();

  const name = humanizeSlug(slug);
  const canonical = `${SITE_URL}/products/${slug}`;

  // For now we use a placeholder image per product:
  // Later you’ll replace with real product images.
  const imageUrl = `${SITE_URL}/products/placeholder.jpg`;

  const description =
    "Request to purchase — we confirm availability, final price, and delivery.";

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-10">
      {/* JSON-LD: Breadcrumb + Product */}
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: `${SITE_URL}/` },
            { name: "Collections", url: `${SITE_URL}/collections` },
            { name, url: canonical },
          ]),
          productSchema({
            name,
            description,
            slug,
            imageUrl,
          }),
        ]}
      />

      <header className="flex items-start justify-between gap-6">
        <div>
          <p className="text-sm text-neutral-500">Product</p>
          <h1 className="text-4xl font-semibold tracking-tight">{name}</h1>
          <p className="text-neutral-600 mt-2">{description}</p>
        </div>

        <Link
          href={`/contact?product=${encodeURIComponent(name)}`}
          className="rounded-xl bg-neutral-900 px-5 py-3 text-white hover:opacity-90"
        >
          Request to Purchase
        </Link>
      </header>

      <section className="grid gap-8 md:grid-cols-2 items-start">
        <div className="rounded-2xl border border-neutral-200 overflow-hidden">
          <div className="relative aspect-square w-full">
            <Image
              src="/products/placeholder.jpg"
              alt={name}
              fill
              className="object-cover"
              // lazy loading is default for non-priority images
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-6 space-y-3">
          <h2 className="font-medium">Details</h2>
          <ul className="text-sm text-neutral-700 list-disc pl-5 space-y-1">
            <li>Material: (add later)</li>
            <li>Stone: (add later)</li>
            <li>Sizes: (add later)</li>
            <li>Shipping: confirmed after request</li>
          </ul>

          <div className="pt-4">
            <Link
              href="/collections"
              className="text-sm text-neutral-900 underline underline-offset-4 hover:opacity-80"
            >
              ← Back to collections
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
