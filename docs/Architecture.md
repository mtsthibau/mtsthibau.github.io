# Architecture

## Overview

This portfolio is built on a **static-first architecture** optimized for GitHub Pages.

```
GitHub Repository
        ↓
  GitHub Actions
        ↓
   Astro Build
        ↓
   dist/ (HTML/CSS/JS)
        ↓
  GitHub Pages
        ↓
  https://mtsthibau.github.io
```

## Technology Stack

- **Framework**: Astro 4.x — generates static HTML at build time
- **Styling**: Tailwind CSS — utility-first CSS framework
- **Language**: TypeScript — type-safe development
- **Hosting**: GitHub Pages — free, automatic deployments
- **CI/CD**: GitHub Actions — automated builds and deployments

## File Structure

```
src/
├── components/          # Reusable Astro components
│   ├── hero/           # Hero section components
│   ├── layout/         # Layout components (Navigation, Footer)
│   └── ui/             # Utility components
├── layouts/            # Page layouts
│   └── BaseLayout.astro
├── pages/              # Route pages (auto-generates routes)
│   ├── index.astro     # Home page
│   ├── journey.astro
│   ├── projects.astro
│   ├── communities.astro
│   └── journal.astro
├── content/            # Content collections
│   ├── projects/       # Project markdown files
│   ├── communities/    # Community markdown files
│   └── journal/        # Journal articles
├── styles/             # Global CSS
├── assets/             # Images, fonts, etc.
└── lib/                # Utility functions, types
```

## Key Design Decisions

### 1. Static HTML Generation
- Every page is pre-rendered to HTML at build time
- No server-side rendering required
- Perfect for GitHub Pages' static hosting model

### 2. Content Collections
Instead of a database:
- Projects, communities, and journal entries are Markdown files
- Astro validates and transforms them into strongly-typed collections
- Adding new content is as simple as creating a `.md` file

### 3. Responsive Layout
- Mobile-first design with Tailwind
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- All components test on real devices

### 4. Design System
- Unified color palette
- Typography scale
- Spacing system
- Animation library
- See `src/lib/design-tokens.ts`

## Deployment

GitHub Actions automatically:
1. Watches the `main` branch for changes
2. Runs `npm run build` to generate static files
3. Deploys the `dist/` folder to GitHub Pages

**Workflow**: 
```bash
git add .
git commit -m "Add new project"
git push
```

✅ Site updates in ~1 minute at `https://mtsthibau.github.io`

## Performance

Because everything is static:
- **No server processing** → instant page loads
- **Optimized assets** → Astro handles image optimization
- **Cacheable** → browsers cache all assets aggressively

**Target Lighthouse scores**: 100/100 for all metrics

## Future Portability

Though deployed on GitHub Pages, the project is designed to work on:
- Cloudflare Pages
- Netlify
- Vercel
- Any static hosting

The codebase requires no changes; just point your domain's DNS to the new host.
