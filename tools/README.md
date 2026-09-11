# Rendering harness

Dev-only tooling for authoring the procedural character meshes and their poses.
None of it ships: `shot.html` is not a Vite build entry, and the drivers are run
by hand against a running dev server.

`shot.html` / `shot.ts` mount a single character on a neutral backdrop and expose
four globals:

- `shot(opts)` — set pose, tool and camera, then render one frame
- `probe(names)` — world positions of named joints, for checking numerically
  where a strike lands instead of judging it by eye
- `setRaw(pose, tool)` — apply joint rotations directly, bypassing the clips
- `solve(cfg)` — coordinate-descent IK against world-space targets

The Node drivers need a dev server on port 5199 and drive the page over
puppeteer-core:

    npx vite --port 5199 &
    node tools/shots.mjs /tmp/out default     # or: monsters
    node tools/probe.mjs '[{"pose":"chop","t":0.54,"tool":"hatchet"}]'

Arm rotations are easy to get backwards: for a limb hanging on -Y, a **positive**
`rotation.x` swings it **backward**. Probe the result rather than trusting the
sign.
