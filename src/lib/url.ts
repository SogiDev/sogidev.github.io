/**
 * Base-aware URL helper.
 *
 * GitHub Pages serves a non-user repo at /<repo-name>/, so a hard-coded
 * href="/projects/veil" 404s in production while working fine in dev.
 * This is the single most common reason a Pages deploy "works locally
 * but every link is broken live".
 *
 * Always build internal links with this:
 *     <a href={url('/projects/' + id)}>
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const left = base.endsWith('/') ? base.slice(0, -1) : base;
  const right = path.startsWith('/') ? path : `/${path}`;
  return `${left}${right}` || '/';
}
