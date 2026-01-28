'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Lock, CheckCircle2, Github } from 'lucide-react';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';

const iconMap: Record<string, any> = {
  'Privacy & Mobile Security': Shield,
  'Data Protection & Access Control': Lock,
};

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Security Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = iconMap[project.category];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-lg p-8 hover:border-blue-500/50 transition-all h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-sm text-blue-400 mb-3">{project.category}</p>
                      <p className="text-slate-400 text-sm">{project.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {project.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + detailIndex * 0.1, duration: 0.4 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{detail}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-700/50">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.githubUrl && (
                      <Button
                        asChild
                        variant="outline"
                        size="icon"
                        className="shrink-0 border-blue-500/40 hover:bg-blue-500/10"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
