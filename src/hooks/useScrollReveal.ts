"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollRevealOptions {
  /** How much of the element must be visible before triggering. */
  threshold?: number;
  /** Root margin offset, e.g. `"0px 0px -60px 0px"` to delay the trigger. */
  rootMargin?: string;
  /** Run the reveal once and unobserve, or every time it scrolls into view. */
  once?: boolean;
}

/**
 * Hook that returns a ref + boolean indicating whether the element has scrolled
 * into view. Used by `<Reveal>` for staggered scroll-triggered animations.
 *
 * @example
 * const { ref, isVisible } = useScrollReveal();
 * return <div ref={ref} className={isVisible ? "in" : ""}>...</div>;
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = "0px 0px -60px 0px",
  once = true,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
