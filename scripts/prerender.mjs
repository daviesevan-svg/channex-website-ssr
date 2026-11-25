/**
 * Post-build pre-rendering script.
 * Starts a local static server, visits each main page with headless Chromium,
 * and saves the fully-rendered HTML into the dist folder.
 * The integrations page and blog sub-pages are intentionally excluded to keep
 * the deployment artifact small and the build fast.
 */

import { execSync, spawn } from "child_process";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");

// Only pre-render the main static pages — no integrations, no blog sub-pages
const routes = [
  "/",
  "/about",
  "/features",
  "/pricing",
  "/contact",
  "/blog",
  "/policy",
];

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

async function prerender() {
  console.log("🚀 Starting pre-render process (main pages only)...");

  // Start a simple static server
  console.log(`📡 Starting static server on port ${PORT}...`);
  const server = spawn(
    "npx",
    ["serve", "-s", distDir, "-l", String(PORT), "--no-clipboard"],
    {
      stdio: "pipe",
      detached: false,
    }
  );

  // Wait for server to start
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // Use Puppeteer to render each route
  let puppeteer;
  try {
    puppeteer = await import("puppeteer");
  } catch (e) {
    // Try the older API
    const { default: pup } = await import("puppeteer");
    puppeteer = { default: pup };
  }

  const browser = await puppeteer.default.launch({
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || "/usr/bin/chromium-browser",
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
    ],
  });

  let successCount = 0;
  let failCount = 0;

  for (const route of routes) {
    try {
      const page = await browser.newPage();
      await page.goto(`${BASE_URL}${route}`, {
        waitUntil: "networkidle0",
        timeout: 30000,
      });

      // Wait a bit more for React to fully render
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const html = await page.content();
      await page.close();

      // Determine output path
      const routePath = route === "/" ? "/index.html" : `${route}/index.html`;
      const outputPath = join(distDir, routePath);
      const outputDir = dirname(outputPath);

      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
      }

      writeFileSync(outputPath, html, "utf8");
      console.log(`✅ Pre-rendered: ${route}`);
      successCount++;
    } catch (err) {
      console.error(`❌ Failed to pre-render ${route}: ${err.message}`);
      failCount++;
    }
  }

  await browser.close();
  server.kill();

  console.log(
    `\n✨ Pre-rendering complete: ${successCount} success, ${failCount} failed`
  );

  if (failCount > 0) {
    process.exit(1);
  }
}

prerender().catch((err) => {
  console.error("Pre-render script failed:", err);
  process.exit(1);
});
