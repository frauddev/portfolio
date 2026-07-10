# Niko Setiawan — Portfolio

Personal portfolio site for Niko Setiawan, Full-Stack Developer. Static HTML/CSS/JS — no build step, no framework, no paid libraries.

## Stack

- Plain HTML5, CSS3, vanilla JS
- Google Fonts: Anton, Inter, Space Grotesk, JetBrains Mono
- Brand icons inlined as SVG (sourced from [Simple Icons](https://simpleicons.org), CC0)
- Static dark background (`--bg` on `body`), no animation layer

## Structure

```
index.html                     entry point
css/style.css                   all styles
js/script.js                     nav highlighting, scroll reveal, contact form
assets/images/                  profile photo + project screenshots
favicon.ico
robots.txt
sitemap.xml
.gitignore
.github/workflows/              CI/CD: auto-deploy to the VPS (see DEPLOYMENT.md)
deploy/docker-compose.yml       portfolio container (joins existing nes-net)
deploy/nginx.conf                full nes-nginx config (existing + portfolio server block) — drop-in replacement
DEPLOYMENT.md                   one-time VPS + GitHub setup for auto-deploy
```

## Running locally

No build step — just serve the folder statically, e.g.:

```bash
python -m http.server 8000
```

then open `http://localhost:8000`.

Opening `index.html` directly via `file://` also works, but a local server is recommended so relative asset paths behave the same as in production.

## Deploying

Auto-deploy pipeline: push to `master` → production, synced via SSH/rsync to the VPS. One-time setup (VPS + GitHub Secrets) is documented in **[DEPLOYMENT.md](DEPLOYMENT.md)** — nothing there has been run yet, it's a guide for you to follow.

Domain is `https://niko-theimpostor.dev/` — already set in `index.html` (canonical link, Open Graph/Twitter meta tags, JSON-LD `Person` schema), `robots.txt`, and `sitemap.xml`.

## Sections

Sidebar (sticky profile card) + scrollable content: Hero, Recent Projects, Experience, Tools, Contact.

The Tools section proficiency percentages are fixed, hand-picked values (not randomized on each load) so the numbers stay consistent across visits.

## Ignored files

`dev-magician.png`, `sample*.png`, and `SITE_SPEC.md` are kept locally as design references but are git-ignored since they aren't used by the live site.
