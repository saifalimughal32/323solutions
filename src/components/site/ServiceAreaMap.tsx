import { MapPin } from "lucide-react";
import { AREAS } from "@/lib/site/data";

export function ServiceAreaMap() {
  return (
    <div className="relative bg-card rounded-3xl shadow-card overflow-hidden aspect-[4/3] md:aspect-[5/4]">
      {/* Stylized map background */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 320"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="oklch(0.93 0.05 155)" strokeWidth="1" />
          </pattern>
          <radialGradient id="glow" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="oklch(0.62 0.16 155 / 0.35)" />
            <stop offset="60%" stopColor="oklch(0.62 0.16 155 / 0.08)" />
            <stop offset="100%" stopColor="oklch(0.62 0.16 155 / 0)" />
          </radialGradient>
        </defs>
        <rect width="400" height="320" fill="oklch(0.97 0.012 90)" />
        <rect width="400" height="320" fill="url(#grid)" />

        {/* Lake Michigan suggestion */}
        <path d="M0 60 Q40 80 30 140 T20 260 L0 320 Z" fill="oklch(0.85 0.07 220)" opacity="0.45" />
        <path d="M0 60 Q40 80 30 140 T20 260 L0 320 Z" fill="none" stroke="oklch(0.6 0.1 220)" strokeWidth="1" opacity="0.4" />

        {/* Roads */}
        <path d="M40 240 Q160 180 380 220" stroke="oklch(0.7 0.02 90)" strokeWidth="2" fill="none" />
        <path d="M80 40 Q200 120 360 80" stroke="oklch(0.7 0.02 90)" strokeWidth="2" fill="none" />
        <path d="M200 0 L210 320" stroke="oklch(0.7 0.02 90)" strokeWidth="1.5" fill="none" opacity="0.6" />

        {/* Service radius glow */}
        <circle cx="220" cy="170" r="140" fill="url(#glow)" />
        <circle cx="220" cy="170" r="140" fill="none" stroke="oklch(0.62 0.16 155)" strokeWidth="1.5" strokeDasharray="4 6" />

        {/* City dots */}
        {[
          { x: 220, y: 170, label: "Grand Rapids", main: true },
          { x: 130, y: 180, label: "Holland" },
          { x: 140, y: 215, label: "Zeeland" },
          { x: 260, y: 100, label: "Rockford" },
          { x: 290, y: 175, label: "Ada" },
          { x: 170, y: 220, label: "Hudsonville" },
          { x: 185, y: 200, label: "Jenison" },
        ].map((c) => (
          <g key={c.label}>
            <circle cx={c.x} cy={c.y} r={c.main ? 6 : 3.5} fill={c.main ? "oklch(0.32 0.13 258)" : "oklch(0.62 0.16 155)"} />
            {c.main && <circle cx={c.x} cy={c.y} r="14" fill="none" stroke="oklch(0.32 0.13 258)" strokeWidth="1.5" opacity="0.4" />}
            <text x={c.x + 10} y={c.y + 4} fontSize="10" fontWeight="600" fill="oklch(0.32 0.13 258)">{c.label}</text>
          </g>
        ))}
      </svg>

      {/* HQ marker badge */}
      <div className="absolute top-6 right-6 bg-card border border-border rounded-2xl px-4 py-3 shadow-soft flex items-center gap-3">
        <div className="size-10 rounded-xl bg-brand-navy text-white font-display font-bold flex items-center justify-center text-sm">
          323
        </div>
        <div>
          <p className="text-xs font-semibold text-brand-navy">Service Hub</p>
          <p className="text-[10px] text-muted-foreground flex items-center gap-1">
            <MapPin className="size-3" /> Grand Rapids, MI
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur border border-border rounded-2xl px-4 py-3 shadow-soft">
        <p className="text-xs font-semibold text-brand-navy uppercase tracking-wider">Coverage Area</p>
        <p className="mt-1 text-xs text-muted-foreground">
          {AREAS.slice(0, 6).join(" · ")} & surrounding communities
        </p>
      </div>
    </div>
  );
}