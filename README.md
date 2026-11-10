# SiteMaison
React + Vite + React Three Fiber + GSAP. All free tooling.

## Run locally
    npm install
    cp .env.example .env   # add Web3Forms key + Fiverr URL
    npm run dev

## Setup
- Contact form: free access key at web3forms.com -> VITE_WEB3FORMS_KEY
- Fiverr button: VITE_FIVERR_URL
- Add projects/links in src/data.js (keep link null until real)

## Deploy (Cloudflare Pages, free)
1. Push to GitHub; Cloudflare Pages > Create project > connect repo.
2. Build command `npm run build`, output directory `dist`.
3. Add the two env vars under Settings > Variables, then redeploy.
public/_redirects handles SPA routing; public/_headers sets security headers.
Netlify/Vercel also work (build `npm run build`, publish `dist`).

## Performance
3D is lazy-loaded, DPR capped at 1.5, skipped for reduced-motion users. Native iOS scrolling kept.