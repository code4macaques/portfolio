/**
 * Experience.tsx
 *
 * Professional experience section displayed as cards in a 2-column grid.
 * Each card shows: period badge, role, company, bullet points, and tech tags.
 */
import { HiCheckCircle, HiOfficeBuilding, HiLightningBolt } from "react-icons/hi";
import type { IconType } from "react-icons";
import SectionTitle from "../components/SectionTitle";
import SkillBadge from "../components/SkillBadge";
import FadeIn from "../components/FadeIn";
import { useLanguage } from "../context/LanguageContext";

/** Rotate through icons for visual variety on each card. */
const CARD_ICONS: IconType[] = [HiOfficeBuilding, HiLightningBolt, HiOfficeBuilding];

export default function Experience() {
  const { t, cvData } = useLanguage();

  return (
    <section id="experience" className="bg-background-gray py-24 dark:bg-dark-bg-alt">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle label={t.experience.label} title={t.experience.title} />

        <div className="grid gap-8 md:grid-cols-2">
          {cvData.experience.map((job, idx) => {
            const CardIcon = CARD_ICONS[idx % CARD_ICONS.length];
            return (
              <FadeIn key={`${job.company}-${job.period}`} delay={idx * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-primary/20 hover:shadow-md dark:border-dark-border dark:bg-dark-surface dark:hover:border-primary/40">
                  {/* Header row: period badge + icon */}
                  <div className="mb-6 flex items-center justify-between">
                    <span className="inline-flex items-center rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-primary dark:border-blue-900 dark:bg-blue-950/50">
                      {job.period}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-primary dark:border-dark-border dark:bg-dark-bg">
                      <CardIcon className="text-2xl" />
                    </div>
                  </div>

                  {/* Role + company */}
                  <h4 className="text-2xl font-bold text-text-dark dark:text-dark-text">{job.role}</h4>
                  <p className="mb-6 text-lg font-semibold text-primary">{job.company}</p>

                  {/* Bullet points */}
                  <ul className="mb-8 space-y-4 text-text-muted dark:text-dark-text-muted">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <HiCheckCircle className="mt-0.5 shrink-0 text-xl text-primary" />
                        <span className="text-sm leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <SkillBadge key={tech} label={tech} />
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
