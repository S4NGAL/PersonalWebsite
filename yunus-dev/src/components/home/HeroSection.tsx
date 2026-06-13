"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { routes } from "@/lib/navigation";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  };
}

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section
      aria-labelledby="hero-heading"
      className="max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-16 md:pt-28 md:pb-24"
    >
      <div className="max-w-2xl">
        {/* Available badge */}
        <motion.div {...fadeUp(0)} className="mb-6">
          <Badge variant="accent">
            <span className="mr-1.5 inline-block w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
            {t("available")}
          </Badge>
        </motion.div>

        {/* Eyebrow + display heading */}
        <motion.div {...fadeUp(0.1)}>
          <p className="text-text-muted font-sans font-medium text-base mb-2">
            {t("eyebrow")}
          </p>
          <h1
            id="hero-heading"
            className="font-serif text-hero text-text-primary leading-[1.05] mb-5"
          >
            {t("name")}{" "}
            <em className="not-italic text-accent">Aydınoğlu</em>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-lg md:text-xl font-sans font-medium text-text-primary mb-4 leading-relaxed"
        >
          {t("tagline")}
        </motion.p>

        {/* Bio */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-base font-sans font-medium text-text-muted leading-relaxed mb-8 max-w-xl"
        >
          {t("bio")}
        </motion.p>

        {/* CTA butonları */}
        <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3">
          <Button href={routes.projects} size="lg">
            {t("cta_projects")}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
          <Button href="mailto:yunusmmn.contact@gmail.com" variant="secondary" size="lg">
            {t("cta_contact")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
