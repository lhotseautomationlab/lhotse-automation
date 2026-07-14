Vercel deployment (lhotse-automation)

This project is configured to deploy to Vercel. Follow these steps for a dev deploy and production later.

1. Connect repository to Vercel
   - In Vercel (personal account), click "New Project" and import the GitHub repo `lhotse-automation`.
   - Set the Root Directory to the repository root. Use the default build command: `npm run build` and output: automatically detected (Next.js).

2. Environment variables
   - In the Vercel project settings, add environment variables from .env.example. Do NOT paste secrets into the repo.
   - Set proper values for Production and Preview environments as needed.

3. Domains & DNS
   - Add the domain `lhotselab.com` to the Vercel project (Domains → Add).
   - Vercel will provide the DNS records required. Since DNS is managed in Cloudflare, follow these steps on Cloudflare:
     - For apex root (lhotselab.com): create an A record pointing to the Vercel verification IP(s) or use an ALIAS/ANAME depending on your DNS provider. Cloudflare supports CNAME flattening — Vercel may instruct to add two A records and a CNAME for verification.
     - For www: add a CNAME record pointing to cname.vercel-dns.com (or follow Vercel's exact instructions).
     - In Cloudflare, set the records to Proxy/Enabled (orange cloud) only after verification if you want Cloudflare features; otherwise leave Proxy disabled while verifying.
   - Set `lhotselab.com` as the Primary Domain in Vercel and create a redirect rule from `www` to apex (vercel.json already includes a redirect).

4. Trigger a dev deployment
   - Push your branch to GitHub. Vercel will automatically create a Preview deployment for the branch.
   - To create a quick dev deployment, deploy the branch and visit the Preview URL Vercel provides.

5. Production
   - When ready, merge to `main` and Vercel will deploy to Production. Verify HTTPS and custom domain settings.

Notes and tips
 - For Cloudflare-managed domains, double-check proxy (orange cloud) behavior if Vercel recommends DNS-only entries during verification.
 - For apex redirects, Vercel handles HTTPS and redirects automatically when domain is configured.
 - For DNS help: follow Vercel docs https://vercel.com/docs/custom-domains

Security
 - Add secrets (SENTRY_DSN, CF_API_TOKEN) to Vercel via the project settings — do not commit them to source control.
