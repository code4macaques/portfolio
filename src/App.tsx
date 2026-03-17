/**
 * App.tsx
 *
 * Root layout component that composes all portfolio sections in order.
 * Each section is a self-contained component that reads from cvData.
 *
 * Section order mirrors the original design:
 *   Navbar -> Hero -> About -> Experience -> Skills
 *   -> Certifications -> Education -> OtherSkills -> Contact -> Footer
 */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Education from "./sections/Education";
import OtherSkills from "./sections/OtherSkills";
import Contact from "./sections/Contact";
import useTheme from "./hooks/useTheme";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <LanguageProvider>
      <div className="bg-background-light font-sans text-text-dark transition-colors duration-300 dark:bg-dark-bg dark:text-dark-text">
        {/* Sticky navigation bar */}
        <Navbar theme={theme} onToggleTheme={toggleTheme} />

        {/* Main content area — offset for fixed navbar height */}
        <main className="pt-16">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Certifications />
          <Education />
          <OtherSkills />
          <Contact />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
