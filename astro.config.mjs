// @ts-check
import { defineConfig } from 'astro/config';

// ─────────────────────────────────────────────────────────────
// STEP 1 OF DEPLOY: set `site` to your live URL.
//
// If your repo is named  thebestnoob1129.github.io  (recommended):
//     site: 'https://thebestnoob1129.github.io'
//     base: (leave it out entirely)
//
// If your repo is named anything else, e.g. "portfolio":
//     site: 'https://thebestnoob1129.github.io'
//     base: '/portfolio'
//   ...and every internal link must start with that base. This repo
//   already handles that for you via the `url()` helper in
//   src/lib/url.ts — don't hand-write href="/projects/...".
// ─────────────────────────────────────────────────────────────

export default defineConfig({
  site: 'https://thebestnoob1129.github.io',
  // base: '/portfolio',
  build: {
    format: 'directory',
  },
});
