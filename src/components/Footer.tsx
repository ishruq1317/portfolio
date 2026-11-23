'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About & Education', href: '/about' },
    { label: 'Projects & Research', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="w-full border-t border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md py-8 z-10 text-zinc-400">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Brief Tagline */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <Link href="/" className="inline-flex items-center gap-2 group">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-base font-bold text-white tracking-tight group-hover:text-violet-400 transition-colors">
              Hasin Ishruq<span className="text-violet-500">.</span>
            </span>
          </Link>
          <p className="text-[11px] text-zinc-500">
            Final-year CSE at Daffodil International University • Savar, Dhaka, Bangladesh
          </p>
        </div>

        {/* Clean Horizontal Quick Navigation (Multi-Page Navigation) */}
        <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-5 text-xs">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-[11px] text-zinc-500 text-center md:text-right">
          © {currentYear} Hasin Ishruq. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
