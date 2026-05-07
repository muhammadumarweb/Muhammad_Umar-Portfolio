import type { ReactNode } from "react";

export interface Service {
  id: string;
  number: string;
  title: string;
  emphasis: string;
  description: string;
  tags: string;
  iconPath: ReactNode;
}

import { createElement, Fragment } from "react";

/* ─────────────────────────────────────────
 *  Inline SVG path data for each service.
 *  Kept here so service cards stay declarative.
 * ───────────────────────────────────────── */
const icons = {
  frontend: createElement(
    Fragment,
    null,
    createElement("rect", { x: 6, y: 10, width: 36, height: 28, rx: 2 }),
    createElement("path", { d: "M6 18h36" }),
    createElement("circle", { cx: 11, cy: 14, r: 0.8, fill: "currentColor" }),
    createElement("circle", { cx: 14, cy: 14, r: 0.8, fill: "currentColor" }),
    createElement("circle", { cx: 17, cy: 14, r: 0.8, fill: "currentColor" }),
    createElement("path", { d: "M14 26l-4 4 4 4" }),
    createElement("path", { d: "M28 26l4 4-4 4" }),
    createElement("path", { d: "M22 24l-2 12" })
  ),
  responsive: createElement(
    Fragment,
    null,
    createElement("rect", { x: 4, y: 8, width: 40, height: 28, rx: 2 }),
    createElement("rect", { x: 12, y: 20, width: 10, height: 8, rx: 1 }),
    createElement("path", { d: "M26 22h12" }),
    createElement("path", { d: "M26 26h8" }),
    createElement("path", { d: "M16 40h16" }),
    createElement("path", { d: "M20 36v4" }),
    createElement("path", { d: "M28 36v4" })
  ),
  api: createElement(
    Fragment,
    null,
    createElement("path", { d: "M8 24h32" }),
    createElement("circle", { cx: 8, cy: 24, r: 3 }),
    createElement("circle", { cx: 40, cy: 24, r: 3 }),
    createElement("path", { d: "M22 12v6" }),
    createElement("path", { d: "M22 30v6" }),
    createElement("rect", { x: 18, y: 18, width: 8, height: 12, rx: 1 })
  ),
  components: createElement(
    Fragment,
    null,
    createElement("rect", { x: 8, y: 8, width: 14, height: 14, rx: 1 }),
    createElement("rect", { x: 26, y: 8, width: 14, height: 14, rx: 1 }),
    createElement("rect", { x: 8, y: 26, width: 14, height: 14, rx: 1 }),
    createElement("rect", { x: 26, y: 26, width: 14, height: 14, rx: 1 }),
    createElement("path", { d: "M22 15h4" }),
    createElement("path", { d: "M15 22v4" })
  ),
  performance: createElement(
    Fragment,
    null,
    createElement("path", { d: "M24 6l16 9v18l-16 9-16-9V15z" }),
    createElement("path", { d: "M24 6v36" }),
    createElement("path", { d: "M8 15l16 9 16-9" })
  ),
  fullstack: createElement(
    Fragment,
    null,
    createElement("circle", { cx: 24, cy: 24, r: 16 }),
    createElement("path", { d: "M16 24c0-9 4-16 8-16s8 7 8 16-4 16-8 16-8-7-8-16z" }),
    createElement("path", { d: "M8 24h32" }),
    createElement("path", { d: "M11 14h26" }),
    createElement("path", { d: "M11 34h26" })
  ),
};

export const services: Service[] = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend",
    emphasis: "Development",
    description:
      "Production-grade web apps with React.js and Next.js. Component-driven architecture, clean state management, and code that's still readable six months later.",
    tags: "React · Next.js · TypeScript · Tailwind",
    iconPath: icons.frontend,
  },
  {
    id: "responsive",
    number: "02",
    title: "Responsive",
    emphasis: "UI Design",
    description:
      "Pixel-perfect implementation from Figma to production. Mobile-first layouts that work across desktop, tablet, and every weird phone size.",
    tags: "Figma → Code · Mobile-first · Cross-browser",
    iconPath: icons.responsive,
  },
  {
    id: "api",
    number: "03",
    title: "REST API",
    emphasis: "Integration",
    description:
      "Wiring frontends to APIs — Laravel backends, Node services, FastAPI endpoints. Auth flows, error handling, optimistic updates, and proper loading states.",
    tags: "REST · JWT Auth · State Sync · Error UX",
    iconPath: icons.api,
  },
  {
    id: "components",
    number: "04",
    title: "Component",
    emphasis: "Libraries",
    description:
      "Reusable, theme-aware component systems. Built one for Salveowell at BixoSoft that cut duplicate code across 12+ pages and made the design team's life easier.",
    tags: "Design Systems · Storybook · Theming",
    iconPath: icons.components,
  },
  {
    id: "performance",
    number: "05",
    title: "Performance",
    emphasis: "Optimization",
    description:
      "Auditing and improving Core Web Vitals — code-splitting, image optimization, lazy loading, font strategy. Lighthouse scores above 90 are my baseline, not the goal.",
    tags: "Web Vitals · Lighthouse · Bundle Analysis",
    iconPath: icons.performance,
  },
  {
    id: "fullstack",
    number: "06",
    title: "Full-Stack",
    emphasis: "(growing)",
    description:
      "Currently learning FastAPI and Python to build my own APIs. Already shipped Vocabuy — a voice-activated e-commerce app — using FastAPI for the backend.",
    tags: "FastAPI · Python · PostgreSQL · Auth",
    iconPath: icons.fullstack,
  },
];
