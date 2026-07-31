// Deliberately dependency-free (no `@/` imports): vite.config.ts imports this by
// relative path to check the files exist at build time, and the `@` alias isn't
// resolvable while Vite is still loading its own config.

/**
 * The social-card path for a blog post's featured image.
 *
 * Featured images are WebP — good for the page, but scraper support for WebP is
 * inconsistent, and a card that fails to render is invisible to us. So every
 * featured image has a JPEG sibling generated alongside it, and og:image points
 * at that instead.
 */
export function ogImageFor(featuredImage: string): string {
  return featuredImage.replace(/\.webp$/, "-og.jpg");
}
