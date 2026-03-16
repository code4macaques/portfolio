/**
 * Education.tsx
 *
 * Education timeline + language proficiency display.
 * Uses the TimelineItem component for consistent vertical timeline styling.
 */
import { HiAcademicCap } from "react-icons/hi";
import SectionTitle from "../components/SectionTitle";
import TimelineItem from "../components/TimelineItem";
import FadeIn from "../components/FadeIn";
import { useLanguage } from "../context/LanguageContext";

export default function Education() {
  const { t, cvData } = useLanguage();

  return (
    <section id="education" className="bg-background-gray py-24 dark:bg-dark-bg-alt">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle label={t.education.label} title={t.education.title} />

        <div className="grid gap-16 lg:grid-cols-2">
          {/* -- Education timeline -- */}
          <FadeIn>
            <div>
              <h3 className="mb-10 flex items-center gap-3 text-3xl font-extrabold text-text-dark dark:text-dark-text">
                <HiAcademicCap className="text-primary" />
                {t.education.educationHeading}
              </h3>

              <div className="relative space-y-12 border-l-2 border-primary/20 pl-10">
                {cvData.education.map((edu) => (
                  <TimelineItem
                    key={edu.degree}
                    title={edu.degree}
                    subtitle={`${edu.institution} | ${edu.period}`}
                    description={edu.description}
                  />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* -- Language proficiency -- */}
          <FadeIn delay={0.15}>
            <div>
              <h3 className="mb-10 flex items-center gap-3 text-3xl font-extrabold text-text-dark dark:text-dark-text">
                <span className="text-primary" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
                  </svg>
                </span>
                {t.education.languagesHeading}
              </h3>

              {cvData.languages.map((lang) => (
                <div key={lang.language} className="mb-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:border-dark-border dark:bg-dark-surface">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-xl font-bold text-text-dark dark:text-dark-text">{lang.language}</h4>
                    <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-primary dark:border-blue-900 dark:bg-blue-950/50">
                      {lang.cefrLevel}
                    </span>
                  </div>

                  {/* Progress bars */}
                  {(["reading", "writing", "speaking"] as const).map((skill) => (
                    <div key={skill} className="mb-3 last:mb-0">
                      <div className="mb-1 flex justify-between text-sm">
                        <span className="font-medium capitalize text-text-dark dark:text-dark-text">{skill}</span>
                        <span className="text-text-muted dark:text-dark-text-muted">{lang[skill]}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-dark-bg">
                        <div
                          className="h-full rounded-full bg-primary transition-all duration-700"
                          style={{ width: `${lang[skill]}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
