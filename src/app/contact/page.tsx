// src/app/contact/page.tsx
import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE_NAME} to request a purchase or ask a question.`,
  alternates: { canonical: `${SITE_URL}/contact` },
};

const faqs = [
  {
    question: "How do I purchase a piece?",
    answer:
      "Use the Request to Purchase button on a product page or contact us. We confirm availability, final price, and delivery details before payment.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes. Shipping options and timelines are confirmed during the request process.",
  },
  {
    question: "Can I request customization?",
    answer:
      "Yes. Share your requirements and we will confirm feasibility, timeline, and pricing.",
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 space-y-10">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: `${SITE_URL}/` },
            { name: "Contact", url: `${SITE_URL}/contact` },
          ]),
          faqSchema(faqs),
        ]}
      />

      <header className="space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="text-neutral-600">
          Send your request — we reply with availability, final price, and delivery.
        </p>
      </header>

      <section className="rounded-2xl border border-neutral-200 p-6 space-y-3">
        <p className="text-sm text-neutral-700">
          For now, this can be a simple email/WhatsApp flow. Later we’ll add a form.
        </p>
        <ul className="text-sm text-neutral-700 list-disc pl-5 space-y-1">
          <li>Email: hello@yourdomain.com</li>
          <li>WhatsApp: +886-000-000-000</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-neutral-200 p-6 space-y-4">
        <h2 className="text-xl font-medium">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.question} className="space-y-1">
              <p className="font-medium">{f.question}</p>
              <p className="text-sm text-neutral-700">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
