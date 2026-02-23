import Link from "next/link";

const gridAreas = [
  { id: 1, title: "Project 1", slug: "project-1", className: "col-span-1 row-span-1" },
  { id: 2, title: "Project 2", slug: "project-2", className: "col-span-2 row-span-1" },
  { id: 3, title: "Project 3", slug: "project-3", className: "col-span-1 row-span-2" },
  { id: 4, title: "Project 4", slug: "project-4", className: "col-span-1 row-span-1" },
  { id: 5, title: "Project 5", slug: "project-5", className: "col-span-2 row-span-1" },
  { id: 6, title: "Project 6", slug: "project-6", className: "col-span-1 row-span-1" },
  { id: 7, title: "Project 7", slug: "project-7", className: "col-span-1 row-span-1" },
  { id: 8, title: "Project 8", slug: "project-8", className: "col-span-2 row-span-1" },
];

export default function WorkPage() {
  return (
    <div className="h-screen flex flex-col bg-background max-w-[1200px] mx-auto">
      <header className="flex items-center justify-between px-8 py-6 border-b border-foreground shrink-0">
        <Link
          href="/"
          className="text-foreground text-sm underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-foreground rounded"
        >
          Back to home
        </Link>
        <h1 className="text-foreground text-lg font-black">
          Selected projects from the last five years
        </h1>
        <div className="w-16" aria-hidden />
      </header>

      <main className="flex-1 min-h-0">
        <div className="grid grid-cols-4 grid-rows-3 h-full w-full">
          {gridAreas.map((area) => (
            <Link
              key={area.id}
              href={`/work/${area.slug}`}
              className={`${area.className} border border-foreground bg-white flex flex-col overflow-hidden transition-colors hover:bg-hero-bg focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-inset`}
            >
              <div
                className="flex-1 min-h-0 w-full bg-muted flex items-center justify-center"
                aria-hidden
              >
                <span className="text-foreground/40 text-xs font-normal">
                  Image
                </span>
              </div>
              <span className="text-foreground text-sm font-medium p-4 pt-2">
                {area.title}
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
