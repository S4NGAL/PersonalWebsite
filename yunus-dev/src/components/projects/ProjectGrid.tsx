"use client";

import { useState } from "react";
import { getProjectsByCategory } from "@/lib/projects";
import FilterBar from "./FilterBar";
import ProjectCard from "./ProjectCard";

type FilterKey = "all" | "ai" | "mobile" | "game";

export default function ProjectGrid() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const filtered = getProjectsByCategory(filter);

  return (
    <div className="flex flex-col gap-8">
      <FilterBar active={filter} onChange={setFilter} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-text-muted font-sans font-medium text-sm py-12 text-center">
          Bu kategoride proje bulunamadı.
        </p>
      )}
    </div>
  );
}
