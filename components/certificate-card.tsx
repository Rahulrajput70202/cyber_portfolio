'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import type { Certificate } from '@/data/certificates';

type CertificateCardProps = {
  certificate: Certificate;
  animationDelay?: number;
};

export function CertificateCard({ certificate, animationDelay = 0 }: CertificateCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSingleClick = () => {
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }

    clickTimeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, 200);
  };

  const handleDoubleClick = () => {
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }

    if (certificate.linkedinUrl) {
      window.open(certificate.linkedinUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: animationDelay, duration: 0.6 }}
        whileHover={{ x: 5, transition: { duration: 0.2 } }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-all" />
        <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-lg p-6 hover:border-blue-500/50 transition-all">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
              <Award className="w-5 h-5 text-blue-400" />
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-1">{certificate.title}</h3>
              <div className="flex items-center gap-3 text-sm mb-3">
                <span className="text-blue-400">{certificate.issuer}</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400">{certificate.year}</span>
              </div>

              <button
                type="button"
                onClick={handleSingleClick}
                onDoubleClick={handleDoubleClick}
                className="mt-2 inline-flex overflow-hidden rounded-md border border-slate-700/70 bg-slate-900/70 hover:border-blue-500/70 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:ring-offset-2 focus:ring-offset-slate-950 transition-transform duration-200 cursor-pointer group/image"
              >
                <div className="relative h-40 w-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/10 opacity-0 group-hover/image:opacity-100 transition-opacity" />
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="h-full w-full object-cover transform transition-transform duration-200 group-hover/image:scale-105"
                  />
                </div>
              </button>

              <p className="mt-3 text-xs text-slate-500">
                Single click to preview • Double click to view LinkedIn certificate post
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl bg-slate-950 border-slate-800">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white">{certificate.title}</h3>
              <p className="text-sm text-slate-400">
                {certificate.issuer} • {certificate.year}
              </p>
            </div>
            <div className="relative w-full overflow-hidden rounded-lg border border-slate-800 bg-slate-900">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-auto object-contain max-h-[70vh]"
              />
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}

