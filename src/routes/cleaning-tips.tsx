import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cleaning-tips")({
  head: () => ({
    meta: [
      { title: "Cleaning Tips — 323 Cleaning Solutions" },
      { name: "description", content: "Practical cleaning tips and guides from West Michigan cleaning pros." },
      { property: "og:title", content: "Cleaning Tips — 323 Cleaning Solutions" },
      { property: "og:description", content: "Practical cleaning tips from the pros." },
    ],
  }),
  component: CleaningTipsPage,
});

function CleaningTipsPage() {
  return (
    <main className="container-x mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-12 py-24">
      <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy">Cleaning Tips</h1>
      <p className="mt-4 text-brand-navy/70 max-w-2xl">
        Pro tips, how-tos and seasonal checklists from our cleaning team — coming soon.
      </p>
    </main>
  );
}