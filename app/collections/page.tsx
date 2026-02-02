// app/collections/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Collections",
  description: "Explore our jewelry collections.",
};

export default function CollectionsPage() {
  const collections = [
    { name: "Rings", href: "/collections#rings" },
    { name: "Necklaces", href: "/collections#necklaces" },
    { name: "Bracelets", href: "/collections#bracelets" },
  ];

  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-semibold">Collections</h1>
      <p className="text-neutral-600">
        Browse curated categories. Each product page includes a request-to-purchase option.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {collections.map((c) => (
          <div key={c.name} className="rounded-2xl border border-neutral-200 p-5">
            <h2 className="font-medium">{c.name}</h2>
            <Link className="mt-3 inline-block text-sm underline" href={c.href}>
              Explore
            </Link>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-neutral-50 p-5">
        <p className="text-sm text-neutral-700">
          Next phase: we’ll generate collection pages + SEO landing pages for each category.
        </p>
      </div>
    </main>
  );
}
