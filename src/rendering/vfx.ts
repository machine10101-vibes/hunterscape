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
    color: 0xc48a40,
    emissive: 0x5a3010,
    emissiveIntensity: 0.35,
    flatShading: true,
    roughness: 0.85,
  });
  private sparkMat = new THREE.MeshStandardMaterial({
    color: 0xffe088,
    emissive: 0xffcc44,
    emissiveIntensity: 2.0,
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
  private iceMat = new THREE.MeshStandardMaterial({
    color: 0xa8e8ff,
    emissive: 0x44aacc,
    emissiveIntensity: 1.2,
    flatShading: true,
    transparent: true,
    opacity: 0.9,
  });
  private clawMat = new THREE.MeshStandardMaterial({
    color: 0xd8e8f8,
    emissive: 0x88bbdd,
    emissiveIntensity: 0.8,
    flatShading: true,
  });
  private spearMat = new THREE.MeshStandardMaterial({
    color: 0xc8d0a0,
    emissive: 0x88aa44,
    emissiveIntensity: 0.9,
    flatShading: true,
  });
  private impactMat = new THREE.MeshStandardMaterial({
    color: 0xfff6d0,
    emissive: 0xffcc66,
    emissiveIntensity: 2.4,
    flatShading: true,
    transparent: true,
    opacity: 0.95,
  });
  private telegraphMat = new THREE.MeshBasicMaterial({
    color: 0xff4422,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  private frostTeleMat = new THREE.MeshBasicMaterial({
    color: 0x88ddff,
    transparent: true,
    opacity: 0.5,
    depthWrite: false,
    side: THREE.DoubleSide,
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
      const s = 0.14 + Math.random() * 0.16;
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(s, s * 0.35, s * 0.7),
        this.chipMat,
      );
      mesh.position.copy(origin);
      mesh.position.x += (Math.random() - 0.5) * 0.35;
      mesh.position.y += 0.35 + Math.random() * 0.55;
      mesh.position.z += (Math.random() - 0.5) * 0.35;
      mesh.castShadow = false;
      this.scene.add(mesh);
      this.particles.push({
        mesh,
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 3.4,
          2.2 + Math.random() * 2.8,
          (Math.random() - 0.5) * 3.4,
        ),
        life: 0,
        maxLife: 1.05 + Math.random() * 0.55,
        gravity: 7,
        spin: (Math.random() - 0.5) * 14,
      });
    }
  }

  spawnMineSparks(origin: THREE.Vector3, count = 12): void {
    for (let i = 0; i < count; i++) {
      const isOre = i % 3 === 0;
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(isOre ? 0.11 : 0.07, 5, 4),
        isOre ? this.oreMat : this.sparkMat,
      );
      mesh.position.copy(origin);
      mesh.position.x += (Math.random() - 0.5) * 0.3;
      mesh.position.y += 0.25 + Math.random() * 0.45;
      mesh.position.z += (Math.random() - 0.5) * 0.3;
      this.scene.add(mesh);
      this.particles.push({
        mesh,
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 4.6,
          2.0 + Math.random() * 3.2,
          (Math.random() - 0.5) * 4.6,
        ),
        life: 0,
        maxLife: 0.85 + Math.random() * 0.45,
        gravity: 6,
        spin: (Math.random() - 0.5) * 18,
      });
    }
  }

  spawnHitSparks(origin: THREE.Vector3, count = 18): void {
    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.045 + Math.random() * 0.04, 0),
        this.hitMat,
      );
      mesh.position.copy(origin);
      mesh.position.y += 1.0 + Math.random() * 0.45;
      this.scene.add(mesh);
      this.particles.push({
        mesh,
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 5.2,
          1.0 + Math.random() * 2.8,
          (Math.random() - 0.5) * 5.2,
        ),
        life: 0,
        maxLife: 0.4 + Math.random() * 0.3,
        gravity: 4.5,
        spin: (Math.random() - 0.5) * 20,
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
      maxLife: 1.55,
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

  spawnDamage(world: THREE.Vector3, amount: number, crit = false): void {
    this.spawnFloatingText(
      world.clone().add(new THREE.Vector3((Math.random() - 0.5) * 0.25, 1.7, 0)),
      crit ? `${amount}!` : String(amount),
      crit ? '#ffe066' : '#ff8a78',
    );
  }


  /** Icy burst when Frost Yeti swipes or dies */
  spawnIceBurst(origin: THREE.Vector3, count = 16): void {
    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.06 + Math.random() * 0.05, 0),
        this.iceMat,
      );
      mesh.position.copy(origin);
      mesh.position.y += 0.8 + Math.random() * 0.6;
      mesh.position.x += (Math.random() - 0.5) * 0.4;
      mesh.position.z += (Math.random() - 0.5) * 0.4;
      this.scene.add(mesh);
      this.particles.push({
        mesh,
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 5,
          1.2 + Math.random() * 3.5,
          (Math.random() - 0.5) * 5,
        ),
        life: 0,
        maxLife: 0.55 + Math.random() * 0.4,
        gravity: 5,
        spin: (Math.random() - 0.5) * 20,
      });
    }
  }

  /** Claw slash arcs for yeti melee */
  spawnClawSlash(origin: THREE.Vector3, count = 8): void {
    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 0.02, 0.28 + Math.random() * 0.15),
        this.clawMat,
      );
      mesh.position.copy(origin);
      mesh.position.y += 1.0 + Math.random() * 0.5;
      const a = (i / count) * Math.PI - Math.PI / 2;
      mesh.rotation.y = a;
      mesh.rotation.z = -0.4;
      this.scene.add(mesh);
      this.particles.push({
        mesh,
        vel: new THREE.Vector3(Math.cos(a) * 3.5, 0.5 + Math.random(), Math.sin(a) * 3.5),
        life: 0,
        maxLife: 0.28 + Math.random() * 0.15,
        gravity: 2,
        spin: 8,
      });
    }
  }


  /** Spear thrust streaks for Orc Scout melee */
  spawnSpearThrust(origin: THREE.Vector3, count = 8): void {
    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(
        new THREE.ConeGeometry(0.04, 0.22 + Math.random() * 0.12, 4),
        this.spearMat,
      );
      mesh.position.copy(origin);
      mesh.position.y += 0.9 + Math.random() * 0.5;
      const a = (i / count) * Math.PI * 0.6 - 0.3;
      mesh.rotation.z = a;
      mesh.rotation.x = Math.PI / 2;
      this.scene.add(mesh);
      this.particles.push({
        mesh,
        vel: new THREE.Vector3(Math.sin(a) * 3.2, 0.4 + Math.random(), Math.cos(a) * 3.2),
        life: 0,
        maxLife: 0.28 + Math.random() * 0.15,
        gravity: 2,
        spin: 10,
      });
    }
  }

  /** Stronger bloodless impact burst on connect */
  spawnImpactBurst(origin: THREE.Vector3, count = 18, frost = false): void {
    const mat = frost ? this.iceMat : this.impactMat;
    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.05 + Math.random() * 0.06, 0),
        mat,
      );
      mesh.position.copy(origin);
      mesh.position.y += 0.9 + Math.random() * 0.55;
      this.scene.add(mesh);
      const a = Math.random() * Math.PI * 2;
      const sp = 2.5 + Math.random() * 4.5;
      this.particles.push({
        mesh,
        vel: new THREE.Vector3(Math.cos(a) * sp, 1.5 + Math.random() * 3.2, Math.sin(a) * sp),
        life: 0,
        maxLife: 0.4 + Math.random() * 0.35,
        gravity: 5,
        spin: (Math.random() - 0.5) * 22,
      });
    }
    // Expanding ring flash
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.15, 0.45, 20),
      new THREE.MeshBasicMaterial({
        color: frost ? 0xa8e8ff : 0xffe8a0,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(origin.x, 0.12, origin.z);
    this.scene.add(ring);
    this.particles.push({
      mesh: ring,
      vel: new THREE.Vector3(0, 0.05, 0),
      life: 0,
      maxLife: 0.35,
      gravity: 0,
      spin: 0,
    });
  }

  /** Ground telegraph disc under enemy during windup */
  spawnTelegraph(origin: THREE.Vector3, frost = false, life = 0.45): void {
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.55, 0.95, 24),
      frost ? this.frostTeleMat.clone() : this.telegraphMat.clone(),
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(origin.x, 0.08, origin.z);
    this.scene.add(ring);
    this.particles.push({
      mesh: ring,
      vel: new THREE.Vector3(0, 0, 0),
      life: 0,
      maxLife: life,
      gravity: 0,
      spin: 2,
    });
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
      // Expanding rings grow then fade
      if ((p.mesh.geometry as THREE.RingGeometry).type === 'RingGeometry') {
        p.mesh.scale.setScalar(1 + t * 1.8);
        const m = p.mesh.material as THREE.MeshBasicMaterial;
        if (m && m.opacity !== undefined) m.opacity = Math.max(0, (1 - t) * 0.7);
      } else {
        p.mesh.scale.setScalar(s);
      }
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
