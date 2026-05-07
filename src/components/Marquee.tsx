import { marqueeItems } from "@/data/techStack";

export function Marquee() {
  // Render the list twice for a seamless infinite loop
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>
            {item.italic ? <em>{item.name}</em> : item.name}
          </span>
        ))}
      </div>
    </div>
  );
}
