'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { certificates } from '@/data/certificates';
import { CertificateCard } from '@/components/certificate-card';

export function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {certificates.map((cert, index) => (
              <CertificateCard
                key={cert.title}
                certificate={cert}
                animationDelay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
