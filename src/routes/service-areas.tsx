import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { MotionFadeIn } from "@/components/site/MotionFadeIn";
import { ServiceAreaMap } from "@/components/site/ServiceAreaMap";
import { AREAS } from "@/lib/site/data";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: "Service Areas — West Michigan | 323 Cleaning Solutions" },
      { name: "description", content: "We proudly serve Grand Rapids, Holland, Zeeland, Rockford, Ada, Hudsonville, Jenison, and surrounding West Michigan communities." },
      { property: "og:title", content: "West Michigan Service Areas — 323 Cleaning Solutions" },
      { property: "og:description", content: "Local exterior cleaning experts serving communities across West Michigan." },
    ],
  }),
  component: AreasPage,
});

function AreasPage() {
  return (
    <>
      <section className="container-x mx-auto max-w-screen-2xl pt-16 md:pt-24 pb-12">
        <SectionHeading
          eyebrow="Service Areas"
          title={<>Local Experts. <span className="text-brand-green">Local Care.</span></>}
          subtitle="Proudly serving homeowners and businesses throughout West Michigan."
        />
      </section>

      <section className="container-x mx-auto max-w-screen-2xl pb-20 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
        <MotionFadeIn>
          <ServiceAreaMap />
        </MotionFadeIn>
        <MotionFadeIn delay={0.1}>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">Cities We Serve</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Not seeing your town? Give us a call — we likely cover it.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {AREAS.map((a) => (
              <li key={a} className="flex items-center gap-3 bg-card rounded-2xl border border-border/60 px-4 py-3 shadow-soft">
                <span className="size-9 rounded-xl bg-brand-green-soft text-brand-green flex items-center justify-center">
                  <MapPin className="size-4" />
                </span>
                <span className="text-sm font-semibold text-brand-navy">{a}</span>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-yellow text-brand-yellow-foreground px-6 py-3 text-sm font-bold shadow-yellow">
            Check Availability <ArrowRight className="size-4" />
          </Link>
        </MotionFadeIn>
      </section>
    </>
  );
}
