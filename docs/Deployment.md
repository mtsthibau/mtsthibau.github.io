# Deployment Guide

## Overview

This portfolio uses **GitHub Actions** to automatically build and deploy to **GitHub Pages**.

Every push to `main` triggers a build and deployment automatically.

## How It Works

```
1. Push to main
        ↓
2. GitHub Actions workflow triggers
        ↓
3. Install dependencies (npm ci)
        ↓
4. Build static site (npm run build)
        ↓
5. Upload dist/ artifact
        ↓
6. Deploy to GitHub Pages
        ↓
7. Live at https://mtsthibau.github.io (~1 minute)
```

## Workflow File

Location: `.github/workflows/deploy.yml`

Key steps:
- **Trigger**: Push to `main` branch or manual dispatch
- **Node.js**: Latest LTS version (20.x)
- **Dependencies**: `npm ci` (clean install)
- **Build**: `npm run build`
- **Deploy**: `actions/deploy-pages@v4`

## Deployment Process

### Prerequisites

1. Repository name must be `mtsthibau.github.io` (or your GitHub username)
2. Repository must be public (or have GitHub Pages enabled)
3. GitHub Actions must be enabled (default)

### Manual Setup (One-time)

1. **Repository Settings → Pages**
   - Source: "GitHub Actions"
   - No manual branch selection needed (actions/deploy-pages handles it)

2. **Verify Workflow**
   - Go to "Actions" tab
   - Check that "Deploy to GitHub Pages" workflow exists
   - First deployment may take 2-3 minutes

### Automatic Deployment

**Workflow:**
```bash
# Make your changes
git add .
git commit -m "Add new project: HERMES"
git push origin main
```

**Result:**
- GitHub Actions automatically runs
- Site rebuilds and redeploys
- Available at `https://mtsthibau.github.io` within ~1 minute
- Check Actions tab to monitor progress

## Environment Variables

None required for basic deployment.

Future enhancements might add:
- `GITHUB_TOKEN` (already provided by Actions)
- Custom domain configuration

## Custom Domain

To use a custom domain (e.g., `matheusthibau.com`):

1. Add `CNAME` file to `public/` folder with your domain
2. Configure DNS records at your registrar to point to GitHub Pages
3. GitHub will auto-configure HTTPS via Let's Encrypt

Example `public/CNAME`:
```
matheusthibau.com
```

## Troubleshooting

### Workflow Fails
1. Check Actions tab for error logs
2. Verify `npm run build` succeeds locally: `npm run build`
3. Check for TypeScript errors: `npx astro check`

### Site Not Updating
1. Verify `main` branch is the source (Settings → Pages)
2. Check Actions tab—deployment may still be running
3. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
4. Check DNS propagation if using custom domain

### Build Error: "Node modules not found"
- Ensure `package.json` and `package-lock.json` are committed
- Run locally: `npm ci && npm run build`

## Performance Notes

- First deployment: 2-3 minutes
- Subsequent deployments: ~1 minute (cached dependencies)
- GitHub Pages caches static assets for 60 minutes

## Monitoring

GitHub provides deployment analytics:
- **Actions tab**: Build logs and timing
- **Deployments tab**: Deployment history
- **Pages tab**: Custom domain status and coverage

## Rollback

To revert to a previous version:
```bash
git revert <commit-hash>
git push origin main
```

GitHub Actions will rebuild with the reverted code.

## Advanced: Environment-Specific Builds

To build different versions (staging vs. production):

1. Create `.github/workflows/deploy-staging.yml` for other branches
2. Use different `site` values in `astro.config.mjs` based on environment
3. Deploy to different GitHub Pages branches

For now, all deployments go to production (`main` → `https://mtsthibau.github.io`).
