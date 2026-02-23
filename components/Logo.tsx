export function Logo() {
  return (
    <div
      className="w-10 h-10 bg-foreground relative flex-shrink-0"
      aria-hidden
    >
      <span className="absolute w-[12px] h-[12px] bg-background top-[6px] left-[6px]" />
      <span className="absolute w-[12px] h-[12px] bg-background top-[22px] left-[22px]" />
    </div>
  );
}
