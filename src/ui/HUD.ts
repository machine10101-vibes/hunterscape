import {
  ITEM_META,
  SKILL_META,
  xpForLevel,
  type ItemStack,
  type SaveData,
  type SkillId,
} from '../game/types';

export type ChatKind = 'system' | 'xp' | 'combat' | 'loot' | 'plain';

export class HUD {
  private chatLog: HTMLElement;
  private invGrid: HTMLElement;
  private invCount: HTMLElement;
  private skillsList: HTMLElement;
  private skillsPanel: HTMLElement;
  private progressWrap: HTMLElement;
  private progressFill: HTMLElement;
  private progressLabel: HTMLElement;
  private targetInfo: HTMLElement;
  private targetName: HTMLElement;
  private targetHp: HTMLElement;
  private hpText: HTMLElement;
  private prayText: HTMLElement;
  private stamText: HTMLElement;
  private hpRing: SVGCircleElement;
  private prayRing: SVGCircleElement;
  private stamRing: SVGCircleElement;
  private minimap: HTMLCanvasElement;
  private minimapCtx: CanvasRenderingContext2D;
  private touchHint: HTMLElement;
  private circum = 2 * Math.PI * 28;

  onAction: ((action: string) => void) | null = null;
  onInventoryClick: ((index: number) => void) | null = null;

  constructor() {
    this.chatLog = el('chat-log');
    this.invGrid = el('inv-grid');
    this.invCount = el('inv-count');
    this.skillsList = el('skills-list');
    this.skillsPanel = el('skills-panel');
    this.progressWrap = el('progress-wrap');
    this.progressFill = el('progress-fill');
    this.progressLabel = el('progress-label');
    this.targetInfo = el('target-info');
    this.targetName = el('target-name');
    this.targetHp = el('target-hp');
    this.hpText = el('hp-text');
    this.prayText = el('pray-text');
    this.stamText = el('stam-text');
    this.hpRing = el('hp-ring') as unknown as SVGCircleElement;
    this.prayRing = el('pray-ring') as unknown as SVGCircleElement;
    this.stamRing = el('stam-ring') as unknown as SVGCircleElement;
    this.minimap = el('minimap') as HTMLCanvasElement;
    this.minimapCtx = this.minimap.getContext('2d')!;
    this.touchHint = el('touch-hint');

    el('btn-skills').addEventListener('click', () => {
      this.skillsPanel.hidden = !this.skillsPanel.hidden;
    });
    el('skills-close').addEventListener('click', () => {
      this.skillsPanel.hidden = true;
    });

    document.querySelectorAll('.ab-slot').forEach((btn) => {
      btn.addEventListener('click', () => {
        const action = (btn as HTMLElement).dataset.action;
        if (action) this.onAction?.(action);
        btn.classList.add('active');
        setTimeout(() => btn.classList.remove('active'), 120);
      });
    });

    setTimeout(() => this.touchHint.classList.add('fade'), 8000);
  }

  chat(msg: string, kind: ChatKind = 'system'): void {
    const line = document.createElement('div');
    line.className = `chat-line ${kind === 'plain' ? '' : kind}`.trim();
    line.textContent = msg;
    this.chatLog.appendChild(line);
    while (this.chatLog.children.length > 40) {
      this.chatLog.removeChild(this.chatLog.firstChild!);
    }
    this.chatLog.scrollTop = this.chatLog.scrollHeight;
  }

  setOrbs(hp: number, maxHp: number, focus: number, stamina: number): void {
    this.hpText.textContent = String(Math.round(hp));
    this.prayText.textContent = String(Math.round(focus));
    this.stamText.textContent = String(Math.round(stamina));
    this.setRing(this.hpRing, hp / maxHp);
    this.setRing(this.prayRing, focus / 100);
    this.setRing(this.stamRing, stamina / 100);
  }

  private setRing(circle: SVGCircleElement, ratio: number): void {
    const r = Math.max(0, Math.min(1, ratio));
    circle.style.strokeDasharray = String(this.circum);
    circle.style.strokeDashoffset = String(this.circum * (1 - r));
  }

  setInventory(items: ItemStack[]): void {
    this.invGrid.innerHTML = '';
    const slots = 28;
    for (let i = 0; i < slots; i++) {
      const slot = document.createElement('div');
      slot.className = 'inv-slot';
      const item = items[i];
      if (item) {
        slot.classList.add('has-item');
        const meta = ITEM_META[item.id];
        slot.textContent = meta?.icon ?? '?';
        slot.title = `${meta?.name ?? item.id}${item.qty > 1 ? ` ×${item.qty}` : ''}`;
        if (item.qty > 1) {
          const q = document.createElement('span');
          q.className = 'inv-qty';
          q.textContent = String(item.qty);
          slot.appendChild(q);
        }
        const idx = i;
        slot.addEventListener('click', () => this.onInventoryClick?.(idx));
      }
      this.invGrid.appendChild(slot);
    }
    this.invCount.textContent = `${items.length}/${slots}`;
  }

  setSkills(save: SaveData): void {
    this.skillsList.innerHTML = '';
    (Object.keys(SKILL_META) as SkillId[]).forEach((id) => {
      const sk = save.skills[id];
      const meta = SKILL_META[id];
      const row = document.createElement('div');
      row.className = 'skill-row';
      const next = xpForLevel(sk.level + 1);
      const prev = xpForLevel(sk.level);
      const pct = sk.level >= 99 ? 100 : ((sk.xp - prev) / (next - prev)) * 100;

      row.innerHTML = `
        <div class="skill-icon">${meta.icon}</div>
        <div class="skill-meta">
          <div class="skill-name">${meta.name}</div>
          <div class="skill-xp"><div style="width:${pct}%"></div></div>
        </div>
        <div class="skill-lvl">${sk.level}</div>
      `;
      this.skillsList.appendChild(row);
    });
  }

  showProgress(label: string, ratio: number): void {
    this.progressWrap.hidden = false;
    this.progressLabel.textContent = label;
    this.progressFill.style.width = `${Math.max(0, Math.min(100, ratio * 100))}%`;
  }

  hideProgress(): void {
    this.progressWrap.hidden = true;
    this.progressFill.style.width = '0%';
  }

  showTarget(name: string, hpRatio: number): void {
    this.targetInfo.hidden = false;
    this.targetName.textContent = name;
    this.targetHp.style.width = `${Math.max(0, Math.min(100, hpRatio * 100))}%`;
  }

  hideTarget(): void {
    this.targetInfo.hidden = true;
  }

  drawMinimap(
    playerX: number,
    playerZ: number,
    markers: { x: number; z: number; color: string }[],
  ): void {
    const ctx = this.minimapCtx;
    const w = this.minimap.width;
    const h = this.minimap.height;
    ctx.fillStyle = '#1a2a18';
    ctx.fillRect(0, 0, w, h);

    // Grass noise
    for (let i = 0; i < 40; i++) {
      ctx.fillStyle = i % 2 ? '#243820' : '#1e301c';
      ctx.fillRect((i * 37) % w, (i * 53) % h, 8, 8);
    }

    const scale = 3.2;
    const cx = w / 2;
    const cy = h / 2;

    for (const m of markers) {
      const mx = cx + (m.x - playerX) * scale;
      const my = cy + (m.z - playerZ) * scale;
      if (mx < 2 || my < 2 || mx > w - 2 || my > h - 2) continue;
      ctx.fillStyle = m.color;
      ctx.beginPath();
      ctx.arc(mx, my, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // Player arrow
    ctx.save();
    ctx.translate(cx, cy);
    ctx.fillStyle = '#f0d070';
    ctx.beginPath();
    ctx.moveTo(0, -6);
    ctx.lineTo(4, 5);
    ctx.lineTo(0, 2);
    ctx.lineTo(-4, 5);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    ctx.strokeStyle = '#6b5420';
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, w - 2, h - 2);
  }
}

function el(id: string): HTMLElement {
  const n = document.getElementById(id);
  if (!n) throw new Error(`Missing #${id}`);
  return n;
}
