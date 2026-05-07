import { projects } from "@/data/projects";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="container">
      <SectionLabel number="03" label="Selected Work" />

      <Reveal>
        <h2 className="section-intro">
          Things I&apos;ve shipped — <em>client work</em>, final-year projects,
          and personal builds.
        </h2>
      </Reveal>

      <Reveal stagger>
        <div>
          {projects.map((project) => (
            <article
              key={project.id}
              className="project"
              data-cursor="view"
            >
              <div className="project-num">{project.number}</div>
              <h3 className="project-title">
                {project.title} <em>{project.emphasis}</em>
              </h3>
              <p className="project-desc">
                {project.description}
                <span className="stack">{project.stack}</span>
                {project.isLive && (
                  <span className="live">Currently in development</span>
                )}
              </p>
              <div className="project-meta">
                {project.meta.period}
                <br />
                {project.meta.org}
              </div>
              <div className="project-preview">
                <div className="frame">
                  <span className="frame-tag">{project.preview.tag}</span>
                  <span className="frame-title">{project.preview.title}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
