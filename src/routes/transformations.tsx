import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { MotionFadeIn } from "@/components/site/MotionFadeIn";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
import baDB from "@/assets/ba-driveway-before.jpg";
import baDA from "@/assets/ba-driveway-after.jpg";
import baHB from "@/assets/ba-house-before.jpg";
import baHA from "@/assets/ba-house-after.jpg";
import baWB from "@/assets/ba-window-before.jpg";
import baWA from "@/assets/ba-window-after.jpg";
import { TRANSFORMATIONS } from "@/lib/site/data";

const IMG: Record<string, string> = {
  "ba-driveway-before": baDB,
  "ba-driveway-after": baDA,
  "ba-house-before": baHB,
  "ba-house-after": baHA,
  "ba-window-before": baWB,
  "ba-window-after": baWA,
};

// Eagerly import all real job photos from the 323 reference set
const galleryModules = import.meta.glob("@/assets/323/gallery-*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;
const GALLERY = Object.entries(galleryModules)
  .sort(([a], [b]) => {
    const na = parseInt(a.match(/gallery-(\d+)\.jpg/)?.[1] ?? "0", 10);
    const nb = parseInt(b.match(/gallery-(\d+)\.jpg/)?.[1] ?? "0", 10);
    return na - nb;
  })
  .map(([, src]) => src);

export const Route = createFileRoute("/transformations")({
  head: () => ({
    meta: [
      { title: "Transformations — Before & After | 323 Cleaning Solutions" },
      { name: "description", content: "See real before-and-after results from our exterior cleaning work across West Michigan." },
      { property: "og:title", content: "Real Transformations — 323 Cleaning Solutions" },
      { property: "og:description", content: "Drag-to-reveal before & after sliders showing our exterior cleaning results." },
    ],
  }),
  component: TransformationsPage,
});

function TransformationsPage() {
  return (
    <>
      <section className="container-x mx-auto max-w-screen-2xl pt-16 md:pt-24 pb-12">
        <SectionHeading
          eyebrow="Transformations"
          title={<>Real Results, <span className="text-brand-navy/60">Real Homes</span></>}
          subtitle="Drag the slider on any project to reveal the before and after. Every job below is a real 323 customer in West Michigan."
        />
      </section>

      <section className="container-x mx-auto max-w-screen-2xl pb-20 grid md:grid-cols-2 gap-8">
        {TRANSFORMATIONS.map((it, i) => (
          <MotionFadeIn key={it.slug} delay={i * 0.06}>
            <article className="rounded-3xl bg-white ring-1 ring-brand-navy/10 shadow-card p-4 md:p-5 flex flex-col h-full">
              <BeforeAfterSlider
                before={IMG[it.before] ?? baHB}
                after={IMG[it.after] ?? baHA}
                alt={it.label}
              />
              <div className="mt-5 px-1 flex-1 flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-brand-navy/60 bg-brand-silver/40 rounded-full px-3 py-1">
                    <Sparkles className="size-3" /> {it.service}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-brand-navy/60">
                    <MapPin className="size-3" /> {it.location}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-extrabold text-brand-navy">{it.label}</h3>
                <p className="mt-2 text-sm text-brand-navy/70 leading-relaxed">{it.caption}</p>
              </div>
            </article>
          </MotionFadeIn>
        ))}
      </section>

      <section className="bg-cream py-20 md:py-24">
        <div className="container-x mx-auto max-w-screen-2xl">
          <SectionHeading eyebrow="Gallery" title="More Recent Work" />
          <MotionFadeIn className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {GALLERY.map((src, i) => (
                <div key={i} className="rounded-3xl overflow-hidden aspect-[4/3] shadow-card group">
                  <img src={src} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </MotionFadeIn>
          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-navy text-white px-7 py-3.5 text-sm font-bold shadow-soft hover:opacity-90 transition"
            >
              Get a Free Quote <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
