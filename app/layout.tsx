import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rahul Rajput | SOC Analyst & Cybersecurity Professional',
  description: 'Cybersecurity-focused professional with expertise in SOC operations, threat detection, and security monitoring. Experienced in alert triage, IDS concepts, and network traffic analysis.',
  keywords: ['SOC Analyst', 'Cybersecurity', 'Blue Team', 'Security Operations', 'Threat Detection', 'Incident Response'],
  authors: [{ name: 'Rahul Rajput' }],
  openGraph: {
    title: 'Rahul Rajput | SOC Analyst & Cybersecurity Professional',
    description: 'Cybersecurity-focused professional specializing in SOC operations and defensive security.',
    type: 'website',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Rajput | SOC Analyst',
    description: 'Cybersecurity-focused professional specializing in SOC operations and defensive security.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
