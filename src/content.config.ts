import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * THE PROJECT TEMPLATE.
 *
 * This schema is the contract for every project page on the site.
 * Adding a project = adding one .md file to src/content/projects/
 * whose frontmatter matches the shape below. The page builds itself.
 *
 * If a field is wrong or missing, `npm run build` fails with the exact
 * file and field name. That is the point — it means a broken project
 * page can never reach the live site.
 *
 * To add a NEW FIELD later (say, "engine" or "teamSize"):
 *   1. add it here, with .optional() so old files keep working
 *   2. render it in src/layouts/ProjectLayout.astro
 * That is the whole change.
 */
const projects = defineCollection({
  // `[^_]*` skips files starting with an underscore, so _TEMPLATE.md
  // can live next to the real projects without being built.
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    // ── Required ──────────────────────────────────────────────
    title: z.string(),
    tagline: z.string(),
    year: z.string(),
    role: z.string(),
    status: z.enum(['In development', 'Shipped', 'Prototype', 'Archived']),
    tech: z.array(z.string()).min(1),

    // ── Optional: each one that's present renders a section ────
    /** YouTube video ID only — NOT the full URL.
     *  https://youtube.com/watch?v=dQw4w9WgXcQ  →  'dQw4w9WgXcQ' */
    youtube: z.string().optional(),
    /** Path under /public, e.g. '/covers/veil.jpg' */
    cover: z.string().optional(),
    repo: z.string().url().optional(),
    playable: z.string().url().optional(),
    /** Freeform rows in the detail page sidebar. Add anything. */
    details: z.record(z.string(), z.string()).optional(),
    /** Bullet list of what you actually built. */
    highlights: z.array(z.string()).optional(),

    // ── Ordering / visibility ─────────────────────────────────
    /** Lower = higher on the homepage. */
    order: z.number().default(99),
    featured: z.boolean().default(false),
    /** true = builds locally, never publishes. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
