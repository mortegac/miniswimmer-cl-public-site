"use client";

import { BlogCategory, CATEGORY_COLORS, CATEGORY_LABELS } from "@/data/blog/types";
import { cn } from "@/libs/utils";

interface BlogCategoryBadgeProps {
  category: BlogCategory;
  className?: string;
}

export default function BlogCategoryBadge({
  category,
  className,
}: BlogCategoryBadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-3 py-1 font-inter text-xs font-semibold",
        CATEGORY_COLORS[category],
        className,
      )}
    >
      {CATEGORY_LABELS[category]}
    </span>
  );
}
