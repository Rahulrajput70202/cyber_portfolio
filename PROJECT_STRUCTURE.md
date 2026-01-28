# Project Structure

This document explains the organization and architecture of the SOC Analyst Portfolio.

## Directory Structure

```
soc-analyst-portfolio/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata & theme provider
│   ├── page.tsx                 # Main page with all sections
│   └── globals.css              # Global styles and CSS variables
│
├── components/                   # React components
│   ├── sections/                # Page sections
│   │   ├── hero-section.tsx    # Landing hero with animated metrics
│   │   ├── about-section.tsx   # Professional summary & education
│   │   ├── skills-section.tsx  # Technical skills dashboard
│   │   ├── projects-section.tsx # Security project case studies
│   │   ├── certifications-section.tsx # Certifications list
│   │   └── contact-section.tsx  # Contact information & CTA
│   │
│   ├── ui/                      # ShadCN UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── [other UI components]
│   │
│   ├── navigation.tsx           # Fixed navigation bar
│   ├── footer.tsx              # Footer with tagline
│   ├── theme-provider.tsx      # Theme context provider
│   └── theme-toggle.tsx        # Dark/Light mode toggle
│
├── data/                        # Content data (easy to edit)
│   └── profile.ts              # All personal data, skills, projects, etc.
│
├── hooks/                       # Custom React hooks
│   └── use-toast.ts            # Toast notification hook
│
├── lib/                         # Utility functions
│   └── utils.ts                # Helper functions (cn, etc.)
│
├── public/                      # Static assets
│   └── grid.svg                # Background grid pattern
│
├── .env.example                 # Environment variables template
├── DEPLOYMENT.md               # Deployment guide
├── PROJECT_STRUCTURE.md        # This file
├── README.md                   # Main documentation
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── next.config.js              # Next.js configuration
└── netlify.toml                # Netlify deployment config
```

## Key Files to Edit

### Content Updates

**`/data/profile.ts`** - Single source of truth for all content
- Personal information
- Professional summary
- Education details
- Skills (SOC, Networking, Tools, Programming)
- Projects with detailed descriptions
- Certifications
- SOC metrics

### Styling

**`/app/globals.css`** - Global styles
- CSS custom properties (color scheme)
- Dark/light theme variables
- Responsive design utilities
- Accessibility features (reduced motion)

**`/tailwind.config.ts`** - Tailwind configuration
- Color palette
- Typography
- Spacing
- Breakpoints

### Components

**Section Components** (`/components/sections/`)

Each section is a self-contained module:

1. **Hero Section**
   - Animated entrance
   - SOC metrics cards
   - Call-to-action buttons
   - Scroll indicator

2. **About Section**
   - Professional summary
   - Education card
   - Three value proposition cards

3. **Skills Section**
   - Four skill categories
   - Dashboard-style panels
   - Animated skill lists

4. **Projects Section**
   - Security project case studies
   - Defensive framing
   - Technology tags
   - Detailed achievements

5. **Certifications Section**
   - Professional certifications
   - Issuer and year
   - Hover interactions

6. **Contact Section**
   - Contact methods (Email, Phone, LinkedIn, Location)
   - Professional CTA
   - Glassmorphism cards

## Design System

### Color Palette

**Primary Colors (Blue/Cyan)**
- Blue 400: `#60A5FA` - Primary accents
- Blue 500: `#3B82F6` - Interactive elements
- Blue 600: `#2563EB` - Button backgrounds
- Cyan 400: `#22D3EE` - Secondary accents
- Cyan 500: `#06B6D4` - Highlights

**Neutral Colors (Slate)**
- Slate 900: `#0F172A` - Dark backgrounds
- Slate 950: `#020617` - Darker backgrounds
- Slate 700: `#334155` - Borders
- Slate 400: `#94A3B8` - Secondary text
- Slate 300: `#CBD5E1` - Primary text on dark

### Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**:
  - H1: 3rem-4.5rem (48px-72px)
  - H2: 2.25rem-3rem (36px-48px)
  - H3: 1.25rem-1.5rem (20px-24px)
- **Body**: 1rem (16px)
- **Small**: 0.875rem (14px)

### Spacing

8px base unit system:
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)
- 2xl: 4rem (64px)

## Animation Strategy

### Framer Motion Usage

**Entry Animations**
```typescript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

**Hover Interactions**
```typescript
whileHover={{ y: -5, transition: { duration: 0.2 } }}
```

**Scroll-Based Reveals**
```typescript
const isInView = useInView(ref, { once: true, margin: '-100px' });
```

### Performance Considerations

- Animations respect `prefers-reduced-motion`
- GPU-accelerated properties (transform, opacity)
- Stagger effects for lists
- Once-only triggers for scroll animations

## Technical Details

### Next.js Configuration

- **App Router**: Using Next.js 13+ App Router
- **TypeScript**: Strict mode enabled
- **ESLint**: Code quality checks
- **Image Optimization**: Next.js Image component

### Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast compliance (WCAG AA)
- Screen reader friendly
- Motion reduction support

### Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Dependencies

### Core
- `next`: Next.js framework
- `react`: React library
- `typescript`: Type safety

### UI & Styling
- `tailwindcss`: Utility-first CSS
- `framer-motion`: Animation library
- `@radix-ui/*`: Headless UI components
- `lucide-react`: Icon library
- `next-themes`: Theme management

### Utilities
- `class-variance-authority`: Component variants
- `clsx`: Conditional classes
- `tailwind-merge`: Merge Tailwind classes

## Performance Metrics

### Target Lighthouse Scores
- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: ≥ 95

### Optimization Techniques
- Static generation (SSG)
- Automatic code splitting
- Optimized fonts (Inter from Google Fonts)
- Minimal JavaScript bundle
- CSS-in-JS with zero runtime (Tailwind)
- Lazy loading for animations

## Content Management

### Easy Content Updates

All content is centralized in `/data/profile.ts` for easy editing without touching component code.

**To update your information:**

1. Edit personal details:
```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  // ...
}
```

2. Add/edit skills:
```typescript
export const skills = {
  socAndBlueTeam: ["Skill 1", "Skill 2"],
  // ...
}
```

3. Add/edit projects:
```typescript
export const projects = [
  {
    title: "Project Name",
    description: "Brief description",
    // ...
  }
]
```

### Adding New Sections

1. Create component in `/components/sections/`
2. Import in `/app/page.tsx`
3. Add navigation link in `/components/navigation.tsx`
4. Follow existing patterns for animations and styling

## Learning Resources

### Technologies Used

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Radix UI Documentation](https://www.radix-ui.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Design Inspiration

- SOC Dashboards: Splunk, Elastic SIEM, Microsoft Sentinel
- Design Systems: GitHub, Stripe, Vercel
- Animation Patterns: Apple, Stripe, Linear

---

**Questions or need help?** Check the README.md for setup instructions and DEPLOYMENT.md for deployment guides.
