'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Target, Zap } from 'lucide-react';
import { personalInfo, education } from '@/data/profile';

const aboutCards = [
  {
    icon: Shield,
    title: 'Defensive Security',
    description: 'Focused on blue team operations, threat detection, and security monitoring to protect critical assets.',
  },
  {
    icon: Target,
    title: 'SOC Operations',
    description: 'Experienced in alert triage, incident response, and analyzing security events for threat identification.',
  },
  {
    icon: Zap,
    title: 'Continuous Learning',
    description: 'Actively pursuing certifications and hands-on experience to stay ahead of evolving cyber threats.',
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg blur-xl opacity-50" />
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-lg p-8 hover:border-blue-500/50 transition-all">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                {personalInfo.summary}
              </p>
              <div className="border-t border-slate-700/50 pt-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{education.degree}</h3>
                <p className="text-slate-400">{education.institution}</p>
                <p className="text-slate-500 text-sm mt-1">{education.period}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-lg p-6 hover:border-blue-500/50 transition-all h-full">
                <card.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-slate-400">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
