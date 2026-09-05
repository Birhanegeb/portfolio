# Birhane Gebrewahid — Portfolio

Personal portfolio site for Birhane Asefa Gebrewahid, Data Engineer / AI Engineer.
Built with React, TypeScript, Vite, and Tailwind CSS. Content is sourced directly
from the CV and from the pinned repositories at
[github.com/Birhanegeb](https://github.com/Birhanegeb).

## Tech stack

- [Vite](https://vite.dev) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Self-hosted variable fonts (Fraunces, Inter, IBM Plex Mono) via Fontsource — no external font requests
- No client-side router (single scrolling page) — works from any subpath, including a GitHub Pages project URL

## Project structure

```
src/
  components/
    sections/     # Hero, Experience, Skills, Projects, Education, Contact
    Rail.tsx       # scroll progress bar + desktop section nav
    Section.tsx    # shared section heading wrapper
  data/
    content.ts     # all CV/GitHub-sourced content lives here
  hooks/
    useScrollTracking.ts
public/
  Birhane-Gebrewahid-CV.pdf   # downloadable CV
.github/workflows/deploy.yml  # GitHub Pages deployment
```

To update content (experience, projects, skills, education), edit `src/data/content.ts`
only — the components render from that file.

## Local development

```bash
npm install
npm run dev
```

Open the printed local URL (typically http://localhost:5173).

## Production build

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The build output goes to `dist/`.

## Deploying to GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which builds the site and deploys
`dist/` to GitHub Pages automatically on every push to `main`.

**One-time setup after pushing this repo to GitHub:**

1. Go to the repository's **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).
4. The site will be published at:
   `https://<your-github-username>.github.io/<repository-name>/`

The Vite config uses a relative build base (`base: './'`), so the site works
correctly at any subpath — no need to hard-code the repository name anywhere.

## Adding this to your GitHub profile

- Add the live Pages URL to the repository's **About** section (gear icon on the repo
  page → Website field) so it shows up under the repo name.
- Optionally pin this repository from your profile (**Customize your pins**) so it's
  one of the first things recruiters see.
- Add the same URL to your GitHub profile README and to your LinkedIn "Contact info" /
  Featured section.

## Content policy

All experience, education, and project details come from the CV and the actual
GitHub repositories. Nothing is invented — see `src/data/content.ts` for the single
source of truth used across the site.
