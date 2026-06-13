import { cn } from "@/lib/utils";

interface TagProps {
  children: string;
  className?: string;
}

export default function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-badge bg-bg-subtle text-text-muted font-mono text-xs font-medium",
        className
      )}
    >
      {children}
    </span>
  );
}
