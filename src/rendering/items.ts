import * as THREE from 'three';
import { createHatchetTool, createPickaxeTool, createSwordTool } from './player';

function std(color: number, opts: Partial<THREE.MeshStandardMaterialParameters> = {}): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: opts.roughness ?? 0.78,
    metalness: opts.metalness ?? 0.08,
    ...opts,
  });
}

function add(parent: THREE.Object3D, mesh: THREE.Mesh): THREE.Mesh {
  mesh.castShadow = true;
  parent.add(mesh);
  return mesh;
}

/** Standalone 3D portrait of an inventory / equipment item. */
export function createItemMesh(id: string): THREE.Group {
  if (id === 'bronze_sword') return createSwordTool();
  if (id === 'bronze_hatchet') return createHatchetTool();
  if (id === 'bronze_pickaxe') return createPickaxeTool();
  if (id === 'whisper_logs') return makeLogs();
  if (id === 'copper_ore') return makeOre(0xb87333, 0x8a4a1c);
  if (id === 'tin_ore') return makeOre(0xc8d0d4, 0x8a9296);
  if (id === 'camp_rations') return makeRations();
  if (id === 'yeti_fur') return makeFur();
  if (id === 'frost_claw') return makeClaw();
  if (id === 'orc_tooth') return makeTooth();
  if (id === 'scout_leather') return makeLeather();
  return makeUnknown();
}

function makeLogs(): THREE.Group {
  const g = new THREE.Group();
  const bark = std(0x6a4424, { roughness: 0.92 });
  const end = std(0xc4a06a, { roughness: 0.7 });
  for (let i = 0; i < 3; i++) {
    const log = new THREE.Group();
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.06, 0.42, 8), bark);
    shaft.rotation.z = Math.PI / 2;
    add(log, shaft);
    for (const x of [-0.21, 0.21]) {
      const ring = new THREE.Mesh(new THREE.CircleGeometry(0.056, 8), end);
      ring.rotation.y = Math.PI / 2;
      ring.position.x = x;
      log.add(ring);
    }
    log.position.set(0, (i - 1) * 0.07, (i - 1) * 0.04);
    log.rotation.z = (i - 1) * 0.18;
    g.add(log);
  }
  return g;
}

function makeOre(color: number, dark: number): THREE.Group {
  const g = new THREE.Group();
  const rock = std(dark, { roughness: 0.95 });
  const vein = std(color, { roughness: 0.45, metalness: 0.55 });
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.16, 0), rock);
  core.scale.set(1.15, 0.9, 1.05);
  add(g, core);
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const chip = new THREE.Mesh(new THREE.IcosahedronGeometry(0.055, 0), i % 2 ? vein : rock);
    chip.position.set(Math.cos(a) * 0.12, (i % 2) * 0.06 - 0.02, Math.sin(a) * 0.1);
    chip.rotation.set(a, i, 0.3);
    add(g, chip);
  }
  return g;
}

function makeRations(): THREE.Group {
  const g = new THREE.Group();
  const wrap = std(0x8a6238, { roughness: 0.88 });
  const meat = std(0x8a2a22, { roughness: 0.7 });
  const parcel = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.1, 0.16), wrap);
  add(g, parcel);
  const twine = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.01, 6, 12), std(0x3a2414, { roughness: 0.9 }));
  twine.rotation.x = Math.PI / 2;
  g.add(twine);
  const strip = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.03, 0.05), meat);
  strip.position.y = 0.06;
  add(g, strip);
  return g;
}

function makeFur(): THREE.Group {
  const g = new THREE.Group();
  const fur = std(0xe8f0f6, { roughness: 0.97 });
  const shade = std(0xb8c8d6, { roughness: 0.97 });
  const pad = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8), fur);
  pad.scale.set(1.3, 0.45, 1.1);
  add(g, pad);
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2;
    const tuft = new THREE.Mesh(new THREE.IcosahedronGeometry(0.055, 0), i % 2 ? shade : fur);
    tuft.position.set(Math.cos(a) * 0.1, 0.04, Math.sin(a) * 0.08);
    tuft.scale.set(1.4, 0.55, 1);
    tuft.rotation.y = a;
    add(g, tuft);
  }
  return g;
}

function makeClaw(): THREE.Group {
  const g = new THREE.Group();
  const horn = std(0x1d222b, { roughness: 0.32, metalness: 0.4 });
  const claw = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.28, 7), horn);
  claw.rotation.x = 0.55;
  add(g, claw);
  const base = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), std(0x3a4048, { roughness: 0.8 }));
  base.position.y = -0.1;
  add(g, base);
  return g;
}

function makeTooth(): THREE.Group {
  const g = new THREE.Group();
  const tusk = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.26, 7), std(0xf2ebd4, { roughness: 0.4 }));
  tusk.rotation.z = 0.25;
  tusk.rotation.x = -0.15;
  add(g, tusk);
  return g;
}

function makeLeather(): THREE.Group {
  const g = new THREE.Group();
  const hide = std(0x6b4526, { roughness: 0.86 });
  const dark = std(0x3e2814, { roughness: 0.9 });
  const sheet = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.04, 0.16), hide);
  sheet.rotation.z = 0.12;
  add(g, sheet);
  const fold = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.03, 0.12), dark);
  fold.position.set(0.02, 0.03, 0.01);
  fold.rotation.z = -0.2;
  add(g, fold);
  return g;
}

function makeUnknown(): THREE.Group {
  const g = new THREE.Group();
  add(g, new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 0.16), std(0x666666)));
  return g;
}
