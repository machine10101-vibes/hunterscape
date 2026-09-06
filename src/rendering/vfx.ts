import * as THREE from 'three';

interface Particle {
  mesh: THREE.Mesh;
  vel: THREE.Vector3;
  life: number;
  maxLife: number;
  gravity: number;
  spin: number;
}

interface FloatXp {
  el: HTMLDivElement;
  life: number;
  maxLife: number;
  world: THREE.Vector3;
  driftY: number;
}

export class VFX {
  private scene: THREE.Scene;
  private camera: THREE.Camera;
  private overlay: HTMLElement;
  private particles: Particle[] = [];
  private floats: FloatXp[] = [];
  private tmp = new THREE.Vector3();
  private chipMat = new THREE.MeshStandardMaterial({
    color: 0x8a5a28,
    flatShading: true,
    roughness: 0.9,
  });
  private sparkMat = new THREE.MeshStandardMaterial({
    color: 0xffcc66,
    emissive: 0xffaa33,
    emissiveIntensity: 1.2,
    flatShading: true,
  });
  private hitMat = new THREE.MeshStandardMaterial({
    color: 0xffeeaa,
    emissive: 0xffdd88,
    emissiveIntensity: 1.5,
    flatShading: true,
  });
  private oreMat = new THREE.MeshStandardMaterial({
    color: 0xb87333,
    emissive: 0x663311,
    emissiveIntensity: 0.4,
    metalness: 0.5,
    roughness: 0.45,
    flatShading: true,
  });

  constructor(scene: THREE.Scene, camera: THREE.Camera, overlayParent: HTMLElement) {
    this.scene = scene;
    this.camera = camera;
    this.overlay = document.createElement('div');
    this.overlay.id = 'vfx-overlay';
    this.overlay.style.cssText =
      'position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:15;';
    overlayParent.appendChild(this.overlay);
  }

  spawnWoodchips(origin: THREE.Vector3, count = 10): void {
    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.06 + Math.random() * 0.05, 0.03, 0.08),
        this.chipMat,
      );
      mesh.position.copy(origin);
      mesh.position.y += 0.8 + Math.random() * 0.4;
      mesh.castShadow = false;
      this.scene.add(mesh);
      this.particles.push({
        mesh,
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 2.2,
          1.5 + Math.random() * 2,
          (Math.random() - 0.5) * 2.2,
        ),
        life: 0,
        maxLife: 0.55 + Math.random() * 0.35,
        gravity: 6,
        spin: (Math.random() - 0.5) * 10,
      });
    }
  }

  spawnMineSparks(origin: THREE.Vector3, count = 12): void {
    for (let i = 0; i < count; i++) {
      const isOre = i % 3 === 0;
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(isOre ? 0.05 : 0.03, 4, 3),
        isOre ? this.oreMat : this.sparkMat,
      );
      mesh.position.copy(origin);
      mesh.position.y += 0.5 + Math.random() * 0.3;
      this.scene.add(mesh);
      this.particles.push({
        mesh,
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 3.5,
          1.2 + Math.random() * 2.5,
          (Math.random() - 0.5) * 3.5,
        ),
        life: 0,
        maxLife: 0.4 + Math.random() * 0.3,
        gravity: 5,
        spin: (Math.random() - 0.5) * 14,
      });
    }
  }

  spawnHitSparks(origin: THREE.Vector3, count = 14): void {
    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.04 + Math.random() * 0.03, 0),
        this.hitMat,
      );
      mesh.position.copy(origin);
      mesh.position.y += 1.0 + Math.random() * 0.4;
      this.scene.add(mesh);
      this.particles.push({
        mesh,
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 4,
          0.8 + Math.random() * 2.2,
          (Math.random() - 0.5) * 4,
        ),
        life: 0,
        maxLife: 0.35 + Math.random() * 0.25,
        gravity: 4,
        spin: (Math.random() - 0.5) * 16,
      });
    }
  }

  /** Floating XP / damage text near a world position */
  spawnFloatingText(
    world: THREE.Vector3,
    text: string,
    color = '#7ec87e',
  ): void {
    const el = document.createElement('div');
    el.className = 'float-xp';
    el.textContent = text;
    el.style.color = color;
    this.overlay.appendChild(el);
    this.floats.push({
      el,
      life: 0,
      maxLife: 1.35,
      world: world.clone(),
      driftY: 0,
    });
  }

  spawnXp(world: THREE.Vector3, amount: number, skillLabel: string): void {
    this.spawnFloatingText(
      world.clone().add(new THREE.Vector3((Math.random() - 0.5) * 0.4, 1.6, 0)),
      `+${amount} ${skillLabel}`,
      '#7ec87e',
    );
  }

  spawnDamage(world: THREE.Vector3, amount: number): void {
    this.spawnFloatingText(
      world.clone().add(new THREE.Vector3(0, 1.7, 0)),
      String(amount),
      '#ffb0a0',
    );
  }

  update(dt: number): void {
    // Particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life += dt;
      p.vel.y -= p.gravity * dt;
      p.mesh.position.addScaledVector(p.vel, dt);
      p.mesh.rotation.x += p.spin * dt;
      p.mesh.rotation.z += p.spin * 0.7 * dt;
      const t = p.life / p.maxLife;
      const s = Math.max(0.05, 1 - t * 0.85);
      p.mesh.scale.setScalar(s);
      if (p.life >= p.maxLife) {
        this.scene.remove(p.mesh);
        p.mesh.geometry.dispose();
        this.particles.splice(i, 1);
      }
    }

    // Floating XP (screen-project)
    for (let i = this.floats.length - 1; i >= 0; i--) {
      const f = this.floats[i];
      f.life += dt;
      f.driftY += dt * 0.55;
      this.tmp.set(f.world.x, f.world.y + f.driftY, f.world.z);
      this.tmp.project(this.camera);
      const x = (this.tmp.x * 0.5 + 0.5) * window.innerWidth;
      const y = (-this.tmp.y * 0.5 + 0.5) * window.innerHeight;
      const fade = Math.max(0, 1 - f.life / f.maxLife);
      f.el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
      f.el.style.opacity = String(fade);
      if (f.life >= f.maxLife || this.tmp.z > 1) {
        f.el.remove();
        this.floats.splice(i, 1);
      }
    }
  }
}
