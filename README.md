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

## Contact form

The form on the homepage and `/contact` posts to the `action` in
`app/routes/contact.tsx`, which validates server-side and hands the enquiry to
`app/lib/contact.server.ts`. That does two independent things so one failing
can't lose a lead:

1. emails the enquiry to the sales inbox via [Resend](https://resend.com), and
2. stores it in D1 — **only if** a `DB` binding exists (see below).

If both fail, the form says so and shows the direct email address rather than a
success message that isn't true.

### Required setup

Add **`RESEND_API_KEY`** as an encrypted **Secret** in the Cloudflare dashboard
(Worker → Settings → Variables & Secrets). Until it's set, submissions are not
emailed — the form tells the visitor to email directly, and the Worker logs
`contact: RESEND_API_KEY is not set`.

Do **not** put it in `wrangler.jsonc`: every key in `vars` is re-applied on
deploy and would overwrite the dashboard secret of the same name.

The sender and recipient default to `noreply@channex.io` and `hello@channex.io`
in code. Override with `CONTACT_FROM` / `CONTACT_TO` if needed — the `from`
domain must be verified in Resend or Resend will reject the send.

### Optional: keep a copy in D1

Email alone means a Resend outage loses the enquiry. To also store submissions,
create a database and add the binding:

```sh
npx wrangler d1 create channex-website
```

Then add the returned id to `wrangler.jsonc`:

```jsonc
"d1_databases": [
  { "binding": "DB", "database_name": "channex-website", "database_id": "<id>" }
]
```

The `contact_enquiry` table is created on first write. Without the binding the
Worker logs `contact: no DB binding` once per isolate and continues email-only.

### Local development

Put local values in `.dev.vars` (gitignored):

```
RESEND_API_KEY=re_...
# Optional: point at a stub instead of the real API while testing
# RESEND_API_URL=http://127.0.0.1:8787/emails
```

## Deploy

Push to `main` with a Cloudflare Workers Builds git integration configured (Cloudflare dashboard → Workers & Pages →
Create → Connect to Git), which runs `npm run build` then `wrangler deploy` automatically. To deploy manually:

```sh
npm run deploy
```

`wrangler.jsonc` holds the Worker's non-secret config (name, compatibility date). There are no environment
variables/bindings for this project — it's a static content site with no backend.
