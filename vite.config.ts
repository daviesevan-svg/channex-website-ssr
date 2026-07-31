import { reactRouter } from "@react-router/dev/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig, type ViteDevServer } from "vite";
import path from "path";
import fs from "fs";
import { utils, write } from "xlsx";
import { integrations } from "./app/data/integrations";
import { blogPosts } from "./app/data/blogPosts";
import { ogImageFor } from "./app/lib/og-image";

const OTA_XLSX_PATH = "/channex-ota-integrations.xlsx";

// Blog featured images are WebP, which some social scrapers won't render, so
// each one needs a JPEG sibling for its og:image (see ogImageFor). A missing
// sibling produces a broken share preview and nothing else — no error, no
// visible symptom on the site — so fail the build instead.
function assertOgImages() {
  return {
    name: "assert-og-images",
    buildStart() {
      const missing = blogPosts
        .map((p) => ogImageFor(p.featuredImage))
        .filter((url) => !fs.existsSync(path.join("public", url)));
      if (missing.length) {
        throw new Error(
          `${missing.length} blog featured image(s) have no JPEG social-card sibling:\n  ` +
            missing.join("\n  ") +
            `\nGenerate each one at 1200px wide from the .webp, e.g.\n` +
            `  sips -s format jpeg -s formatOptions 80 -Z 1200 public/<name>.webp --out public/<name>-og.jpg`,
        );
      }
    },
  };
}

// The "Download OTAs (XLS)" export, generated once from integrations data.
// Doing this at build time (instead of in the browser on click) means the
// file is served as an edge-cached static asset and the xlsx library never
// ships to the client.
function buildOtaXlsx(): Buffer {
  const otaList = integrations.filter((i) => i.categories.includes("OTA"));
  const data = otaList.map((i) => ({
    Name: i.name,
    Description: i.description,
    Categories: i.categories.join(", "),
    Website: i.website || "",
  }));
  const ws = utils.json_to_sheet(data);
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, "OTAs");
  return write(wb, { type: "buffer", bookType: "xlsx" });
}

function emitOtaXlsx() {
  return {
    name: "emit-ota-xlsx",
    // Build: write into the client assets directory so wrangler uploads it
    // with the other static files.
    closeBundle() {
      const clientDir = path.resolve(__dirname, "build/client");
      if (!fs.existsSync(clientDir)) return;
      const out = path.join(clientDir, OTA_XLSX_PATH.slice(1));
      if (fs.existsSync(out)) return;
      fs.writeFileSync(out, buildOtaXlsx());
      console.log(`Generated ${OTA_XLSX_PATH} (${integrations.filter((i) => i.categories.includes("OTA")).length} OTAs)`);
    },
    // Dev: serve the same file on the fly so the download link works locally.
    configureServer(server: ViteDevServer) {
      server.middlewares.use(OTA_XLSX_PATH, (_req, res) => {
        res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        res.setHeader("Content-Disposition", `attachment; filename="channex-ota-integrations.xlsx"`);
        res.end(buildOtaXlsx());
      });
    },
  };
}

// NOTE: integration logos used to be hotlinked from raw.githubusercontent.com
// and pruned from the build here to save upload size. That made the site depend
// on an external repo staying public (and GitHub raw isn't a CDN), so the logos
// are now self-hosted from public/lovable-uploads — 6.7 MB, edge-cached by
// Cloudflare. Nothing to prune any more.

export default defineConfig({
  // Copyright year, fixed at build time (see app/components/Footer.tsx). Not
  // computed at runtime: server and client would disagree across New Year,
  // which React reports as a hydration mismatch.
  define: {
    __BUILD_YEAR__: JSON.stringify(String(new Date().getFullYear())),
    // Namespaces the edge cache per deploy, so shipping a build invalidates
    // every cached page instead of leaving the previous version's HTML (with
    // its now-404 asset hashes) to expire on its own.
    __BUILD_ID__: JSON.stringify(Date.now().toString(36)),
  },
  // Dev-only: crawl every route at server startup so Vite discovers and
  // optimizes ALL dependencies up front. Without this, each newly visited page
  // (e.g. /integrations pulling in xlsx) triggers "optimized dependencies
  // changed. reloading", which invalidates route modules mid-load and traps
  // the browser in a "Error loading route module, reloading page..." loop.
  // See https://github.com/remix-run/react-router/issues/12786.
  server: {
    warmup: {
      clientFiles: ["./app/root.tsx", "./app/routes/**/*.tsx"],
    },
  },
  plugins: [cloudflare({ viteEnvironment: { name: "ssr" } }), reactRouter(), emitOtaXlsx(), assertOgImages()],
  resolve: {
    alias: {
      "@": "/app",
    },
  },
});
