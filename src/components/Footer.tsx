'use client';

import { Download } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md pt-16 pb-12 z-10 text-zinc-400">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <Link href="#home" className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span className="text-xl font-bold text-white tracking-tight">
                Hasin Ishruq<span className="text-violet-500">.</span>
              </span>
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mb-4">
              Final-year Computer Science and Engineering student at Daffodil International University. 
              Engineering scalable distributed web systems and conducting deep learning medical image analysis research.
            </p>
            <div className="text-xs text-zinc-500">
              📍 Savar, Dhaka-1343, Bangladesh
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-3 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-violet-400 transition-colors">
                  01. Background & Philosophy
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-cyan-400 transition-colors">
                  02. Medical AI Research
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-pink-400 transition-colors">
                  03. Selected Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-violet-400 transition-colors">
                  04. Skills & Tech Stack
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-400 transition-colors">
                  05. Education & Honors
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-pink-400 transition-colors">
                  06. Direct Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Actions */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-3 font-semibold">
              Curriculum Vitae
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Download the complete 2-page academic and software engineering CV.
            </p>
            <a
              href="/Hasin_Ishruq_CV.pdf"
              download="Hasin_Ishruq_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-violet-600/20 text-violet-300 border border-violet-500/30 hover:bg-violet-600 hover:text-white transition-all shadow-sm shadow-violet-600/20"
            >
              <Download size={14} />
              Download CV (PDF)
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} Hasin Ishruq. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Engineered with Next.js 16, Tailwind CSS & Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
}
