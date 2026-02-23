import Link from "next/link";
import { ArrowRightIcon } from "./icons/ArrowRight";

type LabelLinkType = {
    label: string;
}
export function LabelLink({label}: LabelLinkType) {
    return (
        <div className="flex items-center justify-start gap-24 h-[27px] w-full max-w-[325px]  py-0">
          {/* <div
            className="h-6 w-[100px] border border-foreground bg-muted flex-shrink-0"
            aria-hidden
          /> */}
          <span className="underline">{label}</span>
          <Link
            href="#"
            className="p-1 flex items-center gap-1.5 text-foreground text-xs font-normal hover:underline focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-1 rounded"
          >
            View
            <ArrowRightIcon size={14} />
          </Link>
        </div>
      );
}