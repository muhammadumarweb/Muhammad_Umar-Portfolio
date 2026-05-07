"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

interface AnimatedNumberProps {
  /**
   * The target value as a string. Format hints are inferred from this:
   * - `"02"` → counts to 2, displayed with leading zero
   * - `"3.27"` → counts to 3.27 with two decimal places
   * - `"100"` → counts to 100 as a whole number
   */
  value: string;
  /** Animation duration in milliseconds. */
  duration?: number;
}

/**
 * Counts up from 0 to the target value when scrolled into view.
 * Preserves the original formatting (leading zeros, decimal places).
 */
export function AnimatedNumber({ value, duration = 1800 }: AnimatedNumberProps) {
  const { ref, isVisible } = useScrollReveal<HTMLSpanElement>();
  const target = parseFloat(value);
  const count = useCountUp(target, duration, isVisible);

  // Mirror the formatting of the target string
  const formatted = (() => {
    if (value.includes(".")) {
      const decimals = value.split(".")[1].length;
      return count.toFixed(decimals);
    }
    if (value.startsWith("0") && value.length > 1) {
      return Math.round(count).toString().padStart(value.length, "0");
    }
    return Math.round(count).toString();
  })();

  return <span ref={ref}>{formatted}</span>;
}
