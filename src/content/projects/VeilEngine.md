---
title: 'Veil Engine'
tagline: 'The C++23 engine under Subject Veil for Cross-Platform Production.'
year: '2026 — Present'
role: 'Solo Developer'
status: 'In development'
order: 2

tech: ['C++23', 'Raylib', 'ImGui', 'CMake', 'Docker', 'Linux']

youtube: 'NeJ8mECytB8'
cover: ''
repo: 'https://github.com/DracniaStudios/ProjectVeil'
playable: 'https://github.com/DracniaStudios/ProjectVeil/releases'

details:
  Language: 'C++23'
  Rendering: 'Raylib'
  Editor UI: 'ImGui'
  Build: 'CMake'

highlights:
  - 'Lighting System: directional key with shadow mapping, point fill, spot flashlight'
  - 'Translate / rotate / scale gizmos with distance-invariant handle sizing'
  - 'Object browser, inspector panels, and scene serialisation to JSON'
  - 'Docker kit: Linux build, Windows cross-compile, dev container, headless smoke tests'
  - 'Resolution-independent runtime UI built from pure rectangle functions'
---

## Why Write The Engine

Veil is a stealth horror game, and the perfect project for the Engine to support first.
As the project grows it will require more and more engine work, and the engine will grow with it. 
The goal is to make the engine a first-class citizen of the project, not just a tool to get the game done.

## The Lighting Rig

The default rig is three lights and a fog term, and the whole mood comes out of
their relationship: one cold directional key that casts the shadow map, one warm
point fill so the spawn area doesn't read flat, and the player's flashlight 
the brightest value in the game and the only one they control.

Everything fades to a near-black with a blue cast. Unlit surfaces get a cold
ambient wash at low strength so they read as shadow rather than as flat grey.
The warm/cold split *is* the composition: the two warm values are the lamp and
the beam, and they're what the player moves toward.

## The Editor

ImGui panels over the live viewport object browser, inspector, lighting
controls, stalker AI tuning. The gizmo handles recompute their size every frame
from camera distance so they stay the same apparent size whether the object is
two units away or two hundred.

## The Build Pipeline

A full Docker kit covers Linux builds, Windows cross-compilation, a dev
container so the toolchain is reproducible, headless smoke testing, and a local
services stack game server. The server side doubles as systems-administration practice: the
dedicated server runs as a system unit with SSH and firewall hardening.

## A note on the Visual System

The palette on this site is read out of this engine — the fog, ambient,
moonlight, lamp, and beam values are the literal colours in the lighting
system's source, not an approximation of them.
