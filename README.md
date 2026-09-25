# Gino Med — Vaginismus Treatment Landing Page

Official landing page for **Gino Med**, a gynecology clinic specializing in the treatment of vaginismus (vaginizm).  
Built with plain HTML, CSS, and JS — lightweight, fast, and ready for GitHub Pages + Cloudflare domain.

## Purpose

This site provides:
- Clear information about vaginismus (symptoms, causes, treatment approach).
- Details about Gino Med’s 3-step individualized treatment program.
- Contact options via phone (+998 99 766 34 33) and Telegram (@devioruz).
- FAQ for patients searching in Uzbek (Latin/Cyrillic) and Russian.

Designed to be:
- SEO-friendly for queries like “vaginizm davolash”, “vaginizm klinika Toshkent”.
- LLM/crawler-friendly with structured data (MedicalClinic, FAQPage).

## Project structure

- `index.html` – main landing page
- `css/styles.css` – all styles and animations
- `js/main.js` – language switcher (Latin/Cyrillic/Latin26), FAQ logic, mobile menu
- `icons/` – favicon, app icons, hero image, 3-step diagram

## How to deploy on GitHub Pages

1. Create a new repository on GitHub:
   - Example name: `vaginizm-uz`.
2. Upload all project files into the root of that repo.
3. Go to:
   - Settings → Pages → Source → “Deploy from a branch”
   - Branch: `main` (or `master`), Folder: `/ (root)`
4. Save. Your site will be available at:
   - `https://your-username.github.io/vaginizm-uz/`

## How to connect your domain via Cloudflare

Assuming:
- You own a domain (e.g., `vaginizm.uz`) managed in Cloudflare.
- You want it to point to GitHub Pages.

Steps:

1. In GitHub Pages settings:
   - Under “Custom domain”, enter your domain, e.g.:
     - `www.vaginizm.uz` or `vaginizm.uz`.
   - Check “Enforce HTTPS” (after DNS is ready).
   - Save.

2. In Cloudflare DNS for that domain:

   Recommended using CNAME:

   - For root domain (`vaginizm.uz`):
     - Type: `CNAME`
       - Name: `@`
       - Target: `your-username.github.io`
       - Proxy status: Proxied (orange cloud) or DNS only — both work; “Proxied” is fine.

   - For www (`www.vaginizm.uz`):
     - Type: `CNAME`
       - Name: `www`
       - Target: `your-username.github.io`
       - Proxy status: Proxied or DNS only.

3. Wait a few minutes (up to 15–30 min).
4. Visit your domain — it should load the GitHub Pages site with HTTPS.

## To-do before launch

- [ ] Confirm all clinic details are correct:
  - Phone: +998 99 766 34 33
  - Telegram: https://t.me/devioruz
- [ ] Ensure domain is set in GitHub Pages and DNS records are active.
- [ ] (Optional) Add exact clinic address to MedicalClinic schema if needed for local SEO.
