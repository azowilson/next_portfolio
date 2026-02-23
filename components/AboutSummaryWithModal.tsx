"use client";

import { useState, useRef, useEffect } from "react";

const COLLAPSED_MAX_HEIGHT_PX = 120;

type AboutSummaryWithModalProps = {
  summary: string;
  expanded: boolean;
  // onExpand: () => void;
  onCollapse: () => void;
};

export function AboutSummaryWithModal({
  summary,
  expanded,
  onCollapse,
}: AboutSummaryWithModalProps) {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expanded) return;
    const el = contentRef.current;
    if (!el) return;

    const checkOverflow = () => {
      if (el) {
        setIsOverflowing(el.scrollHeight > COLLAPSED_MAX_HEIGHT_PX);
      }
    };

    checkOverflow();
    const rafId = requestAnimationFrame(checkOverflow);
    return () => cancelAnimationFrame(rafId);
  }, [summary, expanded]);

  return (
    <div
      className={`mt-4 flex flex-col w-full ${expanded ? "flex-1 min-h-0" : "max-h-[100px] overflow-hidden"}`}
    >
      {!expanded ? (
        <div className="w-full flex-shrink-0">
          <div
            ref={contentRef}
            style={{
              maxHeight: `${COLLAPSED_MAX_HEIGHT_PX}px`,
            }}
            className="overflow-hidden"
          >
            <p className="text-foreground text-[15px] font-light leading-[1.5] pr-1">
              {summary}
            </p>
          </div>

          {isOverflowing && (
            <>
              <div
                className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"
                aria-hidden
              />
              
            </>
          )}
        </div>
      ) : (
        <div className="flex flex-col flex-1 min-h-0 w-full">
          <div className="scrollbar-hover flex-1 min-h-0 overflow-y-auto overflow-x-hidden pr-1">
            <p className="text-foreground text-[15px] font-light leading-[1.5]">
              {summary}
            </p>
          </div>
          <button
            type="button"
            onClick={onCollapse}
            className="mt-2 mb-4 flex-shrink-0 w-fit text-foreground text-sm font-normal underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 rounded"
          >
            Show less
          </button>
        </div>
      )}
    </div>
  );
}
