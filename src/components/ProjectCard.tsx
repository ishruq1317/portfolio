'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tech: string[];
  githubLink?: string;
  backendGithubLink?: string;
  liveLink?: string;
  category: 'all' | 'fullstack' | 'frontend' | 'ai';
  featured?: boolean;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  tech,
  githubLink,
  backendGithubLink,
  liveLink,
  featured,
}: ProjectItem) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const radialBg = useMotionTemplate`radial-gradient(450px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.15), rgba(6, 182, 212, 0.05) 50%, transparent 80%)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative rounded-3xl glass-card overflow-hidden border border-zinc-800/80 hover:border-violet-500/40 flex flex-col justify-between transition-all duration-300 ${
        featured ? 'md:col-span-2 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90' : 'bg-zinc-950/70'
      }`}
    >
      {/* Interactive mouse spotlight overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-0"
        style={{ background: radialBg }}
      />

      <div className="relative p-7 sm:p-9 h-full flex flex-col z-10 justify-between">
        <div>
          {/* Header & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            {subtitle && (
              <span className="text-[11px] font-mono uppercase tracking-wider text-violet-400 font-semibold px-2.5 py-0.5 rounded-full bg-violet-950/50 border border-violet-800/40">
                {subtitle}
              </span>
            )}

            {featured && (
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold px-2.5 py-0.5 rounded-full bg-cyan-950/50 border border-cyan-800/40">
                Featured System
              </span>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
            {title}
          </h3>

          <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-normal">
            {description}
          </p>
        </div>

        <div>
          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs font-medium text-zinc-300 bg-zinc-900/80 rounded-md border border-zinc-800"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-800/80">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 hover:text-white border border-zinc-700/80 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                {backendGithubLink ? 'Frontend Repo' : 'GitHub'}
              </a>
            )}

            {backendGithubLink && (
              <a
                href={backendGithubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 hover:text-white border border-zinc-700/80 transition-all"
              >
                <Layers size={13} className="text-cyan-400" />
                Backend Repo
              </a>
            )}

            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/50 transition-all"
              >
                <ExternalLink size={13} />
                Live Demo / API
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
