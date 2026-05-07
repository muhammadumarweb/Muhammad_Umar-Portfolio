"use client";

import { useLiveTime } from "@/hooks/useLiveTime";
import { personal } from "@/data/personal";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
];

const CONNECT_LINKS = [
  { label: "LinkedIn", href: personal.social.linkedin.url },
  { label: "GitHub", href: personal.social.github.url },
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
];

export function Footer() {
  const time = useLiveTime(personal.timezone);
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-final" id="contact">
      <div className="container">
        
        {/* ── CTA ───────────────────────────────────── */}
        <div className="footer-top">
          <div className="footer-cta-wrap">
            <h2 className="footer-headline">
              Let&apos;s build <br />
              something <span className="italic">extraordinary.</span>
            </h2>
            <div className="footer-actions">
              <a 
                href={`mailto:${personal.contact.email}`} 
                className="footer-email-btn"
                data-cursor="link"
              >
                <span className="email-text">{personal.contact.email}</span>
                <span className="email-circle">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 13L13 1M13 1H1M13 1V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* ── NAVIGATION ────────────────────────────── */}
        <div className="footer-mid">
          <div className="footer-grid">
            <div className="footer-col">
              <span className="col-label">Navigation</span>
              <ul className="footer-links">
                {NAV_LINKS.map(l => (
                  <li key={l.label}><a href={l.href} data-cursor="link">{l.label}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <span className="col-label">Connect</span>
              <ul className="footer-links">
                {CONNECT_LINKS.map(l => (
                  <li key={l.label}><a href={l.href} target="_blank" rel="noopener noreferrer" data-cursor="link">{l.label}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <span className="col-label">System</span>
              <div className="footer-details">
                <div className="detail">
                  <span className="key">Loc</span>
                  <span className="val">{personal.locationShort}</span>
                </div>
                <div className="detail">
                  <span className="key">Time</span>
                  <span className="val">{time} PKT</span>
                </div>
                <div className="detail">
                  <span className="key">Status</span>
                  <span className="val">Available 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BASE ───────────────────────────────────── */}
        <div className="footer-bottom">
          <div className="footer-logo">
            <span className="serif">{personal.firstName}</span>
            <span className="serif italic">{personal.lastName}.</span>
          </div>
          
          <div className="footer-meta">
            <span>© {year} — Crafted with precision by {personal.name}</span>
          </div>

          <button onClick={scrollTop} className="footer-top-btn" data-cursor="link">
            <span>Back to top</span>
            <span className="arrow">↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
