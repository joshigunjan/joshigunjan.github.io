# Gunjan Joshi — GitHub Pages Site

This is a static HTML site (no Jekyll required). It is ready for GitHub Pages.

## Quick setup

1. Put these files in your repo `joshigunjan/joshigunjan.github.io` (or any GitHub Pages repo).
2. In GitHub: **Settings → Pages → Build and deployment → Source** = `Deploy from a branch`
3. Select branch `main` (or `master`) and folder `/ (root)`
4. Save.

## Customize

- Replace `assets/img/profile.svg` with your photo:
  - Add `assets/img/profile.jpg`
  - In `index.html` / `about.html` sidebar: change the `src` to `assets/img/profile.jpg`

- Update sidebar links (email / Scholar / LinkedIn) inside each HTML file:
  - Search for `YOUR.EMAIL@domain.com`

- Update publications in `research.html`:
  - Each publication is a `<div class="pub" data-pub="journal|conference">...</div>`

## CV

Your CV is already included at: `assets/GunjanJoshi_CV_Feb2026.pdf`