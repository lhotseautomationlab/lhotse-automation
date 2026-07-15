# Free Netlify Deployment Setup

Deploy the Lhotse landing MVP to **Netlify** (free tier, no credit card required).

## Quick Start

### 1. Create Netlify Account (Free)

1. Go to https://netlify.com
2. Click "Sign up" → choose "GitHub"
3. Authorize Netlify to access your GitHub account
4. Accept defaults

### 2. Import Repository

1. In Netlify dashboard, click "New site from Git"
2. Choose GitHub → select `lhotseautomationlab/lhotse-automation`
3. **Build settings:**
   - Base directory: leave empty (repo root)
   - Build command: `npm run build`
   - Publish directory: `out`
4. Click "Deploy site"

Netlify will automatically deploy the site to a temporary URL (something like `https://[random].netlify.app`).

### 3. Get Deploy Secrets (for GitHub Actions CI/CD)

Once the site is deployed, get the tokens for GitHub Actions auto-deploy:

1. Go to your Netlify site settings → **Site configuration → API ID**
2. Copy the Site ID (this is `NETLIFY_SITE_ID`)
3. Go to https://app.netlify.com/account/applications/personal-access-tokens
4. Create a new personal access token
5. Copy the token (this is `NETLIFY_AUTH_TOKEN`)

### 4. Add Secrets to GitHub (Optional - for automatic deployments)

If you want GitHub Actions to auto-deploy on every push to `main`:

1. Go to repo → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add:
   - Name: `NETLIFY_AUTH_TOKEN` → Value: [personal access token from step 3]
   - Name: `NETLIFY_SITE_ID` → Value: [site ID from step 3]

Once secrets are added, `.github/workflows/deploy-netlify.yml` will auto-deploy on push to `main`.

### 5. Configure Custom Domain (dev.lhotselab.com)

1. In Netlify site settings → Domains → Custom domains
2. Click "Add custom domain"
3. Enter: `dev.lhotselab.com`
4. Netlify will confirm or show DNS records needed

In **Cloudflare DNS** for `lhotselab.com`:
- Add CNAME record: `dev` → `[netlify-subdomain].netlify.app` (or follow Netlify's exact DNS records)
- Example: `dev CNAME example-site-12345.netlify.app`

Wait a few minutes for DNS to propagate. Then visit `https://dev.lhotselab.com` — it should load your MVP.

## Verification

- ✅ Netlify site is live (at temporary URL)
- ✅ GitHub Actions auto-deploys on push (if secrets added)
- ✅ Custom domain `dev.lhotselab.com` points to Netlify
- ✅ Site is accessible over HTTPS (Netlify handles cert automatically)

## Troubleshooting

- **Build fails**: Check Netlify deploy logs (Site → Deploys → click deploy → see logs)
- **Domain not working**: Check DNS records in Cloudflare, wait for propagation
- **Auto-deploy not working**: Verify `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` are in GitHub Secrets

## Cost

- **Netlify Free Tier**: ✅ No credit card required
  - Bandwidth: 100 GB/month
  - Build minutes: 300/month
  - Deployments: unlimited
  - Custom domains: yes
  - HTTPS: yes
  - Enough for dev/preview environments

## Next Steps

Once live on dev.lhotselab.com:

1. Test the MVP on mobile/desktop
2. Get feedback on design and UX
3. When ready for production, create a separate Netlify site for `lhotselab.com` (or keep all on one site with multiple domains)

---

**Questions?** See Netlify docs: https://docs.netlify.com
