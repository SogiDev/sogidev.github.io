---
# ── REQUIRED ─────────────────────────────────────────────────
title: 'Turret Tower'
tagline: 'One sentence. What it is and what makes it interesting — this shows on the homepage card.'
year: '2026'
role: 'Solo developer'
status: 'Shipped'
tech: ['Unity', 'C#']

order: 10

youtube: ''
cover: ''
repo: 'https://github.com/SogiDev/CrossHero'
playable: 'https://sogidev.itch.io/turret-tower'

details:
  Engine: 'Unity'
  Language: 'C#'
  Platforms: 'Web, Windows, Linux, Mac'
  Team: 'Solo'
  Scope: 'Complete, released'

# ── OPTIONAL — delete any line you don't use ─────────────────

# Video demo. The ID ONLY, not the whole URL:
#   https://www.youtube.com/watch?v=dQw4w9WgXcQ   ->   'dQw4w9WgXcQ'
#   https://youtu.be/dQw4w9WgXcQ                  ->   'dQw4w9WgXcQ'
# youtube: 'dQw4w9WgXcQ'

# Cover image. Put the file in public/covers/ and reference it from the
# site root. 1280x720 or wider. Used on the card, the social preview,
# and as the hero still if there's no video.
# cover: '/covers/my-game.jpg'

# repo: 'https://github.com/thebestnoob1129/my-game'
# playable: 'https://sogidev.itch.io/my-game'

# Sidebar rows. Add whatever you want — these are freeform.


# Bulleted "What I built" list in the sidebar.
# highlights:
#   - 'The one system you are proudest of'
#   - 'The second one'

# ── ORDERING ─────────────────────────────────────────────────
# Lower number = higher on the homepage. Default is 99.

# true = builds locally, never publishes. Use while writing.
draft: true
---

## The pitch

Everything below the `---` is the page body. Plain markdown — headings, lists,
links, images, code blocks.

Write for someone who has thirty seconds. Lead with what the project *is* and
the one thing about it that's hard or unusual. Save the feature list for the
sidebar.

## The interesting problem

The single strongest thing you can put on a portfolio page is one specific
technical problem, why the obvious solution didn't work, and what you did
instead. That paragraph is what gets you asked about in an interview.

## Images

Put them in `public/shots/` and reference them from the site root:

```markdown
![What the screenshot shows](/shots/my-game-01.jpg)
```

## When you're done

Set `draft: false`, then:

```bash
npm run build     # catches schema mistakes before they ship
git add -A && git commit -m "Add My Game" && git push
```

The live site rebuilds itself in about a minute.
