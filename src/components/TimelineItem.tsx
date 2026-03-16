/**
 * TimelineItem.tsx
 *
 * A single entry in the vertical timeline (Education section).
 * Renders a dot on the left border, heading, institution, and optional description.
 */
interface TimelineItemProps {
  title: string;
  subtitle: string;
  description?: string;
}

export default function TimelineItem({ title, subtitle, description }: TimelineItemProps) {
  return (
    <div className="relative">
      {/* Timeline dot */}
      <div className="absolute -left-[51px] top-1.5 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm dark:border-dark-bg-alt" />
      <h4 className="text-xl font-bold text-text-dark dark:text-dark-text">{title}</h4>
      <p className="mt-1 text-sm font-medium uppercase tracking-wide text-primary">
        {subtitle}
      </p>
      {description && (
        <p className="mt-2 text-sm italic text-text-muted dark:text-dark-text-muted">{description}</p>
      )}
    </div>
  );
}
