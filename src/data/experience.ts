export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  location: string;
  employmentType: string;
  period: string;
  isCurrent?: boolean;
  bullets: string[];
  stack: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "bixosoft",
    company: "BixoSoft",
    role: "React Developer",
    location: "Faisalabad",
    employmentType: "Full-time",
    period: "Feb 2025 — Now",
    isCurrent: true,
    bullets: [
      "Develop and maintain modern web applications with React.js and Next.js, integrating multiple RESTful APIs to power dynamic, data-driven user experiences.",
      "Built a library of reusable, component-based UIs with React-Bootstrap, ensuring consistent responsive behavior across desktop, tablet, and mobile breakpoints.",
      "Currently shipping Salveowell — a health platform — with Laravel API integration and a custom design system.",
    ],
    stack: ["React.js", "Next.js", "React-Bootstrap", "Laravel APIs", "Git"],
  },
  {
    id: "soltekkers",
    company: "SolTekkers",
    role: "Junior Web Developer",
    location: "Canal Road, Faisalabad",
    employmentType: "Internship → Full-time",
    period: "Feb 2024 — Dec 2024",
    bullets: [
      "Built and maintained websites for multiple clients across various platforms, consistently meeting tight project deadlines and quality standards.",
      "Diagnosed and resolved a wide range of frontend issues, improving site reliability, page load consistency, and overall end-user experience.",
      "Started as an intern and transitioned into a junior developer role within the year — first proper introduction to client deadlines and shipping under pressure.",
    ],
    stack: ["JavaScript", "HTML / CSS", "React", "WordPress"],
  },
];
