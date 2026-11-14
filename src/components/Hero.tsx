'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col items-center justify-center text-center z-10"
    >
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Availability Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 mb-8 backdrop-blur-md shadow-inner"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="font-medium text-zinc-200">Final-Year CSE @ DIU</span>
        <span className="text-zinc-600">•</span>
        <span className="text-zinc-400">Open to Full-Stack & AI Roles</span>
      </motion.div>

      {/* Profile Image with Ambient Halo */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative mb-8 group"
      >
        <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 via-cyan-500 to-pink-500 rounded-full blur-md opacity-50 group-hover:opacity-80 transition duration-700 animate-pulse"></div>
        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-white/20 ring-4 ring-zinc-950 shadow-2xl">
          <Image
            src="/profile.jpg"
            alt="Hasin Ishruq"
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>
      </motion.div>

      {/* Main Title & Subtitles */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-4xl"
      >
        <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.25em] text-violet-400 mb-3">
          HASIN ISHRUQ
        </h2>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Architecting <span className="gradient-text">Modern Web Systems</span> & Medical AI
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Final-year CSE student at <strong className="text-zinc-200 font-medium">Daffodil International University</strong>. 
          Specialized in high-performance full-stack web architectures (Next.js, NestJS, Spring Boot, PostgreSQL) 
          and applied deep learning research in medical image analysis.
        </p>
      </motion.div>

      {/* Primary Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-4 w-full max-w-xl mb-12"
      >
        {/* CV Download Button */}
        <a
          href="/Hasin_Ishruq_CV.pdf"
          download="Hasin_Ishruq_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 text-white font-semibold text-sm shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <Download size={17} className="stroke-[2.5] transition-transform group-hover:-translate-y-0.5" />
          <span>Download CV (PDF)</span>
        </a>

        {/* Explore Work */}
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-medium text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Code2 size={16} />
          Explore Projects
        </a>

        {/* Contact Form CTA */}
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full glass hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 font-medium text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Mail size={16} />
          Contact Me
        </a>
      </motion.div>

      {/* Social / Contact Quick Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-400 mb-14"
      >
        <a
          href="https://github.com/ishruq1317"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-colors"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          github.com/ishruq1317
        </a>

        <a
          href="mailto:nabil12e4@gmail.com"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-colors"
        >
          <Mail size={13} className="text-violet-400" />
          nabil12e4@gmail.com
        </a>

        <a
          href="tel:01405080369"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-colors"
        >
          <Phone size={13} className="text-cyan-400" />
          01405080369
        </a>
      </motion.div>

      {/* Key Metric Highlights Bento Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left"
      >
        <div className="glass p-5 rounded-2xl border border-zinc-800/80 relative overflow-hidden">
          <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">8+</div>
          <div className="text-xs text-zinc-400">Full-Stack & Systems Projects on GitHub</div>
        </div>

        <div className="glass p-5 rounded-2xl border border-zinc-800/80 relative overflow-hidden">
          <div className="text-2xl sm:text-3xl font-extrabold text-violet-400 mb-1">2</div>
          <div className="text-xs text-zinc-400">Medical AI & Deep Learning Papers</div>
        </div>

        <div className="glass p-5 rounded-2xl border border-zinc-800/80 relative overflow-hidden">
          <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mb-1">2026</div>
          <div className="text-xs text-zinc-400">DIU Dean&apos;s List Award Conferred</div>
        </div>

        <div className="glass p-5 rounded-2xl border border-zinc-800/80 relative overflow-hidden">
          <div className="text-2xl sm:text-3xl font-extrabold text-pink-400 mb-1">Top 50</div>
          <div className="text-xs text-zinc-400">ACM Contest Finalist (UTA & Take-Off)</div>
        </div>
      </motion.div>
    </section>
  );
}
