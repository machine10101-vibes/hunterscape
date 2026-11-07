import * as THREE from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';

/**
 * Renders the world into a small nearest-filtered target, then upscales it with
 * an ink outline, soft cel banding, ordered dither, and a gentle vignette.
 * Everything here is look only. It never touches game state.
 */
const FRAG = /* glsl */ `
  uniform sampler2D tColor;
  uniform sampler2D tDepth;
  uniform vec2 res;
  uniform float near;
  uniform float far;
  varying vec2 vUv;

  float lin(float d) {
    float z = d * 2.0 - 1.0;
    return (2.0 * near * far) / (far + near - z * (far - near));
  }
  float L(vec2 o) { return lin(texture2D(tDepth, vUv + o / res).x); }

  float bayer4(vec2 p) {
    vec2 q = mod(floor(p), 4.0);
    float i = q.x + q.y * 4.0;
    float m = 0.0;
    if (i < 0.5) m = 0.0; else if (i < 1.5) m = 8.0; else if (i < 2.5) m = 2.0; else if (i < 3.5) m = 10.0;
    else if (i < 4.5) m = 12.0; else if (i < 5.5) m = 4.0; else if (i < 6.5) m = 14.0; else if (i < 7.5) m = 6.0;
    else if (i < 8.5) m = 3.0; else if (i < 9.5) m = 11.0; else if (i < 10.5) m = 1.0; else if (i < 11.5) m = 9.0;
    else if (i < 12.5) m = 15.0; else if (i < 13.5) m = 7.0; else if (i < 14.5) m = 13.0; else m = 5.0;
    return m / 16.0 - 0.5;
  }

  void main() {
    vec4 c = texture2D(tColor, vUv);
    float raw = texture2D(tDepth, vUv).x;
    float d = lin(raw);
    float e = max(
      max(d - L(vec2(-1.0, 0.0)), d - L(vec2(1.0, 0.0))),
      max(d - L(vec2(0.0, 1.0)), d - L(vec2(0.0, -1.0)))
    );
    float edge = raw < 0.9999 ? step(0.02 * d + 0.16, e) : 0.0;

    vec3 col = c.rgb;
    float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
    col = mix(vec3(luma), col, 1.18);

    float bands = 6.0;
    float banded = floor(luma * bands + 0.5) / bands;
    col *= mix(1.0, (banded + 0.04) / (luma + 0.04), 0.28);

    col = mix(col, col * vec3(0.12, 0.15, 0.2), edge * 0.9);

    vec2 q = vUv - 0.5;
    col *= 1.0 - dot(q, q) * 0.5;

    gl_FragColor = vec4(col, 1.0);
    #if defined( TONE_MAPPING )
      gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
    #endif
    gl_FragColor = linearToOutputTexel( gl_FragColor );

    float levels = 28.0;
    vec3 dith = gl_FragColor.rgb + bayer4(gl_FragCoord.xy) / levels;
    gl_FragColor.rgb = floor(dith * levels + 0.5) / levels;
  }
`;

export class PixelPost {
  private rt: THREE.WebGLRenderTarget | null = null;
  private material: THREE.ShaderMaterial;
  private quad: FullScreenQuad;
  private override: number;

  constructor(
    private renderer: THREE.WebGLRenderer,
    private camera: THREE.PerspectiveCamera,
  ) {
    const params = new URLSearchParams(window.location.search);
    this.override = Number(params.get('px')) || Number(localStorage.getItem('hunterscape_px')) || 0;
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        tColor: { value: null },
        tDepth: { value: null },
        res: { value: new THREE.Vector2(1, 1) },
        near: { value: camera.near },
        far: { value: camera.far },
      },
      vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
      fragmentShader: FRAG,
      depthTest: false,
      depthWrite: false,
    });
    this.quad = new FullScreenQuad(this.material);
    this.resize();
  }

  /** Whole CSS pixels per rendered pixel. Phones and desktops land on 2 or 3. */
  private autoScale(h: number): number {
    return Math.max(2, Math.round(h / 340));
  }

  resize(): void {
    const vv = window.visualViewport;
    const vw = Math.max(1, Math.floor(vv?.width || window.innerWidth));
    const vh = Math.max(1, Math.floor(vv?.height || window.innerHeight));
    const ps = this.override || this.autoScale(vh);
    const w = Math.max(64, Math.floor(vw / ps));
    const h = Math.max(64, Math.floor(vh / ps));
    this.renderer.setPixelRatio(1);
    this.renderer.setSize(w, h, false);
    const el = this.renderer.domElement;
    el.style.width = '100%';
    el.style.height = '100%';
    this.rt?.dispose();
    this.rt = new THREE.WebGLRenderTarget(w, h, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      depthTexture: new THREE.DepthTexture(w, h),
    });
    this.material.uniforms.res.value.set(w, h);
    this.material.uniforms.far.value = this.camera.far;
    this.material.uniforms.near.value = this.camera.near;
  }

  render(scene: THREE.Scene, camera: THREE.PerspectiveCamera): void {
    if (!this.rt) return;
    this.material.uniforms.near.value = camera.near;
    this.material.uniforms.far.value = camera.far;
    this.renderer.setRenderTarget(this.rt);
    this.renderer.clear();
    this.renderer.render(scene, camera);
    this.renderer.setRenderTarget(null);
    this.material.uniforms.tColor.value = this.rt.texture;
    this.material.uniforms.tDepth.value = this.rt.depthTexture;
    this.quad.render(this.renderer);
  }
}
