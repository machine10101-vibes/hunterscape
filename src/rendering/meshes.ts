import * as THREE from 'three';

const matCache = new Map<string, THREE.MeshStandardMaterial>();

function mat(color: number, opts: Partial<THREE.MeshStandardMaterialParameters> = {}): THREE.MeshStandardMaterial {
  const key = `${color}_${opts.roughness ?? 0.8}_${opts.metalness ?? 0.05}_${opts.flatShading ? 1 : 0}`;
  let m = matCache.get(key);
  if (!m) {
    m = new THREE.MeshStandardMaterial({
      color,
      roughness: opts.roughness ?? 0.85,
      metalness: opts.metalness ?? 0.05,
      flatShading: opts.flatShading ?? true,
      ...opts,
    });
    matCache.set(key, m);
  }
  return m;
}

export function createPlayerMesh(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'player';

  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 0.55, 4, 8), mat(0x3a5a8a));
  body.position.y = 0.85;
  body.castShadow = true;
  g.add(body);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), mat(0xd4a574));
  head.position.y = 1.45;
  head.castShadow = true;
  g.add(head);

  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.23, 8, 6), mat(0x2a1a0a));
  hair.position.y = 1.55;
  hair.scale.set(1, 0.55, 1);
  g.add(hair);

  const tunic = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.36, 0.5, 8), mat(0x4a6a3a));
  tunic.position.y = 0.75;
  g.add(tunic);

  // Simple facing indicator
  const nose = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.12), mat(0xc09060));
  nose.position.set(0, 1.42, 0.2);
  g.add(nose);

  return g;
}

export function createTree(seed = 0): THREE.Group {
  const g = new THREE.Group();
  g.name = 'tree';
  const h = 1.6 + (seed % 5) * 0.15;
  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.18, 0.26, h, 6),
    mat(0x5a3a1a),
  );
  trunk.position.y = h / 2;
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  g.add(trunk);

  const canopyColor = seed % 2 === 0 ? 0x2d6b2d : 0x3a7a35;
  for (let i = 0; i < 3; i++) {
    const r = 0.75 - i * 0.12;
    const leaf = new THREE.Mesh(new THREE.ConeGeometry(r, 1.1 - i * 0.15, 7), mat(canopyColor));
    leaf.position.y = h + 0.35 + i * 0.55;
    leaf.castShadow = true;
    g.add(leaf);
  }

  const stumpHit = new THREE.Mesh(
    new THREE.CylinderGeometry(0.5, 0.5, 0.2, 8),
    new THREE.MeshBasicMaterial({ visible: false }),
  );
  stumpHit.position.y = 0.1;
  stumpHit.name = 'hit';
  g.add(stumpHit);

  return g;
}

export function createRock(kind: 'copper' | 'tin', seed = 0): THREE.Group {
  const g = new THREE.Group();
  g.name = 'rock';
  const base = new THREE.Mesh(
    new THREE.DodecahedronGeometry(0.55 + (seed % 3) * 0.05, 0),
    mat(0x6a6a6a),
  );
  base.position.y = 0.4;
  base.rotation.set(0.2, seed, 0.1);
  base.castShadow = true;
  base.receiveShadow = true;
  g.add(base);

  const veinColor = kind === 'copper' ? 0xb87333 : 0xc0c0c8;
  for (let i = 0; i < 3; i++) {
    const vein = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 4), mat(veinColor, { metalness: 0.4, roughness: 0.5 }));
    const a = (i / 3) * Math.PI * 2 + seed;
    vein.position.set(Math.cos(a) * 0.35, 0.45 + (i % 2) * 0.15, Math.sin(a) * 0.35);
    g.add(vein);
  }

  const hit = new THREE.Mesh(
    new THREE.SphereGeometry(0.7, 8, 6),
    new THREE.MeshBasicMaterial({ visible: false }),
  );
  hit.position.y = 0.4;
  hit.name = 'hit';
  g.add(hit);

  return g;
}

export function createDummy(): THREE.Group {
  const g = new THREE.Group();
  g.name = 'dummy';

  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 1.4, 6), mat(0x5a3a1a));
  pole.position.y = 0.7;
  pole.castShadow = true;
  g.add(pole);

  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.32, 0.7, 8), mat(0x8a6a40));
  torso.position.y = 1.15;
  torso.castShadow = true;
  g.add(torso);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), mat(0xc4a060));
  head.position.y = 1.65;
  g.add(head);

  // X marks
  const markMat = mat(0x4a2010);
  const m1 = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.06, 0.04), markMat);
  m1.position.set(0, 1.2, 0.3);
  m1.rotation.z = 0.6;
  g.add(m1);
  const m2 = m1.clone();
  m2.rotation.z = -0.6;
  g.add(m2);

  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.45, 0.12, 8), mat(0x3a2a15));
  base.position.y = 0.06;
  base.receiveShadow = true;
  g.add(base);

  const hit = new THREE.Mesh(
    new THREE.CylinderGeometry(0.45, 0.45, 1.8, 8),
    new THREE.MeshBasicMaterial({ visible: false }),
  );
  hit.position.y = 0.9;
  hit.name = 'hit';
  g.add(hit);

  return g;
}

export function createCampfire(): THREE.Group {
  const g = new THREE.Group();
  for (let i = 0; i < 5; i++) {
    const log = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.7, 5), mat(0x4a2a10));
    log.rotation.z = Math.PI / 2;
    log.rotation.y = (i / 5) * Math.PI * 2;
    log.position.y = 0.08;
    g.add(log);
  }
  const flame = new THREE.Mesh(
    new THREE.ConeGeometry(0.2, 0.5, 5),
    new THREE.MeshStandardMaterial({
      color: 0xff6622,
      emissive: 0xff4400,
      emissiveIntensity: 1.2,
      flatShading: true,
      transparent: true,
      opacity: 0.9,
    }),
  );
  flame.position.y = 0.4;
  flame.name = 'flame';
  g.add(flame);

  const light = new THREE.PointLight(0xff8844, 1.4, 12);
  light.position.y = 0.6;
  g.add(light);
  return g;
}

export function createTent(): THREE.Group {
  const g = new THREE.Group();
  const canvas = new THREE.Mesh(
    new THREE.ConeGeometry(1.1, 1.4, 4),
    mat(0x6a5030),
  );
  canvas.position.y = 0.7;
  canvas.rotation.y = Math.PI / 4;
  canvas.castShadow = true;
  g.add(canvas);
  return g;
}

export function createGround(size = 40): THREE.Mesh {
  const geo = new THREE.PlaneGeometry(size, size, 32, 32);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const n = Math.sin(x * 0.35) * Math.cos(y * 0.3) * 0.08;
    pos.setZ(i, n);
  }
  geo.computeVertexNormals();
  const mesh = new THREE.Mesh(
    geo,
    new THREE.MeshStandardMaterial({
      color: 0x3d6b35,
      roughness: 0.95,
      flatShading: true,
    }),
  );
  mesh.rotation.x = -Math.PI / 2;
  mesh.receiveShadow = true;
  mesh.name = 'ground';
  return mesh;
}
