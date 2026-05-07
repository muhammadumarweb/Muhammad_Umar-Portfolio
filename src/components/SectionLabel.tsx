import { Reveal } from "./Reveal";

interface SectionLabelProps {
  number: string;
  label: string;
}

/** Reusable section header — e.g. `01 — What I Do`. */
export function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <Reveal>
      <div className="section-label">
        <span className="num">{number}</span>
        <span>— {label}</span>
      </div>
    </Reveal>
  );
}
