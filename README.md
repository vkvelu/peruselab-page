# PeruseLab GitHub/GitLab Page

A lightweight public product landing page for **PeruseLab**, an AI-enabled chemical informatics platform for molecular drawing, chemical structure search, scientific documentation, analytics, 3D visualization, multilingual AI-assisted workflows, and collaboration.

## Live Site URL

After enabling GitHub Pages from this repository, the site will publish at:

```text
https://vkvelu.github.io/peruselab-page/
```

If you use a different repository name, replace `peruselab-page` with that repository name.

## Files

- `index.html` — page content and structure
- `styles.css` — responsive design and visual styling
- `script.js` — mobile menu, current year, and copy-email behavior
- `assets/images/peruselab-logo.svg` — simple PeruseLab logo concept
- `assets/images/favicon.svg` — favicon
- `.gitlab-ci.yml` — optional GitLab Pages deployment pipeline

## Recommended edits before publishing

1. Confirm the public contact email.
2. Update `og:url` and `og:image` in `index.html` if the repository name changes.
3. Add a public PeruseLab app/demo link if you want the `Request a Demo` button to go somewhere other than the contact section.
4. Add screenshots or demo videos later, once you have polished product visuals for ACS/ABCChem.
5. Replace the included logo concept with your official PeruseLab logo if one is available.

## Publish with GitHub Pages

1. Create a repository named `peruselab-page`.
2. Copy these files into the root of the repository.
3. Commit and push to `main` or `master`.
4. In GitHub, open **Settings > Pages**.
5. Choose **Deploy from a branch**.
6. Select your branch and `/ (root)` folder.
7. Save.
8. Visit `https://vkvelu.github.io/peruselab-page/` after deployment finishes.

## Publish with GitLab Pages

This package includes a simple `.gitlab-ci.yml` file. Push these files to GitLab and make sure GitLab CI/CD is enabled. GitLab will copy the static files into a `public/` folder and publish them as a Pages artifact.

## Notes

This repository is intended to be public-facing marketing/product content. Do not add proprietary PeruseLab source code, API keys, unpublished business strategy, confidential customer information, or private architecture details.
