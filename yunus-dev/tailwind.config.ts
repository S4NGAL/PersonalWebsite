import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-base":     "var(--bg-base)",
        "bg-surface":  "var(--bg-surface)",
        "bg-subtle":   "var(--bg-subtle)",
        "bg-muted":    "var(--bg-muted)",

        "text-primary":   "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted":     "var(--text-muted)",
        "text-faint":     "var(--text-faint)",

        "border-default": "var(--border-default)",
        "border-strong":  "var(--border-strong)",
        "border-subtle":  "var(--border-subtle)",

        accent:        "var(--accent)",
        "accent-hover":   "var(--accent-hover)",
        "accent-active":  "var(--accent-active)",
        "accent-subtle":  "var(--accent-subtle)",
        "accent-text":    "var(--accent-text)",
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        sans:  ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono:  ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        hero: ["clamp(2.25rem, 6vw, 3.75rem)", { lineHeight: "1.1" }],
      },
      borderRadius: {
        badge:  "4px",
        btn:    "8px",
        card:   "14px",
        "card-lg": "24px",
        pill:   "9999px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [typography],
};

export default config;
