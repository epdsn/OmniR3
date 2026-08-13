# CI/CD Implementation Plan

This document provides detailed implementation steps for setting up continuous integration and deployment for the OmniR3 website.

## Overview

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Develop   │────▶│  Pull Req   │────▶│   Review    │────▶│    Main     │
│   Branch    │     │  Created    │     │   + CI      │     │   Branch    │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
                           │                   │                   │
                           ▼                   │                   ▼
                    ┌─────────────┐            │            ┌─────────────┐
                    │   Preview   │            │            │  Production │
                    │ Environment │            │            │  Deployment │
                    └─────────────┘            │            └─────────────┘
                                               │
                    ┌──────────────────────────┘
                    ▼
              ┌───────────┐
              │ ✓ Lint    │
              │ ✓ Format  │
              │ ✓ Build   │
              │ ✓ Test*   │
              └───────────┘
              * Future phase
```

## Step 1: Add Development Dependencies

### Install Packages

```bash
npm install -D \
  eslint \
  @eslint/js \
  typescript-eslint \
  eslint-plugin-astro \
  prettier \
  prettier-plugin-astro
```

### Create ESLint Configuration

Create `eslint.config.mjs`:

```javascript
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: ['dist/', 'node_modules/', '.astro/'],
  },
];
```

### Create Prettier Configuration

Create `.prettierrc`:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "plugins": ["prettier-plugin-astro"],
  "overrides": [
    {
      "files": "*.astro",
      "options": {
        "parser": "astro"
      }
    }
  ]
}
```

Create `.prettierignore`:

```
dist/
node_modules/
.astro/
package-lock.json
```

### Update package.json Scripts

Add to `scripts` section:

```json
{
  "scripts": {
    "dev": "astro dev --host 0.0.0.0 --port 4321",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

---

## Step 2: Create CI Workflow

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  lint-and-build:
    name: Lint & Build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run ESLint
        run: npm run lint

      - name: Check formatting
        run: npm run format:check

      - name: Build site
        run: npm run build

      - name: Upload build artifact
        uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist/
          retention-days: 7
```

---

## Step 3: Create Deployment Workflow

### Option A: Azure Static Web Apps

Create `.github/workflows/deploy-azure.yml`:

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
    name: Build and Deploy
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: Deploy to Azure Static Web Apps
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: 'upload'
          app_location: '/'
          output_location: 'dist'
          skip_app_build: true

  close_pull_request:
    name: Close PR Preview
    if: github.event_name == 'pull_request' && github.event.action == 'closed'
    runs-on: ubuntu-latest

    steps:
      - name: Close preview environment
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          action: 'close'
```

### Option B: Netlify

Create `.github/workflows/deploy-netlify.yml`:

```yaml
name: Deploy to Netlify

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    name: Build and Deploy
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v3
        with:
          publish-dir: './dist'
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: 'Deploy from GitHub Actions'
          enable-pull-request-comment: true
          enable-commit-comment: true
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

Create `netlify.toml` (if using Netlify):

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/*"
  to = "/404.html"
  status = 404

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/_astro/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### Option C: Vercel

Create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro"
}
```

Vercel auto-deploys from GitHub - just connect the repository in the Vercel dashboard.

### Option D: Cloudflare Pages

Create `.github/workflows/deploy-cloudflare.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    name: Build and Deploy
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: pages deploy dist --project-name=omnir3
```

---

## Step 4: Required Secrets Configuration

### GitHub Repository Secrets

Navigate to: Repository → Settings → Secrets and variables → Actions

#### For Azure Static Web Apps

| Secret                            | How to obtain                                           |
| --------------------------------- | ------------------------------------------------------- |
| `AZURE_STATIC_WEB_APPS_API_TOKEN` | Azure Portal → Static Web App → Manage deployment token |

#### For Netlify

| Secret               | How to obtain                                                   |
| -------------------- | --------------------------------------------------------------- |
| `NETLIFY_AUTH_TOKEN` | Netlify → User settings → Applications → Personal access tokens |
| `NETLIFY_SITE_ID`    | Netlify → Site settings → Site details → Site ID                |

#### For Cloudflare Pages

| Secret                  | How to obtain                                                  |
| ----------------------- | -------------------------------------------------------------- |
| `CLOUDFLARE_API_TOKEN`  | Cloudflare Dashboard → Profile → API Tokens (needs Pages:Edit) |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Dashboard → Overview (right sidebar)                |

---

## Step 5: Branch Protection Rules

Configure in: Repository → Settings → Branches → Add rule

**Branch name pattern:** `main`

**Recommended settings:**

- [x] Require a pull request before merging
  - [x] Require approvals: 1
- [x] Require status checks to pass before merging
  - [x] Require branches to be up to date before merging
  - Status checks to require:
    - `lint-and-build` (from CI workflow)
- [x] Do not allow bypassing the above settings

---

## Step 6: Pin Node Version

Create `.nvmrc`:

```
20
```

Or create `.node-version`:

```
20
```

This ensures all developers and CI use the same Node version.

---

## Implementation Checklist

### Phase 1: Linting & Formatting

- [ ] Install ESLint and Prettier dependencies
- [ ] Create `eslint.config.mjs`
- [ ] Create `.prettierrc` and `.prettierignore`
- [ ] Update `package.json` scripts
- [ ] Run `npm run lint:fix` and `npm run format` to fix existing issues
- [ ] Commit configuration files

### Phase 2: CI Workflow

- [ ] Create `.github/workflows/ci.yml`
- [ ] Create `.nvmrc` or `.node-version`
- [ ] Push to branch and verify workflow runs
- [ ] Verify all checks pass

### Phase 3: Deployment

- [ ] Decide on hosting platform
- [ ] Set up hosting account/resource
- [ ] Create deployment workflow file
- [ ] Configure required secrets in GitHub
- [ ] Test deployment on a PR
- [ ] Verify production deployment

### Phase 4: Branch Protection

- [ ] Configure branch protection rules for `main`
- [ ] Test that PRs require CI to pass
- [ ] Test that direct pushes to `main` are blocked (if desired)

---

## Monitoring & Maintenance

### Workflow Status

Check workflow runs at: `https://github.com/{owner}/{repo}/actions`

### Dependency Updates

Consider adding Dependabot or Renovate for automated dependency updates:

Create `.github/dependabot.yml`:

```yaml
version: 2
updates:
  - package-ecosystem: 'npm'
    directory: '/'
    schedule:
      interval: 'weekly'
    open-pull-requests-limit: 5
    groups:
      development:
        dependency-type: 'development'
      production:
        dependency-type: 'production'
```

### Security Alerts

Enable in: Repository → Settings → Security → Code security and analysis

- [x] Dependabot alerts
- [x] Dependabot security updates
- [x] Secret scanning

---

## Troubleshooting

### Common Issues

**CI fails on lint errors**

```bash
# Fix locally and commit
npm run lint:fix
npm run format
git add -A && git commit -m "fix: resolve lint errors"
```

**Build fails**

```bash
# Test locally
npm run build
# Check for TypeScript errors
npx tsc --noEmit
```

**Deployment fails due to secrets**

- Verify secret names match exactly (case-sensitive)
- Check secrets are set at repository level, not environment level
- Regenerate tokens if expired

**Preview deployments not working**

- Verify PR workflow trigger includes `pull_request`
- Check hosting platform supports preview deployments
