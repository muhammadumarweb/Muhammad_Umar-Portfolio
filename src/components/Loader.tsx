"use client";

import { useEffect, useState } from "react";
import { personal } from "@/data/personal";

/**
 * Loading intro screen that covers the page on first paint.
 *
 * Sequence (~2.5s total):
 * - 0.0s: Loader visible, name mask-reveals (Muhammad / Umar.)
 * - 0.0s → 1.4s: Counter ticks 0 → 100, terracotta progress bar fills
 * - 1.7s: Loader slides up off-screen, `.app-ready` class added to <html>
 *         which unlocks all hero animations
 * - 2.9s: Component unmounts entirely
 */
export function Loader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const p = Math.min((now - startTime) / 1400, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const currentProgress = Math.round(eased * 100);
      
      setProgress(currentProgress);

      if (p < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        // Exit precisely when 100% is reached
        setIsExiting(true);
        document.documentElement.classList.add("app-ready");
        window.dispatchEvent(new Event("app:ready"));
      }
    };
    frame = requestAnimationFrame(tick);

    const hideTimer = setTimeout(() => {
      setIsHidden(true);
    }, 2500); // Buffer for exit animation to complete

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(hideTimer);
    };
  }, []);

  if (isHidden) return null;

  return (
    <div className={`loader ${isExiting ? "gone" : ""}`} aria-hidden="true">
      <div className="ld-name">
        <span className="ld-line">
          <span className="ld-mask">{personal.firstName}</span>
        </span>
        <span className="ld-line">
          <span className="ld-mask italic" style={{ animationDelay: "0.35s" }}>
            {personal.lastName}.
          </span>
        </span>
      </div>

      <div className="ld-info">
        <span>Loading portfolio</span>
        <div className="ld-bar-wrap">
          <div
            className="ld-bar"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>
        <span>
          <span>{progress}</span>%
        </span>
      </div>
    </div>
  );
}
