import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Hasin Ishruq",
  description:
    "Get in touch with Hasin Ishruq for software engineering roles, research collaboration, or project inquiries.",
};

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Page Header Banner */}
      <section className="w-full max-w-6xl mx-auto px-6 pt-32 pb-4 text-center md:text-left">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-zinc-500">
            <li>
              <Link href="/" className="hover:text-zinc-300 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-cyan-400 font-semibold">Contact</li>
          </ol>
        </nav>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
          Contact &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Collaboration</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl">
          Whether you have an engineering role opening, a software project to develop, or a research inquiry in medical AI, feel free to send a message or connect directly.
        </p>
      </section>

      {/* Main Contact Section */}
      <ContactSection />
    </div>
  );
}
