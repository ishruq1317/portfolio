import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationAwards from "@/components/EducationAwards";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <AboutSection />
      <ResearchSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationAwards />
      <ContactSection />
    </div>
  );
}
