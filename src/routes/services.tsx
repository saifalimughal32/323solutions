import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { MotionFadeIn } from "@/components/site/MotionFadeIn";
import { SERVICES } from "@/lib/site/data";
import svcWindow from "@/assets/service-window.jpg";
import svcPressure from "@/assets/service-pressure.jpg";
import svcHouse from "@/assets/service-house.jpg";
import svcDeck from "@/assets/service-deck.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g5 from "@/assets/gallery-5.jpg";

const IMAGES: Record<string, string> = {
  "window-cleaning": svcWindow,
  "pressure-washing": svcPressure,
  "house-washing": svcHouse,
  "roof-washing": g3,
  "gutter-cleaning": g2,
  "deck-fence-cleaning": svcDeck,
  "driveway-patio": g5,
};

const INCLUDES: Record<string, string[]> = {
  "window-cleaning": ["Interior & exterior glass", "Tracks & sills", "Screens included", "Streak-free guarantee"],
  "pressure-washing": ["Driveways & sidewalks", "Pool decks & patios", "Garage floors", "Commercial lots"],
  "house-washing": ["Soft-wash siding", "Algae & mildew removal", "Trim & shutters", "Eco-safe detergents"],
  "roof-washing": ["Asphalt & shingle safe", "Black streak removal", "Moss treatment", "No high-pressure"],
  "gutter-cleaning": ["Full clear-out", "Downspout flush", "Exterior brightening", "Photo documentation"],
  "deck-fence-cleaning": ["Wood, composite, vinyl", "Gentle cleaning", "Optional staining prep", "Brightened finish"],
  "driveway-patio": ["Hot-water rinse", "Oil-stain treatment", "Algae kill", "Sealer-ready surfaces"],
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Exterior Cleaning Services — 323 Cleaning Solutions" },
      { name: "description", content: "Window cleaning, pressure washing, house washing, roof care, gutters, and more. Premium exterior cleaning across West Michigan." },
      { property: "og:title", content: "Premium Exterior Cleaning Services — 323" },
      { property: "og:description", content: "A full menu of professional exterior cleaning for West Michigan homes and businesses." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="container-x mx-auto max-w-screen-2xl pt-16 md:pt-24 pb-12">
        <SectionHeading
          eyebrow="Services"
          title={<>A Full Menu of <span className="text-brand-navy/60">Cleaning Services</span></>}
          subtitle="From streak-free windows to brand-new looking siding — we cover every exterior surface that matters."
        />
      </section>

      <section className="container-x mx-auto max-w-screen-2xl pb-24 space-y-8">
        {SERVICES.map((s, i) => {
          const reverse = i % 2 === 1;
          return (
            <MotionFadeIn key={s.slug}>
              <article className={`grid md:grid-cols-2 gap-6 lg:gap-10 items-center bg-card rounded-3xl shadow-card border border-border/60 p-5 md:p-8 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src={IMAGES[s.slug]}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="size-12 rounded-2xl bg-gradient-to-br from-white to-brand-silver text-brand-navy ring-1 ring-brand-navy/10 shadow-soft flex items-center justify-center">
                    <s.icon className="size-5" />
                  </div>
                  <h2 className="mt-4 text-2xl md:text-3xl font-bold text-brand-navy">{s.title}</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.short}</p>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                    {INCLUDES[s.slug].map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-brand-navy/85">
                        <CheckCircle2 className="size-4 text-brand-navy mt-0.5 shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="inline-flex items-center gap-2 rounded-full bg-brand-navy text-white px-5 py-2.5 text-sm font-bold shadow-soft hover:opacity-90 transition"
                    >
                      View Details <ArrowRight className="size-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-white text-brand-navy ring-1 ring-brand-navy/15 px-5 py-2.5 text-sm font-semibold hover:bg-brand-silver/30 transition"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </article>
            </MotionFadeIn>
          );
        })}
      </section>
    </>
  );
}
