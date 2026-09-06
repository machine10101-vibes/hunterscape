# Hunterscape

Browser fantasy adventure set in the **Whisperwood** — start at **Thornrest Camp**, chop timber, mine ore, and spar with the training dummy.

Original world, names, and art (procedural Three.js). Visual layout inspired by classic elevated fantasy MMO HUDs.

**Play:** https://machine10101-vibes.github.io/hunterscape/

## Phase 1 features

- Vite + TypeScript + Three.js
- Click / tap-to-move with follow camera
- RS3-inspired HUD: chat, action bar, inventory, minimap, HP / Focus / Stamina orbs, skills panel
- Woodcutting (Whisperwood trees → Whisper Logs)
- Mining (copper & tin rocks)
- Combat vs training dummy (Attack / Strength / Defence / Constitution XP)
- Inventory + tools; progress saved in `localStorage`
- Desktop + mobile (touch-friendly)

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
| Click / tap tree, rock, dummy | Gather or fight |
| Action bar 1–5 / keys 1–5 | Attack, Chop, Mine, Eat, Examine |
| Skills button / `K` | Toggle skills |
| Inventory rations | Click to eat |

## Deploy notes

- Source on `main`
- Built site on `gh-pages` (contents of `dist/` at branch root)
