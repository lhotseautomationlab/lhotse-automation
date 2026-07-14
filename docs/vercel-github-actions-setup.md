# Vercel CI/CD Setup via GitHub Actions

This project now includes a GitHub Actions workflow (`.github/workflows/deploy-vercel.yml`) that automatically deploys to Vercel on every push to `main`.

## Prerequisites

1. **Vercel Account**: Sign up at https://vercel.com if you don't have one.
2. **Vercel Project**: Create or link a Vercel project for `lhotse-automation`.

## Setup Steps

### 1. Create a Vercel Project

Option A: Manual creation
- Go to https://vercel.com/dashboard
- Click "New Project"
- Import the `lhotse-automation` GitHub repository
- Accept defaults (Framework: Next.js, Build command auto-detected)
- Click "Deploy"

Option B: via Vercel CLI (if configured locally)
```bash
vercel link --project-name=lhotse-automation
vercel deploy --prod
```

### 2. Get Vercel Secrets

After creating the project, collect these values:

- **VERCEL_TOKEN**: Personal access token for API authentication
  - Go to https://vercel.com/account/tokens
  - Create a new token (scope: Full access or minimal required)
  - Copy the token

- **VERCEL_ORG_ID**: Your Vercel account/organization ID
  - Go to https://vercel.com/account/settings
  - Under "Account", find "Account ID" or "Organization ID"
  - Copy the ID

- **VERCEL_PROJECT_ID**: The ID of your lhotse-automation project
  - Go to the project settings page in Vercel dashboard
  - Under "General", find "Project ID"
  - Copy the ID

### 3. Add Secrets to GitHub

1. Go to your GitHub repository settings: `Settings → Secrets and variables → Actions`
2. Click "New repository secret"
3. Add each secret:
   - Name: `VERCEL_TOKEN` → Value: [your token from step 2]
   - Name: `VERCEL_ORG_ID` → Value: [your org ID from step 2]
   - Name: `VERCEL_PROJECT_ID` → Value: [your project ID from step 2]

### 4. Trigger Deployment

Once secrets are added, deployments will happen automatically:
- Push to `main` branch → deploys to Vercel Production
- Push to any other branch → creates Preview deployment

To manually trigger:
```bash
git push origin main
```

Then check GitHub Actions and Vercel dashboard for deployment status.

## Monitoring Deployments

- **GitHub Actions**: https://github.com/lhotseautomationlab/lhotse-automation/actions
- **Vercel Dashboard**: https://vercel.com/dashboard

## Custom Domain (dev.lhotselab.com)

After a successful deployment:

1. Go to Vercel project settings → Domains
2. Add domain: `dev.lhotselab.com`
3. Vercel will provide DNS records
4. In Cloudflare DNS management for `lhotselab.com`:
   - Add CNAME record: `dev` → `cname.vercel-dns.com`
   - Wait for DNS propagation (usually a few minutes)
5. In Vercel, mark the domain as "Verified" once DNS is set

## Troubleshooting

- **Build fails**: Check GitHub Actions logs for build errors
- **Deploy fails**: Verify secrets are correctly set and tokens are not expired
- **Domain not working**: Check DNS propagation in Cloudflare, wait a few minutes
- **Secrets missing error**: Add VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID to GitHub Secrets

## See Also

- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Vercel GitHub Integration](https://vercel.com/docs/git/vercel-for-github)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
