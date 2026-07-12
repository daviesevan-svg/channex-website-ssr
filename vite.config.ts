import { reactRouter } from "@react-router/dev/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import { defineConfig } from "vite";
import path from "path";
import fs from "fs";

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
  plugins: [cloudflare({ viteEnvironment: { name: "ssr" } }), reactRouter(), pruneCdnLogos()],
  resolve: {
    alias: {
      "@": "/app",
    },
  },
});
