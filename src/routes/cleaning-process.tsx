import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MotionFadeIn } from "@/components/site/MotionFadeIn";

import svcDeep from "@/assets/svc-deep.jpg";
import svcHouse from "@/assets/svc-house.jpg";
import svcMove from "@/assets/svc-move.jpg";
import svcOffice from "@/assets/svc-office.jpg";
import serviceHouse from "@/assets/service-house.jpg";
import teamImg from "@/assets/clany-team-323.jpg";

export const Route = createFileRoute("/cleaning-process")({
  head: () => ({
    meta: [
      { title: "Our Cleaning Process — 323 Cleaning Solutions" },
      {
        name: "description",
        content:
          "Room-by-room cleaning process from 323 Cleaning Solutions. See exactly what's included in every visit across West Michigan.",
      },
      { property: "og:title", content: "Our Cleaning Process — 323 Cleaning Solutions" },
      {
        property: "og:description",
        content: "How we clean — step by step, room by room.",
      },
      { property: "og:url", content: "/cleaning-process" },
    ],
    links: [{ rel: "canonical", href: "/cleaning-process" }],
  }),
  component: CleaningProcessPage,
});

const ROOMS = [
  {
    id: "bathroom",
    label: "Bathroom",
    title: "Bathroom Cleaning",
    image: svcDeep,
    intro:
      "Bathrooms collect grime fast — we deep-clean every surface so it shines, sanitizes, and stays fresh between visits.",
    bullets: [
      "Scrub & disinfect toilet, tub, and shower",
      "Clean and polish mirrors and glass",
      "Wipe vanity, sinks, and faucets",
      "Sanitize handles, switches, and high-touch points",
      "Mop floors and empty trash",
    ],
  },
  {
    id: "bedroom",
    label: "Bedroom",
    title: "Bedroom Cleaning",
    image: svcMove,
    intro:
      "Your bedroom should feel like a retreat. We focus on dust-free surfaces and crisp, calm spaces you actually want to relax in.",
    bullets: [
      "Make beds and tidy linens",
      "Dust furniture, frames, and decor",
      "Vacuum carpets and floors edge-to-edge",
      "Wipe baseboards and window sills",
      "Empty trash and sanitize handles",
    ],
  },
  {
    id: "dining",
    label: "Dining Room",
    title: "Dining Room Cleaning",
    image: serviceHouse,
    intro:
      "From the table to the chandelier, we make sure your dining space is ready for guests at a moment's notice.",
    bullets: [
      "Polish dining table and chairs",
      "Dust light fixtures and chandeliers",
      "Clean buffet, hutch, and cabinets",
      "Vacuum or mop floors thoroughly",
      "Spot-clean walls and fingerprints",
    ],
  },
  {
    id: "kitchen",
    label: "Kitchen",
    title: "Kitchen Cleaning",
    image: svcOffice,
    intro:
      "323 is trained to handle every room in your home — and the kitchen may be one of the toughest of them all. This space gets plenty of use, and that frequent use can certainly show.",
    bullets: [
      "Dust and wipe your countertops and eliminate crumbs",
      "Clean cooktops",
      "Clean inside and outside your microwave",
      "Polish the exterior of your appliances",
      "Shine faucets and cabinet hardware",
    ],
  },
  {
    id: "living",
    label: "Living Room",
    title: "Living Room Cleaning",
    image: svcHouse,
    intro:
      "The most-used room in the house deserves the most attention. We bring living rooms back to their cozy, welcoming best.",
    bullets: [
      "Dust electronics, shelves, and decor",
      "Vacuum upholstery and cushions",
      "Clean glass tabletops and mirrors",
      "Vacuum and edge-clean floors",
      "Sanitize remotes and high-touch surfaces",
    ],
  },
] as const;

const TIPS = [
  "Pick one room to accomplish a small cleaning task each day — wipe down a bathroom mirror, sweep a kitchen floor.",
  "Keep a small basket in each room for clutter; tidy it once a day instead of letting it pile up.",
  "Wipe down high-touch surfaces (handles, switches, remotes) every other day to stop germs early.",
  "Run the dishwasher at night and unload first thing — you start the day with a clean kitchen.",
  "Make the bed every morning. It takes 60 seconds and instantly resets the whole bedroom.",
  "Schedule a recurring professional clean — small daily upkeep is much easier when the deep work is handled.",
];

function CleaningProcessPage() {
  return (
    <main className="bg-background">
      {/* 1. Intro band */}
      <section className="bg-brand-mint/40">
        <div className="container-x mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-12 py-24 text-center">
          <MotionFadeIn>
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-brand-green-deep">
              Cleaning Process
            </p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy">
              Our Cleaning Process
            </h1>
            <div className="mt-6 flex justify-center">
              <Sparkles className="size-8 text-brand-blue" strokeWidth={1.5} />
            </div>
            <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-brand-navy/70 leading-relaxed">
              When you're balancing a busy family life, long hours at the office, and other important
              aspects of your weekly routine, finding time to keep your house in order can be difficult.
              Even though life gets busy, coming home should never be a chore — and with 323, it won't be.
            </p>
          </MotionFadeIn>
        </div>
      </section>

      {/* 2. Full Service Cleaning — tabs */}
      <section className="container-x mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-12 pb-20">
        <div className="rounded-[2rem] bg-brand-mint/40 ring-1 ring-brand-navy/5 p-6 sm:p-12">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-brand-green-deep">
              Room by Room Cleaning Process
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy">
              Full Service Cleaning
            </h2>
          </div>

          <Tabs defaultValue="kitchen" className="mt-10">
            <TabsList className="mx-auto flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0">
              {ROOMS.map((r) => (
                <TabsTrigger
                  key={r.id}
                  value={r.id}
                  className="rounded-full bg-white text-brand-navy/85 px-5 py-2.5 text-sm font-semibold ring-1 ring-brand-navy/10 data-[state=active]:bg-brand-blue data-[state=active]:text-white data-[state=active]:ring-0 transition"
                >
                  {r.label} Cleaning
                </TabsTrigger>
              ))}
            </TabsList>

            {ROOMS.map((r) => (
              <TabsContent key={r.id} value={r.id} className="mt-10">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-navy">
                      {r.title}
                    </h3>
                    <p className="mt-4 text-brand-navy/70 leading-relaxed">{r.intro}</p>
                    <ul className="mt-6 space-y-3">
                      {r.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                            <Check className="size-3.5" strokeWidth={3} />
                          </span>
                          <span className="text-[15px] text-brand-navy/85">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl overflow-hidden ring-1 ring-brand-navy/10 shadow-soft">
                    <img
                      src={r.image}
                      alt={`${r.title} — 323 Cleaning Solutions`}
                      className="w-full h-[360px] sm:h-[420px] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue text-white px-8 py-3.5 text-sm font-bold shadow-soft hover:opacity-90 transition"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* 3. How a Clean Space Impacts Your Life */}
      <section className="container-x mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-12 pb-20">
        <MotionFadeIn>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs font-bold tracking-[0.22em] uppercase text-brand-green-deep">
                How We Help
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy leading-tight">
                How a Clean Space Impacts Your Life
              </h2>
            </div>
            <p className="text-brand-navy/70 leading-relaxed pt-2">
              Hiring a professional house cleaner is a great way to free up time to focus on other
              important tasks. Besides the perks of coming home to a tidy, clean, and fresh-smelling
              home at the end of a long day at work, there are plenty of additional house cleaning
              benefits to consider.
            </p>
          </div>
        </MotionFadeIn>

        <div className="relative mt-10 rounded-[2rem] overflow-hidden">
          <img
            src={teamImg}
            alt="323 Cleaning Solutions team at work"
            className="w-full h-[420px] sm:h-[520px] object-cover"
            loading="lazy"
          />
          <Link
            to="/contact"
            className="absolute top-6 left-1/2 -translate-x-1/2 inline-flex items-center justify-center rounded-full bg-white text-brand-navy px-7 py-3 text-sm font-bold shadow-elevated hover:bg-brand-mint transition"
          >
            Contact us
          </Link>
        </div>
      </section>

      {/* 4. Tips */}
      <section className="bg-brand-mint/40">
        <div className="container-x mx-auto max-w-screen-xl px-4 sm:px-8 lg:px-12 py-20">
          <MotionFadeIn>
            <p className="text-xs font-bold tracking-[0.22em] uppercase text-brand-green-deep">
              Tips
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy">
              Tips to Keep Your Home <br className="hidden sm:block" /> in Top Shape
            </h2>
          </MotionFadeIn>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {TIPS.map((tip, i) => (
              <MotionFadeIn key={tip} delay={i * 0.04}>
                <div className="rounded-2xl bg-white p-5 ring-1 ring-brand-navy/5 shadow-soft flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <Check className="size-4" strokeWidth={3} />
                  </span>
                  <p className="text-[15px] text-brand-navy/85 leading-relaxed">{tip}</p>
                </div>
              </MotionFadeIn>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-[auto,1fr] gap-4 items-stretch">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-3xl bg-white text-brand-navy px-8 py-6 text-sm font-bold shadow-soft hover:bg-brand-mint transition ring-1 ring-brand-navy/5"
            >
              Get a Free Quote
            </Link>
            <div className="rounded-3xl bg-white p-5 ring-1 ring-brand-navy/5 shadow-soft flex items-start gap-3">
              <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                <Check className="size-4" strokeWidth={3} />
              </span>
              <p className="text-[15px] text-brand-navy/85 leading-relaxed">
                Pick one room to accomplish a small cleaning task each day. The task could be as
                simple as wiping down the bathroom mirrors or sweeping the kitchen floor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}