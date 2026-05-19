import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { NAV, BRAND } from "@/lib/site/data";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import logo323 from "@/assets/logo-323.png";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  // Close dropdown on outside click / Esc
  useEffect(() => {
    if (!openMenu) return;
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [openMenu]);

  return (
    <header
      className={`${
        isHome ? "fixed top-0 left-0 right-0" : "sticky top-0"
      } z-50 transition-shadow ${
        isHome
          ? ""
          : `bg-white ${
              scrolled
                ? "shadow-[0_10px_30px_-18px_rgb(15_36_76_/_0.18)]"
                : "shadow-[0_4px_18px_-12px_rgb(15_36_76_/_0.08)]"
            }`
      }`}
    >
      <div
        className={
          isHome
            ? "mx-auto w-full max-w-[80rem] px-4 sm:px-6"
            : "container-x mx-auto max-w-[80rem] px-4 sm:px-8 lg:px-12"
        }
      >
        <div
          className={
            isHome
              ? "flex items-center justify-between gap-4 h-[86px] bg-white rounded-b-[36px] px-6 lg:px-8 shadow-[0_14px_38px_rgba(15,36,76,0.10)]"
              : "flex items-center justify-between gap-4 h-20"
          }
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0" aria-label={BRAND.name}>
            <img src={logo323} alt={`${BRAND.name} logo`} className="h-11 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-7 ml-auto">
            {/* Center nav */}
            <nav ref={navRef} className="flex items-center gap-3 whitespace-nowrap">
              {NAV.map((item) => {
                const active =
                  location.pathname === item.to ||
                  (item.children?.some((c) => location.pathname === c.to) ?? false);
                const hasDropdown = !!item.children?.length;
                const isOpen = openMenu === item.label;
                if (!hasDropdown) {
                  return (
                    <Link
                      key={item.label}
                      to={item.to}
                      className={`inline-flex items-center gap-1 px-2 py-2 text-[15px] font-semibold transition-colors ${
                        active ? "text-brand-navy" : "text-brand-navy/85 hover:text-brand-navy"
                      }`}
                    >
                      <span
                        className={
                          active ? "underline underline-offset-8 decoration-2 decoration-brand-navy" : ""
                        }
                      >
                        {item.label}
                      </span>
                    </Link>
                  );
                }
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(item.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <button
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded={isOpen}
                      onClick={() => setOpenMenu(isOpen ? null : item.label)}
                      className={`inline-flex items-center gap-1 px-2 py-2 text-[15px] font-semibold transition-colors ${
                        active ? "text-brand-navy" : "text-brand-navy/85 hover:text-brand-navy"
                      }`}
                    >
                      <span
                        className={
                          active ? "underline underline-offset-8 decoration-2 decoration-brand-navy" : ""
                        }
                      >
                        {item.label}
                      </span>
                      <ChevronDown
                        className={`size-3.5 opacity-70 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div
                        role="menu"
                        className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 z-50 ${
                          item.children && item.children.length > 4 ? "w-[520px]" : "w-64"
                        }`}
                      >
                        <div className="rounded-2xl bg-white p-3 ring-1 ring-brand-navy/10 shadow-[0_24px_60px_-20px_rgba(15,36,76,0.25)]">
                          <div
                            className={
                              item.children && item.children.length > 4
                                ? "grid grid-cols-2 gap-1"
                                : "flex flex-col"
                            }
                          >
                            {item.children!.map((c) => {
                              const childActive = location.pathname === c.to;
                              return (
                                <Link
                                  key={c.to}
                                  to={c.to}
                                  role="menuitem"
                                  className={`px-3 py-2.5 rounded-xl text-[14px] font-medium transition-colors ${
                                    childActive
                                      ? "bg-brand-mint text-brand-navy"
                                      : "text-brand-navy/85 hover:bg-brand-mint hover:text-brand-navy"
                                  }`}
                                >
                                  {c.label}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right cluster */}
            <div className="flex items-center gap-5 shrink-0">
              <a
                href="/#cleaning-assistant"
                className="inline-flex items-center justify-center rounded-full bg-brand-mint text-brand-navy px-5 py-3 text-sm font-bold ring-1 ring-brand-blue/10 hover:bg-white transition-colors whitespace-nowrap"
              >
                Get Quote
              </a>
              <a
                href={BRAND.phoneHref}
                className="hidden xl:inline-flex items-center gap-2 text-[15px] font-semibold text-brand-navy hover:opacity-80 whitespace-nowrap"
              >
                <span className="flex size-9 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#f8fbff,#e7f0ff)] text-brand-blue ring-1 ring-brand-blue/15 shadow-[0_14px_26px_-18px_rgba(15,36,76,0.45)]">
                  <Phone className="size-4" />
                </span>
                {BRAND.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-navy text-white px-7 py-3 text-sm font-bold shadow-soft hover:bg-brand-green-deep transition-colors whitespace-nowrap"
              >
                Book a Cleaning
              </Link>
            </div>
          </div>

          {/* Tablet CTA */}
          <div className="hidden md:flex lg:hidden items-center gap-4 shrink-0">
            <a
              href={BRAND.phoneHref}
              className="hidden xl:inline-flex items-center gap-2 text-[15px] font-semibold text-brand-navy hover:opacity-80 whitespace-nowrap"
            >
              <span className="flex size-9 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#f8fbff,#e7f0ff)] text-brand-blue ring-1 ring-brand-blue/15 shadow-[0_14px_26px_-18px_rgba(15,36,76,0.45)]">
                <Phone className="size-4" />
              </span>
              {BRAND.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-navy text-white px-8 py-4 text-sm font-bold shadow-soft hover:bg-brand-green-deep transition-colors whitespace-nowrap"
            >
              Book a Cleaning
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-full bg-secondary text-brand-navy"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden container-x mx-auto max-w-screen-2xl px-4 pb-3">
          <div className="rounded-3xl bg-white shadow-elevated p-4 flex flex-col gap-1">
            {NAV.map((item) => {
              const hasDropdown = !!item.children?.length;
              const expanded = mobileExpanded === item.label;
              if (!hasDropdown) {
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="px-4 py-3 rounded-2xl text-sm font-semibold text-brand-navy hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <div key={item.label}>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setMobileExpanded(expanded ? null : item.label)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold text-brand-navy hover:bg-secondary"
                  >
                    {item.label}
                    <ChevronDown
                      className={`size-4 opacity-70 transition-transform ${expanded ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expanded && (
                    <div className="pl-3 pb-1 flex flex-col">
                      {item.children!.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="px-4 py-2.5 rounded-xl text-sm text-brand-navy/85 hover:bg-secondary"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <a
              href={BRAND.phoneHref}
              className="px-4 py-3 rounded-2xl text-sm font-semibold flex items-center gap-2 text-brand-navy"
            >
              <Phone className="size-4" /> {BRAND.phone}
            </a>
            <a
              href="/#cleaning-assistant"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-mint text-brand-navy px-5 py-3 text-sm font-bold ring-1 ring-brand-blue/10"
            >
              Cleaning Assistant
            </a>
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-navy text-white px-5 py-3 text-sm font-bold shadow-soft"
            >
              Book a Cleaning
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
