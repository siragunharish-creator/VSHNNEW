# VSHN Builders website

Next.js 14 (App Router) + Tailwind CSS. Deploys to Vercel with zero config.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production check
```

## Deploy (GitHub → Vercel)
1. `git init && git add . && git commit -m "VSHN Builders website"`
2. Create a GitHub repo and push.
3. In Vercel: **Add New → Project → import the repo → Deploy** (framework is auto-detected).
4. After connecting your domain, set the env var `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` and redeploy (used for canonical URLs, sitemap, schema).

## Where to edit content
Everything lives in **`src/data/site.js`**:
projects, package rates, gallery, videos, testimonials, Google reviews, social links, FAQs, service areas, contact details.
Images go in `public/images/` (e.g. `public/images/gallery/`, `public/images/projects/`) and are referenced like `/images/projects/my-house.jpg`.

## Still to replace with real VSHN content
- Hero photo (`site.heroImage`)
- Projects (set `placeholder: false` when real) with photos, plans, 3D, testimonial
- 2D → 3D → Construction → Completed images (`journeySteps`)
- Gallery photos, video links (Instagram/YouTube)
- Customer testimonials and Google rating/count/link (`site.googleReviews`)
- Exact Google Maps link (`site.mapLink`)
- Logo: `public/images/logo.png` was cropped from the supplied sticker image; swap in a clean transparent PNG/SVG if you have one
- Enquiry form backend: `src/app/api/enquiry/route.js` (currently validates + logs; add email/Sheets/CRM at the marked spot)
