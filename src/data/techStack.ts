export interface Tech {
  id: string;
  name: string;
  /** simpleicons.org slug — see https://simpleicons.org */
  iconSlug: string;
  /** Brand color in hex (no `#`) for the CDN URL */
  color: string;
  tag: "Daily" | "Pro" | "Core" | "Tool" | "IDE" | "Learning";
  /** Custom URL if SimpleIcons CDN is unavailable or slug fails */
  customUrl?: string;
}

export const techStack: Tech[] = [
  // Daily-driver frontend tools
  { id: "react", name: "React.js", iconSlug: "react", color: "61DAFB", tag: "Daily" },
  { id: "nextjs", name: "Next.js", iconSlug: "nextdotjs", color: "000000", tag: "Daily" },
  { id: "typescript", name: "TypeScript", iconSlug: "typescript", color: "3178C6", tag: "Daily" },
  { id: "javascript", name: "JavaScript", iconSlug: "javascript", color: "F7DF1E", tag: "Daily" },
  { id: "tailwind", name: "Tailwind", iconSlug: "tailwindcss", color: "06B6D4", tag: "Daily" },
  { id: "bootstrap", name: "Bootstrap", iconSlug: "bootstrap", color: "7952B3", tag: "Pro" },

  // Core web technologies
  { id: "html5", name: "HTML5", iconSlug: "html5", color: "E34F26", tag: "Core" },
  { id: "css3", name: "CSS3", iconSlug: "css", color: "1572B6", tag: "Core" },

  // Currently learning (full-stack growth track)
  { id: "python", name: "Python", iconSlug: "python", color: "3776AB", tag: "Learning" },
  { id: "fastapi", name: "FastAPI", iconSlug: "fastapi", color: "009688", tag: "Learning" },
  { id: "postgresql", name: "PostgreSQL", iconSlug: "postgresql", color: "4169E1", tag: "Learning" },
  { id: "laravel", name: "Laravel API", iconSlug: "laravel", color: "FF2D20", tag: "Tool" },

  // Tooling
  { id: "git", name: "Git", iconSlug: "git", color: "F05032", tag: "Tool" },
  { id: "github", name: "GitHub", iconSlug: "github", color: "181717", tag: "Tool" },
  { id: "figma", name: "Figma", iconSlug: "figma", color: "F24E1E", tag: "Tool" },
  { id: "postman", name: "Postman", iconSlug: "postman", color: "FF6C37", tag: "Tool" },
  { id: "vercel", name: "Vercel", iconSlug: "vercel", color: "000000", tag: "Tool" },
  { id: "vscode", name: "VS Code", iconSlug: "visualstudiocode", color: "007ACC", tag: "IDE", customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
];

/** Marquee technology list used in the rolling banner under the hero. */
export const marqueeItems: { name: string; italic?: boolean }[] = [
  { name: "React.js" },
  { name: "Next.js", italic: true },
  { name: "TypeScript" },
  { name: "Tailwind CSS", italic: true },
  { name: "React-Bootstrap" },
  { name: "FastAPI", italic: true },
  { name: "Python" },
  { name: "PostgreSQL", italic: true },
  { name: "Laravel APIs" },
  { name: "Figma", italic: true },
  { name: "Vercel" },
  { name: "Git", italic: true },
];
