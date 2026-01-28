'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Download, Eye } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function ResumeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="resume" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Resume
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg blur-xl opacity-50 group-hover:opacity-100 transition-all" />
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-lg p-8 hover:border-blue-500/50 transition-all">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                    <FileText className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">SOC Analyst Resume</h3>
                    <p className="text-slate-300 text-sm md:text-base max-w-xl">
                      Focused on Security Operations Center workflows, alert triage, incident response,
                      and blue team practices. Highlights hands-on experience with security tooling,
                      threat detection, and defensive security projects tailored for SOC Analyst roles.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <Button
                    asChild
                    className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                  >
                    <a href="/resume.pdf" download>
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="border-blue-500/30 hover:bg-blue-500/10 w-full sm:w-auto"
                  >
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

