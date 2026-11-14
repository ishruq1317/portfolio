'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard, { ProjectItem } from './ProjectCard';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'frontend'>('all');

  const allProjects: ProjectItem[] = [
    {
      id: 'elane-salon',
      title: 'ÉLANÉ Atelier – Luxury Salon Platform & Operations SaaS',
      subtitle: 'Commercial SaaS & Booking Engine',
      description:
        'Commercial-grade operations SaaS platform & multi-channel booking engine built for ÉLANÉ Atelier (Sliema, Malta). Architected real-time service scheduling, state management, and optimized responsive UI across mobile and desktop.',
      tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Responsive UI'],
      githubLink: 'https://github.com/ishruq1317/elane-salon-malta',
      category: 'fullstack',
      featured: true,
    },
    {
      id: 'threadtrace',
      title: 'ThreadTrace – Garment Supply-Chain Traceability & Digital Passports',
      subtitle: 'EU ESPR Compliance Monolith',
      description:
        'Garment supply-chain traceability & Digital Product Passports (EU ESPR) modular monolith. Implemented recursive PostgreSQL CTE lineage graphs, mass-balance verification, and QR code passports for CSE 444.',
      tech: ['Java 21', 'Spring Boot 4.1.2', 'PostgreSQL CTEs', 'Docker', 'Swagger UI'],
      githubLink: 'https://github.com/ishruq1317/ThreadTrace',
      liveLink: 'https://threadtrace.onrender.com/swagger-ui.html',
      category: 'fullstack',
      featured: true,
    },
    {
      id: 'cloudmetrics',
      title: 'CloudMetrics SaaS – Distributed Infrastructure Monitoring Suite',
      subtitle: 'Full-Stack Telemetry Suite',
      description:
        'End-to-end cloud infrastructure monitoring platform. Combines an interactive Next.js dashboard with a high-throughput NestJS, Prisma ORM, and PostgreSQL API with secure JWT authentication.',
      tech: ['Next.js', 'NestJS', 'Prisma ORM', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
      githubLink: 'https://github.com/ishruq1317/cloud-metrics-frontend',
      backendGithubLink: 'https://github.com/ishruq1317/cloud-metrics-backend',
      category: 'fullstack',
      featured: true,
    },
    {
      id: 'nflix',
      title: 'N-Flix – Interactive Video Streaming Web Application',
      subtitle: 'Interactive Media Streaming',
      description:
        'Feature-rich Netflix-inspired streaming web application built with React and Vite, featuring interactive user profiles, PIN security protection, animated backdrop banners, catalog search, and custom playback.',
      tech: ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'REST APIs'],
      githubLink: 'https://github.com/ishruq1317/N-Flix',
      category: 'frontend',
    },
    {
      id: 'hydraflow',
      title: 'HydraFlow – Adaptive Hydration Tracking & UI/UX Platform',
      subtitle: 'Interactive Wellness Design',
      description:
        'Interactive user interface application implementing adaptive hydration tracking models with interactive visual feedback, smooth micro-interactions, and accessible responsive design.',
      tech: ['TypeScript', 'Modern Web UI', 'Responsive Design', 'Accessibility'],
      githubLink: 'https://github.com/ishruq1317/HydraFlow-UIUX-Project',
      category: 'frontend',
    },
    {
      id: 'landguard',
      title: 'LandGuard – Cryptographic Land Registry & Pre-Transaction Fraud Detection',
      subtitle: 'Cryptographic Security Engine',
      description:
        'Cryptographic land registry & pre-transaction fraud detection engine engineered to ensure deed authenticity and prevent double-allocation vulnerabilities in property registries.',
      tech: ['TypeScript', 'Next.js', 'Cryptographic Proofs', 'Tailwind CSS'],
      githubLink: 'https://github.com/ishruq1317/Guard_Initial',
      category: 'fullstack',
    },
    {
      id: 'maison-doree',
      title: 'Maison Dorée – Haute Boulangerie & Pâtisserie Artisanale',
      subtitle: 'Artisanal Commerce Experience',
      description:
        'Haute boulangerie & pâtisserie platform featuring 16:9 cinematic looping video, live morning deck schedule, interactive box tier calculator, 3D flavor radar, and Click & Collect checkout.',
      tech: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
      githubLink: 'https://github.com/ishruq1317/maison-doree-patisserie',
      category: 'frontend',
    },
    {
      id: 'khali-khai',
      title: 'Khali Khai – AI-Powered Multi-Restaurant Food Delivery Platform',
      subtitle: 'Smart Logistics Platform',
      description:
        'AI-Powered multi-restaurant food delivery and smart shared logistics platform for Bangladesh. Supports ordering from different restaurants in one smart cart with a transparent delivery plan.',
      tech: ['Next.js', 'React', 'TypeScript', 'Logistics Routing', 'Tailwind CSS'],
      githubLink: 'https://github.com/ishruq1317/khali-khai',
      category: 'fullstack',
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-6 py-20 z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-mono text-pink-400 uppercase tracking-[0.25em] mb-2 block">
            03. Engineering Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Selected Works
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mt-3">
            Production-grade full-stack architectures, interactive streaming interfaces, and distributed systems directly from my GitHub profile.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 self-start md:self-end">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === 'all'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            All Works ({allProjects.length})
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === 'fullstack'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Full-Stack & Systems
          </button>
          <button
            onClick={() => setFilter('frontend')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === 'frontend'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Modern Web & UI
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
