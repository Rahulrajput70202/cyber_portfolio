'use client';

import { motion } from 'framer-motion';
import { Shield, Mail, Phone, Linkedin, ShieldAlert, FolderLock, Award, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo, socMetrics } from '@/data/profile';

const iconMap: Record<string, any> = {
  'shield-alert': ShieldAlert,
  'folder-lock': FolderLock,
  'award': Award,
  'activity': Activity,
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950" />

      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
            >
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">Security Operations Center</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              {personalInfo.name}
            </h1>

            <p className="text-2xl md:text-3xl text-slate-300 mb-4 font-light">
              {personalInfo.title}
            </p>

            <p className="text-lg text-slate-400 mb-8">
              {personalInfo.location}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <a href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-blue-500/30 hover:bg-blue-500/10"
              >
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {socMetrics.map((metric, index) => {
              const Icon = iconMap[metric.icon];
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all opacity-50" />
                  <div className="relative bg-slate-900/50 dark:bg-slate-950/50 backdrop-blur-xl border border-slate-700/50 rounded-lg p-6 hover:border-blue-500/50 transition-all">
                    <Icon className="w-8 h-8 text-blue-400 mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-sm text-slate-400">{metric.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-blue-400/30 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-blue-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
