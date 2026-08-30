'use client';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  githubLink?: string;
  liveLink?: string;
}

export default function ProjectCard({ title, description, tech, githubLink, liveLink }: ProjectProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl glass-card overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative p-8 h-full flex flex-col z-10">
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((t) => (
              <span key={t} className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/20">
                {t}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-4 pt-4 border-t border-white/10 mt-auto">
          {githubLink && (
            <Link href={githubLink} target="_blank" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
              <Code2 size={18} />
              Code
            </Link>
          )}
          {liveLink && (
            <Link href={liveLink} target="_blank" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
              <ExternalLink size={18} />
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
