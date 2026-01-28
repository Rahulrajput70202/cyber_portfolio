# Deployment Guide

This guide covers deploying your SOC Analyst Portfolio to various hosting platforms.

## Quick Deploy

### Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications with zero configuration.

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: SOC Analyst Portfolio"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

   Vercel will automatically:
   - Detect Next.js configuration
   - Install dependencies
   - Build your project
   - Deploy to a production URL

3. **Custom Domain (Optional)**
   - Go to your project settings in Vercel
   - Click "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

### Netlify

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Add Netlify Plugin**

   The project already includes `@netlify/plugin-nextjs` in package.json.

## Build Configuration

### Environment Variables

No environment variables are required for the basic deployment.

### Build Commands

- **Development:** `npm run dev`
- **Production Build:** `npm run build`
- **Production Start:** `npm run start`
- **Type Check:** `npm run typecheck`

## Domain Setup

### Custom Domain Configuration

1. **Purchase a Domain** (optional)
   - Namecheap, Google Domains, or Cloudflare

2. **Configure DNS**

   For Vercel:
   ```
   A Record: @ → 76.76.21.21
   CNAME: www → cname.vercel-dns.com
   ```

   For Netlify:
   ```
   A Record: @ → 75.2.60.5
   CNAME: www → <your-site-name>.netlify.app
   ```

3. **SSL Certificate**
   - Both Vercel and Netlify provide free SSL certificates automatically

## Pre-Deployment Checklist

- [x] Run `npm run build` successfully
- [x] Check for TypeScript errors: `npm run typecheck`
- [x] Verify responsive design on mobile/tablet/desktop
- [x] Test dark/light mode toggle
- [x] Verify all links work correctly
- [x] Check accessibility with browser dev tools
- [x] Test on different browsers

## Lighthouse Audit

Run a Lighthouse audit after deployment:

1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Run audit for all categories

Target scores: All categories ≥ 90

## Continuous Deployment

Both Vercel and Netlify support automatic deployments:

1. **Automatic Deployments**
   - Every push to `main` branch triggers a new deployment
   - Preview deployments for pull requests

2. **Deployment Protections**
   - Set up branch protection rules in GitHub

## Troubleshooting

### Build Failures

**TypeScript errors**
```bash
npm run typecheck
```

**Missing dependencies**
```bash
npm install
npm run build
```

### Runtime Issues

**404 on page refresh**
- This shouldn't happen with Next.js on Vercel/Netlify
- Check routing configuration if using custom server

**Images not loading**
- Check image paths are correct
- Verify images are in the `public` folder

### Performance Issues

**Slow initial load**
- Check bundle size: `npm run build`
- Verify Framer Motion is properly imported

**Animations janky**
- Test on actual devices, not just dev tools
- Verify prefers-reduced-motion support

## Post-Deployment

### Monitoring

1. **Analytics** (Optional)
   - Add Vercel Analytics or Google Analytics

2. **Error Tracking** (Optional)
   - Integrate Sentry or similar service

### SEO

1. **Submit to Search Engines**
   - Google Search Console
   - Bing Webmaster Tools

2. **Generate Sitemap**
   - Add sitemap.xml in public folder

3. **Social Media Preview**
   - Test with [metatags.io](https://metatags.io)

## Security

### Best Practices

1. **HTTPS Only**
   - Enabled by default on Vercel/Netlify
   - Enforce HTTPS redirects

2. **Security Headers**
   - Both platforms provide secure defaults

3. **Regular Updates**
   ```bash
   npm update
   npm audit
   ```

## Support

If you encounter issues:

1. Check platform status pages
   - [Vercel Status](https://www.vercel-status.com)
   - [Netlify Status](https://www.netlifystatus.com)

2. Review platform documentation
   - [Vercel Docs](https://vercel.com/docs)
   - [Netlify Docs](https://docs.netlify.com)

3. Check Next.js documentation
   - [Next.js Deployment](https://nextjs.org/docs/deployment)

---

**Ready to deploy?** Follow the Vercel or Netlify instructions above and your portfolio will be live in minutes!
