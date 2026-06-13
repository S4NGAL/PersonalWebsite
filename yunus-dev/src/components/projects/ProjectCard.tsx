"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Badge from "@/components/ui/Badge";
import Tag from "@/components/ui/Tag";
import type { Project } from "@/types/project";
import { routes } from "@/lib/navigation";

const badgeVariantMap: Record<Project["badgeKey"], "accent" | "muted"> = {
  graduation: "accent",
  teknofest:  "accent",
  gamejam:    "muted",
  in_progress:"accent",
};

const badgeLabelMap: Record<Project["badgeKey"], { tr: string; en: string }> = {
  graduation:  { tr: "Bitirme Projesi", en: "Grad Project"  },
  teknofest:   { tr: "Teknofest 8.",   en: "Teknofest 8th" },
  gamejam:     { tr: "Game Jam",       en: "Game Jam"       },
  in_progress: { tr: "Geliştiriliyor", en: "In Progress"   },
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations("projects");
  const locale = useLocale();
  const badge = badgeLabelMap[project.badgeKey];

  function getLink(): { href: string; label: string; external?: boolean } {
    if (project.status === "coming_soon") return { href: "#", label: t("coming_soon") };
    if (project.externalUrl) return { href: project.externalUrl, label: `${t("view_on")} itch.io`, external: true };
    if (project.blogSlug) return { href: `/${locale}${routes.post(project.blogSlug)}`, label: `${t("case_study")} →` };
    return { href: `/${locale}${routes.project(project.slug)}`, label: `${t("case_study")} →` };
  }

  const link = getLink();

  return (
    <motion.article
      whileHover={project.status !== "coming_soon" ? { y: -2 } : undefined}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="group rounded-card bg-bg-surface border border-border-default p-6 flex flex-col gap-4 transition-colors duration-150 hover:border-accent"
      aria-label={project.titleKey}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-xs font-medium text-text-faint">
          {project.number}
        </span>
        <Badge variant={badgeVariantMap[project.badgeKey]}>
          {locale === "tr" ? badge.tr : badge.en}
        </Badge>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-serif text-xl text-text-primary mb-2">
          {project.titleKey}
        </h3>
        <p className="text-sm font-sans font-medium text-text-muted leading-relaxed">
          {t(project.descriptionKey as Parameters<typeof t>[0])}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      {/* Link */}
      {link.href !== "#" ? (
        <Link
          href={link.href}
          {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="text-sm font-sans font-semibold text-accent hover:text-accent-hover transition-colors duration-150 flex items-center gap-1 self-start"
          aria-label={`${project.titleKey} — ${link.label}`}
        >
          {link.label}
        </Link>
      ) : (
        <span className="text-sm font-sans font-medium text-text-faint self-start">
          {link.label}
        </span>
      )}
    </motion.article>
  );
}
