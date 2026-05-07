import { techStack } from "@/data/techStack";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

/** 6-column grid showing every tech with its brand-colored logo. */
export function TechStack() {
  return (
    <section id="stack" className="container">
      <SectionLabel number="04" label="Tech Stack" />

      <Reveal>
        <h2 className="section-intro">
          The tools I <em>reach for first</em>, the ones I&apos;m growing into,
          and the ones I trust.
        </h2>
      </Reveal>

      <Reveal stagger>
        <div className="tech-grid">
          {techStack.map((tech) => {
            const isLearning = tech.tag === "Learning";
            return (
              <div
                key={tech.id}
                className={`tech-card ${isLearning ? "learning" : ""}`}
                data-cursor="link"
                style={{ ["--burst" as string]: `#${tech.color}` } as React.CSSProperties}
              >
                <span className="tech-tag">{tech.tag}</span>
                {/* Using a plain <img> intentionally — the simpleicons CDN
                    returns single-color SVGs that don't need next/image
                    optimization, and CSS filter transitions only apply to
                    raster-rendered <img> elements. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="tech-icon"
                  src={tech.customUrl || `https://cdn.simpleicons.org/${tech.iconSlug}/${tech.color}`}
                  alt={tech.name}
                />
                <span className="tech-name">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
