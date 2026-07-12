# Channex website (channex.io)

Server-rendered marketing site, deployed as a Cloudflare Worker.

## Stack

- [React Router](https://reactrouter.com/) v8 (framework mode) — file-based routes in `app/routes/`, SSR by default
- React 19 + Vite 8
- [@cloudflare/vite-plugin](https://developers.cloudflare.com/workers/vite-plugin/) — builds and serves the Worker locally
- Tailwind CSS v3 + shadcn/ui components
- TypeScript

Every route exports a `meta()` function so title/description/canonical/Open Graph/Twitter/JSON-LD tags are rendered
server-side (see `app/lib/seo.ts`), rather than injected client-side after hydration.

## Local development

```sh
npm install
npm run dev
```

## Typecheck

```sh
npm run typecheck
```

## Build

```sh
npm run build
```

Outputs `build/client` (static assets) and `build/server` (the Worker bundle).

## Deploy

Push to `main` with a Cloudflare Workers Builds git integration configured (Cloudflare dashboard → Workers & Pages →
Create → Connect to Git), which runs `npm run build` then `wrangler deploy` automatically. To deploy manually:

```sh
npm run deploy
```

`wrangler.jsonc` holds the Worker's non-secret config (name, compatibility date). There are no environment
variables/bindings for this project — it's a static content site with no backend.
