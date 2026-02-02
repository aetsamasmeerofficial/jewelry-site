// src/app/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Home",
  description: SITE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/` },
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12 space-y-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: `${SITE_URL}/` },
        ])}
      />

      <header className="space-y-4">
        <p className="text-sm text-neutral-500">Premium Jewelry</p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Jewelry with meaning. Confidence that lasts.
        </h1>
        <p className="text-neutral-600 max-w-2xl">{SITE_DESCRIPTION}</p>

        <div className="flex gap-3">
          <Link
            href="/collections"
            className="rounded-xl bg-neutral-900 px-5 py-3 text-white hover:opacity-90"
          >
            View Collections
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-neutral-300 px-5 py-3 text-neutral-900 hover:bg-neutral-50"
          >
            Contact
          </Link>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 p-6 space-y-2">
          <h2 className="font-medium">Authenticity Verified</h2>
          <p className="text-sm text-neutral-600">
            Every piece is checked and confirmed.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-6 space-y-2">
          <h2 className="font-medium">Manual Confirmation</h2>
          <p className="text-sm text-neutral-600">
            We confirm availability and pricing before purchase.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-neutral-200 overflow-hidden">
        <div className="relative aspect-[16/7] w-full">
          <Image
            src="/hero.jpg"
            alt={`${SITE_NAME} hero`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>
    </main>
  );
}
