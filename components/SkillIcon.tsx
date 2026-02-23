"use client";

import { ReactNode, useState } from "react";

const SIMPLE_ICONS_CDN = "https://cdn.simpleicons.org";
const ICON_COLOR = "0D0D0D";
const DEFAULT_SIZE = 20;

type SkillIconProps = {
  slug: string;
  name: string;
  size?: number;
  className?: string;
  fallbackIcon?: ReactNode;
};

/** Renders a skill icon from Simple Icons CDN, or a generic fallback when slug is empty. */
export function SkillIcon({
  slug,
  name,
  size = DEFAULT_SIZE,
  className = "",
  fallbackIcon
}: SkillIconProps) {
  const[hasError, setHasError] = useState(false);

  if (!slug) {
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

  if(hasError) {
    return <>
      {fallbackIcon}
    </>
  }
  const src = `${SIMPLE_ICONS_CDN}/${slug}/${ICON_COLOR}`;

  return (
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      className={`flex-shrink-0 ${className}`}
      loading="lazy"
      style={{ width: size, height: size }}
      title={name}
      onError={()=> setHasError(true)}
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
