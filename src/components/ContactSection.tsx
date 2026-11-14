'use client';

import React, { useState, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [copiedFormatted, setCopiedFormatted] = useState(false);

  // Mouse spotlight for cards
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  const leftMouseX = useMotionValue(0);
  const leftMouseY = useMotionValue(0);
  const rightMouseX = useMotionValue(0);
  const rightMouseY = useMotionValue(0);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleCopyFormattedMessage = () => {
    const formatted = `To: nabil12e4@gmail.com\nSubject: ${formData.subject || `Inquiry from ${formData.name}`}\n\nFrom: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(formatted);
    setCopiedFormatted(true);
    setTimeout(() => setCopiedFormatted(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setFormStatus('submitting');

    setTimeout(() => {
      setFormStatus('submitted');
    }, 600);
  };

  const subjectEncoded = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
  const bodyEncoded = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  );
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nabil12e4@gmail.com&su=${subjectEncoded}&body=${bodyEncoded}`;
  const mailtoUrl = `mailto:nabil12e4@gmail.com?subject=${subjectEncoded}&body=${bodyEncoded}`;

  const leftRadialBg = useMotionTemplate`radial-gradient(450px circle at ${leftMouseX}px ${leftMouseY}px, rgba(139, 92, 246, 0.12), rgba(6, 182, 212, 0.04) 50%, transparent 80%)`;
  const rightRadialBg = useMotionTemplate`radial-gradient(450px circle at ${rightMouseX}px ${rightMouseY}px, rgba(6, 182, 212, 0.12), rgba(139, 92, 246, 0.04) 50%, transparent 80%)`;

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-6 py-24 z-10">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Get in Touch
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-xl">
          Whether you have an engineering role opening, a software project to develop, or a research inquiry in medical AI, I&apos;d welcome hearing from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info & Details (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-5"
        >
          <div
            ref={leftCardRef}
            onMouseMove={(e) => {
              if (!leftCardRef.current) return;
              const rect = leftCardRef.current.getBoundingClientRect();
              leftMouseX.set(e.clientX - rect.left);
              leftMouseY.set(e.clientY - rect.top);
            }}
            className="glass-card p-7 rounded-3xl border border-zinc-800/80 relative overflow-hidden group"
          >
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
              style={{ background: leftRadialBg }}
            />

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                Reach out directly via email, phone, or send a direct message below.
              </p>

              <div className="space-y-3.5">
                {/* Primary Email */}
                <div className="flex items-start justify-between p-3.5 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-violet-500/10 text-violet-400 mt-0.5">
                      <Mail size={16} />
                    </div>
                    <div>
                      <div className="text-[11px] text-zinc-400 font-mono">Primary Email</div>
                      <a
                        href="mailto:nabil12e4@gmail.com"
                        className="text-sm font-medium text-white hover:text-violet-400 transition-colors"
                      >
                        nabil12e4@gmail.com
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy('nabil12e4@gmail.com', 'primary')}
                    className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                    title="Copy primary email"
                  >
                    {copiedType === 'primary' ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                  </button>
                </div>

                {/* Academic Email */}
                <div className="flex items-start justify-between p-3.5 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 mt-0.5">
                      <Mail size={16} />
                    </div>
                    <div>
                      <div className="text-[11px] text-zinc-400 font-mono">Academic Email (DIU)</div>
                      <a
                        href="mailto:ishruq23105101317@diu.edu.bd"
                        className="text-sm font-medium text-white hover:text-cyan-400 transition-colors break-all"
                      >
                        ishruq23105101317@diu.edu.bd
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy('ishruq23105101317@diu.edu.bd', 'academic')}
                    className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                    title="Copy academic email"
                  >
                    {copiedType === 'academic' ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-start justify-between p-3.5 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 mt-0.5">
                      <Phone size={16} />
                    </div>
                    <div>
                      <div className="text-[11px] text-zinc-400 font-mono">Cell / Mobile</div>
                      <a
                        href="tel:01405080369"
                        className="text-sm font-medium text-white hover:text-emerald-400 transition-colors"
                      >
                        +880 1405-080369
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy('01405080369', 'phone')}
                    className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                    title="Copy phone number"
                  >
                    {copiedType === 'phone' ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-900/70 border border-zinc-800">
                  <div className="p-2 rounded-xl bg-pink-500/10 text-pink-400 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-[11px] text-zinc-400 font-mono">Mailing Address</div>
                    <div className="text-xs text-zinc-300 leading-snug">
                      A/1, Nayabari, Radio Colony, P.O: BPATC, Savar, Dhaka-1343, Bangladesh
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Email Form (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <div
            ref={rightCardRef}
            onMouseMove={(e) => {
              if (!rightCardRef.current) return;
              const rect = rightCardRef.current.getBoundingClientRect();
              rightMouseX.set(e.clientX - rect.left);
              rightMouseY.set(e.clientY - rect.top);
            }}
            className="glass-card p-7 sm:p-9 rounded-3xl border border-zinc-800/80 relative overflow-hidden group"
          >
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
              style={{ background: rightRadialBg }}
            />

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-1">
                Send an Email Message
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Fill out this form to connect. Your message will be formatted for instant delivery to my direct inbox.
              </p>

              {formStatus === 'submitted' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-7 rounded-2xl bg-emerald-950/25 border border-emerald-500/30 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Message Ready for Delivery!</h4>
                  <p className="text-xs text-zinc-300 max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Choose your preferred method below to dispatch your message directly to <span className="text-violet-400 font-mono">nabil12e4@gmail.com</span>:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-left">
                    {/* Send via Gmail Web */}
                    <a
                      href={gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold shadow-lg shadow-violet-600/30 transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <Mail size={15} />
                        <span>Send via Gmail Web</span>
                      </div>
                      <ExternalLink size={14} />
                    </a>

                    {/* Send via Default Mail App */}
                    <a
                      href={mailtoUrl}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white text-xs font-semibold border border-zinc-700 transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <Mail size={15} />
                        <span>Open Mail App</span>
                      </div>
                      <ExternalLink size={14} />
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-zinc-800">
                    <button
                      onClick={handleCopyFormattedMessage}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-xs font-medium text-zinc-300 border border-zinc-700 transition-colors"
                    >
                      {copiedFormatted ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      <span>{copiedFormatted ? 'Copied to Clipboard!' : 'Copy Formatted Message'}</span>
                    </button>

                    <button
                      onClick={() => {
                        setFormData({ name: '', email: '', subject: '', message: '' });
                        setFormStatus('idle');
                      }}
                      className="px-4 py-2 rounded-xl bg-transparent hover:bg-zinc-800/60 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                    >
                      Compose Another
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formStatus === 'error' && (
                    <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Name <span className="text-violet-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Email <span className="text-violet-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Project Inquiry / Job Opportunity / Research Discussion"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Message <span className="text-violet-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Briefly describe your project, timeline, or engineering opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 text-white font-semibold text-sm shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {formStatus === 'submitting' ? (
                      <span>Preparing Message...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Direct Email</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
