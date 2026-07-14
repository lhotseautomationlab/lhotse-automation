Deploying to Cloudflare Pages (lhotselab.com)

This project is configured to support deployment to Cloudflare Pages via GitHub Actions. The workflow at .github/workflows/deploy-cloudflare-pages.yml will build the app and attempt to use Cloudflare's next-on-pages adapter to produce a Pages-friendly output directory.

Before enabling automatic deploys, do the following steps:

1. Cloudflare Account & Pages project
   - Create a Cloudflare account (if not already present) and create a Pages project.
   - Note the Account ID and Pages Project Name. You'll need them for GitHub secrets.

2. Add required GitHub secrets
   - CF_API_TOKEN: A Cloudflare API token with 'Pages:Edit' and 'Account:Read' scopes (or full Pages permissions).
   - CF_ACCOUNT_ID: Your Cloudflare Account ID (string)
   - CF_PROJECT_NAME: The Pages project name (string)

3. DNS / Custom domain
   - Add the custom domain (www.lhotselab.com) in the Cloudflare Pages project's Custom domains panel.
   - Cloudflare will provide records/CNAME to add — since the domain is managed on Cloudflare, Pages will validate automatically.

4. Adjust the workflow if you prefer a different adapter
   - The workflow uses: npx @cloudflare/next-on-pages@latest build --output ./out
   - If you prefer to build differently (e.g., static export or a different adapter), update that step and the directory the pages-action points to.

5. Manual deploy (optional)
   - You can also build locally and use wrangler to publish: npx @cloudflare/next-on-pages@latest build --output ./out && npx wrangler pages publish ./out --project-name "$PROJECT_NAME" --branch main

6. Troubleshooting
   - If Pages cannot serve SSR features, consider deploying to Cloudflare Workers with the next-on-pages adapter or use Vercel if SSR dynamic features are required.

7. Security
   - Keep CF_API_TOKEN secret. Do not commit tokens or account IDs to the repository.

If you want me to commit the secrets to your GitHub repository (via the API) and trigger the workflow, provide the necessary tokens and permission, or authorize me to proceed interactively. Otherwise, push to main and the workflow will run once you set the required secrets.
