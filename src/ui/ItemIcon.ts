import * as THREE from 'three';
import { createItemMesh } from '../rendering/items';

const SIZE = 128;
const cache = new Map<string, HTMLCanvasElement>();

let renderer: THREE.WebGLRenderer | null = null;
let scene: THREE.Scene | null = null;
let camera: THREE.PerspectiveCamera | null = null;

function ensureStudio(): void {
  if (renderer) return;
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(1);
  renderer.setSize(SIZE, SIZE, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;
  renderer.setClearColor(0x000000, 0);

  scene = new THREE.Scene();
  scene.add(new THREE.HemisphereLight(0xf4f7ff, 0x4a3a28, 1.05));
  const key = new THREE.DirectionalLight(0xfff4dc, 1.8);
  key.position.set(2.2, 3.4, 2.6);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xc8dcff, 0.55);
  fill.position.set(-2.4, 1.2, -1.6);
  scene.add(fill);

  camera = new THREE.PerspectiveCamera(32, 1, 0.02, 20);
}

function frame(obj: THREE.Object3D): void {
  const box = new THREE.Box3().setFromObject(obj);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  obj.position.sub(center);
  const max = Math.max(size.x, size.y, size.z, 0.08);
  camera!.position.set(max * 1.15, max * 0.55, max * 1.7);
  camera!.near = max * 0.05;
  camera!.far = max * 8;
  camera!.updateProjectionMatrix();
  camera!.lookAt(0, 0, 0);
}

/** Bake a 3D portrait of an item once and reuse the canvas. */
export function getItemIcon(id: string): HTMLCanvasElement {
  const hit = cache.get(id);
  if (hit) return hit;
  ensureStudio();
  const mesh = createItemMesh(id);
  scene!.add(mesh);
  frame(mesh);
  renderer!.render(scene!, camera!);
  const out = document.createElement('canvas');
  out.width = SIZE;
  out.height = SIZE;
  out.getContext('2d')!.drawImage(renderer!.domElement, 0, 0);
  scene!.remove(mesh);
  mesh.traverse((c) => {
    const m = c as THREE.Mesh;
    if (m.geometry) m.geometry.dispose();
  });
  cache.set(id, out);
  return out;
}

export function paintItemIcon(target: HTMLCanvasElement, id: string): void {
  const src = getItemIcon(id);
  target.width = SIZE;
  target.height = SIZE;
  const ctx = target.getContext('2d');
  if (!ctx) return;
  ctx.clearRect(0, 0, SIZE, SIZE);
  ctx.drawImage(src, 0, 0);
}
