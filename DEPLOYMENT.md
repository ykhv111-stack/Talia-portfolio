# Deployment Guide - Talia's Portfolio Website

## Overview
Talia's portfolio website is built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. It's configured for automatic deployment on Vercel via GitHub.

## Technology Stack
- **Framework:** Next.js 15.5.15
- **Language:** TypeScript 5.9.3
- **Styling:** Tailwind CSS 3.4.0 with custom design system
- **Animations:** Framer Motion 11.0.0
- **Deployment:** Vercel (automatic CI/CD from main branch)
- **Node:** v24.14.0+

## Build Configuration
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Node Version:** 20+
- **Package Manager:** npm

## Design System (Locked)
### Colors
- **Teal (#2B9B9E):** Systems/AI accent
- **Orange (#D97A4E):** Creativity/human accent
- **Off-white (#F5F1ED):** Warm background
- **Charcoal (#1A1A1A):** Deep text

### Typography
- **Headlines:** Georgia/Garamond (serif)
- **Body:** System fonts (sans-serif)
- **Responsive:** clamp() for fluid typography

## Project Structure
```
.
├── app/
│   ├── page.tsx                    # Home (Hero + Project Previews)
│   ├── layout.tsx                  # Root layout with Nav/Footer
│   ├── globals.css                 # Global styles
│   ├── about/
│   │   └── page.tsx               # About section
│   ├── creative-experiments/
│   │   └── page.tsx               # Creative experiments grid
│   └── projects/
│       ├── iron-swords/
│       │   └── page.tsx           # Iron Swords case study
│       └── portfolio-website/
│           └── page.tsx           # Portfolio website case study
├── components/
│   ├── Hero.tsx                   # Hero with decision tree animation
│   ├── Navigation.tsx             # Fixed header with responsive menu
│   ├── Footer.tsx                 # Dark footer with links
│   ├── ProjectLayout.tsx          # Shared project page wrapper
│   ├── ProjectPreview.tsx         # Home page project cards
│   ├── ProjectTimeline.tsx        # Project timeline visualization
│   ├── CreativeExperimentsPreview.tsx  # Experiments preview on home
│   ├── CTASection.tsx             # Call-to-action section
│   └── DecisionTreeSVG.tsx        # Decision tree visualization
├── package.json                   # Dependencies
├── next.config.js                 # Next.js configuration
├── tailwind.config.ts             # Tailwind design system
├── tsconfig.json                  # TypeScript configuration
└── .vercelignore                  # Files to exclude from Vercel deploy
```

## Pages Implemented

### Home (`/`)
- Hero section with animated headline and decision tree
- Project previews (Iron Swords, Portfolio Website)
- Creative experiments preview
- CTA section

### Iron Swords (`/projects/iron-swords`)
- Problem section
- What I built (system architecture)
- How I solved it (layered approach)
- Reflection and results

### Portfolio Website (`/projects/portfolio-website`)
- Problem & design constraints
- Tech stack showcase
- Design system visualization
- Build process documentation
- Results and metrics

### Creative Experiments (`/creative-experiments`)
- Grid of 6 experiment cards
- Key insights for each
- Philosophy section (AI + Human)
- CTA for engagement

### About (`/about`)
- Who I am
- How I work
- Values (Clarity, Agency, Excellence, Curiosity)
- What I've built
- Contact section with social links

## Build & Performance
- **Build Size:** ~3 KB per page (gzipped)
- **First Load JS:** 141-144 kB
- **Static Generation:** All pages pre-rendered
- **Route Performance:**
  - `/` - 2.86 kB
  - `/about` - 2.28 kB
  - `/creative-experiments` - 2.51 kB
  - `/projects/iron-swords` - 1.29 kB
  - `/projects/portfolio-website` - 586 B

## Animations & Interactions
- **Framer Motion:** Scroll-triggered reveals, staggered animations
- **Decision Tree:** SVG-based visualization on hero
- **Responsive:** Mobile-first with tablet and desktop breakpoints
- **Accessibility:** Respects `prefers-reduced-motion`

## Deployment Steps

### 1. Prerequisites
- GitHub account with access to `ykhv111-stack/Talia-portfolio`
- Vercel account connected to GitHub
- Node.js 20+ installed locally

### 2. Local Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### 3. Build & Test
```bash
# Create production build
npm run build

# Start production server
npm start
```

### 4. Deploy to Vercel (Automatic)
```bash
# Push to main branch
git push origin main

# Vercel will automatically:
# 1. Detect changes
# 2. Run build command
# 3. Deploy to production
# 4. Update live URL
```

### 5. Manual Deploy (if needed)
- Go to [Vercel Dashboard](https://vercel.com/dashboard)
- Select `Talia-portfolio` project
- Click "Deploy" to redeploy current branch

## Environment Setup

### Next.js Configuration
- `reactStrictMode: true` - Strict mode enabled
- Default SWC compiler (no swcMinify needed in v15)
- TypeScript support enabled

### Tailwind CSS
- Content paths configured for all `.tsx` files
- Custom theme extends with brand colors
- Animation utilities defined (fade-in, slide-up, slide-in)

### PostCSS
- Autoprefixer for cross-browser compatibility
- Tailwind CSS processor

## Monitoring & Maintenance

### Performance Checklist
- [ ] Lighthouse score 90+
- [ ] Mobile responsiveness tested
- [ ] Animation performance on low-end devices
- [ ] SEO metadata present
- [ ] WCAG 2.1 AA compliance

### Update Process
1. Make changes locally
2. Run `npm run build` to verify
3. Run `npm run lint` for type checking
4. Commit with meaningful message
5. Push to `main` branch
6. Monitor deployment on Vercel Dashboard

## Troubleshooting

### Build Fails
- Check Node version: `node --version` (should be 20+)
- Clear cache: `rm -rf .next node_modules && npm install`
- Rebuild: `npm run build`

### Deployment Issues
- Check Vercel logs: [Vercel Dashboard](https://vercel.com/dashboard)
- Verify environment variables (none required currently)
- Check `.vercelignore` excludes unnecessary files

### Performance Issues
- Run Lighthouse audit in Chrome DevTools
- Check bundle size: `npm run build` shows route sizes
- Profile animations: Use React DevTools Profiler

## Security
- No sensitive data in environment (none required)
- All links use `https`
- External links have `target="_blank"` and `rel="noopener noreferrer"`
- Form submissions (if added) should use server actions

## Future Enhancements
- [ ] Blog section with MDX
- [ ] Case study deep dives
- [ ] Interactive project filters
- [ ] Dark mode toggle
- [ ] Analytics integration
- [ ] Comments/feedback system

---

**Last Updated:** April 25, 2026
**Status:** ✅ Production Ready
**Live URL:** https://talia-portfolio.vercel.app
