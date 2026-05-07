/**
 * Personal information — single source of truth.
 * Update this file to change the site-wide identity.
 */

export const personal = {
  name: "Muhammad Umar",
  firstName: "Muhammad",
  lastName: "Umar",
  initials: "M.U.",
  title: "Frontend / React Developer",
  location: "Faisalabad, Pakistan",
  locationShort: "Faisalabad, PK",
  status: "Available May 2026",
  openTo: "Remote · Hybrid · On-site",
  timezone: "Asia/Karachi",

  contact: {
    email: "omarajpoot09@gmail.com",
    phone: "+92 307 6909571",
    phoneTel: "+923076909571",
  },

  social: {
    linkedin: {
      handle: "muhammadumarweb",
      url: "https://linkedin.com/in/muhammadumarweb",
      display: "/in/muhammadumarweb",
    },
    github: {
      handle: "muhammadumarweb",
      url: "https://github.com/muhammadumarweb",
      display: "/muhammadumarweb",
    },
  },

  tagline:
    "I build careful, fast, and finished web interfaces with React and Next.js. Currently shipping product at BixoSoft, and growing into full-stack with FastAPI.",

  bio: [
    "I'm Umar — a frontend developer based in **Faisalabad, Pakistan**, with two years of hands-on experience shipping responsive, scalable web apps.",
    "I work mostly with React, Next.js, and Tailwind, and I care about three things: code that's actually maintainable, interfaces that respect a user's time, and shipping work I'd be proud to put my name on.",
    "I'm currently a **React Developer at BixoSoft**, where I'm building Salveowell — a health platform — with React.js, Next.js, and Laravel APIs. Before that, I cut my teeth at SolTekkers in Faisalabad, building client websites under deadlines that taught me more than any tutorial could.",
    "On the side, I'm learning **FastAPI and Python** because I think a frontend developer who can build their own API is a far more useful one. I'm a recent graduate from Government College University Faisalabad (BS Computer Science), and I'm currently open for new opportunities.",
  ],

  contactMessage:
    "I'm **currently open** for frontend, React, and junior full-stack roles. Best way to reach me is email — I read everything and reply within a day.",
} as const;

export const stats = [
  { num: "02", suffix: "+", label: "Years Building", emphasis: "num" as const },
  { num: "10", suffix: "+", label: "Projects Shipped", emphasis: "suffix" as const },
  { num: "3.27", suffix: "", label: "CGPA · GCUF", emphasis: "num" as const },
  { num: "100", suffix: "%", label: "Caffeinated", emphasis: "suffix" as const },
];
