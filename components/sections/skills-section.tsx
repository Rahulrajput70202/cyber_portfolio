'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Network, Wrench, Code } from 'lucide-react';
import { skills } from '@/data/profile';

const skillCategories = [
  {
    title: 'SOC & Blue Team',
    icon: Shield,
    skills: skills.socAndBlueTeam,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Networking',
    icon: Network,
    skills: skills.networking,
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'Security Tools',
    icon: Wrench,
    skills: skills.tools,
    gradient: 'from-teal-500 to-blue-500',
  },
  {
    title: 'Programming',
    icon: Code,
    skills: skills.programming,
    gradient: 'from-blue-500 to-indigo-500',
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg blur-xl opacity-50 group-hover:opacity-100 transition-all" />
              <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-lg p-6 hover:border-blue-500/50 transition-all h-full">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.gradient} bg-opacity-10 mb-4`}>
                  <category.icon className="w-6 h-6 text-blue-400" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span className="text-slate-300 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
