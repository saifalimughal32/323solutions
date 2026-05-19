import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Heart, Leaf, ShieldCheck, Mail, Phone, MapPin, Clock } from "lucide-react";
import { MotionFadeIn } from "@/components/site/MotionFadeIn";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef } from "react";
import teamImg from "@/assets/about-team-hero.png";
import workImg from "@/assets/hero.jpg";
import { BRAND } from "@/lib/site/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About 323 Cleaning Solutions | West Michigan Exterior Cleaning" },
      { name: "description", content: "Locally owned and operated. Meet the team behind West Michigan's premium exterior cleaning service." },
      { property: "og:title", content: "About 323 Cleaning Solutions" },
      { property: "og:description", content: "Locally owned. Eco-safe. Obsessively detailed. Meet the team behind 323." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Heart, t: "Dependable Team", d: "Our Clany Eco team members are friendly and professional, and you can count on them to take good care of your space." },
  { icon: Leaf, t: "Eco-Innovation", d: "We're at the forefront of eco-friendly cleaning, pioneering innovative practices that safeguard the environment." },
  { icon: ShieldCheck, t: "Empowerment Ethos", d: "Our culture of empowerment and fairness ensures that every employee feels valued and appreciated as a person." },
  { icon: Award, t: "Client Excellence", d: "We're in the business of wowing lives, providing top-tier healthy-focused cleaning solutions that offer our clients the care they deeply want most." },
];

const STEPS = [
  { t: "Affordable, Transparent Pricing", d: "You can trust us, where you'll find better value for the level of service we provide. At 323 Cleaning, we offer competitive rates with no hidden fees — ever. Plus, we stand behind our work with a satisfaction guarantee. If you aren't completely happy with the job, we'll make it right." },
  { t: "Commitment to Quality", d: "We're dedicated to providing exceptional care every time. Our team holds a high standard of cleanliness, ensuring your home looks like the standard of all-star service. We're constantly striving to exceed your expectations using the best cleaning methods and eco-friendly products to ensure your home is left fresher than ever." },
  { t: "Personalized Cleaning Service", d: "Your home is unique, and so are your cleaning needs. That's why we offer customized cleaning plans tailored to your specific preferences. We'll only provide the services you need, ensuring your home is cleaned to your satisfaction. If you have any questions or special requests, our team is always happy to answer and make sure you're comfortable with our work." },
  { t: "Dependable, Professional Team", d: "Our team is the heart of 323 Cleaning, and we take great pride in their professionalism and reliability. Each team member is carefully vetted, trained, and equipped to handle any cleaning task — whether it's a one-time deep clean or a regular weekly service. Our trust improves the staff's commitment to providing top-notch service. With us, you're in the utmost care." },
];

const LOGOS = ["Eagle Elite", "Swift Line", "Fabrik", "Innovate Co", "Ramos Residence", "Megapolis"];

function AboutPage() {
  return (
    <>
      {/* HERO — Who We Are */}
      <section className="bg-cream pt-16 md:pt-24 pb-16">
        <div className="container-x mx-auto max-w-screen-2xl text-center">
          <MotionFadeIn>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-brand-green">
              <span className="h-px w-8 bg-brand-green/40" /> About Us <span className="h-px w-8 bg-brand-green/40" />
            </span>
            <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-bold text-brand-navy font-display leading-[1.05]">
              Who We Are
            </h1>
          </MotionFadeIn>
          <MotionFadeIn delay={0.1}>
            <div className="mt-12 mx-auto max-w-6xl rounded-[2.5rem] overflow-hidden shadow-elevated aspect-[21/9]">
              <img src={teamImg} alt="The 323 Cleaning team at work" className="w-full h-full object-cover" />
            </div>
          </MotionFadeIn>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="bg-cream pb-20 md:pb-24">
        <div className="container-x mx-auto max-w-screen-2xl">
          <MotionFadeIn>
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy font-display">
              Our Mission &amp; Values
            </h2>
            <p className="mt-5 mx-auto max-w-2xl text-center text-muted-foreground leading-relaxed">
              323 Cleaning's mission is to provide exceptional service that gives clients more free time
              while fostering financial stability and a positive, empowering environment for our technicians.
              We are committed to reducing our carbon footprint through advanced green technologies and
              sustainable practices.
            </p>
          </MotionFadeIn>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <MotionFadeIn key={v.t} delay={i * 0.08}>
                <div className="bg-brand-green-soft/70 rounded-3xl p-7 h-full ring-1 ring-brand-navy/5 hover:-translate-y-1 transition-transform">
                  <div className="size-12 rounded-2xl bg-white text-brand-navy flex items-center justify-center shadow-soft">
                    <v.icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-brand-navy">{v.t}</h3>
                  <p className="mt-2 text-sm text-brand-navy/70 leading-relaxed">{v.d}</p>
                </div>
              </MotionFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRITY TIMELINE */}
      <section className="relative bg-background py-20 md:py-28 overflow-hidden">
        {/* decorative leaves */}
        <Leaf className="absolute top-16 left-[12%] size-12 text-brand-green/20 -rotate-12" />
        <Leaf className="absolute top-24 right-[14%] size-10 text-brand-green/20 rotate-45" />

        <div className="container-x mx-auto max-w-screen-2xl">
          <MotionFadeIn>
            <div className="text-center">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-brand-green">
                <span className="h-px w-8 bg-brand-green/40" /> Why Us <span className="h-px w-8 bg-brand-green/40" />
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy font-display max-w-3xl mx-auto leading-[1.1]">
                Cleaning with Integrity and Respect
              </h2>
            </div>
          </MotionFadeIn>

          <IntegrityTimeline />
        </div>
      </section>

      {/* TEAM AT WORK — full-bleed image with floating CTA */}
      <section className="relative">
        <div className="relative aspect-[21/9] md:aspect-[21/8] w-full overflow-hidden">
          <img src={workImg} alt="323 Cleaning technicians at work" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-transparent" />
          {/* White U-shaped notch carved from the top with the CTA inside */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 z-10">
            <div className="relative bg-background px-10 pt-4 pb-6 rounded-b-[2.5rem]">
              {/* left concave corner */}
              <span
                aria-hidden
                className="absolute top-0 -left-6 w-6 h-6 bg-background"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle at 0 100%, transparent 24px, #000 25px)",
                  maskImage:
                    "radial-gradient(circle at 0 100%, transparent 24px, #000 25px)",
                }}
              />
              {/* right concave corner */}
              <span
                aria-hidden
                className="absolute top-0 -right-6 w-6 h-6 bg-background"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle at 100% 100%, transparent 24px, #000 25px)",
                  maskImage:
                    "radial-gradient(circle at 100% 100%, transparent 24px, #000 25px)",
                }}
              />
              <Link
                to="/contact"
                className="relative inline-flex items-center gap-2 rounded-full bg-brand-yellow text-brand-yellow-foreground px-6 py-3 text-sm font-bold shadow-yellow hover:scale-105 transition-transform"
              >
                Contact us <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="container-x mx-auto max-w-screen-2xl py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-end">
          <MotionFadeIn>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-brand-green">
              Our Clients
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy font-display leading-[1.1]">
              Trusted by Thousand of <br className="hidden md:block" /> People &amp; Companies
            </h2>
          </MotionFadeIn>
          <MotionFadeIn delay={0.1}>
            <p className="text-muted-foreground leading-relaxed">
              Our dedicated crew is ever so ready to assist. We've been here to provide prompt and helpful
              assistance with any questions or concerns you might have.
            </p>
          </MotionFadeIn>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {LOGOS.map((l) => (
            <div
              key={l}
              className="h-16 rounded-xl border border-border/60 bg-card flex items-center justify-center text-brand-navy/60 font-semibold tracking-wide hover:text-brand-navy hover:border-brand-navy/30 transition-colors"
            >
              {l}
            </div>
          ))}
        </div>
      </section>

      {/* WOW CTA BAND */}
      <section className="container-x mx-auto max-w-screen-2xl pb-20">
        <div className="rounded-[2rem] bg-brand-green-soft p-8 md:p-12 ring-1 ring-brand-navy/10 relative overflow-hidden">
          <Leaf className="absolute top-6 right-8 size-12 text-brand-green/30 rotate-12" />
          <div className="grid lg:grid-cols-2 gap-10 items-center relative">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-brand-navy font-display leading-[1.1]">
                Our Goal is to Wow <br /> You With Every Clean
              </h3>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-yellow text-brand-yellow-foreground px-6 py-3 text-sm font-bold shadow-yellow"
              >
                Get a Free Quote <ArrowRight className="size-4" />
              </Link>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-navy/70">
                Subscribe to our newsletter
              </p>
              <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 rounded-full bg-white px-5 py-3 text-sm text-brand-navy placeholder:text-brand-navy/40 border border-brand-navy/10 focus:outline-none focus:border-brand-navy/30"
                />
                <button
                  type="submit"
                  className="rounded-full bg-brand-navy text-white px-5 py-3 text-sm font-bold hover:bg-brand-green-deep transition-colors"
                >
                  Subscribe
                </button>
              </form>

              <div className="mt-8 grid sm:grid-cols-2 gap-5 text-sm">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy/60">Contact Info</p>
                  <p className="mt-2 flex items-start gap-2 text-brand-navy/80"><MapPin className="size-4 mt-0.5 text-brand-green" /> {BRAND.address}</p>
                  <p className="mt-2 flex items-center gap-2 text-brand-navy/80"><Phone className="size-4 text-brand-green" /> {BRAND.phone}</p>
                  <p className="mt-2 flex items-center gap-2 text-brand-navy/80"><Mail className="size-4 text-brand-green" /> {BRAND.email}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy/60">Working Hours</p>
                  <p className="mt-2 flex items-center gap-2 text-brand-navy/80"><Clock className="size-4 text-brand-green" /> Mon–Fri: 8:00 – 18:00</p>
                  <p className="mt-1 text-brand-navy/80 pl-6">Sat: 9:00 – 16:00</p>
                  <p className="mt-1 text-brand-navy/80 pl-6">Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function IntegrityTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const lineHeight = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });

  return (
    <div ref={ref} className="relative mt-20 max-w-5xl mx-auto">
      {/* central vertical line — track */}
      <div
        className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-brand-navy/10 rounded-full"
        aria-hidden
      />
      {/* central vertical line — progress fill */}
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] bg-gradient-to-b from-brand-blue/70 via-brand-blue to-brand-blue rounded-full shadow-[0_0_12px_rgba(59,130,246,0.45)]"
        aria-hidden
      />

      <div className="flex flex-col gap-16 md:gap-24">
        {STEPS.map((s, i) => {
          const left = i % 2 === 0;
          // Per-step active state — only the step in the viewport-center band is active.
          const stepRef = useRef<HTMLDivElement>(null);
          const isActive = useInView(stepRef, { margin: "-45% 0px -45% 0px" });
          const ACTIVE_BG = "oklch(0.55 0.18 255)"; // brand blue
          const INACTIVE_BG = "#ffffff";
          const ACTIVE_TITLE = "#ffffff";
          const INACTIVE_TITLE = "oklch(0.22 0.05 255)"; // brand navy
          const ACTIVE_BODY = "rgba(255,255,255,0.92)";
          const INACTIVE_BODY = "oklch(0.45 0.03 255)"; // muted navy
          const trans = { duration: 0.35, ease: "easeOut" as const };
          const Card = (
            <motion.div
              initial={false}
              animate={{
                backgroundColor: isActive ? ACTIVE_BG : INACTIVE_BG,
                boxShadow: isActive
                  ? "0 20px 40px -20px rgba(59,130,246,0.55)"
                  : "0 8px 24px -16px rgba(15,23,42,0.18)",
              }}
              transition={trans}
              className="rounded-2xl p-7 border border-border/60"
            >
              <motion.h3
                initial={false}
                animate={{ color: isActive ? ACTIVE_TITLE : INACTIVE_TITLE }}
                transition={trans}
                className="text-xl font-bold"
              >
                {s.t}
              </motion.h3>
              <motion.p
                initial={false}
                animate={{ color: isActive ? ACTIVE_BODY : INACTIVE_BODY }}
                transition={trans}
                className="mt-3 text-sm leading-relaxed"
              >
                {s.d}
              </motion.p>
            </motion.div>
          );
          return (
            <MotionFadeIn key={s.t} delay={i * 0.08}>
              <div ref={stepRef} className="relative md:grid md:grid-cols-2 md:gap-12 items-start">
                {/* numbered node */}
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 items-center justify-center">
                  {/* inactive ring (always visible) */}
                  <span className="absolute size-8 rounded-full bg-background ring-2 ring-brand-navy/15" />
                  {/* active filled node */}
                  <motion.span
                    animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.6 }}
                    transition={trans}
                    className="absolute size-8 rounded-full bg-brand-blue ring-4 ring-background shadow-[0_0_0_4px_rgba(59,130,246,0.22)]"
                  />
                  <span className="relative text-[11px] font-extrabold text-brand-navy z-10">
                    <motion.span animate={{ opacity: isActive ? 0 : 1 }} transition={trans} className="absolute inset-0 flex items-center justify-center">
                      {i + 1}
                    </motion.span>
                    <motion.span animate={{ opacity: isActive ? 1 : 0 }} transition={trans} className="absolute inset-0 flex items-center justify-center text-white">
                      {i + 1}
                    </motion.span>
                    <span className="opacity-0">{i + 1}</span>
                  </span>
                </div>

                {left ? (
                  <>
                    <div className="md:pr-10">{Card}</div>
                    <div />
                  </>
                ) : (
                  <>
                    <div />
                    <div className="md:pl-10">{Card}</div>
                  </>
                )}
              </div>
            </MotionFadeIn>
          );
        })}
      </div>
    </div>
  );
}
