"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "./icons/ArrowRight";
import { SkillIcon } from "./SkillIcon";
import { SKILL_CATEGORIES } from "@/data/skills";
import { AboutSummaryWithModal } from "./AboutSummaryWithModal";
import { LabelLink } from "./LabelLink";

const SECTION_LABEL_CLASS =
  "text-foreground text-[11px] font-normal tracking-[0.2em] uppercase";

const ABOUT_SUMMARY =
  "Design-led product and brand. I focus on building clear, scalable systems and interfaces—from design systems and front-end to APIs and cloud. I work across the stack with a bias toward clarity and maintainability.Design-led product and brand. I focus on building clear, scalable systems and interfaces—from design systems and front-end to APIs and cloud. I work across the stack with a bias toward clarity and maintainability.Design-led product and brand. I focus on building clear, scalable systems and interfaces—from design systems and front-end to APIs and cloud. I work across the stack with a bias toward clarity and maintainability.Design-led product and brand. I focus on building clear, scalable systems and interfaces—from design systems and front-end to APIs and cloud. I work across the stack with a bias toward clarity and maintainability.Design-led product and brand. I focus on building clear, scalable systems and interfaces—from design systems and front-end to APIs and cloud. I work across the stack with a bias toward clarity and maintainability.";

export function ContentRow() {
  const [aboutExpanded, setAboutExpanded] = useState(false);

  return (
    <section
      className="flex flex-1 min-h-0 w-full border-b border-foreground overflow-hidden"
      aria-label="Portfolio sections"
    >
      {/* Left: Work */}
      <div className="flex-1 flex flex-col justify-between gap-5 bg-white p-8 border-r border-foreground">
        <span className={SECTION_LABEL_CLASS}>WORK</span>
        <h2 className="text-foreground text-[28px] font-black leading-tight max-w-full">
          Selected projects from the last five years
        </h2>
        <p className="text-foreground text-[15px] font-light leading-[1.5] max-w-full">
          A collection of product design, brand systems, and interactive
          experiences for clients and side projects.
        </p>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-foreground text-sm font-normal hover:underline focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 rounded"
        >
          View all work
          <ArrowRightIcon size={18} />
        </Link>
      </div>

      {/* Center: Skills */}
      <div className="flex-1 flex flex-col min-h-0 bg-white p-8 border-r border-foreground">
        <span className={SECTION_LABEL_CLASS}>Skills</span>
        <h2 className="text-foreground text-[28px] font-black leading-tight max-w-full mt-1">
          Design & code
        </h2>
        <p className="text-foreground text-sm font-light mt-1">
          Languages, frameworks, cloud, and tools
        </p>
        <div className="scrollbar-hover flex-1 min-h-0 mt-4 pr-1">
          <ul className="flex flex-col gap-4 pb-2" aria-label="Skills by category">
            {SKILL_CATEGORIES.map((category) => (
              <li key={category.title}>
                <h3 className="text-foreground text-xs font-semibold uppercase tracking-wider mb-2">
                  {category.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-foreground/20 bg-background/50"
                    >
                      <SkillIcon
                        slug={skill.iconSlug}
                        name={skill.name}
                        size={18}
                        
                      />
                      <span className="text-foreground text-xs font-normal">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right: About + brand rows */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="relative flex flex-col flex-1 min-h-0 p-8 pb-0 border-b border-foreground">
          <span className={SECTION_LABEL_CLASS}>ABOUT</span>
          <h2 className="text-foreground text-[28px] font-black leading-tight max-w-full mt-1 flex-shrink-0">
            Design-led product and brand
          </h2>
          <AboutSummaryWithModal
            summary={ABOUT_SUMMARY}
            expanded={aboutExpanded}
            onCollapse={() => setAboutExpanded(false)}
          />
          {!aboutExpanded ?
        
              <button
                type="button"
                onClick={() => setAboutExpanded(true)}
                className="w-fit absolute bottom-1 left-1/2 -translate-x-1/2 px-2 mt-2 text-foreground text-sm font-medium underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 rounded"
              >
                More
              </button>

            : null}
        </div>

        {!aboutExpanded && (
          <div className="flex flex-col gap-2 p-8 bg-white flex-shrink-0 overflow-hidden">
            <LabelLink label="Resume"/>
            <LabelLink label="Blog"/>
          </div>
        )}
      </div>
    </section>
  );
}

function BrandRow() {
  return (
    <div className="flex items-center justify-between h-[27px] w-full max-w-[325px] border border-foreground px-0 py-0">
      <div
        className="h-6 w-[100px] border border-foreground bg-muted flex-shrink-0"
        aria-hidden
      />
      <Link
        href="#"
        className="flex items-center gap-1.5 text-foreground text-xs font-normal hover:underline focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-1 rounded"
      >
        View
        <ArrowRightIcon size={14} />
      </Link>
    </div>
  );
}
