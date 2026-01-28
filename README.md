
# cyber_portfolio

# SOC Analyst Portfolio - Rahul Bainade

A professional, high-end cybersecurity portfolio website designed for SOC Analysts and Blue Team professionals. This portfolio showcases defensive security expertise with an enterprise-grade, SOC dashboard-inspired UI.

## Overview

This portfolio presents Rahul Rajput as a Cybersecurity Analyst specializing in:
- Security Operations Center (SOC) operations
- Alert triage and threat detection
- Network traffic analysis
- Incident response
- Blue Team defensive strategies

## Features

- **Enterprise-Grade Design**: Dark SOC dashboard aesthetic with blue/cyan color scheme
- **Smooth Animations**: Professional micro-interactions using Framer Motion
- **Glassmorphism UI**: Modern card designs with backdrop blur effects
- **Responsive**: Fully optimized for all device sizes
- **Accessible**: WCAG compliant with proper ARIA labels
- **Dark/Light Mode**: Theme toggle with system preference support
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Performance**: Optimized for Lighthouse scores ≥ 90

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN/UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy with default settings

### Netlify

1. Push your code to GitHub
2. Import the project in [Netlify](https://netlify.com)
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## Customization

### Update Personal Information

Edit `/data/profile.ts` to update:
- Personal details
- Education
- Skills
- Projects
- Certifications
- Contact information

### Modify Sections

All sections are modular components located in `/components/sections/`:
- `hero-section.tsx` - Landing hero with metrics
- `about-section.tsx` - Professional summary
- `skills-section.tsx` - Technical skills dashboard
- `projects-section.tsx` - Security project case studies
- `certifications-section.tsx` - Certifications list
- `contact-section.tsx` - Contact information

### Styling

- Theme colors: `app/globals.css`
- Component styles: Tailwind utility classes
- Animations: Framer Motion variants in component files

## Sections

1. **Hero** - Introduction with animated SOC metrics
2. **About** - Professional summary and education
3. **Skills** - Technical capabilities in dashboard-style panels
4. **Projects** - Security-focused project case studies
5. **Certifications** - Professional certifications and training
6. **Contact** - Professional contact methods

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript type checking
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Respects `prefers-reduced-motion`

## Contact

- **Email**: rahulrajput79800@gmail.com
- **Phone**: 7020495451
- **LinkedIn**: [Rahul Rajput](https://linkedin.com/in/rahul-bainade-919985327)

---

**Built for SOC Analysts, by Security Professionals**

*Defending Digital Assets • Monitoring Threats • Securing Tomorrow*
e60bab4 (Initial commit - SOC analyst portfolio)
