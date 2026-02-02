// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="space-y-10">
      <header className="space-y-3">
        <p className="text-sm tracking-wide text-neutral-500">Premium Jewelry</p>
        <h1 className="text-4xl font-semibold tracking-tight">
          Jewelry with meaning. Confidence that lasts.
        </h1>
        <p className="max-w-2xl text-neutral-600">
          Explore curated collections and request to purchase. Our team confirms
          availability, final pricing, and delivery details.
        </p>

        <div className="flex gap-3">
          <Link
            className="rounded-xl bg-neutral-900 px-5 py-3 text-white hover:opacity-90"
            href="/collections"
          >
            View Collections
          </Link>
          <Link
            className="rounded-xl border border-neutral-200 px-5 py-3 hover:bg-neutral-50"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Authenticity Verified", desc: "Every piece is checked and confirmed." },
          { title: "Manual Confirmation", desc: "We confirm stock, price, and shipping." },
          { title: "Worldwide Delivery", desc: "Shipping options provided after request." },
        ].map((card) => (
          <div key={card.title} className="rounded-2xl border border-neutral-200 p-5">
            <h2 className="font-medium">{card.title}</h2>
            <p className="mt-2 text-sm text-neutral-600">{card.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
