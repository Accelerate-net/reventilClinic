# Reventil Lung Clinic — website

Single-page site for Reventil Lung Clinic (Dr. Sreelakshmi K P), built with Next.js (App Router, static export) and Tailwind CSS. Deployed to GitHub Pages at **reventilclinic.com**.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Editing content

Everything the clinic may want to change lives in [`lib/site.ts`](lib/site.ts): phone, WhatsApp number, address, hours, doctor qualifications, services, FAQs and featured YouTube videos. Items marked `TODO` are placeholders.

### Photos

Drop files into `public/images/` and rebuild — the illustrations are replaced automatically:

| File | Used for |
| --- | --- |
| `doctor.png` (or .webp/.jpg) | Hero portrait and doctor card. A transparent cut-out looks best. |
| `clinic.jpg` | Clinic photo in the first card row. |
| `care.jpg` | Photo beside the services grid. |

## Lead capture

- **Appointment form** (bottom of page) and **call-back form** (beside the FAQs) collect name + mobile number, plus concern and preferred date.
- With `NEXT_PUBLIC_LEAD_ENDPOINT` set, each submission is posted to a Google Sheet (and optionally emailed) through the Apps Script in [`lead-capture/google-apps-script.gs`](lead-capture/google-apps-script.gs) — setup steps are at the top of that file. The visitor then sees a thank-you with a "Confirm on WhatsApp" button.
- Without an endpoint, submitting opens WhatsApp with the details pre-filled, so the site works from day one.
- Each lead carries its source form, UTM parameters, `gclid`/`fbclid`, referrer and landing page for campaign tracking.
- Mobile visitors always see a fixed **Call / WhatsApp / Book Now** bar.
- Google Tag Manager (`GTM-M5DKV48D`, set in `lib/site.ts`) loads on every page. The site pushes `generate_lead`, `click_call`, `click_whatsapp` and `click_book` events to the data layer; add a GA4 tag and Custom Event triggers for them inside GTM.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `./out` to GitHub Pages.

1. Repo → Settings → Pages → Source: **GitHub Actions**.
2. Repo → Settings → Secrets and variables → Actions → **Variables**: add `NEXT_PUBLIC_LEAD_ENDPOINT`.
3. Point DNS for `reventilclinic.com` at GitHub Pages (A records `185.199.108.153`, `.109.153`, `.110.153`, `.111.153`; `www` CNAME to `<org>.github.io`), then set the custom domain under Settings → Pages. `public/CNAME` is already in place.
