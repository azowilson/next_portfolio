"use client";

import type { ReactNode } from "react";
import { SKILL_ICONS } from "./skillIconsMap";

const DEFAULT_SIZE = 20;

type SkillIconProps = {
  slug: string;
  name: string;
  size?: number;
  className?: string;
  fallbackIcon?: ReactNode;
};

/** Renders a skill icon from react-icons (Simple Icons), or a generic fallback when slug is empty or not in map. */
export function SkillIcon({
  slug,
  name,
  size = DEFAULT_SIZE,
  className = "",
  fallbackIcon,
}: SkillIconProps) {
  const IconComponent = slug ? SKILL_ICONS[slug] : null;

  if (!slug || !IconComponent) {
    if (fallbackIcon) return <>{fallbackIcon}</>;
    return (
      <span
        className={`inline-flex items-center justify-center rounded bg-foreground/10 flex-shrink-0 ${className}`}
        style={{ width: size, height: size }}
        title={name}
        aria-hidden
      >
        <GenericIcon size={size * 0.5} />
      </span>
    );
  }

  return (
    <IconComponent
      size={size}
      className={`flex-shrink-0 text-foreground ${className}`}
      style={{ width: size, height: size }}
      title={name}
      aria-hidden
    />
  );
}

function GenericIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-foreground"
      aria-hidden
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}
