import { useEffect, useMemo, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone, Send, Sparkles, X } from "lucide-react";

import { BRAND } from "@/lib/site/data";

const quickQuestions = [
  "Can I get a quote?",
  "Which areas do you serve?",
  "Do you clean windows?",
  "How soon can I book?",
];

function encodeMailBody(message: string) {
  return encodeURIComponent(
    `Hi 323 Cleaning Solutions,\n\nI have a question:\n${message || "Please contact me about your cleaning services."}\n\nThanks.`,
  );
}

export function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [pastHomeHero, setPastHomeHero] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setPastHomeHero(window.scrollY > 760);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mailHref = useMemo(
    () =>
      `mailto:${BRAND.email}?subject=${encodeURIComponent(
        "Question about 323 Cleaning Solutions",
      )}&body=${encodeMailBody(message)}`,
    [message],
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`fixed bottom-4 right-4 z-[70] flex size-12 items-center justify-center rounded-full bg-brand-navy text-white shadow-[0_22px_52px_-18px_rgba(15,36,76,0.75)] ring-1 ring-white/40 transition-all hover:-translate-y-1 md:bottom-5 md:right-5 md:size-16 ${
          open ? "pointer-events-none scale-90 opacity-0" : ""
        } ${
          isHome && !pastHomeHero ? "pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100" : ""
        }`}
        aria-label="Open chat"
      >
        <MessageCircle className="size-6 md:size-7" />
      </button>

      {open && (
        <div className="fixed bottom-5 right-5 z-[80] w-[min(24rem,calc(100vw-2rem))] overflow-hidden rounded-[1.5rem] bg-white shadow-[0_30px_90px_-34px_rgba(15,36,76,0.65)] ring-1 ring-brand-navy/10 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[linear-gradient(145deg,var(--color-brand-navy),var(--color-brand-blue))] p-4 text-white">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-2xl bg-white/15">
                  <Sparkles className="size-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-black leading-tight">Have a question?</p>
                  <p className="text-xs text-white/75">Ask us about service, pricing, or booking.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex size-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/15"
                aria-label="Close chat"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>

          <div className="p-4">
            <div className="grid grid-cols-2 gap-2">
              {quickQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => setMessage(question)}
                  className="rounded-2xl bg-brand-mint px-3 py-3 text-left text-xs font-black text-brand-navy ring-1 ring-brand-blue/10 hover:bg-brand-silver/40"
                >
                  {question}
                </button>
              ))}
            </div>

            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Type your question here..."
              className="mt-4 min-h-28 w-full resize-none rounded-2xl border border-brand-navy/10 bg-white px-4 py-3 text-sm text-brand-navy outline-none placeholder:text-brand-navy/40 focus:border-brand-blue/40"
            />

            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href={mailHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-navy px-4 text-sm font-black text-white shadow-soft"
              >
                <Send className="size-4" />
                Send
              </a>
              <a
                href={BRAND.phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-mint px-4 text-sm font-black text-brand-navy ring-1 ring-brand-blue/10"
              >
                <Phone className="size-4" />
                Call
              </a>
            </div>

            <a
              href={`mailto:${BRAND.email}`}
              className="mt-3 flex items-center justify-center gap-2 text-xs font-bold text-brand-navy/65 hover:text-brand-navy"
            >
              <Mail className="size-3.5" />
              {BRAND.email}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
