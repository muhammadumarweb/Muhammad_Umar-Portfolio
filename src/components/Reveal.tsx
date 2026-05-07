"use client";

import type { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealProps {
  children: ReactNode;
  /** Apply staggered animation to direct children. */
  stagger?: boolean;
  /** Optional additional classes. */
  className?: string;
}

/**
 * Wraps content so it fades + slides in once it scrolls into view.
 * Set `stagger` to animate each direct child sequentially.
 *
 * @example
 * <Reveal>...</Reveal>
 * <Reveal stagger>{items.map(...)}</Reveal>
 */
export function Reveal({
  children,
  stagger = false,
  className = "",
}: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const baseClass = stagger ? "reveal-stagger" : "reveal";
  const visibleClass = isVisible ? "in" : "";
  const merged = `${baseClass} ${visibleClass} ${className}`.trim();

  return (
    <div ref={ref} className={merged}>
      {children}
    </div>
  );
}
