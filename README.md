# Portfolio — operating manual

Astro static site, deployed to GitHub Pages. Adding a project is one markdown
file. Deploying is `git push`.

Throughout this file:

- **`RUN:`** blocks are paste-ready. Copy the whole block.
- **`READ:`** blocks are explanation. Nothing to type.

---

## Part 1 — Get it running locally

**RUN:** from inside this folder.

```bash
npm install
npm run dev
```

Open <http://localhost:4321>. Edit any file and the browser updates on save.
`Ctrl+C` in the terminal stops it.

**READ:** you need Node 18 or newer. Check with `node --version`. If that errors
or shows something older, install the LTS from <https://nodejs.org> first.

---

## Part 2 — Point it at your GitHub account

This is the step that decides your URL, and the one most likely to leave you
with a live site where every link 404s. Pick **one** of the two options.

### Option A — the root site (recommended)

**READ:** name the repo exactly `thebestnoob1129.github.io`. GitHub treats that
name specially and serves it at the root of your username. Result:
`https://thebestnoob1129.github.io/`. No `base` path, no broken links, shorter
to say out loud. Use this one.

**RUN:** in `astro.config.mjs`, confirm these two lines.

```js
site: 'https://thebestnoob1129.github.io',
// base: '/portfolio',
```

The `base` line stays commented out.

### Option B — a project repo

**READ:** any other repo name, e.g. `portfolio`, serves at
`https://thebestnoob1129.github.io/portfolio/`. Everything now lives under a
sub-path, which is where links break: an `href="/projects/veil"` points at the
root of your whole account, not at your site.

**RUN:** in `astro.config.mjs`, set both, using your repo name.

```js
site: 'https://thebestnoob1129.github.io',
base: '/portfolio',
```

**READ:** this repo already survives Option B. Every internal link goes through
the `url()` helper in `src/lib/url.ts`, which prefixes the base automatically.
The one rule: **never hand-write an internal `href`.** Write
`href={url('/projects/' + id)}`, not `href="/projects/..."`.

---

## Part 3 — Put it on GitHub and go live

**RUN:** create the repo, then from inside this folder:

```bash
git init
git add -A
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/thebestnoob1129/thebestnoob1129.github.io.git
git push -u origin main
```

**RUN:** then, in the browser — this is a settings change, not a command.

```
1. Your repo on github.com  ->  Settings
2. Left sidebar  ->  Pages
3. Under "Source", select:  GitHub Actions
   (NOT "Deploy from a branch" — that one ignores the build step
    and publishes your raw source files instead of the built site)
4. That's it. No save button, no branch to pick.
```

**READ:** the push in the previous step already triggered the workflow in
`.github/workflows/deploy.yml`. Watch it under the repo's **Actions** tab. First
run takes about a minute. When both jobs go green, the site is live.

From then on, `git push` is the deploy. There is no other step.

**READ:** GitHub Pages requires a **public** repo on the free plan. And note
that a Pages site is public even when its repo is private — never commit
anything you wouldn't post publicly.

---

## Part 4 — Add a project

**RUN:**

```bash
cp src/content/projects/_TEMPLATE.md src/content/projects/my-game.md
```

**READ:** the filename becomes the URL. `my-game.md` publishes at
`/projects/my-game/`. Lowercase, hyphens, no spaces.

Open the new file. Everything between the two `---` lines is **frontmatter** —
structured fields the page template reads. Everything below is the write-up, in
plain markdown.

Required fields, and nothing else is:

| Field | Example |
| --- | --- |
| `title` | `'Subject Veil'` |
| `tagline` | one sentence, shows on the homepage card |
| `year` | `'2026'` or `'2025 — present'` |
| `role` | `'Solo developer'` |
| `status` | exactly one of: `In development`, `Shipped`, `Prototype`, `Archived` |
| `tech` | `['C++23', 'Raylib']` |

Everything else is optional and each one renders a block only if present:
`youtube`, `cover`, `repo`, `playable`, `details`, `highlights`, `order`,
`featured`, `draft`.

**RUN:** when the write-up is ready.

```bash
npm run build
git add -A && git commit -m "Add My Game" && git push
```

**READ:** run `npm run build` *before* pushing. The schema in
`src/content.config.ts` validates every project file, and a typo fails the
build locally with the exact file and field name. That is deliberate — a broken
project page can never reach the live site.

### Drafts

**READ:** `draft: true` means the page builds in `npm run dev` so you can
preview it, but is filtered out of `npm run build` and never publishes. Use it
while writing. `shattered-realms.md` ships as a draft so you can see it work.

---

## Part 5 — Add a video demo

**READ:** do not commit video files. GitHub rejects anything over 100 MB, and a
Pages site is capped at 1 GB. Host on YouTube — which you already do — and embed.

**RUN:** take the ID out of the URL and put it in the frontmatter.

```
https://www.youtube.com/watch?v=dQw4w9WgXcQ   ->   dQw4w9WgXcQ
https://youtu.be/dQw4w9WgXcQ                  ->   dQw4w9WgXcQ
```

```yaml
youtube: 'dQw4w9WgXcQ'
```

**READ:** an unlisted video works exactly the same as a public one, if you want
a demo reel that isn't on your channel front page.

The embed renders the thumbnail only and loads the real player on click. A
normal YouTube iframe pulls roughly 1.5 MB of player JavaScript on page load
whether or not anyone presses play — with four projects on the homepage that is
6 MB nobody asked for. It uses `youtube-nocookie.com`, so nothing is set until
someone actually plays.

---

## Part 6 — Images

**RUN:**

```bash
mkdir -p public/covers public/shots
```

**READ:** anything in `public/` is copied to the site root as-is. A file at
`public/covers/veil.jpg` is referenced as `/covers/veil.jpg`.

- **Cover** — 1280×720 or wider. Used on the homepage card, the social preview,
  and as the hero still when there's no video.
- **In-page shots** — `public/shots/`, referenced from the body markdown as
  `![alt text](/shots/veil-01.jpg)`.

**READ:** compress before committing. A 4 MB PNG screenshot is a 200 KB JPEG
with no visible difference, and git keeps every version of every file forever.
<https://squoosh.app> does this in the browser.

---

## Where things are

```
src/
  content.config.ts          the project schema — the contract for every project
  content/projects/*.md      one file per project. this is your content.
  content/projects/_TEMPLATE.md   copy this to add one
  pages/index.astro          the homepage: hero, project grid, about
  pages/projects/[...id].astro    one route -> every project page
  layouts/BaseLayout.astro   <head>, meta tags, header/footer wrapper
  layouts/ProjectLayout.astro     THE PROJECT PAGE TEMPLATE — edit once,
                                  every project page changes
  components/ProjectCard.astro    the homepage card
  components/VideoEmbed.astro     click-to-load YouTube
  styles/global.css          design tokens. change colours here, nowhere else.
  lib/url.ts                 base-aware link helper
.github/workflows/deploy.yml      the deploy. you should never need to edit it.
public/                      images, favicon, anything served as-is
```

---

## When something breaks

| Symptom | Cause |
| --- | --- |
| Build fails naming a file and field | Frontmatter doesn't match the schema. The message says exactly what's wrong. |
| Site live but every link 404s | `base` in `astro.config.mjs` doesn't match the repo name. See Part 2. |
| CSS missing, page is raw text | Pages source is set to "Deploy from a branch". Set it to **GitHub Actions**. Part 3. |
| Action fails on install | `package-lock.json` isn't committed. The action reads it to pick the package manager. |
| Pushed, nothing changed | Check the **Actions** tab. A red run means the build failed; open it for the log. |
| Project not on the live site | `draft: true`. |

---

## Design

Colours come from the Veil Design System's atmosphere family — the literal
values in the engine's lighting system: `fog` for the ground, `moonlight` for
secondary text, `lamp` and `beam` as the only warm values on the page. The
editor's ImGui heading colours are deliberately not used; that system's own
rule keeps tool colour out of anything a viewer looks at.

Nothing is rounded. `--radius: 0` is the entire scale, same as the engine.

All of it lives in `src/styles/global.css`. To reskin the site, change the
tokens at the top of that file and touch nothing else.
