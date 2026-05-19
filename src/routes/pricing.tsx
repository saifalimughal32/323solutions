import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — 323 Cleaning Solutions" },
      { name: "description", content: "Transparent pricing for house and office cleaning services in West Michigan." },
      { property: "og:title", content: "Pricing — 323 Cleaning Solutions" },
      { property: "og:description", content: "Transparent pricing for cleaning services." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <main className="container-x mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-12 py-24">
      <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy">Pricing</h1>
      <p className="mt-4 text-brand-navy/70 max-w-2xl">
        Every home is different — we tailor pricing to bedrooms, bathrooms and frequency.
        Get a free, no-obligation quote in under a minute.
      </p>
      <Link
        to="/contact"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-navy text-white px-7 py-3 text-sm font-bold shadow-soft hover:opacity-90"
      >
        Request a Quote
      </Link>
    </main>
  );
}