import * as THREE from 'three';

/**
 * Non-repeating value-noise terrain (hash lattice, not sin/cos).
 * PlaneGeometry is XY; mesh.rotation.x = -PI/2 maps localY → -worldZ.
 */

const foliageShaders: { uniforms: { uTime: { value: number } } }[] = [];

function hash2(ix: number, iy: number): number {
  let n = Math.imul(ix | 0, 1597334677) ^ Math.imul(iy | 0, 3812015801);
  n = Math.imul(n ^ (n >>> 16), 0x7feb352d);
  n = Math.imul(n ^ (n >>> 15), 0x846ca68b);
  return ((n ^ (n >>> 16)) >>> 0) / 4294967296;
}

function fade(t: number): number {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function valueNoise(x: number, y: number): number {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const u = fade(fx);
  const v = fade(fy);
  const a = hash2(ix, iy);
  const b = hash2(ix + 1, iy);
  const c = hash2(ix, iy + 1);
  const d = hash2(ix + 1, iy + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

function fbm(x: number, y: number, octaves = 5): number {
  let sum = 0;
  let amp = 0.5;
  let freq = 1;
  let norm = 0;
  for (let i = 0; i < octaves; i++) {
    sum += amp * valueNoise(x * freq, y * freq);
    norm += amp;
    amp *= 0.5;
    freq *= 2.07;
  }
  return sum / norm;
}

function warpedFbm(x: number, y: number): number {
  const wx = fbm(x * 0.31 + 17.2, y * 0.31 - 9.4, 3);
  const wy = fbm(x * 0.31 - 8.1, y * 0.31 + 5.6, 3);
  return fbm(x * 0.11 + wx * 1.65, y * 0.11 + wy * 1.65, 5);
}

export function pathAmount(x: number, z: number): number {
  const pathT = Math.exp(-((x * 0.15 + 0.05) ** 2) * 8 - ((z * 0.12 - 0.15) ** 2) * 3);
  const path2 = Math.exp(-((x + 0.5 - z * 0.35) ** 2) * 2.2 - ((z - 1.2) ** 2) * 0.08);
  const pathWest = Math.exp(-((x + 3.2 - z * 0.15) ** 2) * 1.4 - ((z + 2.5) ** 2) * 0.06);
  return Math.max(pathT, path2 * 0.85, pathWest * 0.75);
}

export function snowAmount(x: number, z: number): number {
  const a = Math.exp(-((x - 4.2) ** 2) * 0.09 - ((z - 7.2) ** 2) * 0.08);
  const b = Math.exp(-((x - 5.5) ** 2) * 0.15 - ((z - 6.0) ** 2) * 0.12);
  return Math.max(a, b * 0.85);
}

function campFlatten(x: number, z: number): number {
  return Math.exp(-((x + 2.05) ** 2 + (z + 0.55) ** 2) * 0.11);
}

export function groundHeight(x: number, z: number): number {
  const roll = (warpedFbm(x, z) - 0.5) * 0.38;
  const bump = (fbm(x * 1.65 + 41.2, z * 1.65 - 18.7, 4) - 0.5) * 0.07;
  const micro = (valueNoise(x * 7.2 + 3.1, z * 7.2 - 2.4) - 0.5) * 0.022;
  let h = roll + bump + micro;
  h *= 1 - campFlatten(x, z) * 0.84;
  h *= 1 - pathAmount(x, z) * 0.38;
  h += snowAmount(x, z) * 0.045;
  return h;
}

function grassDetail(x: number, z: number): number {
  return fbm(x * 2.4 + 12.7, z * 2.4 - 6.3, 4);
}

export function createGround(size = 48): THREE.Mesh {
  const segments = 128;
  const geo = new THREE.PlaneGeometry(size, size, segments, segments);
  const pos = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);

  // RS3-like sunlit meadow: yellow-green, not murky olive
  const grassA = new THREE.Color(0x6db43c);
  const grassB = new THREE.Color(0x8ccc4a);
  const grassC = new THREE.Color(0x4e922e);
  const grassSun = new THREE.Color(0xa8dc62);
  const moss = new THREE.Color(0x3e7a2c);
  const dirt = new THREE.Color(0x9a7a48);
  const dirtDark = new THREE.Color(0x6e5430);
  const snow = new THREE.Color(0xeef6fb);
  const snowBlue = new THREE.Color(0xc8dcea);
  const tmp = new THREE.Color();

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const localY = pos.getY(i);
    const z = -localY; // world Z after rotation.x = -PI/2
    pos.setZ(i, groundHeight(x, z));

    const pathAmt = pathAmount(x, z);
    const snowTotal = snowAmount(x, z);
    const n = grassDetail(x, z);
    const n2 = valueNoise(x * 1.9 + 4.2, z * 1.9 - 1.7);

    if (snowTotal > 0.24) {
      tmp.copy(snow).lerp(snowBlue, n);
      tmp.lerp(grassA, 1 - Math.min(1, snowTotal * 1.7));
    } else if (pathAmt > 0.28) {
      tmp.copy(dirt).lerp(dirtDark, n2);
      tmp.lerp(grassA, 1 - Math.min(1, pathAmt * 1.4));
    } else if (n > 0.72) {
      tmp.copy(moss).lerp(grassC, n2 * 0.45);
    } else {
      tmp.copy(grassA).lerp(n > 0.52 ? grassB : grassC, n * 0.7 + n2 * 0.3);
      tmp.lerp(grassSun, Math.max(0, n2 - 0.55) * 0.85);
    }

    colors[i * 3] = tmp.r;
    colors[i * 3 + 1] = tmp.g;
    colors[i * 3 + 2] = tmp.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();

  const bump = makeGrassBumpTexture();
  const mesh = new THREE.Mesh(
    geo,
    new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.86,
      metalness: 0.0,
      flatShading: false,
      bumpMap: bump,
      bumpScale: 0.22,
    }),
  );
  mesh.rotation.x = -Math.PI / 2;
  mesh.receiveShadow = true;
  mesh.name = 'ground';
  return mesh;
}

function makeGrassBumpTexture(): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const n = fbm(x * 0.11 + 2.2, y * 0.11 - 1.4, 4);
      const blades = valueNoise(x * 0.55, y * 0.38);
      const v = Math.floor((n * 0.62 + blades * 0.38) * 255);
      const i = (y * size + x) * 4;
      img.data[i] = v;
      img.data[i + 1] = v;
      img.data[i + 2] = v;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(22, 22);
  tex.anisotropy = 4;
  tex.colorSpace = THREE.NoColorSpace;
  return tex;
}

function makeBladeTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = 32;
  c.height = 64;
  const g = c.getContext('2d')!;
  const grd = g.createLinearGradient(16, 64, 16, 0);
  grd.addColorStop(0, 'rgba(70, 130, 28, 0)');
  grd.addColorStop(0.1, 'rgba(96, 168, 40, 255)');
  grd.addColorStop(0.5, 'rgba(168, 220, 64, 255)');
  grd.addColorStop(1, 'rgba(232, 255, 120, 240)');
  g.fillStyle = grd;
  g.beginPath();
  g.moveTo(16, 2);
  g.quadraticCurveTo(5, 36, 9, 64);
  g.lineTo(23, 64);
  g.quadraticCurveTo(27, 36, 16, 2);
  g.fill();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function grassTuftGeometry(): THREE.BufferGeometry {
  const positions: number[] = [];
  const uvs: number[] = [];
  const blades = 5;
  for (let i = 0; i < blades; i++) {
    const a = (i / blades) * Math.PI;
    const ca = Math.cos(a);
    const sa = Math.sin(a);
    const w = 0.085 + (i % 3) * 0.02;
    const h = 0.26 + (i % 4) * 0.07;
    const corners: [number, number, number][] = [
      [-w, 0, 0],
      [w, 0, 0],
      [w, h, 0],
      [-w, h, 0],
    ];
    const idx = [0, 1, 2, 0, 2, 3];
    for (const k of idx) {
      const [lx, ly] = corners[k];
      positions.push(lx * ca, ly, lx * sa);
      uvs.push(k === 0 || k === 3 ? 0 : 1, ly / h);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.computeVertexNormals();
  return geo;
}

function flowerGeometry(): THREE.BufferGeometry {
  const positions: number[] = [];
  const uvs: number[] = [];
  // Stem
  const sw = 0.012;
  const sh = 0.16;
  const stem = [
    [-sw, 0, 0],
    [sw, 0, 0],
    [sw, sh, 0],
    [-sw, sh, 0],
  ];
  for (const k of [0, 1, 2, 0, 2, 3]) {
    const [x, y, z] = stem[k];
    positions.push(x, y, z);
    uvs.push(k === 0 || k === 3 ? 0.45 : 0.55, y / sh);
  }
  // Petals as a small cross
  const pr = 0.09;
  for (const a of [0, Math.PI / 2]) {
    const ca = Math.cos(a);
    const sa = Math.sin(a);
    const corners: [number, number][] = [
      [-pr, sh - 0.01],
      [pr, sh - 0.01],
      [pr, sh + 0.07],
      [-pr, sh + 0.07],
    ];
    for (const k of [0, 1, 2, 0, 2, 3]) {
      const [lx, ly] = corners[k];
      positions.push(lx * ca, ly, lx * sa);
      uvs.push(k === 0 || k === 3 ? 0 : 1, (ly - sh + 0.01) / 0.08);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.computeVertexNormals();
  return geo;
}

function addWind(mat: THREE.MeshLambertMaterial, amount: number): void {
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = { value: 0 };
    shader.vertexShader = `uniform float uTime;\n${shader.vertexShader}`;
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
       float hgt = max(transformed.y, 0.0);
       vec3 ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
       float t = uTime * 1.55 + ip.x * 0.82 + ip.z * 0.64;
       transformed.x += sin(t) * ${amount.toFixed(3)} * hgt;
       transformed.z += cos(t * 0.88 + 0.35) * ${(amount * 0.55).toFixed(3)} * hgt;`,
    );
    foliageShaders.push(shader as unknown as { uniforms: { uTime: { value: number } } });
  };
}

function canScatter(x: number, z: number, minPath = 0.32, minSnow = 0.22): boolean {
  if (pathAmount(x, z) > minPath) return false;
  if (snowAmount(x, z) > minSnow) return false;
  if (Math.hypot(x + 1.2, z + 0.5) < 1.55) return false; // campfire
  if (Math.hypot(x + 3.5, z + 1.5) < 1.35) return false; // tent
  return true;
}

export function createTerrainFoliage(): THREE.Group {
  const root = new THREE.Group();
  root.name = 'terrainFoliage';

  const dummy = new THREE.Object3D();
  // Do not set vertexColors — with no geometry color attr it multiplies instanceColor by 0 (black blades).
  const grassMat = new THREE.MeshLambertMaterial({
    map: makeBladeTexture(),
    color: 0xeaff98,
    side: THREE.DoubleSide,
    alphaTest: 0.18,
  });
  addWind(grassMat, 0.55);

  const grassPts: { x: number; z: number; h: number; s: number; r: number; c: THREE.Color }[] = [];
  const gColA = new THREE.Color(0xb4e05a);
  const gColB = new THREE.Color(0x6aa832);
  const tmpC = new THREE.Color();
  const gStep = 0.5;
  for (let gx = -20; gx <= 20; gx += gStep) {
    for (let gz = -20; gz <= 20; gz += gStep) {
      const jx = (hash2(Math.floor(gx * 20 + 3), Math.floor(gz * 20 + 9)) - 0.5) * gStep * 0.92;
      const jz = (hash2(Math.floor(gx * 20 + 11), Math.floor(gz * 20 + 2)) - 0.5) * gStep * 0.92;
      const x = gx + jx;
      const z = gz + jz;
      const keep = hash2(Math.floor(x * 17 + 4), Math.floor(z * 19 + 8));
      if (keep < 0.22) continue;
      if (!canScatter(x, z)) continue;
      const s = 0.75 + keep * 0.7;
      grassPts.push({
        x,
        z,
        h: groundHeight(x, z),
        s,
        r: keep * Math.PI * 2,
        c: tmpC.copy(gColA).lerp(gColB, hash2(Math.floor(x * 8), Math.floor(z * 13))),
      });
    }
  }

  const grass = new THREE.InstancedMesh(grassTuftGeometry(), grassMat, grassPts.length);
  grass.name = 'instancedGrass';
  grass.castShadow = false;
  grass.receiveShadow = true;
  grass.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  const gColors = new Float32Array(grassPts.length * 3);
  grassPts.forEach((p, i) => {
    dummy.position.set(p.x, p.h, p.z);
    dummy.rotation.set(0, p.r, 0);
    dummy.scale.setScalar(p.s);
    dummy.updateMatrix();
    grass.setMatrixAt(i, dummy.matrix);
    gColors[i * 3] = p.c.r;
    gColors[i * 3 + 1] = p.c.g;
    gColors[i * 3 + 2] = p.c.b;
  });
  grass.instanceColor = new THREE.InstancedBufferAttribute(gColors, 3);
  grass.instanceMatrix.needsUpdate = true;
  grass.frustumCulled = false;
  grass.raycast = () => {};
  root.add(grass);

  const flowerMat = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
  });
  addWind(flowerMat, 0.35);

  const flowerCols = [0xfff6dc, 0xffdc3c, 0xff6aa8, 0xc888ff, 0xff8a32];
  const flowerPts: { x: number; z: number; h: number; s: number; r: number; c: THREE.Color }[] = [];
  const fStep = 1.28;
  for (let fx = -19; fx <= 19; fx += fStep) {
    for (let fz = -19; fz <= 19; fz += fStep) {
      const jx = (hash2(Math.floor(fx * 13 + 21), Math.floor(fz * 13 + 5)) - 0.5) * fStep;
      const jz = (hash2(Math.floor(fx * 13 + 7), Math.floor(fz * 13 + 18)) - 0.5) * fStep;
      const x = fx + jx;
      const z = fz + jz;
      const keep = hash2(Math.floor(x * 29 + 1), Math.floor(z * 31 + 6));
      if (keep < 0.28) continue;
      if (!canScatter(x, z, 0.26, 0.18)) continue;
      const col = new THREE.Color(flowerCols[Math.floor(keep * flowerCols.length) % flowerCols.length]);
      flowerPts.push({
        x,
        z,
        h: groundHeight(x, z),
        s: 0.85 + keep * 0.55,
        r: keep * 6.2,
        c: col,
      });
    }
  }
  const flowers = new THREE.InstancedMesh(flowerGeometry(), flowerMat, flowerPts.length);
  flowers.name = 'instancedFlowers';
  flowers.castShadow = false;
  const fColors = new Float32Array(flowerPts.length * 3);
  flowerPts.forEach((p, i) => {
    dummy.position.set(p.x, p.h, p.z);
    dummy.rotation.set(0, p.r, 0);
    dummy.scale.setScalar(p.s);
    dummy.updateMatrix();
    flowers.setMatrixAt(i, dummy.matrix);
    fColors[i * 3] = p.c.r;
    fColors[i * 3 + 1] = p.c.g;
    fColors[i * 3 + 2] = p.c.b;
  });
  flowers.instanceColor = new THREE.InstancedBufferAttribute(fColors, 3);
  flowers.instanceMatrix.needsUpdate = true;
  flowers.frustumCulled = false;
  flowers.raycast = () => {};
  root.add(flowers);

  const stoneMat = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    flatShading: true,
  });
  const stoneCols = [0x8a8c86, 0x6e6a62, 0x9a9488, 0x5c6454];
  const stonePts: { x: number; z: number; h: number; s: number; rx: number; ry: number; c: THREE.Color }[] = [];
  const sStep = 1.7;
  for (let sx = -18.5; sx <= 18.5; sx += sStep) {
    for (let sz = -18.5; sz <= 18.5; sz += sStep) {
      const jx = (hash2(Math.floor(sx * 11 + 40), Math.floor(sz * 11 + 3)) - 0.5) * sStep;
      const jz = (hash2(Math.floor(sx * 11 + 8), Math.floor(sz * 11 + 33)) - 0.5) * sStep;
      const x = sx + jx;
      const z = sz + jz;
      const keep = hash2(Math.floor(x * 23 + 2), Math.floor(z * 27 + 9));
      if (keep < 0.55) continue;
      if (!canScatter(x, z, 0.2, 0.16)) continue;
      stonePts.push({
        x,
        z,
        h: groundHeight(x, z),
        s: 0.7 + keep * 1.1,
        rx: keep * 2.2,
        ry: keep * 5.1,
        c: new THREE.Color(stoneCols[Math.floor(keep * stoneCols.length) % stoneCols.length]),
      });
    }
  }
  const stones = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(0.11, 0), stoneMat, stonePts.length);
  stones.name = 'instancedStones';
  stones.castShadow = true;
  stones.receiveShadow = true;
  const sColors = new Float32Array(stonePts.length * 3);
  stonePts.forEach((p, i) => {
    dummy.position.set(p.x, p.h + 0.04 * p.s, p.z);
    dummy.rotation.set(p.rx, p.ry, p.rx * 0.4);
    dummy.scale.set(p.s * 1.15, p.s * 0.7, p.s * 1.05);
    dummy.updateMatrix();
    stones.setMatrixAt(i, dummy.matrix);
    sColors[i * 3] = p.c.r;
    sColors[i * 3 + 1] = p.c.g;
    sColors[i * 3 + 2] = p.c.b;
  });
  stones.instanceColor = new THREE.InstancedBufferAttribute(sColors, 3);
  stones.instanceMatrix.needsUpdate = true;
  stones.frustumCulled = false;
  stones.raycast = () => {};
  root.add(stones);

  return root;
}

export function tickTerrainFoliage(time: number): void {
  for (const s of foliageShaders) s.uniforms.uTime.value = time;
}
