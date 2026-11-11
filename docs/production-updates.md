# Production update checklist

## What is preserved
React, TypeScript, Vite, Tailwind and the existing page layouts remain. Contact and appointment emails still notify CONTACT_EMAIL and optional SUPPORT_EMAIL and confirm receipt to the visitor. No real emails were sent during local verification: SMTP was mocked.

## Vercel deployment
1. Deploy the commit to the existing Vercel project (or let the connected GitHub branch deploy it).
2. Keep CONTACT_EMAIL, CONTACT_EMAIL_PASSWORD and current SMTP settings unchanged. Keep SUPPORT_EMAIL set to the support inbox.
3. Verify the new deployment's contact and appointment pages. Both now send an explicit agreement field; deploy the frontend and API together.
4. Review Vercel Firewall/rate limits for `/api/contact` and `/api/appointment`. Dependency updates do not provide distributed spam protection.

## Support-only diagnostic email
`GET /api/mail-check` verifies SMTP only; it sends no email. `POST /api/mail-check` sends one fixed diagnostic email exclusively to SUPPORT_EMAIL. The endpoint refuses a missing support address or one equal to CONTACT_EMAIL. It never accepts a recipient from the request and sends no visitor confirmation.

Authenticate with `Authorization: Bearer <your MAIL_DEBUG_TOKEN>` (keep the token private). Existing query-token connectivity checks remain supported for compatibility, but prefer the header so the token is not stored in browser history/access logs. Remove MAIL_DEBUG_TOKEN after diagnostics to disable the endpoint. Do not test by submitting the public forms: those are real submissions and correctly notify the main inbox.

Actual SMTP delivery cannot be confirmed locally without the Vercel environment. Verify one support-only diagnostic after deployment.

## Decap editing
The existing GitHub backend, OAuth provider, News, Events, Documents and editorial workflow are unchanged. `/admin/` now includes **Passport & Visa Texts**, with separate English, German and Portuguese entries for each service. Existing text was copied unchanged to isolated JSON files. These files are imported into the static site at build time, with the original translations as fallback. News and events remain in the language authored by staff.

Changes follow the existing review/publish workflow. Once merged into the configured `main` branch, Vercel must rebuild to display the edited text. For IONOS static hosting, rebuild and upload the new dist folder as before. A CMS save alone does not update an already-uploaded dist folder.

When staff can test, edit one service field as a draft, review it, publish, confirm the rebuilt page in that language, and revert the trial edit if needed. GitHub sign-in, draft saving and publishing were not exercised here because no staff GitHub session is available. Old `/news/admin` and `/events/admin` links redirect to `/admin/`; the insecure client-side access-code editors were removed.

## Security maintenance
Run `npm audit` / `bun audit` regularly and check runtime and development findings separately. Keep React 18, Vite 7 and Tailwind 3 compatibility; do not use audit force-upgrades without testing. The vulnerable MCP integration was removed, not replaced with a new architecture. Any previously hosted MCP revision requires separate removal/disablement; repository deletion alone does not prove a hosted endpoint was removed. No new Cloud services were enabled.

The final npm lockfile audit found **no high or critical findings**, but **nine moderate and one low finding remain**. Two moderate findings are in React Router: the advertised fixes require a major upgrade, which was deliberately not forced into this cautious production update. The site does not use SSR hydration or navigate to raw CMS URLs; internal links keep their fixed route prefixes. This reduces exposure but does not remove the advisories. The remaining findings concern development tooling (TypeScript ESLint/minimatch and esbuild). Plan a separately tested compatibility update rather than calling the project vulnerability-free.