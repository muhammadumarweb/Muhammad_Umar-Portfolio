"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 to `end` over `duration` ms.
 *
 * The animation is also gated on the `app:ready` signal dispatched by
 * `<Loader>` after its exit transition. This prevents hero stats from
 * counting up invisibly behind the loader on first paint.
 *
 * @example
 * const { ref, isVisible } = useScrollReveal();
 * const count = useCountUp(2.5, 1800, isVisible);
 * return <span ref={ref}>{count.toFixed(2)}</span>;
 */
export function useCountUp(
  end: number,
  duration: number = 1800,
  start: boolean = true
): number {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;

    let frame = 0;

    const begin = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic — fast at start, slow at end
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(end * eased);
        if (progress < 1) frame = requestAnimationFrame(tick);
        else setCount(end);
      };
      frame = requestAnimationFrame(tick);
    };

    // Wait for the loader to exit before counting up. If the loader has
    // already finished (e.g. on subsequent navigations), start immediately.
    const isReady =
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("app-ready");

    if (isReady) {
      begin();
    } else {
      window.addEventListener("app:ready", begin, { once: true });
    }

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("app:ready", begin);
    };
  }, [end, duration, start]);

  return count;
}
