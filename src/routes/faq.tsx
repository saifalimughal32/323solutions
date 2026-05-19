import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/site/SectionHeading";
import { MotionFadeIn } from "@/components/site/MotionFadeIn";
import { FAQS } from "@/lib/site/data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Exterior Cleaning Questions | 323 Cleaning Solutions" },
      { name: "description", content: "Answers to common questions about our exterior cleaning services, pricing, scheduling, and eco-safe methods." },
      { property: "og:title", content: "FAQ — 323 Cleaning Solutions" },
      { property: "og:description", content: "Common questions about our West Michigan exterior cleaning services." },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <section className="container-x mx-auto max-w-4xl pt-16 md:pt-24 pb-24">
      <SectionHeading
        eyebrow="FAQ"
        title={<>Got Questions? <span className="text-brand-green">We've Got Answers.</span></>}
        subtitle="Everything you need to know before booking your first service."
      />
      <MotionFadeIn className="mt-12">
        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card rounded-2xl border border-border/60 px-6 shadow-soft data-[state=open]:shadow-card"
            >
              <AccordionTrigger className="text-left font-bold text-brand-navy hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </MotionFadeIn>
      <div className="mt-12 text-center">
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-yellow text-brand-yellow-foreground px-7 py-3.5 text-sm font-bold shadow-yellow">
          Still have questions? Contact Us <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
