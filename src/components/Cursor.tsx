"use client";

import { useEffect, useRef } from "react";

/**
 * Custom cursor that morphs based on hover context:
 *
 * - **Default**: small inner dot + larger trailing ring that lags behind
 * - **`data-cursor="link"`**: ring expands to 60px (buttons, links, tech cards)
 * - **`data-cursor="view"`**: ring expands to 96px terracotta with "View" text
 *   (project rows — signature top-tier portfolio interaction)
 *
 * Hidden on small viewports (< 900px) to avoid mobile interference.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const text = textRef.current;
    if (!dot || !ring || !text || window.innerWidth < 900) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;
    let frame = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    const onLeave = () => {
      dot.classList.add("is-hidden");
      ring.classList.add("is-hidden");
    };
    const onEnter = () => {
      dot.classList.remove("is-hidden");
      ring.classList.remove("is-hidden");
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    const animate = () => {
      // Dot snaps fast to pointer
      dotX += (mouseX - dotX) * 0.22;
      dotY += (mouseY - dotY) * 0.22;
      // Ring trails behind for momentum
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;

      dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      frame = requestAnimationFrame(animate);
    };
    animate();

    /* Hover state observers — re-query on interval so dynamically added
     * elements (loader unmount, etc.) still get bound. */
    const bindings: Array<{
      el: HTMLElement;
      type: string;
      onEnter: () => void;
      onLeave: () => void;
    }> = [];

    const setupHovers = () => {
      // Tear down old bindings first
      bindings.forEach(({ el, onEnter, onLeave }) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      bindings.length = 0;

      const elements = document.querySelectorAll<HTMLElement>(
        '[data-cursor], a, button'
      );
      elements.forEach((el) => {
        const type = el.dataset.cursor || "link";
        const onEnterHandler = () => {
          if (type === "view") {
            ring.classList.add("hover-view");
            text.textContent = "View";
          } else {
            ring.classList.add("hover-link");
          }
        };
        const onLeaveHandler = () => {
          ring.classList.remove("hover-view", "hover-link");
          text.textContent = "";
        };
        el.addEventListener("mouseenter", onEnterHandler);
        el.addEventListener("mouseleave", onLeaveHandler);
        bindings.push({
          el,
          type,
          onEnter: onEnterHandler,
          onLeave: onLeaveHandler,
        });
      });
    };

    setupHovers();
    // Re-bind once after the loader unmounts (~3s) to catch any new elements
    const rebindTimer = setTimeout(setupHovers, 3200);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(rebindTimer);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      bindings.forEach(({ el, onEnter, onLeave }) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span ref={textRef} className="cursor-text" />
      </div>
      <div ref={dotRef} className="cursor" aria-hidden="true" />
    </>
  );
}
