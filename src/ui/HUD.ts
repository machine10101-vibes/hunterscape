import type { Texture } from 'three';
import {
  COMBAT_SKILLS,
  EQUIP_SLOTS,
  FOOD,
  ITEM_META,
  SKILL_META,
  STANCES,
  YETI_RECIPES,
  canCraft,
  combatLevel,
  combatSkillUnlocked,
  countItem,
  gearLine,
  ownsItem,
  xpForLevel,
  type CombatSkillId,
  type CombatStance,
  type EquipSlot,
  type ItemStack,
  type Recipe,
  type SaveData,
  type SkillId,
} from '../game/types';
import { HeroPane } from './HeroPane';
import { paintItemIcon } from './ItemIcon';

export type ChatKind = 'system' | 'xp' | 'combat' | 'loot' | 'plain';

export class HUD {
  private chatLog: HTMLElement;
  private invGrid: HTMLElement;
  private invCount: HTMLElement;
  private skillsList: HTMLElement;
  private skillsPanel: HTMLElement;
  private journalPanel: HTMLElement;
  private journalList: HTMLElement;
  private progressWrap: HTMLElement;
  private progressFill: HTMLElement;
  private progressLabel: HTMLElement;
  private targetInfo: HTMLElement;
  private targetName: HTMLElement;
  private targetHp: HTMLElement;
  private hearts: HTMLElement[] = [];
  private hpText: HTMLElement;
  private prayText: HTMLElement;
  private stamText: HTMLElement;
  private hpRing: SVGCircleElement;
  private prayRing: SVGCircleElement;
  private stamRing: SVGCircleElement;
  private minimap: HTMLCanvasElement;
  private minimapCtx: CanvasRenderingContext2D;
  private touchHint: HTMLElement;
  private inventory!: HTMLElement;
  private btnInventory!: HTMLButtonElement;
  private gearPanel!: HTMLElement;
  private btnGear!: HTMLButtonElement;
  private gearInspect!: HTMLElement;
  private heroPane: HeroPane;
  private forgePanel!: HTMLElement;
  private forgeList!: HTMLElement;
  private forgeRecipes: Recipe[] = YETI_RECIPES;
  private forgeReady = true;
  private forgeLocked = new Set<string>();
  private bankSave: SaveData | null = null;
  private bankPanel!: HTMLElement;
  private questTracker!: HTMLElement;
  private narrowMq!: MediaQueryList;
  private desktopInvInited = false;
  private circum = 2 * Math.PI * 28;

  onAction: ((action: string) => void) | null = null;
  onInventoryClick: ((index: number) => void) | null = null;
  onGearSlotClick: ((slot: EquipSlot) => void) | null = null;
  onForgeCraft: ((recipeId: string) => void) | null = null;
  onBankMove: ((dir: 'deposit' | 'withdraw', id: string, all: boolean) => void) | null = null;
  onBankDepositPack: (() => void) | null = null;
  onStance: ((stance: CombatStance) => void) | null = null;
  onSpec: (() => void) | null = null;

  constructor() {
    this.chatLog = el('chat-log');
    this.invGrid = el('inv-grid');
    this.invCount = el('inv-count');
    this.skillsList = el('skills-list');
    this.skillsPanel = el('skills-panel');
    this.journalPanel = el('journal-panel');
    this.journalList = el('journal-list');
    this.progressWrap = el('progress-wrap');
    this.progressFill = el('progress-fill');
    this.progressLabel = el('progress-label');
    this.targetInfo = el('target-info');
    this.targetName = el('target-name');
    this.targetHp = el('target-hp');
    const heartRow = document.getElementById('hp-hearts');
    if (heartRow) {
      for (let i = 0; i < 10; i++) {
        const heart = document.createElement('i');
        heartRow.appendChild(heart);
        this.hearts.push(heart);
      }
    }
    this.hpText = el('hp-text');
    this.prayText = el('pray-text');
    this.stamText = el('stam-text');
    this.hpRing = el('hp-ring') as unknown as SVGCircleElement;
    this.prayRing = el('pray-ring') as unknown as SVGCircleElement;
    this.stamRing = el('stam-ring') as unknown as SVGCircleElement;
    this.minimap = el('minimap') as HTMLCanvasElement;
    this.minimapCtx = this.minimap.getContext('2d')!;
    this.touchHint = el('touch-hint');

    this.inventory = el('inventory');
    this.btnInventory = el('btn-inventory') as HTMLButtonElement;
    this.gearPanel = el('gear-panel');
    this.btnGear = el('btn-gear') as HTMLButtonElement;
    this.gearInspect = el('gear-inspect');
    this.heroPane = new HeroPane(el('gear-hero') as HTMLCanvasElement);
    this.forgePanel = el('forge-panel');
    this.forgeList = el('forge-list');
    this.bankPanel = el('bank-panel');
    this.questTracker = el('quest-tracker');
    el('forge-close').addEventListener('click', () => this.setForgeOpen(false));
    el('bank-close').addEventListener('click', () => this.setBankOpen(false));
    el('bank-deposit-all').addEventListener('click', () => this.onBankDepositPack?.());
    el('bank-search').addEventListener('input', () => {
      if (!this.bankPanel.hidden) this.renderBank(this.bankSave);
    });
    this.narrowMq = window.matchMedia('(max-width: 480px)');

    this.btnGear.addEventListener('click', () => this.setGearOpen(this.gearPanel.hidden));
    el('gear-close').addEventListener('click', () => this.setGearOpen(false));
    this.gearPanel.querySelectorAll('.gear-slot').forEach((btn) => {
      btn.addEventListener('click', () => {
        const slot = (btn as HTMLElement).dataset.slot as EquipSlot | undefined;
        if (slot) this.onGearSlotClick?.(slot);
      });
    });

    el('btn-skills').addEventListener('click', () => this.setSkillsOpen(this.skillsPanel.hidden));
    el('skills-close').addEventListener('click', () => this.setSkillsOpen(false));
    el('btn-journal').addEventListener('click', () => this.setJournalOpen(this.journalPanel.hidden));
    el('journal-close').addEventListener('click', () => this.setJournalOpen(false));

    this.btnInventory.addEventListener('click', () => {
      this.setInventoryOpen(this.inventory.hidden);
    });
    el('inv-close').addEventListener('click', () => {
      this.setInventoryOpen(false);
    });

    const syncViewport = () => this.syncInventoryForViewport();
    if (typeof this.narrowMq.addEventListener === 'function') {
      this.narrowMq.addEventListener('change', syncViewport);
    } else {
      (this.narrowMq as MediaQueryList).addListener(syncViewport);
    }
    this.syncInventoryForViewport();
    this.buildSkillBar();
    el('btn-spec').addEventListener('click', () => this.onSpec?.());

    setTimeout(() => this.touchHint.classList.add('fade'), 8000);
  }

  private buildSkillBar(): void {
    const slots = el('skill-slots');
    slots.innerHTML = '';
    for (const skill of COMBAT_SKILLS) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'ab-slot';
      btn.dataset.skill = skill.id;
      btn.innerHTML = `
        <span class="ab-icon" aria-hidden="true">${skill.icon}</span>
        <span class="ab-name">${skill.name}</span>
        <kbd class="ab-key">${skill.key}</kbd>
        <span class="ab-cost"></span>
        <span class="ab-lock" aria-hidden="true"></span>
        <span class="ab-cd" hidden></span>
      `;
      btn.addEventListener('click', () => {
        this.onAction?.(skill.id);
        btn.classList.add('active');
        setTimeout(() => btn.classList.remove('active'), 120);
      });
      slots.appendChild(btn);
    }
  }

  setSkillBar(save: SaveData, cds: Record<CombatSkillId, number>, guardLeft: number): void {
    for (const skill of COMBAT_SKILLS) {
      const btn = document.querySelector(`.ab-slot[data-skill="${skill.id}"]`) as HTMLButtonElement | null;
      if (!btn) continue;
      const known = combatSkillUnlocked(save, skill);
      const cd = cds[skill.id] ?? 0;
      const costEl = btn.querySelector('.ab-cost') as HTMLElement | null;
      const cdEl = btn.querySelector('.ab-cd') as HTMLElement | null;
      btn.classList.toggle('locked', !known);
      btn.classList.toggle('cooling', cd > 0);
      btn.classList.toggle('guarding', skill.id === 'guard' && guardLeft > 0);
      if (costEl) {
        costEl.textContent = skill.costKind ? String(skill.cost) : '';
        costEl.className = `ab-cost${skill.costKind ? ` ${skill.costKind}` : ''}`;
      }
      if (cdEl) {
        const pct = skill.cooldown > 0 ? Math.min(100, (cd / skill.cooldown) * 100) : 0;
        cdEl.hidden = pct <= 0;
        cdEl.style.height = `${pct}%`;
      }
      const unlock = `${SKILL_META[skill.unlockSkill].name} ${skill.unlockLevel}`;
      btn.title = known
        ? `${skill.name} (${skill.key}) — ${skill.blurb}${skill.costKind ? ` · ${skill.cost} ${skill.costKind}` : ''}`
        : `${skill.name} locked — learn at ${unlock}`;
    }
  }

  /** Focus special beside the five arts. Armed spends Focus on the next hit. */
  setSpec(name: string, armed: boolean, focus: number, cost: number): void {
    const btn = el('btn-spec') as HTMLButtonElement;
    const label = btn.querySelector('.ab-spec-name');
    const costEl = btn.querySelector('.ab-spec-cost');
    if (label) label.textContent = armed ? 'Armed' : 'Spec';
    if (costEl) costEl.textContent = cost > 0 ? String(cost) : '';
    btn.classList.toggle('armed', armed);
    btn.setAttribute('aria-pressed', armed ? 'true' : 'false');
    const ready = cost > 0 && focus >= cost;
    btn.title = cost > 0
      ? `${name} (${cost} Focus)${armed ? ' — armed' : ''}${ready ? '' : ' — not enough Focus'}`
      : 'Equip a weapon to arm its special (6)';
  }

  /** Narrow (≤480px): inventory closed by default. Desktop: open once, user may close. */
  private syncInventoryForViewport(): void {
    if (this.narrowMq.matches) {
      this.desktopInvInited = false;
      this.setInventoryOpen(false);
    } else if (!this.desktopInvInited) {
      this.desktopInvInited = true;
      this.setInventoryOpen(false);
    }
  }

  setGearOpen(open: boolean): void {
    this.gearPanel.hidden = !open;
    this.btnGear.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      this.closeSidePanels('gear');
      this.heroPane.resize();
      this.heroPane.start();
    } else {
      this.heroPane.stop();
    }
  }

  isGearOpen(): boolean {
    return !this.gearPanel.hidden;
  }

  setSkillsOpen(open: boolean): void {
    this.skillsPanel.hidden = !open;
    el('btn-skills').setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) this.closeSidePanels('skills');
  }

  isSkillsOpen(): boolean {
    return !this.skillsPanel.hidden;
  }

  setJournalOpen(open: boolean): void {
    this.journalPanel.hidden = !open;
    el('btn-journal').setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) this.closeSidePanels('journal');
  }

  isJournalOpen(): boolean {
    return !this.journalPanel.hidden;
  }

  setJournal(openLines: string[], finished: string[]): void {
    this.journalList.innerHTML = '';
    const openKicker = document.createElement('div');
    openKicker.className = 'journal-kicker';
    openKicker.textContent = `Open · ${openLines.length}`;
    this.journalList.appendChild(openKicker);
    if (openLines.length > 6) {
      const note = document.createElement('div');
      note.className = 'journal-empty';
      note.textContent = 'The corner list keeps the first six.';
      this.journalList.appendChild(note);
    }
    for (const line of openLines) {
      const row = document.createElement('div');
      row.className = 'journal-line';
      row.textContent = line;
      this.journalList.appendChild(row);
    }
    const doneKicker = document.createElement('div');
    doneKicker.className = 'journal-kicker';
    doneKicker.textContent = `Finished · ${finished.length}`;
    this.journalList.appendChild(doneKicker);
    if (finished.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'journal-empty';
      empty.textContent = 'None yet.';
      this.journalList.appendChild(empty);
      return;
    }
    for (const name of finished) {
      const row = document.createElement('div');
      row.className = 'journal-line done';
      row.textContent = name;
      this.journalList.appendChild(row);
    }
  }

  setForgeOpen(
    open: boolean,
    save?: SaveData,
    view?: { title: string; blurb: string; recipes: Recipe[]; forgeable: boolean; lockedIds?: string[] },
  ): void {
    if (view) {
      el('forge-title').textContent = view.title;
      el('forge-blurb').textContent = view.blurb;
      this.forgeRecipes = view.recipes;
      this.forgeReady = view.forgeable;
      this.forgeLocked = new Set(view.lockedIds ?? []);
    }
    this.forgePanel.hidden = !open;
    if (open) {
      this.closeSidePanels('forge');
      if (save) this.setForgeRecipes(save);
    }
  }

  setBankOpen(open: boolean, save?: SaveData): void {
    if (save) this.bankSave = save;
    this.bankPanel.hidden = !open;
    if (open) {
      this.closeSidePanels('bank');
      this.renderBank(this.bankSave);
    }
  }

  isBankOpen(): boolean {
    return !this.bankPanel.hidden;
  }

  private renderBank(save: SaveData | null): void {
    if (!save) return;
    const q = (el('bank-search') as HTMLInputElement).value.trim().toLowerCase();
    el('bank-count').textContent = `${save.bank.length}/200`;
    this.fillBankList(el('bank-pack'), save.inventory, q, 'deposit');
    this.fillBankList(el('bank-vault'), save.bank, q, 'withdraw');
  }

  private fillBankList(
    host: HTMLElement,
    stacks: ItemStack[],
    q: string,
    dir: 'deposit' | 'withdraw',
  ): void {
    host.innerHTML = '';
    const shown = stacks.filter((s) => {
      const name = ITEM_META[s.id]?.name ?? s.id;
      return !q || name.toLowerCase().includes(q);
    });
    if (shown.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'bank-empty';
      empty.textContent = q ? 'Nothing matches.' : dir === 'deposit' ? 'Pack is empty.' : 'Vault is empty.';
      host.appendChild(empty);
      return;
    }
    for (const stack of shown) {
      const row = document.createElement('div');
      row.className = 'bank-row';
      const icon = document.createElement('canvas');
      icon.className = 'item-icon';
      icon.width = 128;
      icon.height = 128;
      paintItemIcon(icon, stack.id);
      const name = document.createElement('div');
      name.className = 'bank-name';
      name.textContent = `${ITEM_META[stack.id]?.name ?? stack.id} ×${stack.qty}`;
      const actions = document.createElement('div');
      actions.className = 'bank-actions';
      for (const all of [false, true]) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'bank-move';
        btn.textContent = all ? 'All' : '1';
        const id = stack.id;
        btn.addEventListener('click', () => this.onBankMove?.(dir, id, all));
        actions.appendChild(btn);
      }
      row.append(icon, name, actions);
      host.appendChild(row);
    }
  }

  setQuests(lines: string[], total = lines.length): void {
    this.questTracker.innerHTML = '';
    const head = document.createElement('div');
    head.className = 'quest-head';
    const extra = Math.max(0, total - lines.length);
    head.textContent = extra > 0 ? `Quests · +${extra} in journal` : 'Quests';
    this.questTracker.appendChild(head);
    for (const line of lines) {
      const row = document.createElement('div');
      row.className = 'quest-line';
      row.textContent = line;
      this.questTracker.appendChild(row);
    }
  }

  private closeSidePanels(keep: 'gear' | 'skills' | 'journal' | 'forge' | 'bank'): void {
    if (keep !== 'gear') {
      this.gearPanel.hidden = true;
      this.btnGear.setAttribute('aria-expanded', 'false');
      this.heroPane.stop();
    }
    if (keep !== 'skills') {
      this.skillsPanel.hidden = true;
      el('btn-skills').setAttribute('aria-expanded', 'false');
    }
    if (keep !== 'journal') {
      this.journalPanel.hidden = true;
      el('btn-journal').setAttribute('aria-expanded', 'false');
    }
    if (keep !== 'forge') this.forgePanel.hidden = true;
    if (keep !== 'bank') this.bankPanel.hidden = true;
  }

  isForgeOpen(): boolean {
    return !this.forgePanel.hidden;
  }

  setForgeRecipes(save: SaveData): void {
    this.forgeList.innerHTML = '';
    for (const recipe of this.forgeRecipes) {
      const owned = ownsItem(save, recipe.id);
      const locked = !this.forgeReady || this.forgeLocked.has(recipe.id);
      const ready = !locked && canCraft(save, recipe);
      const row = document.createElement('div');
      row.className = `forge-row${owned ? ' owned' : ''}${locked ? ' locked' : ''}`;
      const icon = document.createElement('canvas');
      icon.className = 'item-icon';
      icon.width = 128;
      icon.height = 128;
      paintItemIcon(icon, recipe.id);
      const meta = document.createElement('div');
      meta.className = 'forge-meta';
      const cost = recipe.cost
        .map((c) => {
          const have = countItem(save.inventory, c.id);
          const name = ITEM_META[c.id]?.name ?? c.id;
          const cls = have >= c.qty ? 'have' : 'need';
          return `<span class="${cls}">${name} ${have}/${c.qty}</span>`;
        })
        .join(' · ');
      meta.innerHTML = `<div class="forge-name">${recipe.name}</div><div class="forge-desc">${recipe.blurb}</div><div class="forge-cost">${cost}</div>`;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'forge-craft';
      const stackable = !!ITEM_META[recipe.id]?.stackable;
      btn.textContent = locked ? 'Locked' : owned && !stackable ? 'Owned' : (recipe.verb ?? 'Forge');
      btn.disabled = !ready;
      const id = recipe.id;
      btn.addEventListener('click', () => this.onForgeCraft?.(id));
      row.append(icon, meta, btn);
      this.forgeList.appendChild(row);
    }
  }

  setEnvironment(env: Texture | null): void {
    this.heroPane.setEnvironment(env);
  }

  setEquipment(save: SaveData, inspect?: string): void {
    if (this.isForgeOpen()) this.setForgeRecipes(save);
    if (this.isBankOpen()) {
      this.bankSave = save;
      this.renderBank(save);
    }
    this.heroPane.syncEquipment(save);
    for (const { id, label } of EQUIP_SLOTS) {
      const btn = this.gearPanel.querySelector(`.gear-slot[data-slot="${id}"]`) as HTMLElement | null;
      if (!btn) continue;
      const itemId = save.equipped[id];
      const canvas = btn.querySelector('canvas.item-icon') as HTMLCanvasElement | null;
      btn.classList.toggle('filled', !!itemId);
      if (itemId && canvas) {
        paintItemIcon(canvas, itemId);
        canvas.hidden = false;
        const meta = ITEM_META[itemId];
        btn.title = `${label}: ${meta?.name ?? itemId} (click to unequip)`;
      } else {
        if (canvas) canvas.hidden = true;
        btn.title = `${label}: empty`;
      }
    }
    if (inspect) this.gearInspect.textContent = inspect;
  }

  inspectGear(text: string): void {
    this.gearInspect.textContent = text;
  }

  showSlotPreview(slot: EquipSlot | null, save: SaveData): void {
    this.heroPane.showSlot(slot, save);
  }

  private setInventoryOpen(open: boolean): void {
    this.inventory.hidden = !open;
    this.btnInventory.setAttribute('aria-expanded', open ? 'true' : 'false');
    // Desktop: show backpack when closed so inventory is recoverable
    if (!this.narrowMq.matches) {
      this.btnInventory.style.display = open ? 'none' : 'flex';
    }
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
    const heartFill = Math.max(0, Math.min(1, hp / maxHp)) * this.hearts.length;
    this.hearts.forEach((heart, i) => {
      heart.style.setProperty('--f', String(Math.max(0, Math.min(1, heartFill - i))));
    });
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
        const icon = document.createElement('canvas');
        icon.className = 'item-icon';
        icon.width = 128;
        icon.height = 128;
        paintItemIcon(icon, item.id);
        slot.appendChild(icon);
        slot.title = `${gearLine(item.id)}${item.qty > 1 ? ` ×${item.qty}` : ''}${
          meta?.slot ? ' — click to equip' : FOOD[item.id] ? ' — click to eat' : ''
        }`;
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
    const levelHead = document.createElement('div');
    levelHead.className = 'skills-kicker';
    levelHead.textContent = `Combat level ${combatLevel(save)}`;
    this.skillsList.appendChild(levelHead);
    const stanceRow = document.createElement('div');
    stanceRow.className = 'stance-row';
    for (const stance of STANCES) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `stance-btn${save.stance === stance.id ? ' on' : ''}`;
      btn.textContent = stance.name;
      btn.title = stance.blurb;
      btn.addEventListener('click', () => this.onStance?.(stance.id));
      stanceRow.appendChild(btn);
    }
    this.skillsList.appendChild(stanceRow);
    const trainHead = document.createElement('div');
    trainHead.className = 'skills-kicker';
    trainHead.textContent = 'Training';
    this.skillsList.appendChild(trainHead);
    (Object.keys(SKILL_META) as SkillId[]).forEach((id) => {
      const sk = save.skills[id];
      const meta = SKILL_META[id];
      const row = document.createElement('div');
      row.className = 'skill-row';
      const next = xpForLevel(sk.level + 1);
      const prev = xpForLevel(sk.level);
      const into = Math.max(0, sk.xp - prev);
      const span = Math.max(1, next - prev);
      const pct = sk.level >= 99 ? 100 : (into / span) * 100;
      const xpLabel = sk.level >= 99 ? 'Max' : `${Math.floor(into)} / ${span}`;

      row.innerHTML = `
        <div class="skill-icon">${meta.icon}</div>
        <div class="skill-meta">
          <div class="skill-top">
            <div class="skill-name">${meta.name}</div>
            <div class="skill-xp-num">${xpLabel}</div>
          </div>
          <div class="skill-xp"><div style="width:${pct}%"></div></div>
        </div>
        <div class="skill-lvl">${sk.level}</div>
      `;
      this.skillsList.appendChild(row);
    });

    const artHead = document.createElement('div');
    artHead.className = 'skills-kicker';
    artHead.textContent = 'Combat arts';
    this.skillsList.appendChild(artHead);
    const artGrid = document.createElement('div');
    artGrid.className = 'art-grid';
    for (const skill of COMBAT_SKILLS) {
      const known = combatSkillUnlocked(save, skill);
      const row = document.createElement('div');
      row.className = `skill-row art-row${known ? ' known' : ''}`;
      const unlock = `${SKILL_META[skill.unlockSkill].name} ${skill.unlockLevel}`;
      row.title = skill.blurb;
      row.innerHTML = `
        <div class="skill-icon">${skill.icon}</div>
        <div class="skill-meta">
          <div class="skill-top">
            <div class="skill-name">${skill.name}</div>
            <div class="skill-xp-num">${known ? 'Known' : unlock}</div>
          </div>
        </div>
        <div class="skill-lvl">${skill.key}</div>
      `;
      artGrid.appendChild(row);
    }
    this.skillsList.appendChild(artGrid);
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

  showTarget(name: string, hpRatio: number, detail = ''): void {
    this.targetInfo.hidden = false;
    this.targetName.textContent = name;
    const extra = document.getElementById('target-detail');
    if (extra) extra.textContent = detail;
    this.targetHp.style.width = `${Math.max(0, Math.min(100, hpRatio * 100))}%`;
  }

  hideTarget(): void {
    this.targetInfo.hidden = true;
  }

  drawMinimap(
    playerX: number,
    playerZ: number,
    playerRotY: number,
    markers: { x: number; z: number; color: string }[],
  ): void {
    const ctx = this.minimapCtx;
    const w = this.minimap.width;
    const h = this.minimap.height;
    const cx = w / 2;
    const cy = h / 2;
    const cell = 8;
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, w, h);

    const scale = 3.2;
    const ox = Math.floor(playerX * scale);
    const oz = Math.floor(playerZ * scale);
    const palette = ['#1a2c1c', '#223826', '#142016', '#2a4030'];
    const cols = Math.ceil(w / cell) + 1;
    const rows = Math.ceil(h / cell) + 1;
    const gx0 = Math.floor((ox - cx) / cell);
    const gz0 = Math.floor((oz - cy) / cell);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const gx = gx0 + c;
        const gz = gz0 + r;
        const hsh = Math.abs((gx * 73856093) ^ (gz * 19349663)) % 7;
        ctx.fillStyle = palette[hsh < 4 ? hsh : (hsh + gx) & 1];
        ctx.fillRect(gx * cell - (ox - cx), gz * cell - (oz - cy), cell, cell);
      }
    }

    for (const m of markers) {
      const mx = Math.round((cx + (m.x - playerX) * scale) / 2) * 2;
      const my = Math.round((cy + (m.z - playerZ) * scale) / 2) * 2;
      if (mx < 6 || my < 6 || mx > w - 6 || my > h - 6) continue;
      ctx.fillStyle = '#0b0e12';
      ctx.fillRect(mx - 4, my - 4, 8, 8);
      ctx.fillStyle = m.color;
      ctx.fillRect(mx - 3, my - 3, 6, 6);
    }

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(Math.round(playerRotY / (Math.PI / 4)) * (Math.PI / 4));
    ctx.fillStyle = '#041208';
    ctx.fillRect(-5, -9, 10, 16);
    ctx.fillStyle = '#e8ffe8';
    ctx.fillRect(-2, -7, 4, 4);
    ctx.fillRect(-4, -3, 8, 4);
    ctx.fillRect(-2, 1, 4, 4);
    ctx.restore();
  }
}

function el(id: string): HTMLElement {
  const n = document.getElementById(id);
  if (!n) throw new Error(`Missing #${id}`);
  return n;
}
