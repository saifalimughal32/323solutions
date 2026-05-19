import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from "lucide-react";
import { MotionFadeIn } from "@/components/site/MotionFadeIn";
import { QuoteForm } from "@/components/site/QuoteForm";
import { BRAND } from "@/lib/site/data";
import teamImg from "@/assets/clany-team-323.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Free Quote — 323 Cleaning Solutions" },
      { name: "description", content: "Request a free quote for window cleaning, pressure washing, house washing & more. Serving West Michigan." },
      { property: "og:title", content: "Get a Free Quote — 323 Cleaning Solutions" },
      { property: "og:description", content: "Tell us about your project. We respond within 24 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    {
      icon: Mail,
      label: "Email us",
      value: BRAND.email,
      href: `mailto:${BRAND.email}`,
    },
    {
      icon: Phone,
      label: "Call us",
      value: BRAND.phone,
      href: BRAND.phoneHref,
    },
    {
      icon: MapPin,
      label: "Our Location",
      value: `${BRAND.address}\nServing ${BRAND.region}`,
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "Mon–Fri  ·  7:00am – 7:00pm\nSat  ·  8:00am – 4:00pm\nSun  ·  Closed",
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="container-x mx-auto max-w-screen-2xl pt-20 md:pt-28 pb-10 text-center">
        <MotionFadeIn>
          <p className="text-[11px] font-bold tracking-[0.28em] uppercase text-brand-navy/55">
            Contact us
          </p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-brand-navy leading-[1.02]">
            Contact Us <em className="not-italic text-brand-blue">Today</em>
          </h1>
          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center gap-2 text-brand-gold">
              <span aria-hidden className="h-px w-10 bg-brand-gold/50" />
              <span className="size-1.5 rounded-full bg-brand-gold" />
              <span aria-hidden className="h-px w-10 bg-brand-gold/50" />
            </span>
          </div>
        </MotionFadeIn>
      </section>

      {/* 4 info cards */}
      <section className="container-x mx-auto max-w-screen-2xl pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {cards.map((c, i) => (
            <MotionFadeIn key={c.label} delay={i * 0.06}>
              <InfoCard {...c} />
            </MotionFadeIn>
          ))}
        </div>
      </section>

      {/* Form + Team photo */}
      <section className="container-x mx-auto max-w-screen-2xl pb-24">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <MotionFadeIn>
            <div className="relative h-full rounded-[2rem] bg-gradient-to-br from-brand-navy via-brand-navy to-[oklch(0.22_0.05_255)] text-white p-8 md:p-10 overflow-hidden">
              <div aria-hidden className="absolute -top-20 -right-20 size-80 rounded-full bg-brand-gold/15 blur-3xl" />
              <div aria-hidden className="absolute -bottom-24 -left-16 size-72 rounded-full bg-brand-blue/25 blur-3xl" />
              <div className="relative">
                <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-brand-gold">
                  Contact form
                </p>
                <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold leading-[1.1] tracking-tight">
                  Contact us Today for <br /> Any Questions
                </h2>
                <p className="mt-3 text-sm text-white/70 max-w-md">
                  Tell us about your project — we'll respond within 24 hours with a custom, no-obligation quote.
                </p>
                <div className="mt-7">
                  <QuoteForm />
                </div>
              </div>
            </div>
          </MotionFadeIn>

          <MotionFadeIn delay={0.1}>
            <div className="relative h-full min-h-[26rem] rounded-[2rem] overflow-hidden shadow-elevated">
              <img
                src={teamImg}
                alt="323 Cleaning Solutions team at work"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                <div className="text-white">
                  <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-brand-gold">
                    Our promise
                  </p>
                  <p className="mt-2 font-display text-xl font-semibold leading-tight">
                    Punctual. Polite. <br /> Pristine results.
                  </p>
                </div>
                <a
                  href={BRAND.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur text-brand-navy px-5 py-2.5 text-xs font-bold shadow-soft hover:bg-white transition whitespace-nowrap"
                >
                  <Phone className="size-3.5" /> Call now
                </a>
              </div>
            </div>
          </MotionFadeIn>
        </div>
      </section>

      {/* CTA band */}
      <section className="container-x mx-auto max-w-screen-2xl pb-24">
        <MotionFadeIn>
          <div className="relative rounded-[2.5rem] bg-cream ring-1 ring-brand-navy/10 px-8 md:px-14 py-12 md:py-16 overflow-hidden">
            <div aria-hidden className="absolute -top-16 right-10 size-48 rounded-full bg-brand-gold-soft/60 blur-3xl" />
            <div aria-hidden className="absolute -bottom-20 -left-10 size-64 rounded-full bg-brand-blue/10 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-brand-blue">
                  Our promise
                </p>
                <h3 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-navy leading-[1.05]">
                  Our Goal is to <em className="not-italic text-brand-blue">Wow</em> <br />
                  You With Every Clean
                </h3>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-navy text-white px-7 py-3.5 text-sm font-bold shadow-soft hover:opacity-90 transition"
                >
                  Get a Free Quote <ArrowRight className="size-4" />
                </Link>
              </div>
              <NewsletterCard />
            </div>
          </div>
        </MotionFadeIn>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrapper: React.ElementType = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="group relative block rounded-[1.5rem] bg-white ring-1 ring-brand-navy/10 p-6 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition"
    >
      <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-silver/40 text-brand-navy ring-1 ring-brand-navy/10 group-hover:bg-brand-gold-soft group-hover:text-brand-navy transition-colors">
        <Icon className="size-5" />
      </span>
      <p className="mt-5 font-display text-lg font-semibold text-brand-navy">{label}</p>
      <p className="mt-2 text-sm text-brand-navy/65 whitespace-pre-line leading-relaxed">
        {value}
      </p>
    </Wrapper>
  );
}

function NewsletterCard() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="rounded-2xl bg-white ring-1 ring-brand-navy/10 p-6 shadow-card"
    >
      <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-brand-navy/55">
        Subscribe to our newsletter
      </p>
      <p className="mt-2 text-sm text-brand-navy/70">
        Seasonal cleaning tips & special offers — one email a month, no spam.
      </p>
      <div className="mt-4 flex gap-2">
        <input
          type="email"
          required
          placeholder="Enter your email address"
          className="flex-1 rounded-full bg-cream px-5 py-3 text-sm text-brand-navy placeholder:text-brand-navy/40 ring-1 ring-brand-navy/10 outline-none focus:ring-2 focus:ring-brand-blue"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-1.5 rounded-full bg-brand-navy text-white px-5 py-3 text-xs font-bold shadow-soft hover:opacity-90 transition whitespace-nowrap"
        >
          Subscribe <Send className="size-3.5" />
        </button>
      </div>
    </form>
  );
}
