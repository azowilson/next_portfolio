export function ArrowRightIcon({
  className,
  size = 18,
  "aria-hidden": ariaHidden = true,
}: {
  className?: string;
  size?: number;
  "aria-hidden"?: boolean;
}) {
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
      className={className}
      aria-hidden={ariaHidden}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
