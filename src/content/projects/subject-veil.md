---
title: 'Subject Veil'
tagline: 'A first-person horror game where the thing hunting you can only hear you — built in C++23 on an engine I wrote.'
year: '2025 — present'
role: 'Solo developer'
status: 'In development'
order: 1
featured: true

tech: ['C++23', 'Raylib', 'CMake', 'Docker', 'ImGui']

# To add the video: copy the ID out of the YouTube URL and uncomment.
# https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  youtube: 'dQw4w9WgXcQ'
# youtube: 'REPLACE_WITH_VIDEO_ID'

# Drop a 1280x720 image in public/covers/ and point at it:
# cover: '/covers/subject-veil.jpg'

# repo: 'https://github.com/thebestnoob1129/ProjectVeil'
# playable: 'https://sogidev.itch.io/subject-veil'

details:
  Engine: 'Custom (C++23 + Raylib)'
  Platforms: 'Windows, Linux'
  Team: 'Solo'
  Milestone: 'Vertical slice'

highlights:
  - 'Stalker AI on a four-state FSM with sound-based perception'
  - 'Director system that feeds the AI hints without omniscience'
  - 'Interruptible diegetic task mini-games'
  - 'Task-tampering that forces re-traversal of cleared areas'
  - 'Full player control system — the most complete system in the build'
---

## The pitch

You are locked in a facility with something that cannot see. It navigates by
sound, and every task you need to complete makes noise. The game is the
negotiation between those two facts.

## The stalker

The enemy runs a four-state finite state machine — **patrol**, **investigate**,
**hunt**, and **search-last-known-position** — driven entirely by sound events
rather than line of sight. That last state is the one that makes it feel alive:
losing the player doesn't reset the AI, it sends it hunting the place you were
standing, which means breaking line of sight isn't escape.

Sitting above the FSM is a **director**. It watches threat proximity and feeds
the stalker hints about where the player probably is. The important constraint
is that hints are hints — the director never hands over your exact position,
because an omniscient enemy stops being scary and starts being unfair.

## Tasks that split your attention

Progress happens through diegetic mini-games at task stations. They're
interruptible by design: you can abandon one mid-way and lose your progress on
it, which turns every noise you hear into a live cost/benefit decision.

Tasks can also be **tampered with**, which forces you back through areas you'd
already cleared. Re-traversal is how a small map keeps producing new tension
without new geometry.

## Where it is now

Core mechanics are locked. Current work is on the experiential side — theme,
environment, and the feeling of the space — heading toward a vertical slice:
one room, one task station, sound-only perception, one stalker.

> **TODO:** swap this section for current status before you publish, and
> uncomment the `youtube` field once the demo video is up.
