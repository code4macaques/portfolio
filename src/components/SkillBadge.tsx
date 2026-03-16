/**
 * SkillBadge.tsx
 *
 * Small rounded badge used to display a technology tag inside experience cards.
 */
interface SkillBadgeProps {
  label: string;
}

export default function SkillBadge({ label }: SkillBadgeProps) {
  return (
    <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600 dark:bg-dark-bg dark:text-dark-text-muted">
      {label}
    </span>
  );
}
