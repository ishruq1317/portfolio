import type { Metadata } from "next";
import Link from "next/link";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationAwards from "@/components/EducationAwards";

export const metadata: Metadata = {
  title: "About & Education | Hasin Ishruq",
  description:
    "Engineering philosophy, delivery workflow, core technical competencies, and academic summary of Hasin Ishruq – Final-year CSE at Daffodil International University.",
};

export default function AboutPage() {
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
            <li className="text-violet-400 font-semibold">About &amp; Education</li>
          </ol>
        </nav>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
          About &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Education</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl">
          An in-depth perspective on my software engineering philosophy, structured delivery workflows, technical competencies, and academic background at Daffodil International University.
        </p>
      </section>

      {/* Main Sections */}
      <AboutSection />
      <SkillsSection />
      <EducationAwards />
    </div>
  );
}
