// app/about/page.tsx
export const metadata = {
  title: "About",
  description: "Brand story and craftsmanship standards.",
};

export default function AboutPage() {
  return (
    <main className="space-y-5">
      <h1 className="text-3xl font-semibold">About</h1>
      <p className="text-neutral-600">
        Share your brand story: craftsmanship, sourcing standards, authenticity checks, and
        your ordering process (request → confirm → deliver).
      </p>
    </main>
  );
}
