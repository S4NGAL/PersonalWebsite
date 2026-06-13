"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { routes } from "@/lib/navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import { cn } from "@/lib/utils";

const navItems = [
  { href: routes.about,      key: "about"      },
  { href: routes.projects,   key: "projects"   },
  { href: routes.blog,       key: "blog"        },
  { href: routes.playground, key: "playground" },
  { href: routes.uses,       key: "uses"        },
] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  function isActive(href: string) {
    const full = `/${locale}${href}`;
    return href === "/"
      ? pathname === `/${locale}` || pathname === `/${locale}/`
      : pathname.startsWith(full);
  }

  return (
    <header className="sticky top-0 z-40 h-[60px] bg-bg-base/80 backdrop-blur-sm border-b border-border-subtle">
      <nav
        className="max-w-5xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="font-serif italic text-xl text-text-primary hover:text-accent transition-colors duration-150"
          aria-label="Ana sayfaya git"
        >
          ya.
        </Link>

        {/* Nav links — masaüstü */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navItems.map(({ href, key }) => (
            <li key={key}>
              <Link
                href={`/${locale}${href}`}
                className={cn(
                  "px-3 py-1.5 rounded-btn text-sm font-sans font-medium transition-colors duration-150",
                  isActive(href)
                    ? "text-accent bg-accent-subtle"
                    : "text-text-muted hover:text-text-primary hover:bg-bg-subtle"
                )}
                aria-current={isActive(href) ? "page" : undefined}
              >
                {t(key)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sağ taraf: locale + mobil menu */}
        <div className="flex items-center gap-3">
          <LocaleSwitcher />

          {/* Mobil hamburger — functionality placeholder */}
          <button
            className="md:hidden p-2 rounded-btn text-text-muted hover:text-text-primary hover:bg-bg-subtle transition-colors"
            aria-label="Menüyü aç"
            aria-expanded="false"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M2 4h14M2 9h14M2 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
