import * as THREE from 'three';
import type { AttackStyle } from '../game/types';

const TINT: Record<AttackStyle, number> = {
  slash: 0xe6c878,
  stab: 0x7ec8e6,
  crush: 0xd08040,
  ranged: 0xc8d0d8,
};

/**
 * A small faceted chip on a creature. The colour is its weakness:
 * gold for slash, steel-blue for stab, copper for crush.
 */
export function addWeaknessMark(root: THREE.Object3D, style: AttackStyle, y: number): void {
  const color = TINT[style];
  const chip = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.055, 0),
    new THREE.MeshStandardMaterial({
      color,
      emissive: color,
      emissiveIntensity: 0.45,
      roughness: 0.35,
      metalness: 0.35,
      flatShading: true,
    }),
  );
  chip.name = 'weaknessMark';
  chip.position.set(0.16, y, 0.12);
  chip.castShadow = true;
  root.add(chip);
}
