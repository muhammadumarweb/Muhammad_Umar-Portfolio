import { Loader } from "@/components/Loader";
import { Cursor } from "@/components/Cursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { TechStack } from "@/components/TechStack";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Now } from "@/components/Now";
import { Footer } from "@/components/Footer";

/**
 * Home page — composes the entire single-page portfolio.
 *
 * Render order is intentional:
 *   1. Loader covers the page on first paint, then exits at ~1.7s
 *   2. ScrollProgress + Cursor provide global UI overlays
 *   3. Nav stays fixed at top
 *   4. Sections flow: Hero → About → Services → Work → … → Footer
 *
 * Section order: portrait + bio (About) appears right after the
 * Hero/Marquee so visitors meet the person before the work.
 */
export default function Home() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Cursor />
      <Nav />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Work />
        <TechStack />
        <Experience />
        <Education />
        <Now />
      </main>

      <Footer />
    </>
  );
}
