export interface Project {
  id: string;
  number: string;
  title: string;
  emphasis: string;
  description: string;
  stack: string;
  meta: {
    period: string;
    org: string;
  };
  preview: {
    tag: string;
    title: string;
  };
  isLive?: boolean;
}

export const projects: Project[] = [
  {
    id: "salveowell",
    number: "01",
    title: "Salveowell,",
    emphasis: "health platform at BixoSoft",
    description:
      "A health and wellness platform I'm currently shipping. Designing React.js pages, integrating Laravel REST APIs to deliver dynamic content, and building a reusable component library that ensures consistent styling across the entire product.",
    stack: "React.js · Next.js · React-Bootstrap · Laravel APIs",
    meta: {
      period: "2025 — Now",
      org: "BixoSoft",
    },
    preview: {
      tag: "In Development · 2026",
      title: "Salveowell",
    },
    isLive: true,
  },
  {
    id: "vocabuy",
    number: "02",
    title: "Vocabuy,",
    emphasis: "voice-activated e-commerce",
    description:
      "My final year project at GCUF. A voice-first mobile e-commerce app where users browse products, manage their cart, and complete purchases entirely through speech. Designed for accessibility — first-time users can navigate naturally without typing a single word.",
    stack: "React.js · Web Speech API · FastAPI · Python",
    meta: {
      period: "2025",
      org: "Final Year Project",
    },
    preview: {
      tag: "FYP · GCUF · 2025",
      title: "Vocabuy",
    },
  },
  {
    id: "instagram-clone",
    number: "03",
    title: "Instagram Clone,",
    emphasis: "practice in component depth",
    description:
      "A faithful recreation of Instagram's core UX — feed, post layout, profile pages — built to seriously stress-test my React component architecture and state handling. Useful for the kind of complexity I now hit in production work.",
    stack: "React.js · CSS · REST APIs",
    meta: {
      period: "2024",
      org: "Personal",
    },
    preview: {
      tag: "Practice · 2024",
      title: "Instagram",
    },
  },
  {
    id: "soltekkers-client-work",
    number: "04",
    title: "SolTekkers client work,",
    emphasis: "various sites",
    description:
      "A year of building and maintaining websites for multiple clients in Faisalabad — meeting tight deadlines, debugging cross-browser issues, and improving site reliability. Where I learned to ship under real-world constraints.",
    stack: "JavaScript · HTML · CSS · WordPress",
    meta: {
      period: "2024",
      org: "SolTekkers",
    },
    preview: {
      tag: "Client Work · 2024",
      title: "SolTekkers",
    },
  },
];
