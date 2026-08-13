# AWS Infrastructure Setup Guide

This guide walks through setting up AWS infrastructure to host the OmniR3 static website using S3 and CloudFront.

## Architecture Overview

```
                                    ┌─────────────────┐
                                    │   CloudFront    │
┌──────────┐     ┌──────────┐      │   Distribution  │      ┌──────────┐
│  Users   │────▶│  Route53 │─────▶│   (CDN + HTTPS) │─────▶│    S3    │
│          │     │   DNS    │      │                 │      │  Bucket  │
└──────────┘     └──────────┘      └─────────────────┘      └──────────┘
                                           │
                                           ▼
                                   ┌───────────────┐
                                   │  ACM (SSL)    │
                                   │  Certificate  │
                                   └───────────────┘
```

## Prerequisites

- AWS Account
- AWS CLI installed and configured (`aws configure`)
- Domain name (optional, but recommended)

## Step 1: Create S3 Bucket

### Via AWS Console

1. Go to S3 → Create bucket
2. Bucket name: `omnir3-website` (or your preferred name)
3. Region: Choose closest to your users (e.g., `us-east-1`)
4. Uncheck "Block all public access" (CloudFront will access it)
5. Create bucket

### Via AWS CLI

```bash
# Create bucket
aws s3 mb s3://omnir3-website --region us-east-1

# Enable static website hosting (optional, CloudFront handles this)
aws s3 website s3://omnir3-website --index-document index.html --error-document 404.html
```

### Bucket Policy

Add this bucket policy to allow CloudFront access:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontAccess",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::omnir3-website/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::ACCOUNT_ID:distribution/DISTRIBUTION_ID"
        }
      }
    }
  ]
}
```

Replace `ACCOUNT_ID` and `DISTRIBUTION_ID` after creating the CloudFront distribution.

---

## Step 2: Request SSL Certificate (ACM)

**Important:** Certificate must be in `us-east-1` region for CloudFront.

### Via AWS Console

1. Go to ACM (Certificate Manager) in **us-east-1**
2. Request a public certificate
3. Domain name: `omnir3.com`
4. Add another name: `www.omnir3.com`
5. Validation method: DNS validation (recommended)
6. Add the CNAME records to your DNS provider
7. Wait for validation (usually 5-30 minutes)

### Via AWS CLI

```bash
aws acm request-certificate \
  --domain-name omnir3.com \
  --subject-alternative-names www.omnir3.com \
  --validation-method DNS \
  --region us-east-1
```

---

## Step 3: Create CloudFront Distribution

### Via AWS Console

1. Go to CloudFront → Create distribution
2. **Origin Settings:**
   - Origin domain: Select your S3 bucket
   - Origin access: Origin access control settings (recommended)
   - Create new OAC if prompted
3. **Default Cache Behavior:**
   - Viewer protocol policy: Redirect HTTP to HTTPS
   - Cache policy: CachingOptimized
   - Compress objects automatically: Yes
4. **Settings:**
   - Price class: Use all edge locations (or choose based on budget)
   - Alternate domain names (CNAMEs): `omnir3.com`, `www.omnir3.com`
   - Custom SSL certificate: Select your ACM certificate
   - Default root object: `index.html`
5. Create distribution

### Configure Error Pages

After creation, go to Error pages tab:

1. Create custom error response
2. HTTP error code: 404
3. Customize error response: Yes
4. Response page path: `/404.html`
5. HTTP response code: 404

Repeat for 403 errors (also return `/404.html`).

---

## Step 4: Configure DNS (Route 53)

### If using Route 53

1. Go to Route 53 → Hosted zones → Your domain
2. Create record:
   - Record name: (leave blank for apex)
   - Record type: A
   - Alias: Yes
   - Route traffic to: CloudFront distribution
   - Select your distribution
3. Repeat for `www` subdomain

### If using external DNS

Create CNAME records pointing to your CloudFront distribution domain (e.g., `d1234567890.cloudfront.net`).

**Note:** For apex domain (omnir8.com without www), you need either Route 53 or a DNS provider that supports ALIAS/ANAME records.

---

## Step 5: Create IAM User for Deployments

### Create Policy

Create a custom policy named `OmniR3DeploymentPolicy`:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "S3Deploy",
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::omnir3-website",
        "arn:aws:s3:::omnir3-website/*"
      ]
    },
    {
      "Sid": "CloudFrontInvalidate",
      "Effect": "Allow",
      "Action": "cloudfront:CreateInvalidation",
      "Resource": "arn:aws:cloudfront::ACCOUNT_ID:distribution/DISTRIBUTION_ID"
    }
  ]
}
```

### Create User

1. Go to IAM → Users → Create user
2. User name: `omnir3-github-deploy`
3. Attach policy: `OmniR3DeploymentPolicy`
4. Create access key (select "Application running outside AWS")
5. **Save the Access Key ID and Secret Access Key immediately**

---

## Step 6: Configure GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these secrets:

| Secret                       | Value                              |
| ---------------------------- | ---------------------------------- |
| `AWS_ACCESS_KEY_ID`          | From IAM user creation             |
| `AWS_SECRET_ACCESS_KEY`      | From IAM user creation             |
| `S3_BUCKET_NAME`             | `omnir3-website`                   |
| `CLOUDFRONT_DISTRIBUTION_ID` | From CloudFront (e.g., `E1234...`) |

---

## Step 7: Test Deployment

### Manual Test

```bash
# Build locally
npm run build

# Sync to S3
aws s3 sync dist/ s3://omnir3-website --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

### Automated Deployment

Push to `main` branch - the GitHub Actions workflow will:

1. Build the site
2. Upload to S3
3. Invalidate CloudFront cache

---

## Cost Estimation

For a low-traffic marketing site:

| Service    | Estimated Monthly Cost |
| ---------- | ---------------------- |
| S3         | $0.01-0.10             |
| CloudFront | $0.50-2.00             |
| Route 53   | $0.50 (hosted zone)    |
| ACM        | Free                   |
| **Total**  | **~$1-3/month**        |

CloudFront includes 1TB free data transfer per month for the first year.

---

## Troubleshooting

### 403 Forbidden Error

- Check S3 bucket policy includes CloudFront OAC
- Verify CloudFront has Origin Access Control configured
- Ensure default root object is set to `index.html`

### Certificate Not Showing in CloudFront

- Certificate must be in `us-east-1` region
- Certificate must be validated (check ACM console)

### Changes Not Appearing

- CloudFront caches content; create an invalidation
- Check the deployment workflow completed successfully

### CORS Issues (if using fonts/APIs)

Add CORS configuration to S3 bucket:

```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET", "HEAD"],
    "AllowedOrigins": ["https://omnir3.com", "https://www.omnir3.com"],
    "ExposeHeaders": []
  }
]
```

---

## Alternative: AWS Amplify

If you prefer a simpler setup with built-in CI/CD:

1. Go to AWS Amplify → Create new app
2. Connect GitHub repository
3. Amplify auto-detects Astro and configures build
4. Add custom domain in Amplify console

Amplify handles S3, CloudFront, SSL, and deployments automatically.
