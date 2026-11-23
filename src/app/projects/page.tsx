import type { Metadata } from "next";
import Link from "next/link";
import ResearchSection from "@/components/ResearchSection";
import ProjectsSection from "@/components/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects & Research | Hasin Ishruq",
  description:
    "Peer-reviewed medical AI research publications and 9 production-grade full-stack engineering repositories authored by Hasin Ishruq.",
};

export default function ProjectsPage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Page Header Banner */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-32 pb-8 text-center md:text-left">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-zinc-500">
            <li>
              <Link href="/" className="hover:text-zinc-300 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-pink-400 font-semibold">Projects &amp; Research</li>
          </ol>
        </nav>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
          Projects &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">Research</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl">
          A showcase of accepted medical AI deep learning publications, explainable inference systems, and 9 verified commercial &amp; open-source engineering platforms.
        </p>
      </section>

      {/* Main Sections */}
      <ResearchSection />
      <ProjectsSection />
    </div>
  );
}
