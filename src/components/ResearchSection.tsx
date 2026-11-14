'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface ResearchPaper {
  id: string;
  title: string;
  status: string;
  statusType: 'accepted' | 'ongoing';
  conference?: string;
  year: string;
  abstract: string;
  keyContributions: string[];
  tags: string[];
}

export default function ResearchSection() {
  const papers: ResearchPaper[] = [
    {
      id: 'brain-tumor-kd',
      title: 'Explainable Multi-Scale Knowledge Distillation with Uncertainty-Aware Inference for Efficient Brain Tumor MRI Classification',
      status: 'Accepted & Presented (Sept 2026)',
      statusType: 'accepted',
      conference: 'Proceedings Forthcoming',
      year: '2026',
      abstract:
        'Formulated a multi-scale knowledge distillation architecture coupled with uncertainty-aware inference to enable lightweight, high-accuracy brain tumor classification on MRI scans with transparent clinical interpretability.',
      keyContributions: [
        'Multi-scale feature distillation compressing deep vision backbones without sacrificing diagnostic sensitivity.',
        'Uncertainty-aware inference pipeline highlighting out-of-distribution and ambiguous MRI scan slices.',
        'Clinical explainability framework to build physician trust in automated neurological screening.',
      ],
      tags: ['PyTorch', 'Knowledge Distillation', 'Brain MRI', 'Uncertainty Quantification', 'Deep Learning', 'Explainable AI'],
    },
    {
      id: 'liver-disease-gradcam',
      title: 'Transfer Learning-Based Deep Convolutional Neural Network for Early Liver Disease Detection Using Ultrasound Images with Grad-CAM Interpretation',
      status: 'Working Paper / Ongoing Research',
      statusType: 'ongoing',
      conference: 'Manuscript in Preparation',
      year: '2026',
      abstract:
        'Investigating deep transfer learning models for non-invasive early liver pathology detection from ultrasound images, integrating Gradient-weighted Class Activation Mapping (Grad-CAM) to generate visual heatmaps for diagnostic transparency.',
      keyContributions: [
        'Transfer learning optimization addressing ultrasound speckle noise and acoustic attenuation challenges.',
        'Grad-CAM visual heatmap generation pinpointing localized hepatic tissue irregularities.',
        'Non-invasive early diagnostic screening algorithm designed for low-resource clinical environments.',
      ],
      tags: ['PyTorch', 'Transfer Learning', 'CNNs', 'Grad-CAM', 'Ultrasound Imaging', 'Medical Diagnostics'],
    },
  ];

  return (
    <section id="research" className="w-full max-w-6xl mx-auto px-6 py-20 z-10">
      <div className="flex flex-col items-center md:items-start mb-12">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-[0.25em] mb-2">
          02. Publications & Scholarly Research
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Medical AI Research
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-3 text-center md:text-left">
          Focusing on lightweight deep learning architectures, uncertainty estimation, and explainable AI for clinical medical diagnostics.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {papers.map((paper, index) => (
          <motion.div
            key={paper.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="glass-card p-8 md:p-10 rounded-3xl border border-zinc-800/80 relative overflow-hidden group hover:border-cyan-500/40"
          >
            {/* Top Glow Accent */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/15 transition-all"></div>

            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
              <div className="flex-1">
                {/* Status Badges */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {paper.statusType === 'accepted' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      <CheckCircle2 size={13} />
                      {paper.status}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                      <Clock size={13} />
                      {paper.status}
                    </span>
                  )}

                  <span className="text-xs font-mono text-zinc-500">
                    {paper.conference} • {paper.year}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                  {paper.title}
                </h3>
              </div>
            </div>

            {/* Abstract */}
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6 font-normal">
              {paper.abstract}
            </p>

            {/* Key Contributions */}
            <div className="mb-6 p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/80">
              <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                <Sparkles size={14} className="text-cyan-400" />
                Key Methodological Contributions
              </h4>
              <ul className="space-y-2">
                {paper.keyContributions.map((contrib, i) => (
                  <li key={i} className="text-xs md:text-sm text-zinc-300 flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold mt-0.5">•</span>
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-zinc-800/80">
              {paper.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium text-cyan-300/90 bg-cyan-950/40 border border-cyan-800/40 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
