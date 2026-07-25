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

1. stores the enquiry in D1 (`contact_enquiry`), and
2. emails it to the sales inbox via SparkPost.

The visitor sees success if **either** worked. If both fail, the form says so and
shows the direct email address rather than a success message that isn't true.

### Required setup

Add **`SPARKPOST_API_KEY`** as an encrypted **Secret** in the Cloudflare
dashboard (Worker → Settings → Variables & Secrets). Until it's set, enquiries
are still captured in D1 — the Worker logs `contact: SPARKPOST_API_KEY is not
set` and the visitor still gets a success page, because nothing was lost.

Do **not** put it in `wrangler.jsonc`: every key in `vars` is re-applied on
deploy and would overwrite the dashboard secret of the same name. (That's why
there is no `vars` block in this repo's config.)

**Account region matters.** SparkPost keys are region-bound and the default here
is the EU host (`https://api.eu.sparkpost.com`), matching the account the
booking engine uses. If this key belongs to a US account, also add a plain
Variable `SPARKPOST_API_URL=https://api.sparkpost.com` — otherwise auth fails
even though the key is valid. A 401/403 logs a hint about exactly this.

### Addresses

Defaults, both overridable with plain Variables:

| Variable | Default |
| --- | --- |
| `CONTACT_TO` | `hello@channex.io` |
| `CONTACT_FROM` | `Channex website <noreply@channex.io>` |

`Reply-To` is set to the enquirer, so replying from the inbox goes back to them.
The `CONTACT_FROM` domain must be a verified sending domain in SparkPost —
`channex.io` itself is **not** configured there, which is why the default sends
from `mail.channex.io`.

Open and click tracking are explicitly disabled (`options.open_tracking` /
`options.click_tracking`). Both default to on in SparkPost; leaving them on
would inject a tracking pixel and rewrite every link through a tracking domain.

### Reading stored enquiries

```sh
npx wrangler d1 execute channex-website --remote \
  --command "SELECT ts, first_name, last_name, email, company, emailed FROM contact_enquiry ORDER BY ts DESC LIMIT 20"
```

`emailed = 0` means the row was captured but the email didn't go out — worth
following up manually.

### Local development

Put local values in `.dev.vars` (gitignored). Note `.dev.vars` is read by
`npm run dev` but **not** by `vite preview`:

```
SPARKPOST_API_KEY=...
# Optional: point at a stub instead of the real API while testing
# SPARKPOST_API_URL=http://127.0.0.1:8788
```

## Deploy

Push to `main` with a Cloudflare Workers Builds git integration configured (Cloudflare dashboard → Workers & Pages →
Create → Connect to Git), which runs `npm run build` then `wrangler deploy` automatically. To deploy manually:

```sh
npm run deploy
```

`wrangler.jsonc` holds the Worker's non-secret config (name, compatibility date). There are no environment
variables/bindings for this project — it's a static content site with no backend.
