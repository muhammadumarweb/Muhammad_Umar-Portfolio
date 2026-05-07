# Muhammad Umar — Portfolio

> Personal portfolio site of **Muhammad Umar**, a Frontend / React Developer based in Faisalabad, Pakistan. Built with Next.js 14, TypeScript, and Tailwind CSS — designed as an editorial-style site that intentionally avoids the generic "AI template" look.

![Next.js](https://img.shields.io/badge/Next.js-14-000?style=flat-square&logo=nextdotjs)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## Live Demo

🔗 **[muhammadumar.dev](#)** _(deploy via Vercel — see [Deployment](#deployment))_

---

## About

This is the source code for my personal portfolio website — a single-page application showcasing my work, services, experience, and tech stack. The design uses an editorial / magazine aesthetic with a warm cream palette, terracotta accents, and the Fraunces serif typeface to step away from the generic SaaS-template look that dominates developer portfolios.

Built and maintained by Muhammad Umar — Frontend Developer at BixoSoft.

---

## Features

- **Editorial Design System** — Custom color tokens, three-typeface system (Fraunces / Manrope / JetBrains Mono), and a grain overlay for an analogue feel.
- **Component-Driven Architecture** — Each section is a self-contained, type-safe React component. Content is separated from presentation in dedicated `data/` files.
- **Fully Responsive** — Mobile-first layouts that hold up across desktop, tablet, and mobile breakpoints.
- **Custom Cursor** — Mix-blend-mode cursor that scales on interactive elements (desktop only).
- **Scroll-Triggered Reveals** — IntersectionObserver-powered staggered entrance animations.
- **Interactive Micro-Animations** — 3D tilt cards, magnetic links, hover-pause marquee, hover-reveal project previews.
- **Live Pakistan Time** — Footer displays a live `Asia/Karachi` clock via `Intl.DateTimeFormat`.
- **Type-Safe Content** — All sections (services, projects, experience, education) are typed and centrally managed.
- **Zero Heavy Dependencies** — No animation libraries, no CSS frameworks beyond Tailwind. Pure CSS animations + native browser APIs.

---

## Tech Stack

| Category | Tools |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 3, custom CSS variables |
| **Fonts** | Fraunces, Manrope, JetBrains Mono (via `next/font/google`) |
| **Icons** | Custom inline SVG + Simple Icons CDN |
| **Linting** | ESLint with `next/core-web-vitals` |
| **Deployment** | Vercel |

---

## Project Structure

```
muhammadumarweb-portfolio/
├── public/
│   └── umar.jpeg              # Profile photo
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout, fonts, metadata
│   │   ├── page.tsx           # Main page composition
│   │   └── globals.css        # Tailwind + custom CSS
│   ├── components/
│   │   ├── About.tsx          # About section + portrait
│   │   ├── Contact.tsx        # Contact section
│   │   ├── Cursor.tsx         # Custom mouse cursor
│   │   ├── Education.tsx      # Education + languages
│   │   ├── Experience.tsx     # Work timeline
│   │   ├── Footer.tsx         # Footer with live time
│   │   ├── Hero.tsx           # Hero / landing
│   │   ├── Marquee.tsx        # Tech marquee
│   │   ├── Nav.tsx            # Fixed navigation
│   │   ├── Now.tsx            # "What I'm doing now"
│   │   ├── Reveal.tsx         # Scroll-reveal wrapper
│   │   ├── SectionLabel.tsx   # Reusable section header
│   │   ├── Services.tsx       # Services grid
│   │   ├── TechStack.tsx      # Tech logos grid
│   │   └── Work.tsx           # Selected projects
│   ├── data/
│   │   ├── education.ts       # Degree + languages
│   │   ├── experience.ts      # Work history
│   │   ├── personal.ts        # Name, contact, links
│   │   ├── projects.ts        # Selected work
│   │   ├── services.ts        # Services offered
│   │   └── techStack.ts       # Tech stack list
│   └── hooks/
│       ├── useLiveTime.ts     # Live timezone clock
│       └── useScrollReveal.ts # IntersectionObserver hook
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, or **pnpm**

### Installation

```bash
# Clone the repo
git clone https://github.com/muhammadumarweb/muhammadumarweb-portfolio.git
cd muhammadumarweb-portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint across the codebase |

---

## Customization

All site content is centralized in `src/data/`. To make this portfolio your own:

1. **Replace `public/umar.jpeg`** with your own profile photo.
2. **Edit `src/data/personal.ts`** — name, title, location, email, phone, and social handles.
3. **Edit `src/data/services.ts`** — services offered, with icons and descriptions.
4. **Edit `src/data/projects.ts`** — selected work entries.
5. **Edit `src/data/experience.ts`** — work history with bullets and tech pills.
6. **Edit `src/data/education.ts`** — degree, institution, languages.
7. **Adjust theme colors** in `tailwind.config.ts` if you want a different palette.

---

## Deployment

This project is optimized for [Vercel](https://vercel.com), made by the creators of Next.js.

### Deploy with Vercel

1. Push your fork to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js settings — click **Deploy**.
4. (Optional) Add a custom domain in **Settings → Domains**.

The site will build and deploy in under a minute.

---

## License

This project is open source under the [MIT License](LICENSE). Feel free to use it as a starting point for your own portfolio — a credit back is appreciated but not required.

---

## Author

**Muhammad Umar**
Frontend / React Developer · Faisalabad, Pakistan

- 🌐 Portfolio — _(deploying soon)_
- 💼 LinkedIn — [/in/muhammadumarweb](https://linkedin.com/in/muhammadumarweb)
- 🐙 GitHub — [@muhammadumarweb](https://github.com/muhammadumarweb)
- 📧 Email — omarajpoot09@gmail.com

---

<p align="center">
  Built with care, not templates.
</p>
