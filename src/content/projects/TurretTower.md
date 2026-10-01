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
cover: '/covers/TurretTower.png'
repo: 'https://github.com/SogiDev/CrossHero'
playable: 'https://sogidev.itch.io/turret-tower'

details:
  Engine: 'Unity'
  Language: 'C#'
  Platforms: 'Web, Windows, Linux, Mac'
  Team: 'Solo'
  Scope: 'Complete, released'


draft: true

highlights: 
  - 'Used Object Oriented Programming to develop Character Systems (AI and Player).'
  - 'Perspective based parallaxing for objects and background.'
---

## The Game

Defend your *crystal* by traversing across a tower of cybernetic platforms and building *turrets* to fight against *spaceships*.

Try out the new *Platformer* / *Tower Defence* game submitted for the Bezi Game Jam.

## Object Oriented Characters

![Example of Turret Used for Combat](/shots/TurretTower/Turret.png)

The Character Controller System utilized based and derived classes for similar detections and movement across all entities. 

![Derived Class Usage for Turret Class](/shots/TurretTower/CombatManager.png)

Spaceships and Turrets used a similar detection system to get targets, aligning with purpose built targeting.

![Derived Class Usage for Detecting Targets](/shots/TurretTower/FindTarget.png)

Others such as the Player and Crystals are ignored for last to allow for longer gameplay lengths strategic playability.

