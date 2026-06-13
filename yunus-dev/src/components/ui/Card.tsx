"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({ children, className, hoverable = false }: CardProps) {
  const base = cn(
    "rounded-card bg-bg-surface border border-border-default p-6",
    className
  );

  if (hoverable) {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className={cn(base, "transition-colors duration-150 hover:border-accent cursor-pointer")}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={base}>{children}</div>;
}
