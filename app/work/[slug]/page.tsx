import Link from "next/link";
import { notFound } from "next/navigation";

const PROJECTS: Record<string, { title: string }> = {
  "project-1": { title: "Project 1" },
  "project-2": { title: "Project 2" },
  "project-3": { title: "Project 3" },
  "project-4": { title: "Project 4" },
  "project-5": { title: "Project 5" },
  "project-6": { title: "Project 6" },
  "project-7": { title: "Project 7" },
  "project-8": { title: "Project 8" },
};

type Props = { params: Promise<{ slug: string }> };

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS[slug];

  if (!project) notFound();

  return (
    <div className="min-h-screen flex flex-col bg-background max-w-[1200px] mx-auto">
      <header className="flex items-center justify-between px-8 py-6 border-b border-foreground shrink-0">
        <Link
          href="/work"
          className="text-foreground text-sm underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-foreground rounded"
        >
          Back to work
        </Link>
        <h1 className="text-foreground text-lg font-black">{project.title}</h1>
        <div className="w-16" aria-hidden />
      </header>

      <main className="flex-1 p-8">
        <div className="w-full aspect-video max-h-[50vh] bg-muted flex items-center justify-center rounded border border-foreground">
          <span className="text-foreground/40 text-sm">Image placeholder</span>
        </div>
        <p className="text-foreground text-base font-light mt-6">
          Project content — replace with your copy and media.
        </p>
      </main>
    </div>
  );
}
