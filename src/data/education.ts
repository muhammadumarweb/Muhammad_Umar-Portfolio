export interface Education {
  period: string;
  status: string;
  degree: string;
  emphasis: string;
  institution: string;
  stats: { value: string; emphasis?: string; label: string }[];
}

export interface Language {
  name: string;
  level: string;
  emphasis?: boolean;
}

export const education: Education = {
  period: "2021 — 2025",
  status: "Completed",
  degree: "Bachelor of",
  emphasis: "Computer Science",
  institution: "Government College University, Faisalabad",
  stats: [
    { value: "3.27", emphasis: "3.27", label: "CGPA / 4.0" },
    { value: "4yr", emphasis: "4", label: "Program" },
    { value: "FYP", label: "Vocabuy" },
  ],
};

export const languages: Language[] = [
  { name: "English", level: "Professional", emphasis: true },
  { name: "Urdu", level: "Native" },
  { name: "Punjabi", level: "Conversational" },
];

/** Items rendered in the dark "Now" section. */
export const nowItems: { id: string; number: string; html: string }[] = [
  {
    id: "fastapi",
    number: "01",
    html: "Spending most of my evenings on <strong>FastAPI fundamentals</strong> — building small services with auth, databases, and proper error handling.",
  },
  {
    id: "salveowell",
    number: "02",
    html: "Shipping <strong>Salveowell</strong> at BixoSoft — my first big production product with a real component library and Laravel API integration.",
  },
  {
    id: "writing",
    number: "03",
    html: "Trying to <strong>write more often</strong>. The fastest way to know if I understand something is to try and explain it.",
  },
  {
    id: "next-role",
    number: "04",
    html: "Looking for my <strong>next role</strong> — somewhere I can ship real product work and grow into proper full-stack territory.",
  },
];
