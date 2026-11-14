import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationAwards from "@/components/EducationAwards";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import InteractiveCursor from "@/components/InteractiveCursor";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-[#09090b] text-zinc-100 overflow-x-hidden selection:bg-violet-500/30 selection:text-white">
      {/* Interactive Cursor Spotlight & Trailing Follower */}
      <InteractiveCursor />

      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1 flex flex-col items-center w-full z-10">
        <Hero />
        <AboutSection />
        <ResearchSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationAwards />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
