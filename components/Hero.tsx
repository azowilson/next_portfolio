import { Logo } from "./Logo";

export function Hero() {
  return (
    <header
      className="flex flex-shrink-0 items-center justify-between bg-hero-bg px-16 py-12 border-b border-foreground min-h-[300px]"
    >
      <div className="w-10 h-10 flex-shrink-0" aria-hidden>
        <Logo />
      </div>
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <h1 className="text-foreground text-5xl font-black leading-tight">
          Wilson Leung
        </h1>
        <p className="text-foreground text-base font-light">
          Software Engineer | IT Specialist | Tech Enthusiast
        </p>
      </div>
      <div className="w-10 h-10 flex-shrink-0" aria-hidden />
    </header>
  );
}
