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
  if (id === 'bronze_sword' || id === 'frost_sword' || id === 'briar_sword' || id === 'dusk_dagger' || id === 'cinder_knife') mesh.rotation.set(0.15, 0.85, -0.85);
  if (id === 'frost_spear') mesh.rotation.set(0.2, 0.7, -1.05);
  if (id === 'bronze_hatchet' || id === 'frost_hammer' || id === 'road_mace' || id === 'delver_maul') mesh.rotation.set(0.25, 0.95, -0.35);
  if (id === 'bronze_pickaxe') mesh.rotation.set(0.15, 0.7, -0.25);
  if (id === 'frost_bow') mesh.rotation.set(0.05, 0.9, 0.2);
  if (id === 'frost_shield' || id === 'briar_shield' || id === 'road_shield' || id === 'cinder_shield') mesh.rotation.set(0.22, 0.38, 0.06);
  if (id === 'frost_chest' || id === 'briar_vest' || id === 'dusk_cloak' || id === 'delver_vest') mesh.rotation.set(0.2, 0.7, 0);
  if (id === 'frost_greaves' || id === 'frost_legs' || id === 'road_legs' || id === 'road_greaves' || id === 'cinder_legs') mesh.rotation.set(0.15, 0.6, 0.15);
  if (id === 'frost_boots' || id === 'briar_boots' || id === 'dusk_boots' || id === 'delver_boots') mesh.rotation.set(0.6, 0.4, 0);
  if (id === 'wolf_pelt') mesh.rotation.set(0.4, 0.6, 0.1);
  if (id === 'wolf_fang' || id === 'boar_tusk' || id === 'dusk_fang') mesh.rotation.set(0.2, 0.5, 0.6);
  if (id === 'fox_fur') mesh.rotation.set(0.35, 0.7, 0.1);
  if (id === 'soot_feather') mesh.rotation.set(0.2, 0.5, 0.4);
  if (id === 'charcoal') mesh.rotation.set(0.4, 0.6, 0.1);
  if (id === 'beetle_shell') mesh.rotation.set(0.5, 0.4, 0.2);
  if (id === 'copper_grit') mesh.rotation.set(0.3, 0.7, 0.15);
  if (id === 'boar_hide') mesh.rotation.set(0.35, 0.55, 0.12);
  if (id === 'spider_silk') mesh.rotation.set(0.2, 0.8, 0.15);
  if (id === 'boar_roast') mesh.rotation.set(0.45, 0.4, 0.1);
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
