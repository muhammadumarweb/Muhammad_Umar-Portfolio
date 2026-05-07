import Image from "next/image";
import { personal } from "@/data/personal";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

/**
 * Renders a paragraph and converts `**text**` into bold. Used for bio
 * paragraphs in `data/personal.ts`.
 */
function renderBioParagraph(text: string) {
  const parts = text.split(/(\*\*.+?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <em key={i}>{part.slice(2, -2)}</em>;
    }
    return <span key={i}>{part}</span>;
  });
}

export function About() {
  return (
    <section id="about" className="container">
      <SectionLabel number="01" label="About" />

      <div className="about-grid">
        <Reveal className="about-portrait">
          <Image
            src="/umar.jpeg"
            alt={`${personal.name} — ${personal.title}`}
            fill
            sizes="(max-width: 900px) 360px, 480px"
            priority
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
          <div className="portrait-badge">Available</div>
          <div className="portrait-caption">
            {personal.initials} · Faisalabad · 2026
          </div>
        </Reveal>

        <Reveal stagger>
          <div className="about-content">
            {personal.bio.map((paragraph, i) => (
              <p key={i}>{renderBioParagraph(paragraph)}</p>
            ))}

            <div className="about-signature">
              <div className="signature-mark">{personal.initials}</div>
              <div className="signature-meta">
                {personal.title}
                <br />
                Faisalabad → Available worldwide
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
