# Hunterscape

Browser fantasy adventure in the **Whisperwood**. You start at **Thornrest Camp**: click or tap to walk, chop timber, mine ore, fight beasts, and follow the road east into **Briarford**.

The view is an elevated top-down 3D scene (Three.js). Original world, names, and procedural art. The layout of the HUD takes its cues from classic fantasy MMOs.

**Play:** https://machine10101-vibes.github.io/hunterscape/

## What you can do

- Walk the camp and keep going. The wood is **500 sections** (20×25, each the size of Thornrest). Sections stream in around you and share one height and color field, so the seams stay continuous. **Plots (P)** surveys any section from above.
- Skills: Attack, Strength, Defence, Constitution, Woodcutting, Mining, Cooking, and Smithing. Combat arts on the bar: Strike, Lunge, Smash, Guard, Rend, plus a weapon special. A number over a fight is brass when you land the blow and coral when the bite lands on you. A critical hit is larger. A miss floats as its own word. Eating floats a green number for the health you actually gain. A beast's bite draws a ring on the ground for the windup.
- Stances, armour styles, weapon speed and reach, accuracy, critical hits, pierce, poison, Focus, and stamina. Beasts have a bite style, armour, tempo, and enrage below 40% health.
- Gather Whisperwood trees and ore rocks. A chopped tree leaves its stump, and a mined rock leaves rubble, until the node grows back. The log or ore name floats off the node. Nodes sit just outside camp and beside the dressed landmarks farther out (frost cairn, hunter stumps, stream ford, stone fold, icemound, thicket verge, ridge stones, and the south-west copse). Whisper berries fruit on each side of Thornrest and at a few of those landmarks. Cook them on the campfire into berry stew, which heals more than rations. A ford newt also drops meat, and Cooking 5 skewers that into a meal that heals more than the stew. The pack holds 28 slots. The **Briarford bank** (press B) keeps the rest, up to 200, and that vault is saved with everything else.
- Gear and the camp forge. One copper ore and one tin ore smelt into a bronze bar there. Briarford’s anvil crafts town kits once the matching quest is done.
- Starter work from Elspeth, Bram, Maeve, Calder, Holt, Wren, Marr, Quill, Pell, Voss, Ivo, and Hermit Sable. Beasts include wolves, boars, spiders, dusk foxes, cairn lynxes at the frost cairn and the icemound, ford newts at the stream ford and the stone fold, pine martens at the south-west copse and the hunter stumps, cinder crows, ore beetles, mire toads, barrow skeletons, gale hawks, ash stags, weir eels, chalk goats, and hollow adders, plus the training dummy, the Frost Yeti, and the Orc Scout. A cairn lynx drops a lynx pelt. A ford newt drops a newt skin. A pine marten drops a marten fur. After the bronze bars, Tracker Nia at the frost cairn asks for one lynx pelt. After that, Wader Reed at the stream ford asks for one newt skin.
- Progress is stored in `localStorage` (`hunterscape_save_v1`), including bank, quests, gear, and where you are standing.
- Desktop and mobile: tap to move, and pinch to zoom the camera. Townsfolk have a wider tap target so a finger can start a conversation. **Model Studio (V)** orbits the hunter and camp meshes.

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
| Click / tap a tree, rock, berry bush, beast, or NPC | Gather, fight, or talk |
| Click / tap the Thornrest campfire | Cook berries from your pack |
| 1–5 | Strike, Lunge, Smash, Guard, Rend |
| 6 | Arm the weapon special |
| K | Skills and stance |
| J | Quest journal. The corner list stays at six tasks and says when more are waiting. The journal counts every open task and the ones you have finished. |
| C | Gear |
| V | Model Studio |
| P | Plot survey (500 sections) |
| F | Walk to the forge |
| B | Walk to the Briarford bank |
| Scroll, pinch, or + / − | Zoom the camera |

## Deploy notes

- Built site on `gh-pages` (contents of `dist/` at branch root, with `.nojekyll` kept)
