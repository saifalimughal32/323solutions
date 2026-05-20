import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Star,
  ShieldCheck,
  Leaf,
  Home,
  Building2,
  Sparkles,
  ChevronDown,
  ChevronRight,
  Calendar,
  Check,
  Mail,
  MapPin,
  Truck,
} from "lucide-react";
import { useState, type ComponentType } from "react";

import heroImg from "@/assets/clany-hero.jpg";
import logo323 from "@/assets/logo-323.png";
import transformImg from "@/assets/clany-transform.jpg";
import teamImg from "@/assets/clany-team-323.jpg";
import estimateImg from "@/assets/clany-estimate.jpg";
import beforeImg from "@/assets/clany-before.jpg";
import afterImg from "@/assets/clany-after.jpg";
import blog1 from "@/assets/clany-blog-1.jpg";
import blog2 from "@/assets/clany-blog-2.jpg";
import svcHouse from "@/assets/svc-house.jpg";
import svcOffice from "@/assets/svc-office.jpg";
import svcDeep from "@/assets/svc-deep.jpg";
import svcMove from "@/assets/svc-move.jpg";

import { MotionFadeIn } from "@/components/site/MotionFadeIn";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
import { CountUp } from "@/components/site/CountUp";
import { GoogleReviewsCarousel } from "@/components/site/GoogleReviewsCarousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BRAND, AREAS, TRANSFORMATIONS } from "@/lib/site/data";
import baDB from "@/assets/ba-driveway-before.jpg";
import baDA from "@/assets/ba-driveway-after.jpg";
import baHB from "@/assets/ba-house-before.jpg";
import baHA from "@/assets/ba-house-after.jpg";
import baWB from "@/assets/ba-window-before.jpg";
import baWA from "@/assets/ba-window-after.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "323 Cleaning Solutions — #1 House & Office Cleaning in West Michigan" },
      {
        name: "description",
        content:
          "Vetted, 5-star rated home and office cleaning across West Michigan. Recurring or one-time — get your free quote today.",
      },
      { property: "og:title", content: "323 Cleaning Solutions — West Michigan Cleaning Service" },
      {
        property: "og:description",
        content:
          "Get your home sparkling with 323 Cleaning Solutions — trusted West Michigan cleaning pros. Recurring discounts available.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Transform />
      <Services />
      <Expect />
      <HowItWorks />
      <Difference />
      <TransformationsTeaser />
      {/* Testimonials section removed */}
      <Estimate />
      <FAQ />
      <BlogTeaser />
      <ContactPanel />
    </>
  );
}

/* ============== 1. HERO ============== */
function Hero() {
  return (
    <section className="relative pb-10 md:pb-36">
      {/* Full-bleed hero photo, sits behind fixed header */}
      <div className="relative min-h-[430px] sm:min-h-[540px] md:min-h-[800px] overflow-visible">
        <div className="absolute inset-0 overflow-hidden rounded-b-[1.5rem] md:rounded-b-[2rem]">
          <img
            src={heroImg}
            alt="323 Cleaning Solutions team in a bright kitchen"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 32%" }}
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
        </div>

        {/* Quote card overlaps the photo and the next section, like the reference layout */}
        <div className="absolute left-0 right-0 bottom-[-8.5rem] z-10 hidden justify-center px-5 md:flex">
          <HeroQuoteCard />
        </div>
      </div>

      <div className="relative z-10 mt-5 px-4 sm:px-6 md:hidden">
        <HeroQuoteCard />
      </div>
    </section>
  );
}

function HeroQuoteCard() {
  return (
    <div
      className="relative w-full max-w-[820px] rounded-[24px] border border-white/80 px-4 pt-8 pb-6 text-center backdrop-blur-[18px] sm:rounded-[30px] sm:px-12 sm:pt-12 sm:pb-9"
      style={{
        background:
          "linear-gradient(120deg, rgba(255,255,255,0.96) 0%, rgba(247,250,255,0.94) 48%, rgba(226,237,255,0.93) 100%)",
        boxShadow:
          "0 18px 48px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.88)",
      }}
    >
      {/* Brand badge — circular with our logo */}
      <div className="absolute left-1/2 top-[-24px] -translate-x-1/2 sm:top-[-32px]">
        <div className="flex size-[58px] items-center justify-center rounded-full bg-white p-2 shadow-[0_12px_24px_rgba(15,36,76,0.18)] ring-[3px] ring-brand-blue sm:size-[82px] sm:ring-4">
          <img src={logo323} alt="323 Cleaning Solutions" className="h-full w-full object-contain" />
        </div>
      </div>

      {/* Mini info row */}
      <div className="relative mb-4 flex flex-wrap justify-center gap-x-6 gap-y-1 pt-1 text-[11px] font-semibold text-brand-navy/70 sm:mb-6 sm:gap-x-16 sm:text-[12px]">
        <span>Vetted Cleaners</span>
        <span className="inline-flex items-center gap-1">
          5 <Star className="size-3 fill-brand-navy text-brand-navy" /> Service
        </span>
      </div>

      {/* Headline */}
      <h1
        className="mx-auto mb-4 max-w-[700px] font-display font-medium text-brand-navy sm:mb-5"
        style={{
          fontSize: "clamp(28px, 7.8vw, 56px)",
          lineHeight: 1.08,
          letterSpacing: "0",
        }}
      >
        Your #1 {BRAND.region} Exterior Cleaning Service
      </h1>

      <p className="mb-5 text-[13px] font-semibold leading-snug text-brand-navy/80 sm:mb-7 sm:text-[14px]">
        Get Free Quote from a Trusted Cleaning Service
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mb-6 grid grid-cols-1 gap-3 sm:mb-7 sm:[grid-template-columns:1.18fr_0.86fr_0.86fr] sm:gap-5"
      >
        <Field placeholder="Name" />
        <Select options={["1 Bedroom", "2 Bedrooms", "3 Bedrooms", "4+ Bedrooms"]} />
        <Select options={["1 Bathroom", "2 Bathrooms", "3+ Bathrooms"]} />
        <Field placeholder="Email Address" type="email" />
        <Field placeholder="Phone" type="tel" />
        <Field placeholder="Zip Code" />
      </form>

      <button
        type="submit"
        onClick={(e) => e.preventDefault()}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand-navy px-8 py-3.5 text-[14px] font-extrabold text-white shadow-soft transition hover:shadow-[0_12px_25px_rgba(15,36,76,0.35)] sm:w-auto sm:min-w-[140px] sm:px-10 sm:py-4"
      >
        Get Price
      </button>
    </div>
  );
}

function Field({ placeholder, type = "text" }: { placeholder: string; type?: string }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="h-12 w-full rounded-[8px] border border-black/[0.045] bg-white/95 px-[15px] text-[14px] text-brand-navy shadow-[0_4px_16px_rgba(0,0,0,0.035)] outline-none placeholder:text-[#777] focus:border-brand-navy/30 sm:h-[51px]"
    />
  );
}

function Select({ options }: { options: string[] }) {
  return (
    <div className="relative">
      <select className="h-12 w-full appearance-none rounded-[8px] border border-black/[0.045] bg-white/95 px-[15px] pr-10 text-[14px] text-[#777] shadow-[0_4px_16px_rgba(0,0,0,0.035)] outline-none focus:border-brand-navy/30 sm:h-[51px]">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-brand-navy/50 pointer-events-none" />
    </div>
  );
}

function PremiumIconTile({
  Icon,
  className = "",
  iconClassName = "size-8",
  sparkleClassName = "size-4",
}: {
  Icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  className?: string;
  iconClassName?: string;
  sparkleClassName?: string;
}) {
  return (
    <span
      className={`relative flex items-center justify-center rounded-[1.35rem] bg-[linear-gradient(145deg,#f8fbff,#e7f0ff)] text-brand-blue shadow-[0_18px_36px_-22px_rgba(15,36,76,0.45)] ring-1 ring-brand-blue/15 ${className}`}
    >
      <span className="absolute inset-[2px] rounded-[1.22rem] border border-white/80" />
      <Icon className={`relative ${iconClassName}`} strokeWidth={1.85} />
      <Sparkles className={`absolute -right-1 -top-1 fill-white text-brand-blue ${sparkleClassName}`} strokeWidth={2.1} />
    </span>
  );
}

/* ============== 2. TRANSFORM ============== */
function Transform() {
  return (
    <section className="container-x mx-auto max-w-screen-2xl py-14 md:py-16">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        <MotionFadeIn>
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-brand-green-deep">Who we are</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.05] text-brand-navy">
            Transform Your Space <br /> Into a Sanctuary
          </h2>
          <p className="mt-5 text-[15px] text-brand-navy/70 leading-relaxed max-w-lg">
            From dust-free baseboards to streak-free mirrors, our vetted cleaners bring back the calm you deserve.
            Recurring or one-time — we tailor every visit to your home.
          </p>

          <div className="mt-7 space-y-3 max-w-md">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                { q: "Experienced & background-checked", a: "Every cleaner is vetted, insured, and trained on our 50-point checklist." },
                { q: "Eco-friendly products on request", a: "Plant-based supplies safe for kids, pets, and surfaces." },
              ].map((it, i) => (
                <AccordionItem
                  key={i}
                  value={`t-${i}`}
                  className="rounded-2xl bg-brand-yellow px-5 border-0 data-[state=open]:shadow-yellow"
                >
                  <AccordionTrigger className="text-left font-bold text-white hover:no-underline py-4">
                    {it.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/85 pb-4 text-sm">{it.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <Link
            to="/about"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-yellow text-white px-7 py-3.5 text-sm font-bold shadow-yellow hover:shadow-elevated transition"
          >
            Learn More <ArrowRight className="size-4" />
          </Link>
        </MotionFadeIn>

        <MotionFadeIn delay={0.1}>
          <div className="relative rounded-[2rem] overflow-hidden shadow-elevated aspect-[4/3]">
            <img src={transformImg} alt="Cleaner with vacuum" className="w-full h-full object-cover" loading="lazy" width={1280} height={960} />
          </div>
        </MotionFadeIn>
      </div>
    </section>
  );
}

/* ============== 3. SERVICES ============== */
function Services() {
  const items = [
    {
      icon: Home,
      title: "House",
      title2: "Cleaning",
      image: svcHouse,
    },
    {
      icon: Building2,
      title: "Office",
      title2: "Cleaning",
      image: svcOffice,
    },
    {
      icon: Sparkles,
      title: "Deep",
      title2: "Cleaning",
      image: svcDeep,
    },
    {
      icon: Truck,
      title: "Move In Out",
      title2: "Cleaning",
      image: svcMove,
    },
  ];
  return (
    <section className="container-x mx-auto max-w-screen-2xl py-14">
      <MotionFadeIn>
        <div className="inline-flex items-center gap-2">
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-brand-navy">Our Services</p>
          <svg width="28" height="14" viewBox="0 0 28 14" fill="none" aria-hidden className="text-brand-green-deep">
            <path d="M2 11 L8 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M11 12 L18 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M20 11 L26 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-brand-navy max-w-2xl">
          Here's What We Can<br />Do for You
        </h2>
      </MotionFadeIn>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((s, i) => (
          <MotionFadeIn key={s.title} delay={i * 0.08}>
            <article className="group relative h-full rounded-[1.75rem] p-3 pb-6 ring-1 ring-brand-navy/10 bg-white shadow-card hover:shadow-elevated transition-shadow flex flex-col">
              {/* Image with rounded corners */}
              <div className="relative overflow-hidden rounded-[1.4rem] aspect-[5/4]">
                <img
                  src={s.image}
                  alt={`${s.title} ${s.title2}`}
                  loading="lazy"
                  width={800}
                  height={640}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Icon chip overlapping top-left */}
                <PremiumIconTile Icon={s.icon} className="absolute top-3 left-3 size-14 rounded-[1.1rem]" iconClassName="size-6" />
              </div>

              {/* Title */}
              <h3 className="mt-4 px-3 font-display text-2xl font-extrabold leading-tight text-brand-navy">
                {s.title}<br />{s.title2}
              </h3>

              {/* Learn more pill button */}
              <Link
                to="/services"
                className="mx-3 mt-5 inline-flex items-center justify-between gap-2 rounded-full bg-brand-silver/40 pl-5 pr-1.5 py-1.5 text-sm font-semibold text-brand-navy ring-1 ring-brand-navy/10 hover:bg-brand-silver/70 transition-colors"
              >
                Learn more
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-brand-navy text-white">
                  <ChevronRight className="size-4" />
                </span>
              </Link>
            </article>
          </MotionFadeIn>
        ))}
      </div>

      {/* Satisfaction guarantee strip below the grid */}
      <MotionFadeIn delay={0.3}>
        <article className="mt-8 rounded-[1.75rem] bg-brand-navy text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
          <PremiumIconTile Icon={ShieldCheck} className="size-12 shrink-0 rounded-2xl" iconClassName="size-5" />
          <div className="flex-1">
            <h3 className="font-display text-2xl font-extrabold leading-tight">100% Satisfaction Guarantee</h3>
            <p className="mt-1.5 text-sm text-white/85">
              If you're not happy with any area, we'll re-clean it free within 24 hours.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white text-brand-navy px-5 py-2.5 text-xs font-bold shadow-soft self-start sm:self-auto whitespace-nowrap"
          >
            Read More <ArrowRight className="size-3" />
          </Link>
        </article>
      </MotionFadeIn>
    </section>
  );
}

/* ============== 4. EXPECT (yellow pills) ============== */
function Expect() {
  const cards = [
    { top: "Weekly Services", main: "30% OFF!", big: false },
    { top: "Big Savings On", main: "Recurring Services", big: true },
    { top: "Bi-Weekly Services", main: "25% OFF!", big: false },
  ];

  return (
    <section className="container-x mx-auto max-w-screen-2xl py-16 md:py-20">
      <MotionFadeIn>
        <p className="text-center text-xs font-bold tracking-[0.22em] uppercase text-brand-green-deep">Our Process</p>
        <h2 className="mt-4 text-center font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] text-brand-navy">
          What to Expect From 323 <br /> Cleaning Solutions
        </h2>
      </MotionFadeIn>

      <div className="relative mt-16 grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {cards.map((c, i) => {
          return (
            <MotionFadeIn key={c.top} delay={i * 0.12} y={18}>
              <div className="relative">
                <span
                  className="absolute top-[-23px] left-1/2 -translate-x-1/2 z-10 flex size-14 items-center justify-center rounded-full bg-white shadow-[0_16px_30px_-16px_rgba(15,36,76,0.35)] ring-1 ring-brand-navy/5"
                >
                  <motion.svg
                    viewBox="0 0 24 24"
                    className="size-6 text-brand-blue"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ scale: 0.82, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.18 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.path
                      d="M5 12l5 5L20 7"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.75, delay: 0.28 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </motion.svg>
                </span>
                <motion.article
                  className={`relative min-h-[172px] px-6 pt-14 pb-10 text-center text-brand-navy overflow-hidden ${c.big ? "sm:min-h-[190px]" : ""}`}
                  style={{
                    background:
                      "linear-gradient(160deg, #ffffff 0%, #eef4ff 35%, #cddfff 100%)",
                    boxShadow:
                      "0 26px 58px -30px oklch(0.35 0.12 258 / 0.42), inset 0 1px 0 rgba(255,255,255,0.88)",
                    border: "1px solid oklch(0.55 0.18 255 / 0.18)",
                    borderRadius: "28px",
                    clipPath: "polygon(0 0, 100% 0, 100% 82%, 74% 88%, 50% 94%, 26% 88%, 0 82%)",
                  }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.72),transparent_58%)]" />
                  <p className={`relative font-display ${c.big ? "text-2xl" : "text-xl"} font-semibold leading-tight`}>{c.top}</p>
                  <p className={`relative mt-3 font-display ${c.big ? "text-4xl" : "text-3xl"} font-black bg-gradient-to-br from-brand-navy to-brand-blue bg-clip-text text-transparent`}>{c.main}</p>
                </motion.article>
              </div>
            </MotionFadeIn>
          );
        })}
      </div>
    </section>
  );
}

/* ============== 5. HOW IT WORKS ============== */
function HowItWorks() {
  const steps = [
    {
      icon: Calendar,
      title: "1. Book a Cleaning",
      text: "Easily book an appointment using your computer or phone.",
      side: "right" as const,
    },
    {
      icon: Check,
      title: "2. Get a Confirmation",
      text: "Fully insured & bonded cleaners will deliver the quality services that you expect.",
      side: "left" as const,
    },
    {
      icon: Sparkles,
      title: "3. Cleaners Arrives",
      text: "Take back your free time by doing more of what you enjoy and less of what you don't.",
      side: "right" as const,
    },
  ];

  return (
    <section className="container-x mx-auto max-w-screen-2xl py-16 md:py-20">
      <MotionFadeIn>
        <h2 className="text-center font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy">
          How Does it Work?
        </h2>
      </MotionFadeIn>

      <div className="relative mt-12 min-h-[860px] max-w-5xl mx-auto px-4">
        <svg
          aria-hidden
          viewBox="0 0 760 900"
          preserveAspectRatio="none"
          className="hidden md:block absolute left-1/2 top-2 h-[830px] w-[250px] -translate-x-1/2 text-brand-navy/40 pointer-events-none"
        >
          <path
            d="M 390 0 C 380 120 300 250 300 385 C 300 545 470 585 480 725 C 488 810 430 860 395 900"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeDasharray="10 13"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative grid gap-y-14 md:block">
          {steps.map((s, i) => (
            <MotionFadeIn
              key={s.title}
              delay={i * 0.12}
              y={18}
              className={
                s.side === "right"
                  ? "md:absolute md:right-[8%] md:w-[24rem] md:top-[120px] text-center"
                  : "md:absolute md:left-[8%] md:w-[24rem] md:top-[350px] text-center"
              }
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={i === 2 ? "md:mt-[440px]" : ""}
              >
                <PremiumIconTile Icon={s.icon} className="mx-auto size-24" iconClassName="size-10" />
                <h3 className="mt-6 font-display text-2xl sm:text-[2rem] font-extrabold leading-tight text-brand-navy">{s.title}</h3>
                <p className="mt-4 text-sm sm:text-base text-brand-navy/70 leading-relaxed max-w-xs mx-auto">{s.text}</p>
              </motion.div>
            </MotionFadeIn>
          ))}
        </div>

        <div className="mt-12 text-center md:absolute md:left-1/2 md:bottom-4 md:-translate-x-1/2">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-navy text-white px-9 py-4 text-sm font-bold shadow-[0_18px_38px_-16px_rgba(15,36,76,0.5)] hover:bg-brand-green-deep transition-colors"
          >
            Book Your Service <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============== 6. DIFFERENCE ============== */
function Difference() {
  const bullets = [
    "Background-checked & insured pros",
    "Same cleaner every visit",
    "Eco-safe products on request",
  ];
  return (
    <section className="container-x mx-auto max-w-screen-2xl py-14">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
        <MotionFadeIn>
          <p className="text-xs font-bold tracking-[0.22em] uppercase text-brand-green-deep">Why us</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold leading-[1.05] text-brand-navy">
            The 323 Cleaning <br /> Difference
          </h2>
          <p className="mt-5 text-[15px] text-brand-navy/70 max-w-lg">
            Friendly faces, fair prices, and a cleaning checklist obsessed with the details.
          </p>
          <ul className="mt-7 space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <PremiumIconTile Icon={Check} className="mt-0.5 size-8 rounded-xl shrink-0" iconClassName="size-4" sparkleClassName="hidden" />
                <span className="text-brand-navy/85 font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </MotionFadeIn>

        <MotionFadeIn delay={0.1}>
          <div className="relative">
            <Leaf className="absolute top-2 left-2 size-14 text-brand-green/70 -rotate-12" />
            <div className="rounded-[2rem] overflow-hidden shadow-elevated aspect-[4/3]">
              <img src={teamImg} alt="323 Cleaning Solutions team at work" className="w-full h-full object-cover" loading="lazy" width={1280} height={960} />
            </div>
          </div>
        </MotionFadeIn>
      </div>
    </section>
  );
}

/* ============== 7. GREEN BAND (B/A + Testimonials) ============== */
function GreenBand() {
  return (
    <section className="px-3 sm:px-5">
      <div className="relative rounded-[2.5rem] bg-brand-navy text-white px-5 sm:px-8 lg:px-10 pt-8 pb-20 overflow-hidden">
        <div aria-hidden className="absolute top-0 right-0 size-64 rounded-full bg-white/5 blur-3xl" />
        <div aria-hidden className="absolute bottom-0 left-0 size-64 rounded-full bg-white/5 blur-3xl" />

        <div className="relative grid lg:grid-cols-2 gap-6 items-center">
          <MotionFadeIn>
            <div className="rounded-[1.5rem] bg-white p-2.5 shadow-elevated">
              <BeforeAfterSlider before={beforeImg} after={afterImg} alt="Before & after living room cleaning" />
            </div>
          </MotionFadeIn>

          <MotionFadeIn delay={0.1}>
            <div className="flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 p-2">
                <img src={logo323} alt="323 Cleaning Solutions" className="h-full w-auto object-contain" />
              </span>
              <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/70">Testimonials</p>
            </div>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold leading-[1.1]">
              Trusted by Homeowners <br /> Across West Michigan
            </h2>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-0.5 text-brand-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-brand-gold stroke-brand-gold" />
                ))}
              </div>
              <span className="font-display text-xl font-bold">4.9</span>
              <span className="text-white/60 text-sm">on Google · 200+ reviews</span>
            </div>
            <p className="mt-2.5 text-sm text-white/70 max-w-md">
              Real, verified reviews from neighbors who trust 323 with their homes.
            </p>
            <a
              href="https://www.google.com/search?q=323+Cleaning+Solutions+West+Michigan+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-brand-gold hover:opacity-80 transition"
            >
              Read all reviews on Google →
            </a>
          </MotionFadeIn>
        </div>

        {/* Floating testimonial panel */}
        <div className="relative mt-6 w-full">
          <MotionFadeIn>
            <GoogleReviewsCarousel />
          </MotionFadeIn>
        </div>
      </div>
      {/* spacer to accommodate floating panel */}
    </section>
  );
}

/* ============== TRANSFORMATIONS — PREMIUM BEFORE/AFTER CAROUSEL ============== */
function TransformationsTeaser() {
  const IMG: Record<string, string> = {
    "ba-driveway-before": baDB,
    "ba-driveway-after": baDA,
    "ba-house-before": baHB,
    "ba-house-after": baHA,
    "ba-window-before": baWB,
    "ba-window-after": baWA,
  };
  const items = TRANSFORMATIONS;
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <section className="relative container-x mx-auto max-w-screen-2xl py-14 md:py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8 md:mb-10">
        <MotionFadeIn>
          <p className="text-xs font-bold tracking-[0.24em] uppercase text-brand-navy/60">
            Real Jobs · Real Results
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.05] text-brand-navy max-w-2xl">
            Before &amp; after, <span className="text-brand-green">drag the slider</span>.
          </h2>
          <p className="mt-4 text-brand-navy/70 max-w-xl text-[15px] leading-relaxed">
            Every project documented. Slide through actual West Michigan homes our team has transformed — no stock photos, no staging.
          </p>
        </MotionFadeIn>
        <Link
          to="/transformations"
          className="inline-flex items-center gap-2 rounded-full bg-brand-navy text-white px-7 py-3.5 text-sm font-bold shadow-soft hover:bg-brand-green-deep transition-colors self-start whitespace-nowrap"
        >
          View Full Gallery <ArrowRight className="size-4" />
        </Link>
      </div>

      {/* Featured slider with caption rail */}
      <MotionFadeIn>
        <div className="grid lg:grid-cols-[1.55fr_1fr] gap-6 lg:gap-10 items-stretch">
          {/* Featured slider */}
          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-navy/10 via-transparent to-brand-green/10 blur-2xl pointer-events-none" />
            <div className="relative rounded-[1.75rem] overflow-hidden ring-1 ring-brand-navy/10 shadow-elevated">
              <BeforeAfterSlider
                key={current.slug}
                before={IMG[current.before] ?? baDB}
                after={IMG[current.after] ?? baDA}
                alt={current.label}
                priority={active === 0}
              />
            </div>
            {/* Floating customer review card over the "after" side */}
            {current.review && (
              <div
                key={`rev-${current.slug}`}
                className="hidden sm:block absolute right-4 bottom-4 lg:right-6 lg:bottom-6 w-[min(22rem,72%)] rounded-2xl bg-white/95 backdrop-blur ring-1 ring-brand-navy/10 shadow-elevated p-5 sm:p-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <svg viewBox="0 0 32 24" aria-hidden className="size-6 text-brand-navy/15 mb-2">
                  <path fill="currentColor" d="M9.6 0C4.3 0 0 4.3 0 9.6V24h12V12H6c0-3.3 2.7-6 6-6V0H9.6Zm20 0C24.3 0 20 4.3 20 9.6V24h12V12h-6c0-3.3 2.7-6 6-6V0h-2.4Z" />
                </svg>
                <p className="font-display text-[15px] sm:text-base leading-snug text-brand-navy font-semibold">
                  {current.review.quote}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={current.review.photo}
                    alt={current.review.author}
                    className="size-9 rounded-full object-cover ring-2 ring-white shadow-soft"
                    loading="lazy"
                    width={72}
                    height={72}
                  />
                  <div className="leading-tight">
                    <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-brand-navy">
                      {current.review.author}
                    </p>
                    <p className="text-xs text-brand-navy/60">{current.review.role}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Caption + selector */}
          <div className="flex flex-col justify-between gap-6">
            <div className="rounded-[1.75rem] bg-white ring-1 ring-brand-navy/10 shadow-card p-6 sm:p-8">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-navy bg-brand-silver rounded-full px-3 py-1.5">
                {current.service}
              </span>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl font-extrabold leading-tight text-brand-navy">
                {current.label}
              </h3>
              <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy/70">
                <MapPin className="size-4" /> {current.location}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-brand-navy/80">
                {current.caption}
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-brand-navy/60 uppercase tracking-wider">
                <span className="h-px flex-1 bg-brand-navy/10" />
                <span>{String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
                <span className="h-px flex-1 bg-brand-navy/10" />
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  type="button"
                  onClick={() => setActive((a) => (a - 1 + items.length) % items.length)}
                  className="inline-flex items-center justify-center size-11 rounded-full bg-brand-silver text-brand-navy hover:bg-brand-navy hover:text-white transition-colors"
                  aria-label="Previous transformation"
                >
                  <ArrowRight className="size-4 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => setActive((a) => (a + 1) % items.length)}
                  className="inline-flex items-center justify-center size-11 rounded-full bg-brand-navy text-white hover:bg-brand-green-deep transition-colors"
                  aria-label="Next transformation"
                >
                  <ArrowRight className="size-4" />
                </button>
                <Link
                  to="/transformations"
                  className="ml-auto inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-green-deep transition-colors"
                >
                  See all <ChevronRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Thumbnail rail */}
            <div className="grid grid-cols-3 gap-2.5">
              {items.map((it, i) => {
                const isActive = i === active;
                return (
                  <button
                    type="button"
                    key={it.slug}
                    onClick={() => setActive(i)}
                    className={`group relative overflow-hidden rounded-xl aspect-[4/3] ring-2 transition-all ${
                      isActive
                        ? "ring-brand-navy shadow-soft scale-[1.02]"
                        : "ring-transparent opacity-70 hover:opacity-100 hover:ring-brand-navy/30"
                    }`}
                    aria-label={`View ${it.label}`}
                    aria-pressed={isActive}
                  >
                    <img
                      src={IMG[it.after] ?? baHA}
                      alt={it.label}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width={320}
                      height={240}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/0 to-transparent" />
                    <span className="absolute bottom-1.5 left-2 right-2 text-[10px] font-bold text-white text-left leading-tight line-clamp-1">
                      {it.service}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </MotionFadeIn>
    </section>
  );
}

/* ============== 8. ESTIMATE ============== */
function Estimate() {
  return (
    <section className="container-x mx-auto max-w-screen-2xl py-14">
      <div className="relative rounded-[2rem] overflow-hidden">
        <img src={estimateImg} alt="Cleaner with supplies" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1280} height={960} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30" />

        <div className="relative grid lg:grid-cols-2 gap-6 p-6 sm:p-8 lg:p-10 min-h-[460px]">
          <div />
          <MotionFadeIn>
            <div className="rounded-[1.75rem] bg-white/95 backdrop-blur-md p-6 sm:p-8 shadow-elevated">
              <h3 className="font-display text-3xl font-extrabold text-brand-navy leading-tight">
                Get Your Estimate &amp; <br /> Book Now
              </h3>
              <form onSubmit={(e) => e.preventDefault()} className="mt-5 grid grid-cols-2 gap-3">
                <Field placeholder="Name" />
                <Field placeholder="Phone" type="tel" />
                <Select options={["1 Bedroom", "2 Bedrooms", "3 Bedrooms", "4+ Bedrooms"]} />
                <Select options={["1 Bathroom", "2 Bathrooms", "3+ Bathrooms"]} />
                <Field placeholder="Email" type="email" />
                <Field placeholder="Zip Code" />
                <div className="col-span-2 mt-2">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-brand-yellow text-white font-bold py-3.5 shadow-yellow"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </MotionFadeIn>
        </div>

        {/* stats strip */}
        <div className="relative bg-brand-navy text-white px-6 sm:px-10 lg:px-14 py-5 grid grid-cols-3 gap-4 text-center text-sm">
          {[
            { end: 100, suffix: "%", l: "Satisfaction", decimals: 0 },
            { end: 100, suffix: "+", l: "Cleaners", decimals: 0 },
            { end: 4.9, suffix: "★", l: "Rating", decimals: 1 },
          ].map((s, i) => (
            <MotionFadeIn key={s.l} delay={i * 0.12} y={16}>
              <p className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                <CountUp end={s.end} suffix={s.suffix} decimals={s.decimals} />
              </p>
              <p className="text-white/85 text-xs sm:text-sm mt-1 tracking-wide uppercase">{s.l}</p>
            </MotionFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== 9. FAQ ============== */
function FAQ() {
  const items = [
    { q: "What's included in a clean?", a: "Kitchen, bathrooms, dusting, vacuum, mop, and tidy of common areas." },
    { q: "Are the cleaning supplies included?", a: "Yes — all eco-friendly products and equipment are included." },
    { q: "How much does it cost to clean my home?", a: "Flat rates by bedroom/bathroom count. Recurring services include up to 30% off." },
    { q: "What if I need to cancel my appointment?", a: "Cancel free up to 24 hours before your scheduled visit." },
    { q: "What about my pets?", a: "We love them — all products are pet-safe and we'll follow any handling notes you share." },
    { q: "Are you bonded and insured?", a: "Yes, fully bonded and insured for your peace of mind." },
  ];
  const left = items.slice(0, 3);
  const right = items.slice(3);
  return (
    <section className="container-x mx-auto max-w-screen-2xl py-14 sm:py-16">
      <MotionFadeIn>
        <p className="text-center text-xs sm:text-sm font-medium tracking-[0.22em] uppercase text-brand-navy/60">
          FAQ
        </p>
        <h2 className="mt-3 text-center font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy">
          Frequently Asked Questions
        </h2>
      </MotionFadeIn>

      <div className="mt-10 grid md:grid-cols-2 gap-4 md:gap-x-5 md:gap-y-4">
        {[left, right].map((col, ci) => (
          <Accordion key={ci} type="single" collapsible className="space-y-4 md:space-y-5">
            {col.map((f, i) => (
              <AccordionItem
                key={i}
                value={`f-${ci}-${i}`}
                className="rounded-full data-[state=open]:rounded-3xl bg-white ring-1 ring-brand-navy/10 px-3 sm:px-4 border-0 transition-all"
              >
                <AccordionTrigger
                  className="text-left font-semibold text-brand-navy hover:no-underline py-5 pl-3 pr-2 text-[15px] sm:text-base gap-4 [&>svg:last-child]:hidden [&[data-state=open]_.faq-icon]:rotate-45"
                >
                  <span className="flex-1">{f.q}</span>
                  <span
                    aria-hidden
                    className="faq-icon shrink-0 inline-flex size-10 items-center justify-center rounded-full bg-brand-silver/40 text-brand-navy transition-transform duration-300"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-brand-navy/70 pb-5 px-3 text-sm leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ))}
      </div>
    </section>
  );
}

/* ============== 10. BLOG TEASER ============== */
function BlogTeaser() {
  const posts = [
    { img: blog1, tag: "Organizing", title: "The Deep Cleaning and Organizing" },
    { img: blog2, tag: "Cleaning", title: "Eco Friendly Products for Cleaning" },
    { img: svcMove, tag: "Tips", title: "House Cleaning Services Before Moving In" },
  ];
  return (
    <section className="container-x mx-auto max-w-screen-2xl py-14">
      <MotionFadeIn>
        <div className="flex items-center gap-3">
          <p className="text-xs font-bold tracking-[0.28em] uppercase text-brand-navy/70">From our blog</p>
          <svg width="28" height="14" viewBox="0 0 28 14" fill="none" aria-hidden className="text-brand-green">
            <path d="M2 12 L10 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M10 12 L18 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.05] text-brand-navy">
          Cleaning Tips From Pros
        </h2>
      </MotionFadeIn>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {posts.map((p, i) => (
          <MotionFadeIn key={p.title} delay={i * 0.08}>
            <Link to="/cleaning-tips" className="group block">
              <div className="overflow-hidden rounded-[1.75rem] aspect-[4/3]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={640}
                />
              </div>
              <p className="mt-6 text-xs font-bold tracking-[0.22em] uppercase text-brand-green-deep">{p.tag}</p>
              <h3 className="mt-3 font-display text-2xl lg:text-[26px] font-extrabold text-brand-navy leading-[1.2] group-hover:text-brand-green-deep transition-colors">
                {p.title}
              </h3>
            </Link>
          </MotionFadeIn>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          to="/cleaning-tips"
          className="inline-flex items-center justify-center rounded-full bg-white text-brand-green-deep px-9 py-3.5 text-sm font-bold ring-1 ring-brand-green/30 hover:bg-brand-green-soft transition-colors"
        >
          More Tips
        </Link>
      </div>
    </section>
  );
}

/* ============== 11. CONTACT PANEL ============== */
function ContactPanel() {
  const [active, setActive] = useState(0);
  const CITIES = [
    { name: "Grand Rapids", address: "Grand Rapids, MI", map: "https://www.google.com/maps?q=Grand+Rapids,MI&z=12&output=embed" },
    { name: "Holland", address: "Holland, MI", map: "https://www.google.com/maps?q=Holland,MI&z=12&output=embed" },
    { name: "Jenison", address: "Jenison, MI", map: "https://www.google.com/maps?q=Jenison,MI&z=12&output=embed" },
  ];
  const city = CITIES[active];
  return (
    <section className="container-x mx-auto max-w-screen-2xl py-14">
      <MotionFadeIn>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-cream ring-1 ring-brand-navy/5">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            <div className="space-y-5 px-6 sm:px-8 lg:px-10 py-10 lg:py-12">
              <p className="text-xs font-bold tracking-[0.22em] uppercase text-brand-green-deep">Contact</p>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold leading-[1.05] text-brand-navy">
                Our Experts are <br /> Available 24/7
              </h2>

              <div className="flex flex-wrap gap-2">
                {CITIES.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => setActive(i)}
                    className={`rounded-full px-5 py-2.5 text-xs font-bold transition ${
                      i === active
                        ? "bg-brand-green-deep text-white"
                        : "bg-white text-brand-navy ring-1 ring-brand-navy/10"
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>

              <div className="space-y-4 text-[15px]">
                <a href={BRAND.phoneHref} className="flex items-center gap-3 group">
                  <PremiumIconTile Icon={Phone} className="size-10 rounded-2xl" iconClassName="size-4" sparkleClassName="hidden" />
                  <span className="font-semibold text-brand-navy group-hover:text-brand-green-deep">{BRAND.phone}</span>
                </a>
                <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 group">
                  <PremiumIconTile Icon={Mail} className="size-10 rounded-2xl" iconClassName="size-4" sparkleClassName="hidden" />
                  <span className="text-brand-navy group-hover:text-brand-green-deep">{BRAND.email}</span>
                </a>
                <div className="flex items-center gap-3">
                  <PremiumIconTile Icon={MapPin} className="size-10 rounded-2xl" iconClassName="size-4" sparkleClassName="hidden" />
                  <span className="text-brand-navy/80">{city.address}</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-yellow text-white px-8 py-3.5 text-sm font-bold shadow-yellow"
              >
                Contact Us <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="relative overflow-hidden bg-white lg:min-h-full">
              <div className="absolute top-4 left-4 z-10 rounded-2xl bg-white shadow-elevated px-4 py-3 max-w-[260px]">
                <p className="text-sm font-bold text-brand-navy">{city.name}</p>
                <p className="text-xs text-brand-navy/65 mt-0.5">{city.address}</p>
              </div>
              <iframe
                key={city.name}
                title={`Map of ${city.name}`}
                src={city.map}
                className="w-full h-full min-h-[26rem] block"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </MotionFadeIn>
    </section>
  );
}

// suppress unused warnings for any stray helpers
void AREAS;
void motion;
