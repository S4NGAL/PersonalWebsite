import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "adpilot",
    slug: "adpilot",
    number: "01",
    badgeKey: "graduation",
    titleKey: "ADPilot",
    descriptionKey: "adpilot_desc",
    tags: ["RAG", "Python", "LLM"],
    category: ["ai"],
    status: "published",
    blogSlug: "adpilot-case-study",
  },
  {
    id: "dataharvest",
    slug: "dataharvest",
    number: "02",
    badgeKey: "teknofest",
    titleKey: "DataHarvest",
    descriptionKey: "dataharvest_desc",
    tags: ["Flutter", "Laravel", "RAG"],
    category: ["ai", "mobile"],
    status: "published",
    blogSlug: "dataharvest-case-study",
  },
  {
    id: "chip-head",
    slug: "chip-head",
    number: "03",
    badgeKey: "gamejam",
    titleKey: "Chip Head",
    descriptionKey: "chiphead_desc",
    tags: ["Unity", "C#", "Git"],
    category: ["game"],
    status: "published",
    externalUrl: "https://kerembakim.itch.io/chip-head",
  },
  {
    id: "designpilot",
    slug: "designpilot",
    number: "04",
    badgeKey: "in_progress",
    titleKey: "DesignPilot",
    descriptionKey: "designpilot_desc",
    tags: ["Vision AI", "FastAPI", "Next.js"],
    category: ["ai"],
    status: "coming_soon",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") return projects;
  return projects.filter((p) => p.category.includes(category as Project["category"][number]));
}
