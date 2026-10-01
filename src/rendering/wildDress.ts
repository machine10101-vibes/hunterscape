import * as THREE from 'three';

function dressMat(
  color: number,
  extras: Partial<THREE.MeshStandardMaterialParameters> = {},
): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: 0.92,
    metalness: 0.04,
    flatShading: true,
    ...extras,
  });
}

export function createBush(seed: number): THREE.Group {
  const g = new THREE.Group();
  g.name = 'wildBush';
  const a = new THREE.Mesh(
    new THREE.SphereGeometry(0.38 + (seed % 4) * 0.05, 7, 5),
    dressMat(seed % 2 === 0 ? 0x2a5a28 : 0x326434),
  );
  a.position.y = 0.32;
  a.castShadow = true;
  g.add(a);
  const b = new THREE.Mesh(new THREE.SphereGeometry(0.26, 6, 4), dressMat(0x3a6a30));
  b.position.set(0.22, 0.26, 0.08);
  b.castShadow = true;
  g.add(b);
  return g;
}

export function createSapling(seed: number): THREE.Group {
  const g = new THREE.Group();
  g.name = 'wildSapling';
  const h = 0.85 + (seed % 4) * 0.12;
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.1, h, 6), dressMat(0x4a3218));
  trunk.position.y = h / 2;
  trunk.castShadow = true;
  g.add(trunk);
  const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.42, 0.85, 7), dressMat(seed % 2 === 0 ? 0x2f7230 : 0x3a8638));
  leaf.position.y = h + 0.2;
  leaf.castShadow = true;
  g.add(leaf);
  const leaf2 = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.55, 7), dressMat(0x226628));
  leaf2.position.y = h + 0.48;
  g.add(leaf2);
  return g;
}

export function createFallenLog(seed: number): THREE.Group {
  const g = new THREE.Group();
  g.name = 'wildLog';
  const len = 1.15 + (seed % 3) * 0.2;
  const log = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, len, 7), dressMat(0x3e2a12));
  log.rotation.z = Math.PI / 2;
  log.position.y = 0.12;
  log.castShadow = true;
  log.receiveShadow = true;
  g.add(log);
  const cap = new THREE.Mesh(new THREE.CircleGeometry(0.12, 8), dressMat(0x6a4a22));
  cap.position.set(len / 2, 0.12, 0);
  cap.rotation.y = Math.PI / 2;
  g.add(cap);
  return g;
}

export function createStump(seed: number): THREE.Group {
  const g = new THREE.Group();
  g.name = 'wildStump';
  const stump = new THREE.Mesh(
    new THREE.CylinderGeometry(0.2, 0.26, 0.28 + (seed % 3) * 0.04, 7),
    dressMat(0x4a3014),
  );
  stump.position.y = 0.14;
  stump.castShadow = true;
  stump.receiveShadow = true;
  g.add(stump);
  const top = new THREE.Mesh(new THREE.CircleGeometry(0.19, 8), dressMat(0x7a5830));
  top.rotation.x = -Math.PI / 2;
  top.position.y = 0.29;
  g.add(top);
  return g;
}

export function createSnowMound(seed: number): THREE.Group {
  const g = new THREE.Group();
  g.name = 'wildSnow';
  const s = 0.7 + (seed % 4) * 0.12;
  const mound = new THREE.Mesh(new THREE.DodecahedronGeometry(0.32 * s, 0), dressMat(0xe8f2f8, { roughness: 0.78 }));
  mound.position.y = 0.1 * s;
  mound.scale.set(1.45, 0.5, 1.2);
  mound.castShadow = true;
  mound.receiveShadow = true;
  g.add(mound);
  if (seed % 3 === 0) {
    const shard = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.16 * s, 0),
      dressMat(0xa8d0e8, { roughness: 0.35, metalness: 0.15, emissive: 0x4488aa, emissiveIntensity: 0.12 }),
    );
    shard.position.set(0.12, 0.22 * s, -0.08);
    shard.rotation.set(0.3, seed * 0.4, 0.2);
    g.add(shard);
  }
  return g;
}

export function createReed(seed: number): THREE.Group {
  const g = new THREE.Group();
  g.name = 'wildReed';
  const n = 3 + (seed % 3);
  for (let i = 0; i < n; i++) {
    const h = 0.45 + ((seed + i) % 4) * 0.08;
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.03, h, 0.02), dressMat(0x4a7a32));
    blade.position.set((i - 1) * 0.07, h / 2, (i % 2) * 0.04);
    blade.rotation.z = (i - 1) * 0.12;
    g.add(blade);
  }
  return g;
}

export function createCairn(seed: number): THREE.Group {
  const g = new THREE.Group();
  g.name = 'wildCairn';
  const cols = [0x6a6860, 0x5a5852, 0x7a7468];
  for (let i = 0; i < 4; i++) {
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(0.22 - i * 0.03, 0), dressMat(cols[i % cols.length]));
    rock.position.set((i % 2) * 0.06, 0.14 + i * 0.16, (i % 3) * 0.04 - 0.04);
    rock.rotation.set(0.2 * i, seed * 0.3 + i, 0.1);
    rock.castShadow = true;
    rock.receiveShadow = true;
    g.add(rock);
  }
  return g;
}

export function createFordStone(seed: number): THREE.Group {
  const g = new THREE.Group();
  g.name = 'wildFord';
  const stone = new THREE.Mesh(new THREE.DodecahedronGeometry(0.28 + (seed % 3) * 0.04, 0), dressMat(0x6e6a62));
  stone.position.y = 0.08;
  stone.scale.set(1.3, 0.45, 1.1);
  stone.castShadow = true;
  stone.receiveShadow = true;
  g.add(stone);
  return g;
}
