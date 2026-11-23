'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Globe, Trophy } from 'lucide-react';

export default function EducationAwards() {
  const educationList = [
    {
      institution: 'Daffodil International University (DIU)',
      location: 'Savar, Dhaka, Bangladesh',
      degree: 'B.Sc. in Computer Science and Engineering (C.S.E)',
      timeline: 'Expected Graduation 2026',
      status: 'Final-year student',
      highlights: 'Department of Computer Science & Engineering. Recipient of Dean\'s List Award (2026).',
    },
    {
      institution: 'Savar Model College',
      location: 'Savar, Dhaka',
      degree: 'Higher Secondary Certificate (H.S.C)',
      timeline: '2021',
      status: 'Result: GPA 5.00 / 5.00',
      highlights: 'Group: Science. Perfect grade point average.',
    },
    {
      institution: 'Radio Colony Model School',
      location: 'Savar, Dhaka',
      degree: 'Secondary School Certificate (S.S.C)',
      timeline: '2019',
      status: 'Result: GPA 5.00 / 5.00',
      highlights: 'Group: Science. Perfect grade point average.',
    },
  ];

  const awardsList = [
    {
      title: "Dean's List Award",
      year: '2026',
      organization: 'Daffodil International University (DIU)',
      description:
        'Conferred for maintaining exceptional academic standing and exemplary performance in Computer Science & Engineering.',
      type: 'academic',
    },
    {
      title: 'Finalist (Top 50) – Unlock the Algorithm (UTA) Contest',
      year: 'Spring 2024',
      organization: 'DIU ACM Wing',
      description:
        'Competed and qualified among top student programmers university-wide in algorithmic problem solving, data structures, and competitive coding.',
      type: 'contest',
    },
    {
      title: 'Finalist (Top 50) – Take-Off Programming Contest',
      year: 'Spring 2023',
      organization: 'DIU Computer Programming Club',
      description:
        'Secured competitive placement in university-wide contest solving real-time implementation and algorithmic challenges.',
      type: 'contest',
    },
  ];

  return (
    <section id="education" className="w-full max-w-6xl mx-auto px-6 py-20 z-10">
      <div className="flex flex-col items-center md:items-start mb-12">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-[0.25em] mb-2">
          05. Academic Journey & Honors
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Education & Recognition
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-3 text-center md:text-left">
          Consistent academic excellence from secondary education through university engineering standing, alongside algorithmic contest distinctions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education Column */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
              <GraduationCap size={20} />
            </div>
            <h3 className="text-xl font-bold text-white">Education History</h3>
          </div>

          <div className="space-y-4">
            {educationList.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-zinc-800/80 relative"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-violet-400 font-medium">
                    {edu.timeline}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    {edu.status}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-1">
                  {edu.degree}
                </h4>
                <div className="text-sm font-medium text-zinc-300 mb-2">
                  {edu.institution}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {edu.highlights}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Honours & Awards Column */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Trophy size={20} />
            </div>
            <h3 className="text-xl font-bold text-white">Honours & Contests</h3>
          </div>

          <div className="space-y-4">
            {awardsList.map((award, idx) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-zinc-800/80 relative"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-cyan-400 font-medium">
                    {award.year}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {award.organization}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-2">
                  {award.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {award.description}
                </p>
              </motion.div>
            ))}

            {/* Languages Bento Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-5 rounded-2xl border border-zinc-800/80"
            >
              <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                <Globe size={15} className="text-pink-400" />
                Language Proficiencies
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="font-bold text-white mb-0.5">Bengali</div>
                  <div className="text-zinc-400">Native proficiency (Speaking, Reading, Writing)</div>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="font-bold text-white mb-0.5">English</div>
                  <div className="text-zinc-400">Fluent professional proficiency (Speaking, Reading, Writing)</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Academic & Technical Summary Table (Semantic HTML Table) */}
        <div className="mt-12 glass-card p-6 md:p-8 rounded-3xl border border-zinc-800/80 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Academic &amp; Technical Summary Table
            </h3>
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
              Formal Education &bull; Contests &bull; Research
            </span>
          </div>
          <p className="text-xs text-zinc-400 mb-6">
            Tabular breakdown of academic degrees, accredited institutions, timelines, and primary concentrations.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs md:text-sm border-collapse border border-zinc-800">
              <thead>
                <tr className="bg-zinc-900/90 text-zinc-300 border-b border-zinc-800">
                  <th scope="col" className="p-3.5 font-semibold border-r border-zinc-800 text-white">Qualification / Domain</th>
                  <th scope="col" className="p-3.5 font-semibold border-r border-zinc-800 text-white">Institution / Stack</th>
                  <th scope="col" className="p-3.5 font-semibold border-r border-zinc-800 text-white">Period / Status</th>
                  <th scope="col" className="p-3.5 font-semibold text-white">Core Focus &amp; Achievement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/70 text-zinc-300">
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="p-3.5 font-medium text-white border-r border-zinc-800">B.Sc. in Computer Science &amp; Engineering</td>
                  <td className="p-3.5 border-r border-zinc-800">Daffodil International University (DIU)</td>
                  <td className="p-3.5 border-r border-zinc-800 text-cyan-400 font-mono">2023 &ndash; Present</td>
                  <td className="p-3.5">CGPA 3.88 / 4.00, Medical AI &amp; Full-Stack Systems</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="p-3.5 font-medium text-white border-r border-zinc-800">Higher Secondary Certificate (HSC)</td>
                  <td className="p-3.5 border-r border-zinc-800">Science Group (Savar Model College)</td>
                  <td className="p-3.5 border-r border-zinc-800 text-emerald-400 font-mono">Completed (2021)</td>
                  <td className="p-3.5">Distinction in Mathematics &amp; Physics (GPA 5.00 / 5.00)</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="p-3.5 font-medium text-white border-r border-zinc-800">Secondary School Certificate (SSC)</td>
                  <td className="p-3.5 border-r border-zinc-800">Science Group (Radio Colony Model School)</td>
                  <td className="p-3.5 border-r border-zinc-800 text-emerald-400 font-mono">Completed (2019)</td>
                  <td className="p-3.5">Foundation in Analytical Sciences (GPA 5.00 / 5.00)</td>
                </tr>
                <tr className="hover:bg-zinc-900/40 transition-colors">
                  <td className="p-3.5 font-medium text-white border-r border-zinc-800">Competitive Programming &amp; Hackathons</td>
                  <td className="p-3.5 border-r border-zinc-800">ICPC / Intra-University Contests</td>
                  <td className="p-3.5 border-r border-zinc-800 text-violet-400 font-mono">Active</td>
                  <td className="p-3.5">Algorithmic Problem Solving &amp; System Design</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
