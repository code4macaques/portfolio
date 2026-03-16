/**
 * OtherSkills.tsx
 *
 * Governance & compliance note — a short section highlighting
 * the candidate's experience working under corporate standards.
 */
import { HiShieldCheck } from "react-icons/hi";
import SectionTitle from "../components/SectionTitle";
import FadeIn from "../components/FadeIn";
import { useLanguage } from "../context/LanguageContext";

export default function OtherSkills() {
  const { t, cvData } = useLanguage();

  return (
    <section id="other-skills" className="bg-white py-24 dark:bg-dark-bg">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle label={t.otherSkills.label} title={t.otherSkills.title} />

        <FadeIn>
          <div className="mx-auto flex max-w-2xl items-start gap-5 rounded-2xl border border-slate-100 bg-slate-50/50 p-8 shadow-sm dark:border-dark-border dark:bg-dark-surface">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-primary dark:bg-blue-950/50">
              <HiShieldCheck className="text-2xl" />
            </div>
            <div>
              <h4 className="mb-2 text-xl font-bold text-text-dark dark:text-dark-text">
                {t.otherSkills.corporateStandards}
              </h4>
              <p className="leading-relaxed text-text-muted dark:text-dark-text-muted">
                {cvData.governanceNote}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
