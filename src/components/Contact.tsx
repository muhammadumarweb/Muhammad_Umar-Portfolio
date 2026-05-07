"use client";

import { useEffect, useRef } from "react";
import { personal } from "@/data/personal";
import { Reveal } from "./Reveal";
import { Footer } from "./Footer";

interface LinkItem {
  label: string;
  href: string;
  display: string;
}

const links: LinkItem[] = [
  {
    label: "Email",
    href: `mailto:${personal.contact.email}`,
    display: personal.contact.email,
  },
  {
    label: "Phone",
    href: `tel:${personal.contact.phoneTel}`,
    display: personal.contact.phone,
  },
  {
    label: "LinkedIn",
    href: personal.social.linkedin.url,
    display: personal.social.linkedin.display,
  },
  {
    label: "GitHub",
    href: personal.social.github.url,
    display: personal.social.github.display,
  },
];

/** Renders contact message paragraph with `**bold**` → `<em>` substitution. */
function renderMessage(text: string) {
  const parts = text.split(/(\*\*.+?\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <em key={i}>{part.slice(2, -2)}</em>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export function Contact() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  /* Magnetic effect: contact link follows the cursor slightly when hovered. */
  useEffect(() => {
    if (window.innerWidth < 900) return;
    const linkEls = containerRef.current?.querySelectorAll<HTMLElement>(".contact-link");
    if (!linkEls) return;

    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];

    linkEls.forEach((el) => {
      const move = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.06}px, ${y * 0.12}px)`;
      };
      const leave = () => {
        el.style.transform = "";
      };
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      handlers.push({ el, move, leave });
    });

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <section id="contact" className="contact container">
      <Reveal>
        <div className="contact-eyebrow">— Get in touch</div>
      </Reveal>

      <Reveal>
        <h2 className="contact-title">
          Let&apos;s <span className="italic">talk.</span>
        </h2>
      </Reveal>

      <div className="contact-grid">
        <Reveal>
          <p className="contact-msg">{renderMessage(personal.contactMessage)}</p>
        </Reveal>

        <Reveal>
          <div ref={containerRef} className="contact-links">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="contact-link"
                data-cursor="link"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span>
                  {link.label}
                  <span className="sub">{link.display}</span>
                </span>
                <span className="arrow">→</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>

    </section>
  );
}
