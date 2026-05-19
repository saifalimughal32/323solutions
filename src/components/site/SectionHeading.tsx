import type { ReactNode } from "react";
import { MotionFadeIn } from "./MotionFadeIn";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, align = "center", className = "" }: Props) {
  const isCenter = align === "center";
  return (
    <MotionFadeIn className={`${isCenter ? "text-center mx-auto" : ""} max-w-3xl ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-green-soft text-brand-green px-3 py-1 text-xs font-semibold tracking-wider uppercase">
          <span className="size-1.5 rounded-full bg-brand-green" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </MotionFadeIn>
  );
}