export type Project = {
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  category: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    title: 'Privacy Leak Analyzer for Android Applications',
    description: 'Defensive security analysis tool for Android APK assessment',
    details: [
      'Analyzed static APK components for risky permissions & insecure APIs',
      'Implemented risk scoring and visualization dashboard',
      'Assessed privacy risks and provided defensive recommendations',
      'Detected potential data leakage patterns in applications',
    ],
    technologies: ['Python', 'Androguard', 'Flask', 'Security Analysis'],
    category: 'Privacy & Mobile Security',
    githubUrl: 'https://github.com/Rahulrajput70202/-Privacy-Leak-Analyzer-',
  },
  {
    title: 'Automated Backup System with Security Controls',
    description: 'Secure data protection system with multi-layered authentication',
    details: [
      'Implemented secure folder backup mechanisms',
      'Integrated MFA (Multi-Factor Authentication) for access control',
      'Monitored backup operations with email-based security alerts',
      'Investigated and logged security events for audit trails',
    ],
    technologies: ['Python', 'Tkinter', 'MFA', 'Security Automation'],
    category: 'Data Protection & Access Control',
    githubUrl: 'https://github.com/Rahulrajput70202/Auto-backup',
  },
];

