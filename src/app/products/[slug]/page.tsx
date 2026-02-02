// src/app/products/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;

  const name = slug.replace(/-/g, " ");
  const title = name.charAt(0).toUpperCase() + name.slice(1);

  return {
    title,
    description: `View details for ${name} and request to purchase.`,
  };
}

export default async function ProductPage(props: PageProps) {
  const { slug } = await props.params;

  if (!slug) notFound();

  const productName = slug.replace(/-/g, " ");

  return (
    <main className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs tracking-wide text-neutral-500">Product</p>
          <h1 className="text-3xl font-semibold capitalize">{productName}</h1>
          <p className="mt-2 text-neutral-600">
            Request to purchase — we confirm availability, final price, and delivery.
          </p>
        </div>

        <Link
          href={`/contact?product=${encodeURIComponent(productName)}`}
          className="rounded-xl bg-neutral-900 px-5 py-3 text-white hover:opacity-90"
        >
          Request to Purchase
        </Link>
      </div>

      <section className="rounded-2xl border border-neutral-200 p-5">
        <h2 className="font-medium">Details</h2>
        <ul className="mt-3 list-inside list-disc text-sm text-neutral-700">
          <li>Material: (add later)</li>
          <li>Stone: (add later)</li>
          <li>Sizes: (add later)</li>
          <li>Shipping: confirmed after request</li>
        </ul>
      </section>
    </main>
  );
}
