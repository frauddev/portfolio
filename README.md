# Niko Setiawan — Portfolio

Personal portfolio site for Niko Setiawan, Full-Stack Developer. Static HTML/CSS/JS — no build step, no framework, no paid libraries.

## Stack

- Plain HTML5, CSS3, vanilla JS
- Google Fonts: Anton, Inter, Space Grotesk, JetBrains Mono
- Brand icons inlined as SVG (sourced from [Simple Icons](https://simpleicons.org), CC0)

## Structure

```
index.html          entry point
css/style.css        all styles
js/script.js          nav highlighting, scroll reveal, contact form, parallax background
assets/images/       profile photo + project screenshots
favicon.svg
robots.txt
sitemap.xml
.gitignore
```

## Running locally

No build step — just serve the folder statically, e.g.:

```bash
python -m http.server 8000
```

then open `http://localhost:8000`.

Opening `index.html` directly via `file://` also works, but a local server is recommended so relative asset paths behave the same as in production.

## Deploying

Before deploying to a real domain, update the placeholder domain (`https://niko-setiawan.dev/`) in:

- `index.html` — canonical link, Open Graph/Twitter meta tags, JSON-LD `Person` schema
- `robots.txt` — sitemap URL
- `sitemap.xml` — page URL

## Sections

Sidebar (sticky profile card) + scrollable content: Hero, Recent Projects, Experience, Tools, Contact.

The Tools section proficiency percentages are fixed, hand-picked values (not randomized on each load) so the numbers stay consistent across visits.

## Ignored files

`dev-magician.png`, `sample*.png`, and `SITE_SPEC.md` are kept locally as design references but are git-ignored since they aren't used by the live site.
