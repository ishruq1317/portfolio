'use client';

import { motion } from 'framer-motion';
import { Code2, Brain, Database } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Full-Stack & Web Architecture',
      icon: <Code2 className="text-violet-400" size={20} />,
      color: 'violet',
      description: 'Modern component architectures, typed full-stack APIs, and responsive design systems.',
      skills: [
        'Next.js 14 / 15',
        'React',
        'TypeScript',
        'Node.js',
        'NestJS',
        'Spring Boot',
        'Tailwind CSS',
        'RESTful APIs',
        'JavaScript (ES6+)',
        'HTML5 & CSS3',
      ],
    },
    {
      title: 'Machine Learning & Applied AI',
      icon: <Brain className="text-cyan-400" size={20} />,
      color: 'cyan',
      description: 'Medical image computing, lightweight model compression, and visual interpretability pipelines.',
      skills: [
        'Python',
        'PyTorch',
        'Deep Learning (CNNs)',
        'Knowledge Distillation',
        'Grad-CAM Visualization',
        'Medical Image Processing',
        'Uncertainty Quantification',
        'Model Interpretability',
      ],
    },
    {
      title: 'Databases, Infrastructure & Tools',
      icon: <Database className="text-pink-400" size={20} />,
      color: 'pink',
      description: 'Relational data modeling, recursive query optimizations, containerization, and developer tooling.',
      skills: [
        'PostgreSQL',
        'Prisma ORM',
        'Git & GitHub',
        'Docker Containerization',
        'Recursive SQL CTEs',
        'VS Code',
        'Swagger / OpenAPI',
        'Vercel & Render CI/CD',
      ],
    },
  ];

  return (
    <section id="skills" className="w-full max-w-6xl mx-auto px-6 py-20 z-10">
      <div className="flex flex-col items-center md:items-start mb-12">
        <span className="text-xs font-mono text-violet-400 uppercase tracking-[0.25em] mb-2">
          04. Technical Arsenal
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Skills & Competencies
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-3 text-center md:text-left">
          A comprehensive overview of programming languages, frameworks, deep learning stacks, and development tools I employ in production and research.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card p-7 rounded-3xl border border-zinc-800/80 flex flex-col justify-between hover:border-zinc-700 transition-all group"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  {category.title}
                </h3>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-normal">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 bg-zinc-900/90 border border-zinc-800/90 hover:bg-zinc-800 hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400/80"></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
              <span>Production & Research Ready</span>
              <span>100% Verified</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
