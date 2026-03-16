/**
 * About.tsx
 *
 * Brief "About Me" section that renders the professional summary
 * from cvData. Visible on all screen sizes as a standalone section.
 */
import SectionTitle from "../components/SectionTitle";
import FadeIn from "../components/FadeIn";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t, cvData } = useLanguage();
  const { summary } = cvData;

  return (
    <section id="about" className="bg-white py-24 dark:bg-dark-bg">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle label={t.about.label} title={t.about.title} />

        <FadeIn>
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            {summary.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-text-muted dark:text-dark-text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
