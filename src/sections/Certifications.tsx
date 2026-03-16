/**
 * Certifications.tsx
 *
 * Displays certifications and diplomas in a grid of small cards.
 */
import { HiShieldCheck } from "react-icons/hi";
import SectionTitle from "../components/SectionTitle";
import FadeIn from "../components/FadeIn";
import { useLanguage } from "../context/LanguageContext";

export default function Certifications() {
  const { t, cvData } = useLanguage();

  const allCerts = [
    ...cvData.certifications.map((c) => ({
      title: c.title,
      subtitle: `${c.issuer} | ${c.period}`,
    })),
    ...cvData.diplomas.map((d) => ({
      title: d.title,
      subtitle: `${d.issuer} | ${d.year}`,
    })),
  ];

  return (
    <section id="certifications" className="bg-white py-24 dark:bg-dark-bg">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle label={t.certifications.label} title={t.certifications.title} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allCerts.map((cert, idx) => (
            <FadeIn key={cert.title} delay={idx * 0.08}>
              <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:border-primary/20 dark:border-dark-border dark:bg-dark-surface dark:hover:border-primary/40">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-primary dark:bg-blue-950/50">
                  <HiShieldCheck className="text-xl" />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-dark dark:text-dark-text">{cert.title}</p>
                  <p className="text-xs text-text-muted dark:text-dark-text-muted">{cert.subtitle}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
