// Downscales and converts the repo's raster images to WebP, then rewrites every
// reference in app/ to the new filenames.
//
// Why this is a committed script and not a build step: the conversion needs
// `cwebp` (Homebrew's webp package), which isn't available in Cloudflare's build
// image. So the optimised files are generated locally and committed. Re-run it
// after adding new images:
//
//   brew install webp
//   node scripts/optimize-images.mjs           # report only
//   node scripts/optimize-images.mjs --write   # convert + rewrite references
//
// The target width per image comes from how the site actually displays it — a
// partner logo never renders wider than 128 CSS px, so shipping 1676 px of it is
// ~99% waste. Widths below are 2x the largest slot each image appears in, which
// covers retina without guessing.

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const PUBLIC_DIR = "public";
const APP_DIR = "app";
const WRITE = process.argv.includes("--write");

// Long-edge cap, by how the image is used. See the render sites in brackets.
const WIDTHS = {
  // IntegrationLogo, largest slot w-32 h-20 on the detail page
  logo: 256,
  // about.tsx team cards, `w-full h-48 object-cover` in a ~350px card
  photo: 700,
  // blog author avatars, largest slot w-12 h-12
  avatar: 128,
  // blog hero, `aspect-video` inside max-w-6xl; also reused by the blog cards
  blog: 1200,
  // hero.tsx dashboard shot, ~600 CSS px in the lg 2-col grid
  hero: 1200,
  other: 1200,
};

const QUALITY = { logo: 88, avatar: 88, photo: 82, blog: 78, hero: 80, other: 82 };

// Formats worth converting. SVG is already vector-small; leaving it alone also
// keeps logos that are genuinely resolution-independent that way.
const RASTER = new Set([".png", ".jpg", ".jpeg", ".ico", ".webp", ".gif"]);

const sourceFiles = () => {
  const out = [];
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.(ts|tsx)$/.test(e.name)) out.push(p);
    }
  };
  walk(APP_DIR);
  return out;
};

/** Every /lovable-uploads or /images path referenced from app/, with its context. */
function collectRefs() {
  const refs = new Map(); // url -> Set of "file:field"
  for (const file of sourceFiles()) {
    const text = fs.readFileSync(file, "utf8");
    const re = /(\w+)?\s*[:=]?\s*["'](\/(?:lovable-uploads|images)\/[^"']+)["']|["'](\/(?:lovable-uploads|images)\/[^"']+)["']/g;
    for (const m of text.matchAll(re)) {
      const url = m[2] ?? m[3];
      const field = m[1] ?? "";
      if (!refs.has(url)) refs.set(url, new Set());
      refs.get(url).add(`${file}:${field}`);
    }
  }
  return refs;
}

function classify(url, contexts) {
  const ctx = [...contexts].join(" ");
  if (ctx.includes("data/integrations.ts")) return "logo";
  if (ctx.includes("routes/about.tsx")) return "photo";
  if (/:avatar\b/.test(ctx)) return "avatar";
  if (ctx.includes("data/blogPosts.ts")) return "blog";
  if (ctx.includes("components/Hero.tsx")) return "hero";
  return "other";
}

const dims = (p) => {
  const out = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", p], { encoding: "utf8" });
  return {
    w: Number(out.match(/pixelWidth: (\d+)/)?.[1] ?? 0),
    h: Number(out.match(/pixelHeight: (\d+)/)?.[1] ?? 0),
  };
};

function convert(absSrc, absOut, cap, quality) {
  const { w, h } = dims(absSrc);
  const long = Math.max(w, h);
  // sips can't read .ico and won't write .webp, so everything goes via a PNG in
  // a temp dir first. Scaling there (rather than in cwebp) keeps one code path.
  const tmp = path.join(fs.mkdtempSync("/tmp/imgopt-"), "s.png");
  const sipsArgs = ["-s", "format", "png"];
  if (long > cap) sipsArgs.push("-Z", String(cap));
  execFileSync("sips", [...sipsArgs, absSrc, "--out", tmp], { stdio: "pipe" });
  execFileSync("cwebp", ["-quiet", "-q", String(quality), "-metadata", "none", tmp, "-o", absOut]);
  fs.rmSync(path.dirname(tmp), { recursive: true, force: true });
  return { before: { w, h } };
}

const refs = collectRefs();
const jobs = [];
for (const [url, contexts] of refs) {
  const abs = path.join(PUBLIC_DIR, url);
  if (!fs.existsSync(abs)) continue;
  const ext = path.extname(url).toLowerCase();
  if (!RASTER.has(ext)) continue;
  const size = fs.statSync(abs).size;
  // Not worth touching, and converting the favicon away from PNG would trade a
  // 2 kB saving for `rel="icon"` support questions.
  if (size < 8 * 1024) continue;
  const kind = classify(url, contexts);
  jobs.push({ url, abs, kind, size });
}
jobs.sort((a, b) => b.size - a.size);

let before = 0;
let after = 0;
const rewrites = new Map();
const skipped = [];

for (const job of jobs) {
  // Same directory, same basename, .webp extension — keeps the tree readable
  // and makes the reference rewrite a plain string swap.
  const outUrl = job.url.replace(/\.[^.]+$/, ".webp");
  const outAbs = path.join(PUBLIC_DIR, outUrl);
  const cap = WIDTHS[job.kind];
  const q = QUALITY[job.kind];

  // e.g. logo.png alongside an already-referenced logo.webp — converting would
  // silently overwrite a different image.
  if (outUrl !== job.url && fs.existsSync(outAbs)) {
    console.error(`SKIP ${job.url}: ${outUrl} already exists`);
    skipped.push(job.url);
    before += job.size;
    after += job.size;
    continue;
  }

  if (!WRITE) {
    before += job.size;
    console.log(`${job.kind.padEnd(6)} cap ${String(cap).padStart(4)} q${q} ${String(Math.round(job.size / 1024)).padStart(6)}kB  ${job.url}`);
    continue;
  }

  try {
    // Convert to a temp name first: for files already named .webp the output
    // path is the input path, and cwebp would read a file it is writing.
    const stage = outAbs + ".tmp";
    const { before: dim } = convert(job.abs, stage, cap, q);
    const newSize = fs.statSync(stage).size;

    // Never regress. Some logos are already small, tight PNGs where a WebP of
    // the same pixels comes out bigger; for those keep the original file.
    if (newSize >= job.size && Math.max(dim.w, dim.h) <= cap) {
      fs.rmSync(stage);
      skipped.push(job.url);
      before += job.size;
      after += job.size;
      continue;
    }

    fs.renameSync(stage, outAbs);
    if (outUrl !== job.url) fs.rmSync(job.abs);
    before += job.size;
    after += newSize;
    if (outUrl !== job.url) rewrites.set(job.url, outUrl);
    console.log(
      `${job.kind.padEnd(6)} ${String(Math.round(job.size / 1024)).padStart(6)}kB -> ` +
        `${String(Math.round(newSize / 1024)).padStart(5)}kB  ${dim.w}x${dim.h} cap ${cap}  ${job.url}`,
    );
  } catch (err) {
    console.error(`FAILED ${job.url}: ${err.message}`);
    skipped.push(job.url);
    before += job.size;
    after += job.size;
  }
}

if (WRITE && rewrites.size) {
  let touched = 0;
  for (const file of sourceFiles()) {
    const text = fs.readFileSync(file, "utf8");
    let next = text;
    for (const [from, to] of rewrites) next = next.split(from).join(to);
    if (next !== text) {
      fs.writeFileSync(file, next);
      touched++;
    }
  }
  console.log(`\nRewrote ${rewrites.size} paths across ${touched} source files.`);
}

console.log(
  WRITE
    ? `\n${jobs.length - skipped.length}/${jobs.length} converted: ` +
        `${(before / 1e6).toFixed(2)} MB -> ${(after / 1e6).toFixed(2)} MB ` +
        `(${Math.round((1 - after / before) * 100)}% smaller)` +
        (skipped.length ? `\nKept as-is (already optimal): ${skipped.length}` : "")
    : `${jobs.length} raster images referenced, ${(before / 1e6).toFixed(2)} MB. Re-run with --write.`,
);
