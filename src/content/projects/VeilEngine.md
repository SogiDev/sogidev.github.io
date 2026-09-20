---
title: 'Veil Engine & World Editor'
tagline: 'The C++23 engine and in-house level editor under Subject Veil — lighting rig, gizmos, inspector, and a cross-platform build pipeline.'
year: '2026 — present'
role: 'Solo developer'
status: 'In development'
order: 2

tech: ['C++23', 'Raylib', 'ImGui', 'CMake', 'Docker', 'Linux']

youtube: 'NeJ8mECytB8'
# cover: '/covers/veil-engine.jpg'
repo: 'https://github.com/DracniaStudios/ProjectVeil'
playable: 'https://github.com/DracniaStudios/ProjectVeil/releases'

details:
  Language: 'C++23'
  Rendering: 'Raylib'
  Editor UI: 'Dear ImGui'
  Build: 'CMake + Docker'

highlights:
  - 'Lighting system: directional key with shadow mapping, point fill, spot flashlight'
  - 'Translate / rotate / scale gizmos with distance-invariant handle sizing'
  - 'Object browser, inspector panels, and scene serialisation to JSON'
  - 'Docker kit: Linux build, Windows cross-compile, dev container, headless smoke tests'
  - 'Resolution-independent runtime UI built from pure rectangle functions'
---

## Why write the engine

Veil needs sound to be a first-class gameplay signal and light to be the
player's only real resource. Both of those are cheaper to build than to retrofit
onto a general-purpose engine — and building them is the point, since engine
work is where the actual programming learning lives.

## The lighting rig

The default rig is three lights and a fog term, and the whole mood comes out of
their relationship: one cold directional key that casts the shadow map, one warm
point fill so the spawn area doesn't read flat, and the player's flashlight —
the brightest value in the game and the only one they control.

Everything fades to a near-black with a blue cast. Unlit surfaces get a cold
ambient wash at low strength so they read as shadow rather than as flat grey.
The warm/cold split *is* the composition: the two warm values are the lamp and
the beam, and they're what the player moves toward.

## The editor

Dear ImGui panels over the live viewport — object browser, inspector, lighting
controls, stalker AI tuning. The gizmo handles recompute their size every frame
from camera distance so they stay the same apparent size whether the object is
two units away or two hundred.

## The build pipeline

A full Docker kit covers Linux builds, Windows cross-compilation, a dev
container so the toolchain is reproducible, headless smoke testing, and a local
services stack — game server, Gitea mirror, and a Caddy reverse proxy in front
of both. The server side doubles as systems-administration practice: the
dedicated server runs as a systemd unit with SSH and firewall hardening.

## A note on the visual system

The palette on this site is read out of this engine — the fog, ambient,
moonlight, lamp, and beam values are the literal colours in the lighting
system's source, not an approximation of them.
