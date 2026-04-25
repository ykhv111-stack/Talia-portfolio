# Talia's Portfolio — AI-Bounded Framework

A portfolio website built using a formal 4-layer world model that demonstrates how to work with AI while maintaining control through clearly defined constraints.

## The Framework

### Layer 1: Discovery — Core Principles
Five mathematical definitions define the constraint space:
- **Minimalist(portfolio)** — Every element serves narrative
- **ClearNarrative(portfolio)** — Opens with self-introduction, explains philosophy
- **TextEmphasis(portfolio)** — Written descriptions show methodology
- **AuthenticVoice(portfolio)** — Personal, vulnerable, transparent
- **ProcessTransparency(portfolio)** — Shows methodology, constraints, iteration

### Layer 2: Translation — Decision Logic
When principles conflict, this priority order applies:
```
ClearNarrative ≻ AuthenticVoice
∧ "What can only be done here?" → Constraint intersection
∧ Resolve creatively within clarity
```

### Layer 3: Execution — Build with Formula
Every page, section, and interaction follows the formula. Example: hero text is lowercase and subtle (clarity first), then adds personal touch (voice second).

### Layer 4: Feedback — Iterate
Each page is shown for approval. Feedback reshapes every iteration.

## Technical Specs

- **Framework:** Next.js 15 + React 19 + TypeScript
- **Styling:** Tailwind CSS with custom animations
- **Color Scheme:** Teal (#0d9488) for AI/systems, Orange (#f97316) for human/creative
- **Accessibility:** WCAG 2.1 AA compliant
- **Responsive:** Mobile-first design
- **Animations:** Subtle scroll-triggered transitions with reduced-motion support
- **Deployment:** Vercel (auto-deploy from main branch)

## Project Structure

```
app/
├── layout.tsx           # Root layout with metadata
├── globals.css          # Tailwind + custom animations
└── portfolio-website/
    └── page.tsx         # Main portfolio page

tailwind.config.ts       # Design tokens & animations
next.config.ts           # Next.js configuration
postcss.config.js        # PostCSS setup for Tailwind
vercel.json             # Vercel deployment config
package.json            # Dependencies
```

## Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000/portfolio-website](http://localhost:3000/portfolio-website) in your browser.

### Build for Production
```bash
npm run build
npm start
```

## Deployment

### GitHub + Vercel

1. **Push to GitHub:**
   ```bash
   git remote add origin <your-repo-url>
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import this project from GitHub
   - Vercel will auto-detect Next.js and deploy
   - Auto-deploys on every push to `main`

3. **Verify Live URL:**
   - Vercel assigns a `.vercel.app` domain by default
   - Custom domain can be configured in Vercel dashboard

## Design Decisions

Every design choice reflects the framework:

| Decision | Why |
|----------|-----|
| Hero: "i'm talia" (lowercase) | ClearNarrative first (simple), then AuthenticVoice (personal) |
| Formal logic notation | TextEmphasis requires readers understand thinking |
| Teal + Orange colors | Visual instantiation of AI/human boundary concept |
| Conversational tone | AuthenticVoice serves clarity |
| Visible methodology | ProcessTransparency proves authenticity |

## Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML structure
- Focus indicators on all interactive elements
- Reduced motion support for animations
- High contrast color scheme
- Proper heading hierarchy
- Alt text and aria labels where needed

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome for Android)

## License

Personal portfolio — built with boundaries.

---

*Built using the same framework it documents. The portfolio IS the proof the framework works.*
