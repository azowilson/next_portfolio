import { Hero } from "@/components/Hero";

import { Footer } from "@/components/Footer";
import { ContentRow } from "@/components/ContentRow";

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-background border border-foreground max-w-[1200px] mx-auto">
      <Hero />
      <main className="flex-1 min-h-0 flex flex-col" id="main-content">
        <ContentRow />
      </main>
      <Footer />
    </div>
  );
}
