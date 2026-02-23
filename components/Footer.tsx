import Link from "next/link";
import { SkillIcon } from "./SkillIcon";
import { FaLinkedin } from "react-icons/fa";

const LINK_CLASS =
  "text-foreground text-l font-normal hover:underline focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 rounded";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="flex flex-shrink-0 items-center justify-between h-14 px-12 border-t border-foreground"
      role="contentinfo"
    >
      <p className="text-foreground font-normal">
        © {currentYear}
      </p>
      <nav
        className="flex items-center justify-center gap-8"
        aria-label="Social links"
      >
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_CLASS}
        >
          <span className="flex items-center gap-2 w-fit ">
            <SkillIcon slug="github" name='Github' size={24} />
            Github
          </span>

        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={LINK_CLASS}
        >
          <span className="flex items-center gap-2 w-fit ">
            {/* <SkillIcon slug="linkedin" name='LinkedIn' /> */}
            <FaLinkedin size={24}/>
            LinkedIn
          </span>

        </a>
      </nav>
      <nav
        className="flex items-center gap-6"
        aria-label="Legal and policies"
      >
        <Link href="/privacy" className={LINK_CLASS}>
          Privacy
        </Link>
        <Link href="/terms" className={LINK_CLASS}>
          Terms
        </Link>
        <Link href="/cookies" className={LINK_CLASS}>
          Cookies
        </Link>
      </nav>
    </footer>
  );
}
