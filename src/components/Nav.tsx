"use client";

import { useEffect, useState } from "react";
import { personal } from "@/data/personal";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

/** Fixed top navigation that compresses on scroll. */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#" className="logo" aria-label="Home">
        <span className="logo-mark">{personal.firstName.charAt(0)}</span>
        <span>{personal.name}</span>
      </a>

      <div className="nav-links">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} data-cursor="link">
            {link.label}
          </a>
        ))}
      </div>

      <div className="nav-status">
        <span className="status-dot" />
        <span>Open for work · 2026</span>
      </div>
    </nav>
  );
}
