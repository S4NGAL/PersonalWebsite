"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { routing } from "@/i18n/routing";
const locales = routing.locales;

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(next: string) {
    // Replace the current locale prefix with the new one
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/"));
  }

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className="flex items-center gap-0.5 bg-bg-subtle rounded-pill p-0.5 border border-border-default"
    >
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => switchLocale(l)}
          aria-pressed={locale === l}
          className={`px-3 py-1 rounded-pill text-xs font-sans font-semibold transition-colors duration-150 ${
            locale === l
              ? "bg-accent text-white"
              : "text-text-muted hover:text-text-primary"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
