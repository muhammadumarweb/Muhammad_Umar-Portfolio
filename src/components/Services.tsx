"use client";

import { useEffect, useRef } from "react";
import { services } from "@/data/services";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

/**
 * Services section. Renders six service cards driven by `data/services.ts`.
 * Each card has a subtle 3D tilt that follows the mouse on desktop only.
 */
export function Services() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.innerWidth < 900) return;
    const cards = gridRef.current?.querySelectorAll<HTMLElement>(".service-card");
    if (!cards) return;

    const handlers: Array<{
      el: HTMLElement;
      move: (e: MouseEvent) => void;
      leave: () => void;
    }> = [];

    cards.forEach((card) => {
      const move = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotateX = ((y - cy) / cy) * -3;
        const rotateY = ((x - cx) / cx) * 3;
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };
      const leave = () => {
        card.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
      };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      handlers.push({ el: card, move, leave });
    });

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <section id="services" className="container">
      <SectionLabel number="02" label="What I Do" />

      <Reveal>
        <h2 className="section-intro">
          Services I offer <em>professionally</em> — built carefully, shipped on
          time.
        </h2>
      </Reveal>

      <Reveal stagger>
        <div ref={gridRef} className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card" data-cursor="link">
              <div className="service-num">[ {service.number} ]</div>
              <svg
                className="service-icon"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {service.iconPath}
              </svg>
              <h3 className="service-title">
                {service.title} <em>{service.emphasis}</em>
              </h3>
              <p className="service-desc">{service.description}</p>
              <div className="service-tags">{service.tags}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
