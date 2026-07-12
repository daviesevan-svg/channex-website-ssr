import { reactRouter } from "@react-router/dev/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig, type ViteDevServer } from "vite";
import path from "path";
import fs from "fs";
import { utils, write } from "xlsx";
import { integrations } from "./app/data/integrations";

const OTA_XLSX_PATH = "/channex-ota-integrations.xlsx";

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

// Integration logos referenced via raw.githubusercontent.com URLs in
// integrations.ts are served from GitHub's CDN and don't need to ship in the
// Worker's static assets (saves ~14 MB of upload). Only prune files that are
// CDN-served; local-only uploads (logo, favicon, blog images) stay put.
function pruneCdnLogos() {
  return {
    name: "prune-cdn-logos",
    closeBundle() {
      const uploadsDir = path.resolve(__dirname, "build/client/lovable-uploads");
      if (!fs.existsSync(uploadsDir)) return;

      const integrationsContent = fs.readFileSync(
        path.resolve(__dirname, "app/data/integrations.ts"),
        "utf-8",
      );
      const cdnLogoRegex = /raw\.githubusercontent\.com\/[^"]+\/lovable-uploads\/([^"]+)/g;
      const cdnLogos = new Set<string>();
      let match;
      while ((match = cdnLogoRegex.exec(integrationsContent)) !== null) {
        cdnLogos.add(match[1]);
      }

      let removed = 0;
      for (const file of cdnLogos) {
        const filePath = path.join(uploadsDir, file);
        if (fs.existsSync(filePath)) {
          fs.rmSync(filePath);
          removed++;
        }
      }
      if (removed > 0) {
        console.log(`Removed ${removed} CDN-served integration logos from build/client/lovable-uploads/`);
      }
    },
  };
}

export default defineConfig({
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
  plugins: [cloudflare({ viteEnvironment: { name: "ssr" } }), reactRouter(), pruneCdnLogos(), emitOtaXlsx()],
  resolve: {
    alias: {
      "@": "/app",
    },
  },
});
