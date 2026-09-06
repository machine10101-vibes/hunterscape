# Hunterscape

Browser fantasy adventure set in the **Whisperwood** — start at **Thornrest Camp**, chop timber, mine ore, spar with the training dummy, face the **Frost Yeti** in the north-east clearing, and duel the **Orc Scout** on the south-west trail.

Original world, names, and art (procedural Three.js). Visual layout inspired by classic elevated fantasy MMO HUDs.

**Play:** https://machine10101-vibes.github.io/hunterscape/

## Phase 1 features

- Vite + TypeScript + Three.js
- Click / tap-to-move with follow camera
- RS3-inspired HUD: chat, action bar, inventory, minimap, HP / Focus / Stamina orbs, skills panel
- Woodcutting (Whisperwood trees → Whisper Logs)
- Mining (copper & tin rocks)
- Combat vs training dummy, Frost Yeti, and Orc Scout (Attack / Strength / Defence / Constitution XP)
- Inventory + tools; progress saved in `localStorage`
- Desktop + mobile (touch-friendly)
- Studio-style low-poly character/monster art with richer world lighting
- Walk/attack/gather animation cycles, hit flinch, death collapse, combat telegraphs

## Develop

```bash
npm install
npm run dev
```

Open the URL Vite prints (default http://localhost:5173/hunterscape/).

## Build

```bash
npm run build
npm run preview
```

Production base path is `/hunterscape/` for GitHub Pages.

## Controls

| Input | Action |
|--------|--------|
| Click / tap ground | Walk |
| Click / tap tree, rock, dummy, yeti, orc | Gather or fight |
| Action bar 1–5 / keys 1–5 | Attack, Chop, Mine, Eat, Examine |
| Skills button / `K` | Toggle skills |
| Inventory rations | Click to eat |

## Deploy notes

- Source on `main`
- Built site on `gh-pages` (contents of `dist/` at branch root)
