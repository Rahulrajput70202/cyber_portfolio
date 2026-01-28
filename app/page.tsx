'use client';

import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { CertificationsSection } from '@/components/sections/certifications-section';
import { ResumeSection } from '@/components/sections/resume-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ResumeSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
