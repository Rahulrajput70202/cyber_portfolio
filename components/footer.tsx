'use client';

import { Shield } from 'lucide-react';
import { personalInfo } from '@/data/profile';

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-slate-800">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-white font-semibold">{personalInfo.name}</span>
          </div>

          <div className="text-center">
            <p className="text-slate-400 text-sm">
              Defending Digital Assets • Monitoring Threats • Securing Tomorrow
            </p>
          </div>

          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
