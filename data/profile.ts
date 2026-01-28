export const personalInfo = {
  name: "Rahul Rajput",
  title: "Cybersecurity Analyst | SOC & Blue Team",
  location: "Chh. Sambhajinagar, India",
  email: "rahulrajput79800@gmail.com",
  phone: "7020495451",
  linkedin: "https://linkedin.com/in/rahul-bainade-919985327",
  summary: "Cybersecurity-focused undergraduate with hands-on experience in developing and analyzing security-oriented tools and applications. Experienced in Android privacy leak analysis, secure automation systems, and threat detection concepts. Familiar with SOC fundamentals, IDS concepts, network traffic analysis, and security testing tools. Seeking a Cybersecurity / SOC Analyst Intern role.",
};

export const education = {
  degree: "Bachelor of Computer Science",
  institution: "Dr. G. Y. Pathrikar College of CS & IT, MGMU",
  period: "2023 – 2027",
};

export const skills = {
  socAndBlueTeam: [
    "Alert Triage",
    "IDS Concepts",
    "Threat Detection",
    "Security Monitoring",
    "Incident Response",
  ],
  networking: [
    "TCP/IP",
    "DNS",
    "HTTP/HTTPS",
    "Packet Analysis",
    "Network Traffic Analysis",
  ],
  tools: [
    "Wireshark",
    "Kali Linux",
    "Nmap",
    "Burp Suite",
    "Metasploit",
    "Androguard",
  ],
  programming: [
    "Python",
    "Flask",
    "Tkinter",
    "Java (Basic)",
  ],
};

export const projects = [
  {
    title: "Privacy Leak Analyzer for Android Applications",
    description: "Defensive security analysis tool for Android APK assessment",
    details: [
      "Analyzed static APK components for risky permissions & insecure APIs",
      "Implemented risk scoring and visualization dashboard",
      "Assessed privacy risks and provided defensive recommendations",
      "Detected potential data leakage patterns in applications",
    ],
    technologies: ["Python", "Androguard", "Flask", "Security Analysis"],
    category: "Privacy & Mobile Security",
  },
  {
    title: "Automated Backup System with Security Controls",
    description: "Secure data protection system with multi-layered authentication",
    details: [
      "Implemented secure folder backup mechanisms",
      "Integrated MFA (Multi-Factor Authentication) for access control",
      "Monitored backup operations with email-based security alerts",
      "Investigated and logged security events for audit trails",
    ],
    technologies: ["Python", "Tkinter", "MFA", "Security Automation"],
    category: "Data Protection & Access Control",
  },
];

export const certifications = [
  {
    title: "IIRS ISRO – Geo-data Sharing and Cyber Security",
    issuer: "IIRS ISRO",
    year: "2024",
  },
  {
    title: "Cybersecurity Career Essentials",
    issuer: "Microsoft",
    year: "2024",
  },
  {
    title: "Cyber Security: From Beginner to Expert",
    issuer: "Udemy",
    year: "2024",
  },
  {
    title: "Security Operations and the Defense Analyst",
    issuer: "Splunk",
    year: "2024",
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Forage",
    year: "2024",
  },
];

export const socMetrics = [
  { label: "Alerts Analyzed", value: "500+", icon: "shield-alert" },
  { label: "Security Projects", value: "2", icon: "folder-lock" },
  { label: "Certifications", value: "5", icon: "award" },
  { label: "Uptime Focus", value: "99.9%", icon: "activity" },
];
