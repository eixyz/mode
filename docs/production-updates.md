# Production update checklist

## What is preserved
React, TypeScript, Vite, Tailwind and the existing page layouts remain. Contact and appointment emails notify CONTACT_EMAIL and SUPPORT_EMAIL in production (support only on preview deployments, see "Who receives form emails") and confirm receipt to the visitor. No real emails were sent during local verification: SMTP was mocked.

## Vercel deployment
1. Deploy the commit to the existing Vercel project (or let the connected GitHub branch deploy it).
2. Keep CONTACT_EMAIL, CONTACT_EMAIL_PASSWORD and current SMTP settings unchanged. Keep SUPPORT_EMAIL set to the support inbox.
3. Verify the new deployment's contact and appointment pages. Both now send an explicit agreement field; deploy the frontend and API together.
4. Review Vercel Firewall/rate limits for `/api/contact` and `/api/appointment`. Dependency updates do not provide distributed spam protection.

## Support-only diagnostic email
`GET /api/mail-check` verifies SMTP only; it sends no email. `POST /api/mail-check` sends one fixed diagnostic email exclusively to SUPPORT_EMAIL. The endpoint refuses a missing support address or one equal to CONTACT_EMAIL. It never accepts a recipient from the request and sends no visitor confirmation.

Authenticate with `Authorization: Bearer <your MAIL_DEBUG_TOKEN>` (keep the token private). Existing query-token connectivity checks remain supported for compatibility, but prefer the header so the token is not stored in browser history/access logs. Remove MAIL_DEBUG_TOKEN after diagnostics to disable the endpoint.

## Who receives form emails
| Deployment | Contact and appointment form notifications | Subject |
|---|---|---|
| Production (`VERCEL_ENV=production`, the live domain) | CONTACT_EMAIL (info@, official) **and** SUPPORT_EMAIL (support@) | normal |
| Preview and `vercel dev` (`VERCEL_ENV=preview` / `development`) | SUPPORT_EMAIL only; refused if SUPPORT_EMAIL is missing or equals CONTACT_EMAIL | starts with `[TEST]` |

The visitor's receipt copy goes to the address typed into the form in every environment. To test the forms end to end, use a Vercel **preview** deployment (any pull request or non-main branch) and type your own address. Never test by submitting the forms on the live domain: those are real submissions and reach the official inbox. To stop copying support@ on official requests later, remove SUPPORT_EMAIL from the Production environment only, and keep it for Preview. Note that the diagnostic endpoint needs SUPPORT_EMAIL in whichever environment you call it.

Actual SMTP delivery cannot be confirmed locally without the Vercel environment. Verify one support-only diagnostic after deployment.

## Decap editing
The existing GitHub backend, OAuth provider, News, Events, Documents and editorial workflow are unchanged. `/admin/` now includes **Passport & Visa Texts**, with separate English, German and Portuguese entries for each service. Existing text was copied unchanged to isolated JSON files. These files are imported into the static site at build time, with the original translations as fallback. News and events support English, German and Portuguese (Decap i18n, one file per language, English required); missing translations fall back to English. **Embassy Settings** holds contact details, opening hours and appointment closure days in `content/settings/`. Documents uploaded in Decap appear on the Forms & Documents page. Staff instructions: `docs/staff-editing.md`.

Changes follow the existing review/publish workflow. Once merged into the configured `main` branch, Vercel must rebuild to display the edited text. For IONOS static hosting, rebuild and upload the new dist folder as before. A CMS save alone does not update an already-uploaded dist folder.

When staff can test, edit one service field as a draft, review it, publish, confirm the rebuilt page in that language, and revert the trial edit if needed. GitHub sign-in, draft saving and publishing were not exercised here because no staff GitHub session is available. Old `/news/admin` and `/events/admin` links redirect to `/admin/`; the insecure client-side access-code editors were removed.

## Security maintenance
Run `npm audit` / `bun audit` regularly and check runtime and development findings separately. Keep React 18, Vite 7 and Tailwind 3 compatibility; do not use audit force-upgrades without testing. The vulnerable MCP integration was removed, not replaced with a new architecture. Any previously hosted MCP revision requires separate removal/disablement; repository deletion alone does not prove a hosted endpoint was removed. No new Cloud services were enabled.

The final npm lockfile audit found **no high or critical findings**, but **nine moderate and one low finding remain**. Two moderate findings are in React Router: the advertised fixes require a major upgrade, which was deliberately not forced into this cautious production update. The site does not use SSR hydration or navigate to raw CMS URLs; internal links keep their fixed route prefixes. This reduces exposure but does not remove the advisories. The remaining findings concern development tooling (TypeScript ESLint/minimatch and esbuild). Plan a separately tested compatibility update rather than calling the project vulnerability-free.
## Third-party resources and the privacy policy
Fonts are self-hosted in `public/fonts` (SIL Open Font License); do not re-add Google Fonts. The official PDF forms are self-hosted in `public/documents` (the old domain embassy-of-mozambique.de offers no HTTPS). The Google Maps map on the contact page loads only after the visitor clicks "Show map" (`src/components/MapEmbed.tsx`); nothing third-party is loaded before that. Any new external resource (script, font, embed, analytics) requires a matching update of the privacy policy in `src/lib/legal.ts` in all three languages; `tests/legal.test.ts` checks that the languages stay aligned.
