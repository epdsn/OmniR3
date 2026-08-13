# OmniR3 Website Roadmap

This document outlines the planned iterations for the OmniR3 marketing website, including feature enhancements, deployment strategy, and continuous integration setup.

## Current State Summary

- **Framework:** Astro 5 (static output)
- **Pages:** Home, Capabilities, How We Work, About, Contact
- **Styling:** Custom CSS (editorial/premium aesthetic)
- **Hosting target:** AWS S3 + CloudFront
- **CI/CD:** None configured
- **Testing:** None configured
- **Linting:** None configured

---

## Phase 1: Production Readiness

**Goal:** Prepare the site for production deployment with proper CI/CD, testing, and deployment automation.

### 1.1 Deployment Target: AWS

**Chosen platform:** AWS S3 + CloudFront

| Component      | Purpose             |
| -------------- | ------------------- |
| **S3**         | Static file hosting |
| **CloudFront** | CDN, HTTPS, caching |
| **Route 53**   | DNS (optional)      |
| **ACM**        | SSL certificate     |

**Contact form:** The form currently has `data-netlify="true"` which won't work on AWS. Options:

- **Formspree** - Simple, free tier available
- **AWS SES + Lambda** - More complex but fully AWS
- **Basin** - Another form service alternative

See `docs/AWS-SETUP.md` for detailed infrastructure setup guide.

### 1.2 Add Missing 404 Page

The `staticwebapp.config.json` references `/404.html` but no 404 page exists.

```
src/pages/404.astro  # Create custom 404 page
```

### 1.3 Replace Placeholder Content

Before production launch:

- [ ] Update phone number (currently `+1 (555) 123-4567`)
- [ ] Update office address (currently `123 Software Lane, Tech City, TC 12345`)
- [ ] Verify email is correct (`contact@omnir3.com`)
- [ ] Update `sitemap.xml` with production URLs
- [ ] Verify `robots.txt` configuration

### 1.4 Add Linting & Formatting

```bash
# Install dev dependencies
npm install -D eslint @eslint/js typescript-eslint prettier eslint-plugin-astro
```

**Files to create:**

- `eslint.config.mjs` - ESLint flat config
- `.prettierrc` - Prettier configuration
- `.prettierignore` - Ignore patterns

**Add npm scripts:**

```json
{
  "scripts": {
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

---

## Phase 2: CI/CD Pipeline

### 2.1 GitHub Actions Workflow

Create `.github/workflows/ci.yml` for continuous integration:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run format:check
      - run: npm run build
      - uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist/
```

### 2.2 Deployment Workflow (Azure Static Web Apps)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Azure Static Web Apps

on:
  push:
    branches: [main]
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches: [main]

jobs:
  build_and_deploy:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: 'upload'
          app_location: '/'
          output_location: 'dist'
          skip_app_build: true

  close_pull_request:
    if: github.event_name == 'pull_request' && github.event.action == 'closed'
    runs-on: ubuntu-latest
    steps:
      - uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          action: 'close'
```

### 2.3 Required Secrets

Configure in GitHub repository settings:

| Secret                            | Description                        |
| --------------------------------- | ---------------------------------- |
| `AZURE_STATIC_WEB_APPS_API_TOKEN` | Deployment token from Azure portal |

### 2.4 Branch Protection Rules

Recommended settings for `main` branch:

- Require pull request reviews before merging
- Require status checks to pass (CI workflow)
- Require branches to be up to date

---

## Phase 3: Feature Enhancements

### 3.1 Performance & SEO

- [ ] Add structured data (JSON-LD) for organization
- [ ] Implement lazy loading for images (when added)
- [ ] Add web vitals monitoring (e.g., Google Analytics 4 or Plausible)
- [ ] Generate sitemap automatically with `@astrojs/sitemap`

### 3.2 Content Improvements

- [ ] Add case studies/portfolio section
- [ ] Add team/leadership page content
- [ ] Add blog/insights section (consider Astro Content Collections)
- [ ] Add client testimonials

### 3.3 Functionality

- [ ] Configure form backend (Formspree, Netlify Forms, or custom)
- [ ] Add success/error states for contact form
- [ ] Consider adding a newsletter signup
- [ ] Add cookie consent banner (if analytics added)

### 3.4 Accessibility & UX

- [ ] Conduct accessibility audit (WCAG 2.1 AA)
- [ ] Add skip-to-content link
- [ ] Ensure proper focus management
- [ ] Test with screen readers
- [ ] Add loading states for form submission

---

## Phase 4: Advanced Features (Future)

### 4.1 Content Management

Consider headless CMS integration for non-technical content updates:

- **Keystatic** - Git-based, works well with Astro
- **Sanity** - Flexible, real-time editing
- **Contentful** - Enterprise-grade

### 4.2 Internationalization

If expanding to international markets:

- Use Astro's i18n routing
- Create `/en/`, `/de/`, etc. route prefixes

### 4.3 Dynamic Features

If interactive features needed:

- Add Astro islands with React/Vue/Svelte
- Consider edge functions for personalization

---

## Implementation Priority Matrix

| Priority  | Task                        | Complexity | Impact |
| --------- | --------------------------- | ---------- | ------ |
| 🔴 High   | Set up CI workflow          | Low        | High   |
| 🔴 High   | Set up deployment pipeline  | Medium     | High   |
| 🔴 High   | Add 404 page                | Low        | Medium |
| 🔴 High   | Replace placeholder content | Low        | High   |
| 🟡 Medium | Add linting/formatting      | Low        | Medium |
| 🟡 Medium | Configure form backend      | Low        | High   |
| 🟡 Medium | Add structured data         | Low        | Medium |
| 🟢 Low    | Add case studies            | Medium     | Medium |
| 🟢 Low    | Add blog section            | High       | Medium |
| 🟢 Low    | CMS integration             | High       | Low    |

---

## Quick Start Commands

```bash
# Development
npm install
npm run dev

# Production build
npm run build
npm run preview

# Linting (after Phase 1.4)
npm run lint
npm run format:check
```

---

## Decision Log

| Date | Decision               | Rationale                    |
| ---- | ---------------------- | ---------------------------- |
| TBD  | Hosting platform       | Pending team decision        |
| TBD  | Form handling solution | Depends on hosting choice    |
| TBD  | Analytics solution     | Pending privacy requirements |
