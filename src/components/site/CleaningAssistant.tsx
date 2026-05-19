import { useMemo, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Bot,
  Calendar,
  Check,
  ClipboardList,
  Gauge,
  Home,
  MessageCircle,
  Send,
  Sparkles,
  WandSparkles,
  X,
} from "lucide-react";

type Mode = "quote" | "plan" | "score" | "book";

const actions: Array<{ id: Mode; label: string; icon: typeof Sparkles }> = [
  { id: "quote", label: "Get Quote", icon: Sparkles },
  { id: "plan", label: "Build Plan", icon: ClipboardList },
  { id: "score", label: "Check CleanScore", icon: Gauge },
  { id: "book", label: "Book Now", icon: Calendar },
];

const spaceTypes = ["Home", "Apartment", "Office", "Townhome"];
const roomCounts = ["1-2", "3-4", "5-6", "7+"];
const cleaningTypes = ["Standard", "Deep Clean", "Move-In/Out", "Exterior"];
const addOns = ["Windows", "Carpet", "Sofa", "Appliances"];
const planAreas = ["Kitchen", "Bathroom", "Bedroom", "Living Room", "Office", "Windows", "Carpet", "Sofa", "Appliances"];

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function ToggleButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        "rounded-2xl px-4 py-3 text-sm font-bold transition-all",
        active
          ? "bg-brand-navy text-white shadow-[0_16px_32px_-18px_rgba(15,36,76,0.65)]"
          : "bg-white text-brand-navy ring-1 ring-brand-navy/10 hover:-translate-y-0.5 hover:ring-brand-blue/25",
      )}
    >
      {children}
    </button>
  );
}

function ResultCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-[1.5rem] bg-[linear-gradient(145deg,#ffffff,#eef5ff)] p-5 ring-1 ring-brand-blue/10 shadow-[0_22px_50px_-34px_rgba(15,36,76,0.5)]">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">{title}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function StepHeader({
  step,
  total,
  title,
  subtitle,
  onBack,
}: {
  step: number;
  total: number;
  title: string;
  subtitle?: string;
  onBack?: () => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-blue">
          Step {step} / {total}
        </p>
        <h3 className="mt-2 font-display text-2xl font-black leading-tight text-brand-navy">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-brand-navy/60">{subtitle}</p>}
      </div>
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="rounded-full bg-white px-4 py-2 text-xs font-black text-brand-navy ring-1 ring-brand-navy/10 hover:bg-brand-mint"
        >
          Back
        </button>
      )}
    </div>
  );
}

function QuoteFlow({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState(0);
  const [space, setSpace] = useState("");
  const [rooms, setRooms] = useState("");
  const [type, setType] = useState("");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const estimate = useMemo(() => {
    const typeBase: Record<string, number> = {
      Standard: 149,
      "Deep Clean": 249,
      "Move-In/Out": 329,
      Exterior: 219,
    };
    const roomBoost: Record<string, number> = { "1-2": 35, "3-4": 75, "5-6": 125, "7+": 185 };
    const price = (typeBase[type] ?? 149) + (roomBoost[rooms] ?? 35) + selectedAddOns.length * 35;
    const hours = Math.max(2, Math.round((price / 85) * 2) / 2);
    const pkg = price > 420 ? "Signature Team Clean" : price > 280 ? "Premium Detail Clean" : "Essential Sparkle";
    return { price, hours, pkg };
  }, [rooms, selectedAddOns.length, type]);

  return (
    <div className="grid gap-5">
      {step === 0 && (
        <div>
          <StepHeader step={1} total={5} title="What type of space is it?" subtitle="Choose one to start your quote." />
          <div className="mt-5 grid grid-cols-2 gap-2">
            {spaceTypes.map((item) => (
              <ToggleButton
                key={item}
                active={space === item}
                onClick={() => {
                  setSpace(item);
                  setStep(1);
                }}
              >
                {item}
              </ToggleButton>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <StepHeader step={2} total={5} title="How many rooms?" subtitle={space} onBack={() => setStep(0)} />
          <div className="mt-5 grid grid-cols-2 gap-2">
            {roomCounts.map((item) => (
              <ToggleButton
                key={item}
                active={rooms === item}
                onClick={() => {
                  setRooms(item);
                  setStep(2);
                }}
              >
                {item}
              </ToggleButton>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <StepHeader step={3} total={5} title="Which cleaning type?" subtitle={`${space} · ${rooms} rooms`} onBack={() => setStep(1)} />
          <div className="mt-5 grid grid-cols-2 gap-2">
            {cleaningTypes.map((item) => (
              <ToggleButton
                key={item}
                active={type === item}
                onClick={() => {
                  setType(item);
                  setStep(3);
                }}
              >
                {item}
              </ToggleButton>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <StepHeader step={4} total={5} title="Any add-ons?" subtitle="Select one or more, then continue." onBack={() => setStep(2)} />
          <div className="mt-5 flex flex-wrap gap-2">
            {addOns.map((item) => (
              <ToggleButton
                key={item}
                active={selectedAddOns.includes(item)}
                onClick={() =>
                  setSelectedAddOns((items) => items.includes(item) ? items.filter((x) => x !== item) : [...items, item])
                }
              >
                {item}
              </ToggleButton>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setStep(4)}
            className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-navy px-6 text-sm font-black text-white shadow-soft hover:bg-brand-green-deep"
          >
            See Estimate <ArrowRight className="size-4" />
          </button>
        </div>
      )}

      {step === 4 && (
        <>
          <StepHeader step={5} total={5} title="Your estimate is ready" subtitle="Frontend-only estimate for planning." onBack={() => setStep(3)} />
          <ResultCard title="Estimated Quote">
            <div className={cx("grid gap-3", compact ? "grid-cols-1" : "sm:grid-cols-3")}>
              <div>
                <p className="text-3xl font-black text-brand-navy">${estimate.price}</p>
                <p className="text-xs text-brand-navy/55">Estimated price</p>
              </div>
              <div>
                <p className="text-3xl font-black text-brand-navy">{estimate.hours}h</p>
                <p className="text-xs text-brand-navy/55">Estimated time</p>
              </div>
              <div>
                <p className="text-base font-black text-brand-navy">{estimate.pkg}</p>
                <p className="text-xs text-brand-navy/55">{space} / {type}</p>
              </div>
            </div>
          </ResultCard>
        </>
      )}
    </div>
  );
}

function BuildPlanFlow() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const hours = Math.max(1.5, Math.round(selected.length * 0.65 * 2) / 2);
  const pkg = selected.length >= 7 ? "Whole-Space Reset" : selected.length >= 4 ? "Focused Detail Plan" : "Quick Refresh";
  const groups = [
    { title: "Select main rooms", subtitle: "Start with the core spaces.", areas: ["Kitchen", "Bathroom", "Bedroom", "Living Room"] },
    { title: "Add work spaces", subtitle: "Choose anything extra.", areas: ["Office", "Windows"] },
    { title: "Add specialty items", subtitle: "Optional detail work.", areas: ["Carpet", "Sofa", "Appliances"] },
  ];
  const group = groups[step];

  return (
    <div className="grid gap-5">
      {step < groups.length && (
        <div>
          <StepHeader step={step + 1} total={4} title={group.title} subtitle={group.subtitle} onBack={step > 0 ? () => setStep(step - 1) : undefined} />
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {group.areas.map((area) => (
              <ToggleButton
                key={area}
                active={selected.includes(area)}
                onClick={() => setSelected((items) => items.includes(area) ? items.filter((x) => x !== area) : [...items, area])}
              >
                {area}
              </ToggleButton>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setStep(step + 1)}
            className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-navy px-6 text-sm font-black text-white shadow-soft hover:bg-brand-green-deep"
          >
            {step === groups.length - 1 ? "Build Plan" : "Next"} <ArrowRight className="size-4" />
          </button>
        </div>
      )}
      {step >= groups.length && (
        <>
          <StepHeader step={4} total={4} title="Your cleaning plan" subtitle="Selected areas and package." onBack={() => setStep(2)} />
          <ResultCard title="Cleaning Plan">
            <div className="flex flex-wrap gap-2">
              {(selected.length ? selected : ["Kitchen"]).map((area) => (
                <span key={area} className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-brand-navy ring-1 ring-brand-navy/10">
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              <p className="text-sm text-brand-navy/70"><span className="font-black text-brand-navy">{hours} hours</span> estimated</p>
              <p className="text-sm text-brand-navy/70"><span className="font-black text-brand-navy">{pkg}</span> suggested</p>
            </div>
          </ResultCard>
        </>
      )}
    </div>
  );
}

function CleanScoreFlow() {
  const [step, setStep] = useState(0);
  const [lastCleaned, setLastCleaned] = useState("");
  const [pets, setPets] = useState("");
  const [space, setSpace] = useState("");
  const [level, setLevel] = useState("");
  const score = useMemo(() => {
    const last: Record<string, number> = { "This week": 92, "2-4 weeks": 78, "1-3 months": 58, "3+ months": 42 };
    let value = (last[lastCleaned] ?? 78) - (pets === "Yes" ? 7 : 0) - (level === "Reset" ? 9 : level === "Detailed" ? 3 : 0);
    return Math.max(24, Math.min(98, value));
  }, [lastCleaned, level, pets]);
  const service = score < 55 ? "Deep Clean Reset" : score < 75 ? "Premium Detail Clean" : "Maintenance Clean";
  const team = score < 60 ? "3-person team" : "2-person team";

  return (
    <div className="grid gap-5">
      {step === 0 && (
        <div>
          <StepHeader step={1} total={5} title="When was it last cleaned?" />
          <div className="mt-5 grid grid-cols-2 gap-2">
            {["This week", "2-4 weeks", "1-3 months", "3+ months"].map((item) => (
              <ToggleButton key={item} active={lastCleaned === item} onClick={() => { setLastCleaned(item); setStep(1); }}>{item}</ToggleButton>
            ))}
          </div>
        </div>
      )}
      {step === 1 && (
        <div>
          <StepHeader step={2} total={5} title="Any pets?" subtitle={lastCleaned} onBack={() => setStep(0)} />
          <div className="mt-5 grid grid-cols-2 gap-2">
            {["Yes", "No"].map((item) => (
              <ToggleButton key={item} active={pets === item} onClick={() => { setPets(item); setStep(2); }}>{item}</ToggleButton>
            ))}
          </div>
        </div>
      )}
      {step === 2 && (
        <div>
          <StepHeader step={3} total={5} title="What space type?" subtitle={`Pets: ${pets}`} onBack={() => setStep(1)} />
          <div className="mt-5 grid grid-cols-2 gap-2">
            {["Home", "Apartment", "Office", "Exterior"].map((item) => (
              <ToggleButton key={item} active={space === item} onClick={() => { setSpace(item); setStep(3); }}>{item}</ToggleButton>
            ))}
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <StepHeader step={4} total={5} title="Cleaning level?" subtitle={space} onBack={() => setStep(2)} />
          <div className="mt-5 grid grid-cols-3 gap-2">
          {["Light", "Detailed", "Reset"].map((item) => (
            <ToggleButton key={item} active={level === item} onClick={() => { setLevel(item); setStep(4); }}>{item}</ToggleButton>
          ))}
          </div>
        </div>
      )}
      {step === 4 && (
        <>
          <StepHeader step={5} total={5} title="CleanScore ready" subtitle={`${space} · ${level}`} onBack={() => setStep(3)} />
          <ResultCard title="CleanScore">
            <div className="grid sm:grid-cols-[auto_1fr] gap-5 items-center">
              <div className="relative flex size-28 items-center justify-center rounded-full bg-white ring-8 ring-brand-blue/10 shadow-soft">
                <p className="text-4xl font-black text-brand-navy">{score}</p>
              </div>
              <div>
                <p className="text-xl font-black text-brand-navy">{service}</p>
                <p className="mt-2 text-sm text-brand-navy/65">{space} profile, {team} recommended.</p>
              </div>
            </div>
          </ResultCard>
        </>
      )}
    </div>
  );
}

function BookNowFlow() {
  const [submitted, setSubmitted] = useState(false);
  const inputClass = "h-12 rounded-2xl bg-white px-4 text-sm text-brand-navy ring-1 ring-brand-navy/10 outline-none transition focus:ring-2 focus:ring-brand-blue/25";
  if (submitted) {
    return (
      <ResultCard title="Request Received">
        <div className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-brand-blue text-white">
            <Check className="size-5" />
          </span>
          <p className="text-sm font-semibold leading-relaxed text-brand-navy">
            Your cleaning request has been received. Our team will contact you shortly.
          </p>
        </div>
      </ResultCard>
    );
  }
  return (
    <form
      className="grid gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid sm:grid-cols-2 gap-3">
        <input required className={inputClass} placeholder="Name" />
        <input required className={inputClass} placeholder="Phone" type="tel" />
        <input required className={inputClass} placeholder="Service" />
        <input required className={inputClass} type="date" />
        <input required className={inputClass} type="time" />
        <input required className={inputClass} placeholder="Address" />
      </div>
      <textarea className={`${inputClass} h-24 py-3`} placeholder="Notes" />
      <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-navy px-6 text-sm font-black text-white shadow-soft hover:bg-brand-green-deep transition-colors">
        Submit Request <Send className="size-4" />
      </button>
    </form>
  );
}

function AssistantPanel({ mode, compact = false }: { mode: Mode; compact?: boolean }) {
  if (mode === "quote") return <QuoteFlow compact={compact} />;
  if (mode === "plan") return <BuildPlanFlow />;
  if (mode === "score") return <CleanScoreFlow />;
  return <BookNowFlow />;
}

export function CleaningAssistant() {
  const [mode, setMode] = useState<Mode>("quote");
  const [chatOpen, setChatOpen] = useState(false);
  const ActiveIcon = actions.find((action) => action.id === mode)?.icon ?? Sparkles;

  return (
    <>
      <section id="cleaning-assistant" className="container-x mx-auto max-w-screen-2xl py-16 md:py-20 scroll-mt-28">
        <div className="relative overflow-hidden rounded-[2rem] bg-white px-5 py-8 ring-1 ring-brand-navy/10 shadow-[0_28px_80px_-50px_rgba(15,36,76,0.45)] sm:px-8 lg:px-10">
          <div className="pointer-events-none absolute right-0 top-0 size-64 rounded-full bg-brand-blue/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 size-56 rounded-full bg-brand-green-soft/70 blur-3xl" />

          <div className="relative grid lg:grid-cols-[0.82fr_1.18fr] gap-8 lg:gap-10 items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-mint px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-brand-blue ring-1 ring-brand-blue/10">
                <Bot className="size-4" /> Cleaning Assistant
              </span>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl font-black leading-[1.05] text-brand-navy">
                Plan, price, and book in one guided flow.
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-brand-navy/65">
                A frontend-only assistant for quick estimates, service planning, CleanScore checks, and booking requests.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-3">
                {actions.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setMode(id)}
                    className={cx(
                      "group rounded-[1.3rem] p-4 text-left transition-all",
                      mode === id
                        ? "bg-brand-navy text-white shadow-[0_22px_44px_-24px_rgba(15,36,76,0.65)]"
                        : "bg-brand-mint text-brand-navy ring-1 ring-brand-blue/10 hover:-translate-y-0.5 hover:bg-white",
                    )}
                  >
                    <Icon className="size-5" />
                    <span className="mt-3 block text-sm font-black">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[1.7rem] bg-[linear-gradient(145deg,#f8fbff,#eef5ff)] p-4 sm:p-6 ring-1 ring-brand-blue/10">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-brand-blue shadow-soft ring-1 ring-brand-blue/10">
                  <ActiveIcon className="size-6" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-blue">Active Flow</p>
                  <p className="font-display text-2xl font-black text-brand-navy">{actions.find((a) => a.id === mode)?.label}</p>
                </div>
              </div>
              <AssistantPanel mode={mode} />
            </div>
          </div>
        </div>
      </section>

      <button
        type="button"
        onClick={() => setChatOpen(true)}
        className={cx(
          "fixed bottom-5 right-5 z-[70] flex size-16 items-center justify-center rounded-full bg-brand-navy text-white shadow-[0_22px_52px_-18px_rgba(15,36,76,0.75)] ring-1 ring-white/40 transition-all hover:-translate-y-1",
          chatOpen && "scale-90 opacity-0 pointer-events-none",
        )}
        aria-label="Open Cleaning Assistant"
      >
        <MessageCircle className="size-7" />
      </button>

      {chatOpen && (
        <div className="fixed bottom-5 right-5 z-[80] w-[min(24rem,calc(100vw-2rem))] overflow-hidden rounded-[1.7rem] bg-white shadow-[0_30px_90px_-34px_rgba(15,36,76,0.65)] ring-1 ring-brand-navy/10 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[linear-gradient(145deg,var(--color-brand-navy),var(--color-brand-blue))] p-4 text-white">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-2xl bg-white/15">
                  <WandSparkles className="size-5" />
                </span>
                <div>
                  <p className="font-display text-lg font-black leading-tight">Cleaning Assistant</p>
                  <p className="text-xs text-white/70">Instant guided help</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setChatOpen(false)}
                className="flex size-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/15"
                aria-label="Close Cleaning Assistant"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>
          <div className="max-h-[72vh] overflow-y-auto p-4">
            <div className="grid grid-cols-2 gap-2">
              {actions.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setMode(id)}
                  className={cx(
                    "rounded-2xl px-3 py-3 text-left text-xs font-black transition-all",
                    mode === id ? "bg-brand-navy text-white" : "bg-brand-mint text-brand-navy hover:bg-brand-silver/50",
                  )}
                >
                  <Icon className="mb-2 size-4" />
                  {label}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <AssistantPanel mode={mode} compact />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
