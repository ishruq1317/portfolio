import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { Mail, Code2, Briefcase, Phone, ChevronRight } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "N-Flix",
      description: "A full-featured Netflix-inspired streaming web application built with React and Vite, featuring interactive profiles, PIN protection, animated backgrounds, movie browsing, search, and video playback.",
      tech: ["React", "Vite", "JavaScript", "Tailwind CSS"],
      githubLink: "https://github.com/ishruq1317/N-Flix",
    },
    {
      title: "CloudMetrics SaaS (Frontend)",
      description: "Frontend Web App for CloudMetrics SaaS. Features a modern dashboard, responsive layouts, and interactive data visualization for cloud monitoring.",
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      githubLink: "https://github.com/ishruq1317/cloud-metrics-frontend",
    },
    {
      title: "CloudMetrics SaaS (Backend)",
      description: "Robust Backend API for CloudMetrics SaaS. Handles authentication, metric aggregation, and database management with Prisma ORM.",
      tech: ["NestJS", "Prisma", "PostgreSQL", "TypeScript"],
      githubLink: "https://github.com/ishruq1317/cloud-metrics-backend",
    },
    {
      title: "HydraFlow UI/UX",
      description: "Adaptive Hydration UI/UX Project focusing on user-centered design, smooth interactions, and accessibility.",
      tech: ["TypeScript", "UI/UX Design", "Figma"],
      githubLink: "https://github.com/ishruq1317/HydraFlow-UIUX-Project",
    }
  ];

  return (
    <div className="flex flex-col items-center w-full selection:bg-violet-500/30">
      
      {/* Premium Centered Hero Section */}
      <section id="home" className="relative w-full max-w-5xl px-6 min-h-[90vh] flex flex-col items-center justify-center text-center pt-24 pb-12 z-10">
        <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
        
        <div className="relative mb-8 group cursor-pointer">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/10 ring-4 ring-black">
            <Image
              src="/profile.jpg"
              alt="Hasin Ishruq"
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-6 leading-tight">
          Crafting <span className="gradient-text">Digital</span><br />Experiences
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed font-light">
          Hi, I'm <strong className="text-white font-medium">Hasin Ishruq</strong>. I build scalable, high-performance web applications with modern architectures and intuitive user interfaces.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#projects" className="px-8 py-4 rounded-full bg-white text-black hover:bg-gray-100 font-semibold transition-colors flex items-center justify-center gap-2">
            Explore Projects <ChevronRight size={18} />
          </a>
          <a href="https://github.com/ishruq1317" target="_blank" className="px-8 py-4 rounded-full glass hover:bg-white/5 text-white font-medium transition-colors flex items-center justify-center gap-2">
            <Code2 size={20} />
            GitHub Profile
          </a>
        </div>
      </section>

      {/* Bento Box Style About Section */}
      <section id="about" className="w-full max-w-6xl px-6 py-24 z-10">
        <h2 className="text-sm font-mono text-violet-400 uppercase tracking-[0.3em] mb-8 text-center md:text-left">01. About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 glass p-8 md:p-12 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-2xl font-bold text-white mb-6">The Journey</h3>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              I am dedicated to engineering robust software that bridges the gap between complex backend logic and seamless frontend design. 
            </p>
            <p className="text-gray-400 leading-relaxed">
              My expertise lies in building full-stack ecosystems—whether that means designing a high-throughput API with NestJS and Prisma, or crafting a responsive, interactive UI with Next.js and Tailwind CSS.
            </p>
          </div>
          
          <div className="glass p-8 rounded-3xl flex flex-col justify-center">
            <h3 className="text-xl font-bold text-white mb-6">Tech Arsenal</h3>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "React", "Next.js", "NestJS", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Vite"].map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 hover:bg-white/10 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-6xl px-6 py-24 z-10">
        <h2 className="text-sm font-mono text-pink-400 uppercase tracking-[0.3em] mb-4 text-center md:text-left">02. Selected Work</h2>
        <p className="text-gray-400 text-lg max-w-2xl mb-12 text-center md:text-left">
          A showcase of scalable applications and intuitive interfaces.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-4xl px-6 py-32 z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Let's build together.</h2>
        <p className="text-gray-400 mb-12 text-lg max-w-xl mx-auto">
          Currently open for new opportunities. I'd love to hear about your next project or how I can help your team.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:ishruq1317@gmail.com" className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white font-semibold transition-all w-full sm:w-auto justify-center shadow-lg shadow-violet-500/25 transform hover:-translate-y-1">
            <Mail size={20} />
            ishruq1317@gmail.com
          </a>
          <a href="tel:01405080369" className="flex items-center gap-3 px-8 py-4 rounded-2xl glass hover:bg-white/10 text-white font-medium transition-all w-full sm:w-auto justify-center transform hover:-translate-y-1">
            <Phone size={20} />
            01405080369
          </a>
          <a href="https://linkedin.com" target="_blank" className="flex items-center gap-3 px-8 py-4 rounded-2xl glass hover:bg-white/10 text-white font-medium transition-all w-full sm:w-auto justify-center transform hover:-translate-y-1">
            <Briefcase size={20} />
            LinkedIn
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="w-full text-center py-8 border-t border-white/5 text-gray-500 text-sm z-10 mt-auto">
        <p>Engineered with Next.js, Tailwind, & Framer Motion.</p>
        <p className="mt-2">© {new Date().getFullYear()} Hasin Ishruq. All rights reserved.</p>
      </footer>
    </div>
  );
}
