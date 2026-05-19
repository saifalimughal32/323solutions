import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ArrowRight } from "lucide-react";
import { MotionFadeIn } from "@/components/site/MotionFadeIn";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
import baHouseBefore from "@/assets/ba-house-before.jpg";
import baHouseAfter from "@/assets/ba-house-after.jpg";
import baDrivewayBefore from "@/assets/ba-driveway-before.jpg";
import baDrivewayAfter from "@/assets/ba-driveway-after.jpg";
import baWindowBefore from "@/assets/ba-window-before.jpg";
import baWindowAfter from "@/assets/ba-window-after.jpg";
import logoGoogle from "@/assets/logo-google.png";
import logoYelp from "@/assets/logo-yelp.png";
import logoNextdoor from "@/assets/logo-nextdoor.png";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews — 323 Cleaning Solutions" },
      { name: "description", content: "Real reviews from West Michigan homeowners — see before & after photos and read what our customers say about 323 Cleaning Solutions." },
      { property: "og:title", content: "Customer Reviews — 323 Cleaning Solutions" },
      { property: "og:description", content: "Trusted by hundreds of West Michigan families. Read reviews and see real before/after results." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

const PLATFORMS = [
  { name: "Google", count: 480, logo: logoGoogle },
  { name: "Yelp", count: 520, logo: logoYelp },
  { name: "Nextdoor", count: 300, logo: logoNextdoor },
];

const REVIEWS = [
  { name: "Erica Clark", city: "Grand Rapids, MI", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80", quote: "Amazing and highly efficient — met all my expectations and more. They were on time and left my home in pristine condition. Thank you 323!" },
  { name: "Selena Gomez", city: "Holland, MI", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80", quote: "323 Cleaning Solutions provided an exceptional cleaning experience that truly exceeded my expectations. Their team was punctual, polite, and professional." },
  { name: "Carlos Moya", city: "Zeeland, MI", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80", quote: "Reliable and efficient. Highly efficient, met all my expectations, and more. My duplex was spotless when they left. Thank you 323." },
  { name: "Jonas Henrik", city: "Rockford, MI", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80", quote: "323 has been cleaning our house for several years. Aline is our dedicated technician and we always enjoy seeing her come through the door." },
  { name: "July Sanch", city: "Hudsonville, MI", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80", quote: "Just had a deep clean today. Giovanna was very pleasant and thorough. My place is gleaming and I look forward to having her back." },
  { name: "Enzo Clari", city: "Ada, MI", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80", quote: "My technician was very thorough. The house looks amazing! Worth every dollar — I will be calling them again next month." },
  { name: "Federika Lopes", city: "Jenison, MI", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80", quote: "I am a big cleanfreak and I am absolutely satisfied with the cleaning. Luci was really great with everything!" },
  { name: "Kate Walls", city: "Grand Rapids, MI", photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80", quote: "Our technician did an amazing job — the house is sparkling! Would definitely use again. They were thorough and I am so grateful for their service." },
  { name: "Kely Rose", city: "Holland, MI", photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80", quote: "I will definitely have these cleaners back for a regular cleaning job at least every month. I highly recommend 323 Cleaning Solutions for your home." },
];

const BA = [
  { before: baHouseBefore, after: baHouseAfter, title: "House Washing", customer: "Olivia P.", city: "Grand Rapids, MI", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80", note: "One pass with the soft-wash system lifted years of grime off the siding." },
  { before: baDrivewayBefore, after: baDrivewayAfter, title: "Driveway Pressure Wash", customer: "Marcus R.", city: "Rockford, MI", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80", note: "Concrete looks brand new — guests keep asking if we re-poured it." },
  { before: baWindowBefore, after: baWindowAfter, title: "Window Cleaning", customer: "Hannah B.", city: "Ada, MI", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80", note: "Streak-free inside and out. Like the glass isn't even there." },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-brand-green-deep">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-current" strokeWidth={0} />
      ))}
    </div>
  );
}

function Avatar({ name, photo }: { name: string; photo: string }) {
  return (
    <img
      src={photo}
      alt={name}
      className="size-11 rounded-full object-cover ring-2 ring-white shadow-soft"
      loading="lazy"
      width={88}
      height={88}
    />
  );
}

function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="container-x mx-auto max-w-screen-2xl pt-20 md:pt-28 pb-12 text-center bg-cream/40">
        <MotionFadeIn>
          <p className="text-[11px] font-bold tracking-[0.28em] uppercase text-brand-navy/60">Customer Reviews</p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-brand-navy">
            Your Reviews Are <br /> Important to Us
          </h1>
          <svg viewBox="0 0 80 60" className="mx-auto mt-8 size-16 text-brand-green" aria-hidden>
            <path d="M40 10 Q55 18 50 32 Q42 28 40 10 Z" fill="currentColor" />
            <path d="M30 32 Q18 38 22 50 Q34 46 30 32 Z" fill="currentColor" opacity="0.85" />
          </svg>
        </MotionFadeIn>
      </section>

      {/* Intro */}
      <section className="container-x mx-auto max-w-screen-2xl pt-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
          <MotionFadeIn>
            <p className="text-[11px] font-bold tracking-[0.28em] uppercase text-brand-navy/60">Reviews</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.08] tracking-tight text-brand-navy">
              Explore Our Reviews <br /> and Learn From <br /> The Insights
            </h2>
          </MotionFadeIn>
          <MotionFadeIn delay={0.1}>
            <p className="text-[15px] leading-relaxed text-brand-navy/70">
              Take a moment to explore our reviews. If you've recently experienced our cleaning service across West Michigan, we'd greatly appreciate your feedback. Please consider leaving a review — your opinion helps others make informed decisions when choosing a cleaning service.
            </p>
          </MotionFadeIn>
        </div>

        {/* Platform counters */}
        <div className="mt-12 pt-10 border-t border-brand-navy/10 max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-4 sm:gap-10 justify-items-center">
            {PLATFORMS.map((p) => (
              <div key={p.name} className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-full bg-white ring-1 ring-brand-navy/10 shadow-soft p-2">
                  <img src={p.logo} alt={`${p.name} logo`} className="w-full h-full object-contain" />
                </span>
                <div>
                  <p className="font-display text-xl font-extrabold text-brand-navy leading-none">{p.count}</p>
                  <p className="mt-1 text-xs text-brand-navy/60">{p.name} reviews</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="px-3 sm:px-5">
        <div className="rounded-[2.5rem] bg-brand-green-soft/50 px-5 sm:px-10 lg:px-14 pt-16 pb-20">
          <MotionFadeIn>
            <p className="text-center text-[11px] font-bold tracking-[0.28em] uppercase text-brand-navy/60">Testimonials</p>
            <h2 className="mt-4 text-center font-display text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight text-brand-navy">
              Empowering Thousands of <br /> West Michigan Homes
            </h2>
          </MotionFadeIn>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {REVIEWS.map((r, i) => (
              <MotionFadeIn key={r.name} delay={(i % 3) * 0.05}>
                <article className="h-full rounded-[1.75rem] bg-white p-7 shadow-card flex flex-col">
                  <Stars />
                  <p className="mt-5 text-[14px] leading-relaxed text-brand-navy/80 flex-1">
                    "{r.quote}"
                  </p>
                  <div className="mt-6 flex items-center gap-3 pt-5 border-t border-brand-navy/5">
                    <Avatar name={r.name} photo={r.photo} />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-navy">{r.name}</p>
                      <p className="text-[11px] text-brand-navy/55 mt-0.5">{r.city}</p>
                    </div>
                  </div>
                </article>
              </MotionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="container-x mx-auto max-w-screen-2xl pt-24 pb-20">
        <MotionFadeIn>
          <p className="text-center text-[11px] font-bold tracking-[0.28em] uppercase text-brand-green-deep">Real Results</p>
          <h2 className="mt-4 text-center font-display text-4xl sm:text-5xl font-extrabold leading-[1.05] tracking-tight text-brand-navy">
            Before &amp; After — <br /> See the 323 Difference
          </h2>
          <p className="mt-5 text-center max-w-2xl mx-auto text-[15px] text-brand-navy/70">
            Drag the slider on each photo to reveal what a single visit from our team looks like — across siding, concrete, and glass.
          </p>
        </MotionFadeIn>

        <div className="mt-14 space-y-14 max-w-5xl mx-auto">
          {BA.map((b, i) => (
            <MotionFadeIn key={b.title} delay={i * 0.08}>
              <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center">
                <div className="rounded-[1.75rem] bg-white p-2.5 shadow-elevated ring-1 ring-brand-navy/5">
                  <BeforeAfterSlider before={b.before} after={b.after} alt={`${b.title} — before and after`} />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-[0.28em] uppercase text-brand-green-deep">{b.title}</p>
                  <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold leading-tight text-brand-navy">
                    {b.note}
                  </h3>
                  <div className="mt-6 flex items-center gap-3">
                    <Avatar name={b.customer} photo={b.photo} />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-navy">{b.customer}</p>
                      <p className="text-[11px] text-brand-navy/55 mt-0.5">{b.city}</p>
                    </div>
                  </div>
                </div>
              </div>
            </MotionFadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x mx-auto max-w-screen-2xl pb-24">
        <MotionFadeIn>
          <div className="rounded-[2.5rem] bg-cream ring-1 ring-brand-navy/5 px-6 sm:px-10 lg:px-14 py-12 lg:py-14 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold leading-tight text-brand-navy">
              Ready to join our happy <br /> West Michigan customers?
            </h2>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-yellow text-white px-8 py-3.5 text-sm font-bold shadow-yellow"
            >
              Get a Free Quote <ArrowRight className="size-4" />
            </Link>
          </div>
        </MotionFadeIn>
      </section>
    </>
  );
}
