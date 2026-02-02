// app/contact/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Request to purchase or contact our team.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { product?: string };
}) {
  const product = searchParams?.product ? decodeURIComponent(searchParams.product) : "";

  const whatsappNumber = "YOUR_NUMBER"; // e.g. 886XXXXXXXXX (no +)
  const msg = product
    ? `Hi, I want to request to purchase: ${product}. Please confirm price and delivery.`
    : "Hi, I want to request to purchase. Please share details.";
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;

  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-semibold">Contact</h1>

      {product && (
        <div className="rounded-2xl border border-neutral-200 p-5">
          <p className="text-sm text-neutral-700">
            Product selected: <span className="font-medium">{product}</span>
          </p>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 p-5">
          <h2 className="font-medium">WhatsApp</h2>
          <p className="mt-2 text-sm text-neutral-600">
            Fastest way. Send your request and we’ll confirm availability, final price and delivery.
          </p>
          <Link className="mt-3 inline-block underline" href={waLink} target="_blank">
            Message on WhatsApp
          </Link>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-5">
          <h2 className="font-medium">Order Request Form</h2>
          <p className="mt-2 text-sm text-neutral-600">
            Next phase we’ll build a premium form that emails you + saves to a sheet.
          </p>
        </div>
      </div>
    </main>
  );
}
