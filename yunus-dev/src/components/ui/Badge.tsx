import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "accent" | "muted" | "subtle";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  accent: "bg-accent-subtle text-accent-text border border-accent/20",
  muted:  "bg-bg-subtle text-text-muted border border-border-default",
  subtle: "bg-bg-muted text-text-faint border border-border-subtle",
};

export default function Badge({ children, variant = "accent", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-badge text-[11px] font-sans font-semibold leading-none tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
