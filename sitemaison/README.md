# SiteMaison

React + Vite + React Three Fiber + GSAP.

## Run
```sh
npm install
cp .env.example .env
npm run dev
```

## Configuration
- Set VITE_WEB3FORMS_KEY using a Web3Forms access key.
- Set VITE_FIVERR_URL to the real Fiverr profile or gig URL.
- Never put private/service keys in VITE_ variables.

## Cloudflare Pages
- Root directory: sitemaison
- Build command: npm run build
- Build output directory: dist
- Node: 18+
- Configure the two environment variables before deploying.

The public/_redirects file provides SPA fallback routing. public/_headers configures response headers.