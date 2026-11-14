'use client';

import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Brain, Layers, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function AboutSection() {
  const mainCardRef = useRef<HTMLDivElement>(null);
  const sideCardRef = useRef<HTMLDivElement>(null);

  const mainMouseX = useMotionValue(0);
  const mainMouseY = useMotionValue(0);
  const sideMouseX = useMotionValue(0);
  const sideMouseY = useMotionValue(0);

  const mainRadialBg = useMotionTemplate`radial-gradient(500px circle at ${mainMouseX}px ${mainMouseY}px, rgba(139, 92, 246, 0.12), rgba(6, 182, 212, 0.04) 50%, transparent 80%)`;
  const sideRadialBg = useMotionTemplate`radial-gradient(400px circle at ${sideMouseX}px ${sideMouseY}px, rgba(6, 182, 212, 0.12), rgba(139, 92, 246, 0.04) 50%, transparent 80%)`;

  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 py-20 z-10">
      <div className="flex flex-col items-center md:items-start mb-12">
        <span className="text-xs font-mono text-violet-400 uppercase tracking-[0.25em] mb-2">
          01. Background & Expertise
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Engineering Philosophy
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Philosophy Card */}
        <motion.div
          ref={mainCardRef}
          onMouseMove={(e) => {
            if (!mainCardRef.current) return;
            const rect = mainCardRef.current.getBoundingClientRect();
            mainMouseX.set(e.clientX - rect.left);
            mainMouseY.set(e.clientY - rect.top);
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between group"
        >
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
            style={{ background: mainRadialBg }}
          />

          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-medium text-violet-300 mb-6">
              <Brain size={14} />
              Applied AI & Full-Stack Systems
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
              Bridging scalable software architecture with clinically interpretable deep learning.
            </h3>

            <p className="text-zinc-300 leading-relaxed text-base mb-4 font-normal">
              As a final-year Computer Science and Engineering undergraduate at <strong className="text-white">Daffodil International University</strong>, my work is driven by analytical rigor and sound decision-making. I develop production-grade web systems that require robust relational modeling, microservices/modular monolith architectures, and intuitive, accessible user interfaces.
            </p>

            <p className="text-zinc-400 leading-relaxed text-sm">
              Concurrently, I conduct applied deep learning research focusing on medical image diagnostics—specifically formulating multi-scale knowledge distillation frameworks and Grad-CAM visual interpretability to deliver lightweight, reliable clinical diagnostic tools.
            </p>
          </div>

          <div className="relative z-10 pt-6 mt-6 border-t border-zinc-800/80 flex items-center gap-2 text-xs text-zinc-400">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span>DIU Dean&apos;s List Award (2026) • GPA 5.00/5.00 HSC & SSC</span>
          </div>
        </motion.div>

        {/* Core Competencies Box */}
        <motion.div
          ref={sideCardRef}
          onMouseMove={(e) => {
            if (!sideCardRef.current) return;
            const rect = sideCardRef.current.getBoundingClientRect();
            sideMouseX.set(e.clientX - rect.left);
            sideMouseY.set(e.clientY - rect.top);
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-8 rounded-3xl flex flex-col justify-between border border-zinc-800/80 relative overflow-hidden group"
        >
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
            style={{ background: sideRadialBg }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-300 mb-6">
              <Layers size={14} />
              Core Pillars
            </div>

            <h3 className="text-lg font-bold text-white mb-4">Engineering Focus</h3>

            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-xs font-semibold text-zinc-200 mb-1 flex items-center justify-between">
                  <span>Full-Stack & Cloud</span>
                  <span className="text-[10px] text-violet-400 font-mono">Next.js / NestJS</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Relational architectures, REST APIs, TypeScript, Prisma & PostgreSQL.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-xs font-semibold text-zinc-200 mb-1 flex items-center justify-between">
                  <span>Medical Image AI</span>
                  <span className="text-[10px] text-cyan-400 font-mono">PyTorch / CNNs</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Knowledge Distillation, Uncertainty-Aware Inference, and Grad-CAM.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-xs font-semibold text-zinc-200 mb-1 flex items-center justify-between">
                  <span>Algorithmic Problem Solving</span>
                  <span className="text-[10px] text-pink-400 font-mono">Top 50 ACM</span>
                </div>
                <p className="text-xs text-zinc-400">
                  Competitive programming qualification in university-wide UTA contests.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-6 pt-4 border-t border-zinc-800/60">
            <a
              href="#contact"
              className="text-xs text-zinc-400 hover:text-white flex items-center justify-between group/link"
            >
              <span>Interested in collaborating?</span>
              <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
