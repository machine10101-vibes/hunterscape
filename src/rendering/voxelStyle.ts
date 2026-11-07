import * as THREE from 'three';

/**
 * Gives every standard material the chunky voxel-pixel surface of the reference art:
 * each face is cut into small texels that get their own slight brightness, and
 * vertex-coloured ground collapses into flat colour patches instead of smooth gradients.
 * It reads the object-space position, so moving rigs keep their texels and nothing swims.
 */
const CELL = 0.11;

const VERT_COMMON = 'varying vec3 vVox;';
const FRAG_COMMON = /* glsl */ `
  varying vec3 vVox;
  float vxHash(vec3 p) {
    p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }
`;

const FRAG_BODY = /* glsl */ `
  {
    vec3 vxN = cross(dFdx(vVox), dFdy(vVox));
    float vxL = length(vxN);
    vxN = vxL > 1e-20 ? vxN / vxL : vec3(0.0, 1.0, 0.0);
    vec3 vxA = abs(vxN);
    vec3 vxC = floor((vVox - vxN * 0.002) / ${CELL.toFixed(3)});
    float vxH;
    if (vxA.y >= vxA.x && vxA.y >= vxA.z) vxH = vxHash(vec3(vxC.x, vxC.z, vxC.y));
    else if (vxA.x >= vxA.z) vxH = vxHash(vec3(vxC.y, vxC.z, vxC.x + 7.0));
    else vxH = vxHash(vec3(vxC.x, vxC.y, vxC.z + 13.0));
    diffuseColor.rgb *= 0.9 + vxH * 0.2;
    #ifdef USE_COLOR
      vec3 vxS = sqrt(max(diffuseColor.rgb, vec3(0.0)));
      vxS = floor(vxS * 13.0 + 0.5) / 13.0;
      diffuseColor.rgb = vxS * vxS;
    #endif
  }
`;

function patch(shader: { vertexShader: string; fragmentShader: string }): void {
  shader.vertexShader = shader.vertexShader
    .replace('#include <common>', `#include <common>\n${VERT_COMMON}`)
    .replace('#include <begin_vertex>', '#include <begin_vertex>\n  vVox = transformed;');
  shader.fragmentShader = shader.fragmentShader
    .replace('#include <common>', `#include <common>\n${FRAG_COMMON}`)
    .replace('#include <color_fragment>', `#include <color_fragment>\n${FRAG_BODY}`);
}

let installed = false;

export function installVoxelStyle(): void {
  if (installed) return;
  installed = true;
  const hook = function (this: THREE.Material, shader: { vertexShader: string; fragmentShader: string }): void {
    patch(shader);
  };
  THREE.MeshStandardMaterial.prototype.onBeforeCompile = hook as never;
  THREE.MeshPhysicalMaterial.prototype.onBeforeCompile = hook as never;
}

/** Chains the voxel patch behind a material's own shader edits, such as wind. */
export function withVoxelStyle(mat: THREE.Material, own: (shader: never) => void): void {
  mat.onBeforeCompile = (shader) => {
    own(shader as never);
    patch(shader);
  };
}
