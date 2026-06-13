export type ProjectCategory = "ai" | "mobile" | "game";

export type ProjectStatus = "published" | "coming_soon";

export interface Project {
  id: string;
  slug: string;
  number: string;
  badgeKey: "graduation" | "teknofest" | "gamejam" | "in_progress";
  titleKey: string;
  descriptionKey: string;
  tags: string[];
  category: ProjectCategory[];
  status: ProjectStatus;
  externalUrl?: string;
  blogSlug?: string;
}
