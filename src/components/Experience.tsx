import { experience } from "@/data/experience";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="container">
      <SectionLabel number="05" label="Experience" />

      <Reveal>
        <h2 className="section-intro">
          Two years building things that <em>actually shipped</em>.
        </h2>
      </Reveal>

      <Reveal stagger>
        <div className="timeline">
          {experience.map((entry) => (
            <div
              key={entry.id}
              className={`timeline-item ${entry.isCurrent ? "current" : ""}`}
            >
              <div className="timeline-date">
                {entry.period}
                {entry.isCurrent && (
                  <>
                    <br />
                    <span className="current-tag">CURRENT</span>
                  </>
                )}
              </div>

              <div className="timeline-content">
                <h3>
                  {entry.company} <em>— {entry.role}</em>
                </h3>
                <div className="role">
                  {entry.location} · {entry.employmentType}
                </div>
                <ul>
                  {entry.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <div className="timeline-meta">
                Stack
                <div className="stack-pills">
                  {entry.stack.map((tech) => (
                    <span key={tech} className="pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
