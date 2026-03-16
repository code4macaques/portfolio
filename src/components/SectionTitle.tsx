/**
 * SectionTitle.tsx
 *
 * Reusable section header following the design system pattern:
 * 1. Small uppercase label (primary color)
 * 2. Large bold title
 * 3. Decorative underline bar
 */
import { motion } from "framer-motion";

interface SectionTitleProps {
  /** Small uppercase label above the title */
  label: string;
  /** Main heading text */
  title: string;
  /** Center the header (default true) */
  center?: boolean;
}

export default function SectionTitle({ label, title, center = true }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className={`mb-16 flex flex-col ${center ? "items-center text-center" : ""}`}
    >
      <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
        {label}
      </h2>
      <h3 className="mt-2 text-4xl font-extrabold text-text-dark dark:text-dark-text">{title}</h3>
      <div className="mt-4 h-1 w-20 rounded-full bg-primary" />
    </motion.div>
  );
}
