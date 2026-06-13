"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import type { PostCategory } from "@/types/post";

type FilterKey = "all" | PostCategory;

interface CategoryFilterProps {
  active: FilterKey;
  onChange: (f: FilterKey) => void;
}

const filters: FilterKey[] = ["all", "vaka-calismasi", "teknik", "deneyim"];

const labelKeys: Record<FilterKey, string> = {
  all:              "filter_all",
  "vaka-calismasi": "filter_case_study",
  teknik:           "filter_technical",
  deneyim:          "filter_experience",
};

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  const t = useTranslations("blog");

  return (
    <div role="group" aria-label="Blog kategorisi" className="flex flex-wrap gap-2">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          aria-pressed={active === f}
          className={cn(
            "px-3 py-1.5 rounded-pill text-sm font-sans font-medium transition-colors duration-150",
            active === f
              ? "bg-accent text-white"
              : "bg-bg-subtle text-text-muted border border-border-default hover:border-accent hover:text-accent"
          )}
        >
          {t(labelKeys[f] as Parameters<typeof t>[0])}
        </button>
      ))}
    </div>
  );
}
