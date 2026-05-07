import { nowItems } from "@/data/education";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

export function Now() {
  return (
    <section className="now">
      <div className="container">
        <SectionLabel number="07" label="Now" />

        <Reveal>
          <h2 className="now-title">
            <small>What I&apos;m thinking about · May 2026</small>A frontend dev{" "}
            <em>going full-stack</em>, slowly and deliberately.
          </h2>
        </Reveal>

        <Reveal stagger>
          <div className="now-list">
            {nowItems.map((item) => (
              <div key={item.id} className="now-item">
                <span className="num">{item.number}</span>
                <p dangerouslySetInnerHTML={{ __html: item.html }} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
