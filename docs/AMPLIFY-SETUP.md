# AWS Amplify Setup Guide

AWS Amplify provides a simple way to deploy static sites with automatic builds, CDN, and SSL - no S3 or CloudFront configuration needed.

## Setup Steps

### 1. Connect Your Repository

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click **Create new app** → **Host web app**
3. Select **GitHub** and authorize AWS Amplify
4. Choose the `epdsn/OmniR3` repository
5. Select the `main` branch

### 2. Configure Build Settings

Amplify should auto-detect Astro. Verify the build settings:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

If it doesn't auto-detect, paste this into the build settings.

### 3. Deploy

Click **Save and deploy**. Amplify will:

- Clone your repository
- Install dependencies
- Build the site
- Deploy to a CDN with HTTPS

You'll get a URL like `https://main.d1234567890.amplifyapp.com`

### 4. Custom Domain (Optional)

1. In Amplify Console, go to **Domain management**
2. Click **Add domain**
3. Enter `omnir3.com`
4. Follow the DNS verification steps
5. Amplify provisions an SSL certificate automatically

## Automatic Deployments

Every push to `main` triggers a new build and deploy automatically - no GitHub Actions workflow needed.

## Environment Variables

If needed later (e.g., for analytics or form services):

1. Go to **App settings** → **Environment variables**
2. Add variables as needed
3. They'll be available during build

## Build Notifications

To get notified of build status:

1. Go to **App settings** → **Notifications**
2. Add email notifications for build success/failure

## Cost

- **Free tier:** 1000 build minutes/month, 15 GB served/month, 5 GB storage
- Typical cost for a marketing site: **$0-5/month**

## Troubleshooting

### Build Fails

Check the build logs in Amplify Console. Common issues:

- Node version mismatch: Add `NODE_VERSION` environment variable set to `20`
- Missing dependencies: Ensure `package-lock.json` is committed

### 404 on Page Refresh

Add a rewrite rule in **Rewrites and redirects**:

| Source                                                                                             | Target        | Type |
| -------------------------------------------------------------------------------------------------- | ------------- | ---- |
| `</^[^.]+$\|\.(?!(css\|gif\|ico\|jpg\|js\|png\|txt\|svg\|woff\|woff2\|ttf\|map\|json)$)([^.]+$)/>` | `/index.html` | 200  |

Or for cleaner 404 handling:

| Source | Target      | Type |
| ------ | ----------- | ---- |
| `/<*>` | `/404.html` | 404  |
