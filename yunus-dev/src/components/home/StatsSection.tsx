"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const stats = [
  { valueKey: "gpa_value",       labelKey: "gpa"       },
  { valueKey: "teknofest_value", labelKey: "teknofest" },
  { valueKey: "aisummit_value",  labelKey: "aisummit"  },
] as const;

export default function StatsSection() {
  const t = useTranslations("stats");

  return (
    <section
      aria-label="Başarılar"
      className="max-w-5xl mx-auto px-4 sm:px-6 py-8 border-y border-border-subtle"
    >
      <ul
        className="flex flex-col sm:flex-row items-start sm:items-center justify-around gap-8 sm:gap-4"
        role="list"
      >
        {stats.map(({ valueKey, labelKey }, i) => (
          <motion.li
            key={valueKey}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col items-start sm:items-center gap-1"
          >
            <span className="font-serif text-3xl text-text-primary">
              {t(valueKey)}
            </span>
            <span className="text-sm font-sans font-medium text-text-muted">
              {t(labelKey)}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
