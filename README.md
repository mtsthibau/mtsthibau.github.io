# Matheus Thibau — Portfolio

**Engineering Communication Across Cultures**

A cinematic portfolio documenting the projects, communities and technologies I've helped build over 15 years of software engineering.

🌐 **Live**: [https://mtsthibau.github.io](https://mtsthibau.github.io)

---

## Overview

This is a professional portfolio designed as an editorial storytelling experience. Rather than a traditional resume, it showcases:

- **Journey**: 15 years of building communication technologies
- **Projects**: Case studies including HERMES, Bernoulli, 4Milk
- **Communities**: Organizations and movements I've worked with
- **Philosophy**: Thoughts on technology and human connection

Built entirely as static HTML/CSS/JS, optimized for GitHub Pages.

---

## Built With

- **[Astro](https://astro.build)** — Generates static HTML at build time
- **[TypeScript](https://www.typescriptlang.org/)** — Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS
- **[GitHub Pages](https://pages.github.com/)** — Free, automatic hosting
- **[GitHub Actions](https://github.com/features/actions)** — CI/CD automation

---

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start dev server (localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm preview
```

### Deployment

Every push to `main` automatically builds and deploys:

```bash
git add .
git commit -m "Add new project: HERMES"
git push
```

Site updates in ~1 minute at `https://mtsthibau.github.io`.

---

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── hero/
│   ├── layout/
│   └── ui/
├── layouts/             # Page templates
├── pages/               # Auto-routed pages
├── content/             # Markdown content collections
│   ├── projects/
│   ├── communities/
│   └── journal/
├── styles/              # Global CSS
├── assets/              # Images, fonts, media
└── lib/                 # Utilities and design tokens
```

## Documentation

- **[Architecture.md](docs/Architecture.md)** — Technical design decisions
- **[Design.md](docs/Design.md)** — Design system and component library
- **[Deployment.md](docs/Deployment.md)** — GitHub Pages setup and workflow

---

## Design System

### Colors
- **Neutral**: Grayscale from #f9f9f9 to #000000
- **Primary**: Sky blue (#0ea5e9) for accents and interactions

### Typography
- **Sans**: Inter (system fonts fallback)
- **Mono**: JetBrains Mono (code blocks)

### Spacing
Mobile-first responsive design with breakpoints at 640px, 768px, 1024px, 1280px.

---

## Content Management

Instead of a database, content lives in Markdown files:

### Adding a Project
```bash
# Create content/projects/hermes.md
---
title: "HERMES"
description: "Communication without Infrastructure"
date: 2024-01-15
---

Project content here...
```

### Adding a Journal Entry
```bash
# Create content/journal/my-first-post.md
---
title: "Reflections on Community"
date: 2024-01-20
---

Article content here...
```

---

## Performance

- **No server required** → Lightning fast
- **100% static HTML** → Perfect Lighthouse scores
- **Optimized images** → Astro automatic optimization
- **Cached everywhere** → GitHub Pages + browser caching

Target Lighthouse scores: **100/100** for Performance, Accessibility, Best Practices, SEO.

---

## Features (Sprint 1)

✅ **Project Foundation**
- Astro configured
- Tailwind CSS integrated
- TypeScript support
- Responsive layout

✅ **Design System**
- Color palette
- Typography scale
- Spacing system
- Component library

✅ **Pages**
- Homepage with hero section
- Navigation
- Footer
- Placeholder pages (journey, projects, communities, journal)

✅ **Deployment**
- GitHub Actions workflow
- Automatic deployment to GitHub Pages
- One-minute build and deploy

---

## Future Roadmap

**Phase 2**: Journey timeline, communities section, project case studies
**Phase 3**: Interactive maps, detailed project pages, journal articles
**Phase 4**: SEO optimization, analytics, accessibility audit

---

## Commands Reference

```bash
# Development
npm run dev         # Start dev server
npm run build       # Build for production
npm preview         # Preview built site

# Code quality
npx astro check     # Type check Astro files
```

---

## License

© 2024 Matheus Thibau. All rights reserved.

---

## Connect

- **GitHub**: [thibau](https://github.com/thibau)
- **LinkedIn**: [Matheus Thibau](https://linkedin.com/in/matheusthibau)
- **Email**: [hello@matheusthibau.com](mailto:hello@matheusthibau.com)
