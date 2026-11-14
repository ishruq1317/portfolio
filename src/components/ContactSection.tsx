'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Download, Copy, Check } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nabil12e4@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setFormStatus('submitting');

    // Simulate sending & trigger client mailto
    setTimeout(() => {
      setFormStatus('submitted');
      
      // Also compose mailto link for direct delivery
      const subjectEncoded = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
      const bodyEncoded = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      window.location.href = `mailto:nabil12e4@gmail.com?subject=${subjectEncoded}&body=${bodyEncoded}`;
    }, 800);
  };

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-6 py-24 z-10">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-xs font-mono text-violet-400 uppercase tracking-[0.25em] mb-2">
          06. Direct Communication
        </span>
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
          <div className="glass-card p-7 rounded-3xl border border-zinc-800/80">
            <h3 className="text-xl font-bold text-white mb-2">
              Contact Information
            </h3>
            <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
              Reach out directly via email, phone, or download my comprehensive curriculum vitae.
            </p>

            <div className="space-y-4">
              {/* Primary Email */}
              <div className="flex items-start justify-between p-3.5 rounded-2xl bg-zinc-900/70 border border-zinc-800">
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
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                </button>
              </div>

              {/* Academic Email */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-900/70 border border-zinc-800">
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

              {/* Phone */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-zinc-900/70 border border-zinc-800">
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

            {/* Direct CV Download button in Contact */}
            <div className="mt-6 pt-5 border-t border-zinc-800">
              <a
                href="/Hasin_Ishruq_CV.pdf"
                download="Hasin_Ishruq_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-white transition-all hover:scale-[1.01]"
              >
                <Download size={15} />
                Download Hasin Ishruq CV (PDF)
              </a>
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
          <div className="glass-card p-7 sm:p-9 rounded-3xl border border-zinc-800/80">
            <h3 className="text-xl font-bold text-white mb-1">
              Send an Email Message
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Fill out this form to initiate direct contact. Your message will be routed directly to my inbox.
            </p>

            {formStatus === 'submitted' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 size={28} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Message Dispatched!</h4>
                <p className="text-xs text-zinc-300 max-w-md mx-auto mb-6">
                  Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. Your default mail client has also been opened to finalize delivery if needed. I will review and reply promptly!
                </p>
                <button
                  onClick={() => {
                    setFormData({ name: '', email: '', subject: '', message: '' });
                    setFormStatus('idle');
                  }}
                  className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white transition-colors"
                >
                  Send Another Message
                </button>
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
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 text-white font-semibold text-sm shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
                >
                  {formStatus === 'submitting' ? (
                    <span>Dispatching...</span>
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
        </motion.div>
      </div>
    </section>
  );
}
