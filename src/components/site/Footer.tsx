import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Twitter, Phone, Mail, Gift } from "lucide-react";
import { AREAS, BRAND, NAV, SERVICES } from "@/lib/site/data";
import logo323 from "@/assets/logo-323.png";

export function Footer() {
  return (
    <footer className="relative mt-14">
      {/* Footer body */}
      <div className="px-3 sm:px-5 pb-5">
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[oklch(0.985_0.006_250)] via-[oklch(0.975_0.012_250)] to-[oklch(0.955_0.022_250)] pt-28 pb-8 px-6 sm:px-8 lg:px-10 ring-1 ring-brand-navy/5">
          {/* Newsletter — true U-notch carved into the panel's top edge */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 z-10 w-[min(72rem,calc(100%-3rem))]">
            <div className="relative bg-white rounded-b-[2.25rem] px-4 sm:px-8 py-5 shadow-[0_18px_40px_-20px_rgb(15_36_76_/_0.18)]">
              {/* Concave fillets — extend panel surface OVER the notch's top corners, curving down into the notch sides */}
              <span
                aria-hidden
                className="hidden sm:block absolute top-0 left-0 w-6 h-6 bg-[oklch(0.985_0.006_250)]"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle at 0 100%, transparent 24px, #000 25px)",
                  maskImage:
                    "radial-gradient(circle at 0 100%, transparent 24px, #000 25px)",
                }}
              />
              <span
                aria-hidden
                className="hidden sm:block absolute top-0 right-0 w-6 h-6 bg-[oklch(0.985_0.006_250)]"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle at 100% 100%, transparent 24px, #000 25px)",
                  maskImage:
                    "radial-gradient(circle at 100% 100%, transparent 24px, #000 25px)",
                }}
              />
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5"
              >
                <p className="text-sm sm:text-base font-semibold text-brand-navy whitespace-nowrap">
                  Subscribe to Our Newsletter
                </p>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="flex-1 w-full rounded-full bg-white px-6 py-3.5 text-sm text-brand-navy placeholder:text-brand-navy/40 outline-none focus:ring-2 focus:ring-brand-green"
                />
                <button
                  type="submit"
                  className="rounded-full bg-brand-navy text-white font-semibold px-8 py-3.5 shadow-soft hover:opacity-90 transition whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Decorative bubbles (logo motif) */}
          <div aria-hidden className="pointer-events-none absolute top-40 right-10 size-40 rounded-full bg-gradient-to-br from-white/60 to-white/0 blur-2xl" />
          <div aria-hidden className="pointer-events-none absolute bottom-20 left-0 size-48 rounded-full bg-gradient-to-tr from-brand-navy/5 to-transparent blur-3xl overflow-hidden" />

          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left: brand */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2">
                <img src={logo323} alt={BRAND.name} className="h-10 w-auto" />
              </div>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.05] text-brand-navy">
                Trusted Housekeepers <br /> Ready to Clean.
              </h3>
              <p className="text-brand-navy/65 max-w-md text-[15px] leading-relaxed">
                Premium exterior cleaning for homes and businesses across West Michigan. Licensed, insured, and fully guaranteed.
              </p>

              <div className="space-y-3">
                <a href={BRAND.phoneHref} className="group inline-flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#f8fbff,#e7f0ff)] text-brand-blue ring-1 ring-brand-blue/15 shadow-[0_14px_28px_-18px_rgba(15,36,76,0.45)] transition group-hover:-translate-y-0.5">
                    <Phone className="size-4" />
                  </span>
                  <span className="text-[15px] font-semibold text-brand-navy">{BRAND.phone}</span>
                </a>
                <a href={`mailto:${BRAND.email}`} className="group flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#f8fbff,#e7f0ff)] text-brand-blue ring-1 ring-brand-blue/15 shadow-[0_14px_28px_-18px_rgba(15,36,76,0.45)] transition group-hover:-translate-y-0.5">
                    <Mail className="size-4" />
                  </span>
                  <span className="text-[15px] text-brand-navy">{BRAND.email}</span>
                </a>
              </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand-navy text-white font-semibold px-9 py-4 shadow-soft hover:opacity-90 transition"
                >
                  Book a Cleaning
                </Link>
            </div>

            {/* Middle: link columns */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brand-navy/60">
                  Services
                </h4>
                <ul className="mt-5 space-y-3">
                  {SERVICES.slice(0, 6).map((s) => (
                    <li key={s.slug}>
                      <Link
                        to="/services"
                        className="text-[15px] text-brand-navy/75 hover:text-brand-navy transition"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brand-navy/60">
                  Company
                </h4>
                <ul className="mt-5 space-y-3">
                  {NAV.filter((n) => n.to !== "/").map((n) => (
                    <li key={n.to}>
                      <Link
                        to={n.to}
                        className="text-[15px] text-brand-navy/75 hover:text-brand-navy transition"
                      >
                        {n.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: promo card */}
            <div className="lg:col-span-3">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-navy via-brand-navy to-brand-green-deep p-6 text-white shadow-elevated">
                <div aria-hidden className="absolute top-0 right-0 size-20 rounded-full bg-white/10 blur-2xl" />
                <div className="flex items-center gap-2 text-brand-yellow">
                  <span className="flex size-9 items-center justify-center rounded-2xl bg-white/12 ring-1 ring-white/15">
                    <Gift className="size-4" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">
                    Seasonal Offer
                  </span>
                </div>
                <h5 className="mt-3 font-display text-2xl font-extrabold leading-tight">
                  Save 20% on your first cleaning.
                </h5>
                <p className="mt-2 text-sm text-white/75">
                  Book this month — recurring services discount included.
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-brand-yellow underline underline-offset-4 decoration-brand-yellow/40 hover:decoration-brand-yellow"
                >
                  Claim Offer →
                </Link>
              </div>
            </div>
          </div>

          {/* Service areas + socials */}
          <div className="mt-10 border-t border-brand-navy/10 pt-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy/60">
                Service Areas:
              </span>
              {AREAS.slice(0, 6).map((a) => (
                <span key={a} className="text-[15px] text-brand-navy/80">
                  {a}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,var(--color-brand-navy),var(--color-brand-blue))] text-white hover:-translate-y-0.5 transition shadow-soft"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-navy/60">
            <p>© {new Date().getFullYear()} {BRAND.name}. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-brand-navy">Privacy Policy</a>
              <a href="#" className="hover:text-brand-navy">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
