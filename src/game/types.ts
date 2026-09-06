export type SkillId =
  | 'constitution'
  | 'attack'
  | 'strength'
  | 'defence'
  | 'woodcutting'
  | 'mining';

export interface SkillState {
  level: number;
  xp: number;
}

export interface ItemStack {
  id: string;
  qty: number;
}

export interface SaveData {
  version: 1;
  x: number;
  z: number;
  hp: number;
  maxHp: number;
  focus: number;
  stamina: number;
  skills: Record<SkillId, SkillState>;
  inventory: ItemStack[];
  equipped: {
    weapon: string | null;
    hatchet: string | null;
    pickaxe: string | null;
  };
}

export const SKILL_META: Record<
  SkillId,
  { name: string; icon: string }
> = {
  constitution: { name: 'Constitution', icon: '❤️' },
  attack: { name: 'Attack', icon: '⚔' },
  strength: { name: 'Strength', icon: '💪' },
  defence: { name: 'Defence', icon: '🛡' },
  woodcutting: { name: 'Woodcutting', icon: '🪓' },
  mining: { name: 'Mining', icon: '⛏' },
};

export const ITEM_META: Record<
  string,
  { name: string; icon: string; stackable: boolean }
> = {
  bronze_hatchet: { name: 'Bronze Hatchet', icon: '🪓', stackable: false },
  bronze_pickaxe: { name: 'Bronze Pickaxe', icon: '⛏', stackable: false },
  bronze_sword: { name: 'Bronze Sword', icon: '⚔', stackable: false },
  whisper_logs: { name: 'Whisper Logs', icon: '🪵', stackable: true },
  copper_ore: { name: 'Copper Ore', icon: '🟠', stackable: true },
  tin_ore: { name: 'Tin Ore', icon: '⚪', stackable: true },
  camp_rations: { name: 'Camp Rations', icon: '🍖', stackable: true },
};

/** Classic-style XP curve approximation */
export function xpForLevel(level: number): number {
  let total = 0;
  for (let i = 1; i < level; i++) {
    total += Math.floor(i + 300 * Math.pow(2, i / 7));
  }
  return Math.floor(total / 4);
}

export function levelFromXp(xp: number): number {
  let level = 1;
  while (level < 99 && xpForLevel(level + 1) <= xp) level++;
  return level;
}

export function defaultSave(): SaveData {
  return {
    version: 1,
    x: 0,
    z: 2,
    hp: 100,
    maxHp: 100,
    focus: 100,
    stamina: 100,
    skills: {
      constitution: { level: 10, xp: xpForLevel(10) },
      attack: { level: 1, xp: 0 },
      strength: { level: 1, xp: 0 },
      defence: { level: 1, xp: 0 },
      woodcutting: { level: 1, xp: 0 },
      mining: { level: 1, xp: 0 },
    },
    inventory: [
      { id: 'bronze_hatchet', qty: 1 },
      { id: 'bronze_pickaxe', qty: 1 },
      { id: 'bronze_sword', qty: 1 },
      { id: 'camp_rations', qty: 5 },
    ],
    equipped: {
      weapon: 'bronze_sword',
      hatchet: 'bronze_hatchet',
      pickaxe: 'bronze_pickaxe',
    },
  };
}
