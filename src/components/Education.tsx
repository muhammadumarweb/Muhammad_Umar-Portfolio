import { education, languages } from "@/data/education";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="container">
      <SectionLabel number="06" label="Education" />

      <Reveal>
        <h2 className="section-intro">
          Where I <em>got the basics</em>, and the languages I work in.
        </h2>
      </Reveal>

      <div className="edu-grid">
        <Reveal>
          <div className="edu-card">
            <div className="edu-eyebrow">
              {education.period} · {education.status}
            </div>
            <h3>
              {education.degree} <em>{education.emphasis}</em>
            </h3>
            <div className="institution">{education.institution}</div>

            <div className="edu-stats">
              {education.stats.map((stat, i) => (
                <div key={i} className="edu-stat">
                  <div className="num">
                    {stat.emphasis ? (
                      <>
                        <em>{stat.emphasis}</em>
                        {stat.value.replace(stat.emphasis, "")}
                      </>
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="edu-side">
            <h4>Languages</h4>
            <ul>
              {languages.map((lang) => (
                <li key={lang.name}>
                  <span>
                    {lang.emphasis ? <em>{lang.name}</em> : lang.name}
                  </span>
                  <span className="level">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
