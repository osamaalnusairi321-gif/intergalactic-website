# Intergalactic

A static website for a workflow automation service based in Norman, Oklahoma. The page is intentionally English-only and does not depend on a framework, build step, analytics, or a form provider. Geist and GSAP are stored locally in the repository, so the published page has no runtime font or script CDN dependency.

## Before publishing

1. Confirm that `osamaalnusairi321@gmail.com` is the public contact address you want to use. It appears on the page and in the source code.
2. Confirm the legal name of the existing LLC and that you can use **Intergalactic** as its public-facing name. This site does not claim the LLC's legal name or display a registration number. `intergalactic.com` is used by another technology agency; check naming and your preferred domain before buying one or publishing the brand widely.
3. Read the service copy and make sure it matches the work you plan to deliver. The site has no invented case studies, client logos, outcomes, or prices.
4. Send a test message from the published page. The contact button opens a visitor's email app; the address is also shown so they can copy it.

## Publish with GitHub Pages

1. Create a GitHub repository. Upload the **contents** of this folder into its root, not the ZIP file itself.
2. In the repository, select **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then select **main** and **/(root)**.
3. Open the URL GitHub Pages gives you. Check the page at desktop and mobile widths, the navigation, and the contact link.
4. If you later buy a domain, configure it in GitHub Pages and follow GitHub's DNS instructions for that domain. No domain is hard-coded in these files.

The relative asset links work both at a custom domain and at a GitHub project URL such as `https://USERNAME.github.io/REPOSITORY/`.

## Run locally

Open `index.html` directly, or run `python3 -m http.server 8000` in this folder and visit `http://localhost:8000/`.

## Files

- `index.html` — complete page and copy
- `styles.css` — responsive styling and light/dark system tokens
- `script.js` — carousel, accordion, and reduced-motion-safe GSAP choreography
- `favicon.svg` — transfer-gate brand mark
- `assets/fonts/` — self-hosted Geist variable font and license
- `assets/images/` — locally stored generated editorial imagery
- `assets/js/` — pinned local GSAP and ScrollTrigger builds
- `design-system/intergalactic/MASTER.md` — design-system rationale generated during the redesign
- `.nojekyll` — serve files as-is on GitHub Pages

## Contact behavior

The site does not collect or store visitor data. The email button opens a pre-addressed message in the visitor's own email app. If they have not configured an email app, they can copy the visible address and use webmail. If you later add a hosted form, evaluate that provider's data handling and update the site accordingly.
