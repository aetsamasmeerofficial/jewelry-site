// app/products/[slug]/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const name = params.slug.replace(/-/g, " ");
  return {
    title: name.charAt(0).toUpperCase() + name.slice(1),
    description: `View details for ${name} and request to purchase.`,
  };
}

export default function ProductPage({ params }: Props) {
  const productName = params.slug.replace(/-/g, " ");

  return (
    <main className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold capitalize">{productName}</h1>
          <p className="mt-2 text-neutral-600">
            Premium piece. Request to purchase — no online payment.
          </p>
        </div>

        <Link
          className="rounded-xl bg-neutral-900 px-5 py-3 text-white hover:opacity-90"
          href={`/contact?product=${encodeURIComponent(params.slug)}`}
        >
          Request to Purchase
        </Link>
      </div>

      <section className="rounded-2xl border border-neutral-200 p-5">
        <h2 className="font-medium">Details</h2>
        <ul className="mt-3 list-inside list-disc text-sm text-neutral-700">
          <li>Material: (add later)</li>
          <li>Stone: (add later)</li>
          <li>Size options: (add later)</li>
          <li>Shipping: confirmed after request</li>
        </ul>
      </section>
    </main>
  );
}
