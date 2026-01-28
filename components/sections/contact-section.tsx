'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/profile';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: personalInfo.linkedin,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.location,
    href: null,
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Available for SOC Analyst and Cybersecurity Analyst internship opportunities.
            Let's connect and discuss how I can contribute to your security operations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg blur-xl opacity-50 group-hover:opacity-100 transition-all" />
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-lg p-6 hover:border-blue-500/50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                      <method.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-500 mb-1">{method.label}</p>
                      {method.href ? (
                        <a
                          href={method.href}
                          target={method.label === 'LinkedIn' ? '_blank' : undefined}
                          rel={method.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                          className="text-white hover:text-blue-400 transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-white">{method.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8"
            >
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="w-4 h-4 mr-2" />
                Send Me an Email
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
