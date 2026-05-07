import type { ReactNode } from "react";
import { personal, stats } from "@/data/personal";
import { AnimatedNumber } from "./AnimatedNumber";

/* ─────────────────────────────────────────
 *  Word-by-word reveal helper
 *  Splits text on whitespace, wraps each word
 *  in a <span class="word"> with a staggered
 *  animation-delay. `**bold**` markers become
 *  italicized accent text.
 * ───────────────────────────────────────── */
function renderTaglineWords(text: string, baseDelay: number): ReactNode[] {
  let wordIndex = 0;
  return text.split(/(\s+)/).map((part, i) => {
    if (part.length === 0) return null;
    if (/^\s+$/.test(part)) return <span key={i}>{part}</span>;

    const delay = baseDelay + wordIndex * 0.04;
    wordIndex++;

    const content = part.includes("**")
      ? part.split(/\*\*/).map((segment, j) =>
          j % 2 === 1 ? <em key={j}>{segment}</em> : segment
        )
      : part;

    return (
      <span
        key={i}
        className="word"
        style={{ animationDelay: `${delay}s` }}
      >
        {content}
      </span>
    );
  });
}

export function Hero() {
  return (
    <header className="hero container">
      {/* Ambient gradient blobs drifting behind the title */}
      <div className="hero-aurora" aria-hidden="true">
        <span className="aurora aurora-1" />
        <span className="aurora aurora-2" />
      </div>

      <div className="hero-eyebrow">
        <span className="hero-dot" />
        {personal.title} · {personal.locationShort}
      </div>

      {/* Mask-reveal headline — text rises from below behind a clipping mask */}
      <h1 className="hero-title">
        <span className="mask-line">
          <span className="mask-text">{personal.firstName}</span>
        </span>
        <span className="mask-line">
          <span
            className="mask-text italic"
            style={{ animationDelay: "1.95s" }}
          >
            {personal.lastName}.
          </span>
        </span>
      </h1>

      <div className="hero-meta">
        <p className="hero-tagline">
          {renderTaglineWords(
            "I build careful, fast, and finished web interfaces with **React** and **Next.js**. Currently shipping product at BixoSoft, and growing into **full-stack** with FastAPI.",
            0.5
          )}
        </p>
        <div className="hero-side">
          <dl>
            <dt>Role</dt>
            <dd>{personal.title}</dd>
            <dt>Based</dt>
            <dd>{personal.location}</dd>
            <dt>Open to</dt>
            <dd>{personal.openTo}</dd>
            <dt>Status</dt>
            <dd>{personal.status}</dd>
          </dl>
        </div>
      </div>

      <div className="hero-stats">
        {stats.map((stat, i) => (
          <div key={i} className="hero-stat">
            <div className="num">
              {stat.emphasis === "num" ? (
                <em>
                  <AnimatedNumber value={stat.num} />
                </em>
              ) : (
                <AnimatedNumber value={stat.num} />
              )}
              {stat.suffix && stat.emphasis === "suffix" ? (
                <em>{stat.suffix}</em>
              ) : (
                stat.suffix
              )}
            </div>
            <div className="label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="scroll-indicator">
        <span className="line" />
        <span>Scroll to explore</span>
      </div>
    </header>
  );
}
