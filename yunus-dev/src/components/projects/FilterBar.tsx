"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type FilterKey = "all" | "ai" | "mobile" | "game";

interface FilterBarProps {
  active: FilterKey;
  onChange: (filter: FilterKey) => void;
}

const filters: FilterKey[] = ["all", "ai", "mobile", "game"];

const filterLabelKeys: Record<FilterKey, string> = {
  all:    "filter_all",
  ai:     "filter_ai",
  mobile: "filter_mobile",
  game:   "filter_game",
};

export default function FilterBar({ active, onChange }: FilterBarProps) {
  const t = useTranslations("projects");

  return (
    <div role="group" aria-label="Proje filtresi" className="flex flex-wrap gap-2">
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
          {t(filterLabelKeys[f] as Parameters<typeof t>[0])}
        </button>
      ))}
    </div>
  );
}
