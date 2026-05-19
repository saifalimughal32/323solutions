import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronRight, Phone } from "lucide-react";
import { MotionFadeIn } from "@/components/site/MotionFadeIn";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SERVICE_DETAILS, type ServiceDetail } from "@/lib/site/services-detail";
import { BRAND } from "@/lib/site/data";
import svcWindow from "@/assets/service-window.jpg";
import svcPressure from "@/assets/service-pressure.jpg";
import svcHouse from "@/assets/service-house.jpg";
import svcDeck from "@/assets/service-deck.jpg";

const IMAGES: Record<string, string> = {
  "service-window": svcWindow,
  "service-pressure": svcPressure,
  "service-house": svcHouse,
  "service-deck": svcDeck,
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const detail = SERVICE_DETAILS[params.slug];
    if (!detail) throw notFound();
    return { detail };
  },
  head: ({ loaderData }) => {
    const d = loaderData?.detail;
    return {
      meta: d
        ? [
            { title: `${d.title} — 323 Cleaning Solutions` },
            { name: "description", content: d.tagline },
            { property: "og:title", content: `${d.title} — 323 Cleaning Solutions` },
            { property: "og:description", content: d.tagline },
          ]
        : [{ title: "Service — 323 Cleaning Solutions" }],
    };
  },
  notFoundComponent: () => (
    <div className="container-x mx-auto max-w-3xl py-24 text-center">
      <h1 className="text-3xl font-bold text-brand-navy">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block text-brand-navy underline">
        Back to all services
      </Link>
    </div>
  ),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { detail } = Route.useLoaderData() as { detail: ServiceDetail };
  const img = IMAGES[detail.image] ?? svcHouse;

  return (
    <>
      {/* Hero */}
      <section className="container-x mx-auto max-w-screen-2xl pt-12 md:pt-16">
        <nav className="flex items-center gap-1.5 text-xs text-brand-navy/60 mb-6">
          <Link to="/" className="hover:text-brand-navy">Home</Link>
          <ChevronRight className="size-3" />
          <Link to="/services" className="hover:text-brand-navy">Services</Link>
          <ChevronRight className="size-3" />
          <span className="text-brand-navy/80">{detail.title}</span>
        </nav>
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center">
          <MotionFadeIn>
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-brand-navy/60">Service</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy leading-[1.05]">
              {detail.title}
            </h1>
            <p className="mt-4 text-lg text-brand-navy/75 max-w-xl">{detail.tagline}</p>
            <p className="mt-4 text-[15px] text-brand-navy/70 leading-relaxed max-w-xl">{detail.overview}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-navy text-white px-7 py-3.5 text-sm font-bold shadow-soft hover:opacity-90 transition"
              >
                Get a Free Quote <ArrowRight className="size-4" />
              </Link>
              <a
                href={BRAND.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-white text-brand-navy ring-1 ring-brand-navy/15 px-6 py-3.5 text-sm font-semibold hover:bg-brand-silver/30 transition"
              >
                <Phone className="size-4" /> {BRAND.phone}
              </a>
            </div>
          </MotionFadeIn>
          <MotionFadeIn delay={0.1}>
            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-elevated ring-1 ring-brand-navy/10">
              <img src={img} alt={detail.title} className="w-full h-full object-cover" loading="eager" />
            </div>
          </MotionFadeIn>
        </div>
      </section>

      {/* What's included */}
      <section className="container-x mx-auto max-w-screen-2xl py-16 md:py-20">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14">
          <MotionFadeIn>
            <SectionHeading
              eyebrow="What's included"
              title={<>Every job, <span className="text-brand-navy/60">done right</span></>}
              subtitle="No upsells, no surprise add-ons. Here's exactly what comes with this service."
              align="left"
            />
          </MotionFadeIn>
          <MotionFadeIn delay={0.1}>
            <ul className="grid sm:grid-cols-2 gap-3">
              {detail.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-white rounded-2xl p-4 ring-1 ring-brand-navy/10 shadow-card">
                  <CheckCircle2 className="size-5 text-brand-navy shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-brand-navy/85">{item}</span>
                </li>
              ))}
            </ul>
          </MotionFadeIn>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-3 sm:px-5">
        <div className="container-x mx-auto max-w-screen-2xl">
          <MotionFadeIn>
            <div className="rounded-[2rem] bg-brand-navy text-white p-8 md:p-12 grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
              <div>
                <p className="text-xs font-bold tracking-[0.22em] uppercase text-white/60">Pricing</p>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold leading-tight">
                  Honest, upfront pricing
                </h2>
                <p className="mt-3 text-white/75 max-w-md text-[15px]">{detail.pricing.notes}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-5">
                  <p className="text-xs uppercase tracking-wider text-white/60">Starting at</p>
                  <p className="mt-2 font-display text-3xl font-extrabold">{detail.pricing.startingAt}</p>
                </div>
                <div className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-5">
                  <p className="text-xs uppercase tracking-wider text-white/60">Typical range</p>
                  <p className="mt-2 font-display text-xl font-extrabold">{detail.pricing.typicalRange}</p>
                </div>
                <Link
                  to="/contact"
                  className="col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-white text-brand-navy px-6 py-3.5 text-sm font-bold shadow-soft hover:opacity-90 transition"
                >
                  Get my exact quote <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </MotionFadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="container-x mx-auto max-w-screen-2xl py-20">
        <SectionHeading eyebrow="Our process" title="How the job goes" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {detail.process.map((p, i) => (
            <MotionFadeIn key={p.step} delay={i * 0.06}>
              <div className="h-full rounded-2xl bg-white p-6 ring-1 ring-brand-navy/10 shadow-card">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-navy text-white font-bold text-sm">
                  {p.step}
                </span>
                <h3 className="mt-4 font-display text-lg font-extrabold text-brand-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-brand-navy/70 leading-relaxed">{p.text}</p>
              </div>
            </MotionFadeIn>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="container-x mx-auto max-w-4xl pb-20">
        <SectionHeading eyebrow="FAQs" title={`${detail.title} questions`} />
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {detail.faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`q-${i}`}
              className="rounded-2xl bg-white ring-1 ring-brand-navy/10 px-5 data-[state=open]:ring-brand-navy/30"
            >
              <AccordionTrigger className="text-left font-semibold text-brand-navy hover:no-underline py-4 text-sm">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-brand-navy/70 pb-4 text-sm">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-navy text-white px-8 py-4 text-sm font-bold shadow-soft hover:opacity-90 transition"
          >
            Request your free quote <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}