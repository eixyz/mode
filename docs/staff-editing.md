# Editing the website — guide for Embassy staff

Open **https://www.mozambique-embassy.de/admin/** and sign in with your GitHub account.
Ask the web administrator to add your account first. You need "write" access to the website repository.

## What you can edit

| Section in /admin | What it changes on the website |
|---|---|
| **News & Announcements** | News page and homepage news, in English, German and Portuguese |
| **Events** | Events page and the featured event on the homepage |
| **Documents & Public Notices** | PDF downloads, listed first on *Services → Forms & Documents* |
| **Passport & Visa Texts** | The passport and visa service pages (one entry per language) |
| **Embassy Settings → Contact details** | Telephone, fax, email and address in the header, footer, contact page and legal pages |
| **Embassy Settings → Closure days** | Days on which the appointment calendar offers no appointments |
| **Embassy Settings → Opening hours** | Opening hours in the footer and on the contact page (one entry per language) |

The privacy policy, terms of use and page layouts can't be edited in /admin. Ask the web administrator to change them, because they must stay identical in all three languages.

## Writing in three languages

News and events have a language switch (EN / DE / PT) at the top of the editor.

- **English is required.** Enter the shared fields (ID, date, category, image) in the English tab.
- German and Portuguese are optional. If you leave the title empty in a language, visitors in that language see the English version.
- Dates are shown automatically in each language's format. Leave "Display date" empty unless you need special wording.

## From draft to published

1. **Save** keeps a draft. Nobody outside the editors can see it.
2. Set the status to **In review** when it's ready for a colleague to check.
3. **Publish** puts it on the website. The site rebuilds automatically, which takes about two minutes.

Every draft is checked automatically. If the check fails, for example because the English title is missing or an image file can't be found, a red ✗ appears next to the draft on GitHub, and the web administrator is notified. Correct the entry before publishing. A failed check never changes the live website by itself.

## Good practice

- Only upload photos the Embassy has the right to publish. Use landscape images at least 1200 px wide.
- Don't put personal data (passport numbers, visitors' names or contact details) in news, events or documents.
- Before changing **Contact details**, confirm the new number or address internally. It appears on every page.
- Remove past closure days from time to time. Add new ones at least a few weeks ahead.

## For the web administrator

- Local testing without GitHub sign-in:
  1. Terminal 1: `npm run dev` (website on http://localhost:8080).
  2. Terminal 2: `npm run cms` (starts `decap-server` on port 8081; the first run downloads it, answer "y").
  3. Open **http://localhost:8080/admin/index.html**. Locally, `/admin/` alone opens the website's 404 page; only Vercel rewrites it to the CMS.
  4. Decap detects the local server and opens without a login. Every save is written straight into `content/…` in your working copy; there is no draft/review step and nothing is pushed to GitHub.
  5. Check the result on http://localhost:8080 (switch languages for translated news), run `bun test`, then review with `git status` / `git diff`. Discard trial edits with `git restore content/` (and delete any new files it created).
- Testing the real GitHub flow: open https://www.mozambique-embassy.de/admin/, save a draft, and check the pull request that Decap creates. The CI check and a Vercel preview link appear there. Form submissions on that preview go to support@ only.
- Checks: `bun test` validates content, settings and legal texts. CI runs the same checks plus the build on every pull request (`.github/workflows/ci.yml`).
- To make the checks mandatory, enable branch protection on `main` and require the "Check website" status.

### Adding staff editors
1. Each staff member creates a free GitHub account (a work email is preferable) and turns on two-factor authentication.
2. Repository **Settings → Collaborators → Add people**, enter the username. GitHub emails an invitation; it must be accepted within 7 days.
3. The person opens https://www.mozambique-embassy.de/admin/, clicks **Login with GitHub** and authorizes the app once.
4. To remove someone: **Settings → Collaborators → Remove**. Their access to /admin ends immediately.

Collaborators on a personal repository always get write access to the entire repository, code included. The ruleset on `main` (required pull request, "Check website" status, **Require review from Code Owners**, bypass for Repository admin only) plus `.github/CODEOWNERS` keeps them from changing anything outside `content/` and `public/uploads/` without your review. On a private repository, GitHub enforces rulesets only on a paid plan (GitHub Pro, or an organization on Team), or if the repository is public.
