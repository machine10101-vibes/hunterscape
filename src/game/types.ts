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

export type EquipSlot =
  | 'weapon'
  | 'shield'
  | 'chest'
  | 'greaves'
  | 'legs'
  | 'boots'
  | 'hatchet'
  | 'pickaxe';

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
    shield: string | null;
    chest: string | null;
    greaves: string | null;
    legs: string | null;
    boots: string | null;
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
  { name: string; icon: string; stackable: boolean; slot?: EquipSlot }
> = {
  bronze_hatchet: { name: 'Bronze Hatchet', icon: '🪓', stackable: false, slot: 'hatchet' },
  bronze_pickaxe: { name: 'Bronze Pickaxe', icon: '⛏', stackable: false, slot: 'pickaxe' },
  bronze_sword: { name: 'Bronze Sword', icon: '⚔', stackable: false, slot: 'weapon' },
  whisper_logs: { name: 'Whisper Logs', icon: '🪵', stackable: true },
  copper_ore: { name: 'Copper Ore', icon: '🟠', stackable: true },
  tin_ore: { name: 'Tin Ore', icon: '⚪', stackable: true },
  camp_rations: { name: 'Camp Rations', icon: '🍖', stackable: true },
  yeti_fur: { name: 'Yeti Fur', icon: '🧣', stackable: true },
  frost_claw: { name: 'Frost Claw', icon: '🧊', stackable: true },
  yeti_hide: { name: 'Yeti Hide', icon: '🧥', stackable: true },
  frost_fang: { name: 'Frost Fang', icon: '🦷', stackable: true },
  yeti_bone: { name: 'Yeti Bone', icon: '🦴', stackable: true },
  rime_shard: { name: 'Rime Shard', icon: '❄', stackable: true },
  frost_sword: { name: 'Frostfang Blade', icon: '⚔', stackable: false, slot: 'weapon' },
  frost_shield: { name: 'Rimehide Shield', icon: '🛡', stackable: false, slot: 'shield' },
  frost_bow: { name: 'Icebone Bow', icon: '🏹', stackable: false, slot: 'weapon' },
  frost_hammer: { name: 'Glacial Maul', icon: '🔨', stackable: false, slot: 'weapon' },
  frost_spear: { name: 'Frostspine Spear', icon: '🔱', stackable: false, slot: 'weapon' },
  frost_chest: { name: 'Yeti Hide Hauberk', icon: '🦺', stackable: false, slot: 'chest' },
  frost_greaves: { name: 'Frost Greaves', icon: '🦵', stackable: false, slot: 'greaves' },
  frost_legs: { name: 'Yeti Leg Wraps', icon: '👖', stackable: false, slot: 'legs' },
  frost_boots: { name: 'Rimehide Boots', icon: '👢', stackable: false, slot: 'boots' },
  orc_tooth: { name: 'Orc Tooth', icon: '🦷', stackable: true },
  scout_leather: { name: 'Scout Leather', icon: '🦺', stackable: true },
};

export const EQUIP_SLOTS: { id: EquipSlot; label: string }[] = [
  { id: 'weapon', label: 'Weapon' },
  { id: 'shield', label: 'Shield' },
  { id: 'chest', label: 'Chest' },
  { id: 'greaves', label: 'Greaves' },
  { id: 'legs', label: 'Legs' },
  { id: 'boots', label: 'Boots' },
  { id: 'hatchet', label: 'Hatchet' },
  { id: 'pickaxe', label: 'Pickaxe' },
];

export interface RecipeCost {
  id: string;
  qty: number;
}

export interface Recipe {
  id: string;
  name: string;
  blurb: string;
  cost: RecipeCost[];
}

/** Thornrest forge — every piece is cut from Frost Yeti parts. */
export const YETI_RECIPES: Recipe[] = [
  {
    id: 'frost_sword',
    name: 'Frostfang Blade',
    blurb: 'A row of yeti claws fused along a bone spine, edged in rime.',
    cost: [
      { id: 'frost_claw', qty: 2 },
      { id: 'frost_fang', qty: 1 },
      { id: 'yeti_bone', qty: 1 },
    ],
  },
  {
    id: 'frost_shield',
    name: 'Rimehide Shield',
    blurb: 'A hide disc rimmed with fur, its boss a frozen claw-knuckle.',
    cost: [
      { id: 'yeti_hide', qty: 2 },
      { id: 'yeti_fur', qty: 2 },
      { id: 'frost_claw', qty: 1 },
    ],
  },
  {
    id: 'frost_bow',
    name: 'Icebone Bow',
    blurb: 'Paired yeti bones flexed with hide, strung on a claw tendon.',
    cost: [
      { id: 'yeti_bone', qty: 2 },
      { id: 'yeti_hide', qty: 1 },
      { id: 'frost_claw', qty: 1 },
    ],
  },
  {
    id: 'frost_hammer',
    name: 'Glacial Maul',
    blurb: 'A bone haft capped with ice-bound hide and driving claws.',
    cost: [
      { id: 'yeti_bone', qty: 2 },
      { id: 'frost_claw', qty: 2 },
      { id: 'rime_shard', qty: 1 },
    ],
  },
  {
    id: 'frost_spear',
    name: 'Frostspine Spear',
    blurb: 'A long bone shaft tipped with a frost fang and claw barbs.',
    cost: [
      { id: 'yeti_bone', qty: 1 },
      { id: 'frost_fang', qty: 2 },
      { id: 'frost_claw', qty: 1 },
    ],
  },
  {
    id: 'frost_chest',
    name: 'Yeti Hide Hauberk',
    blurb: 'A hide vest under a frost-yeti mantle, ice shards at the shoulders.',
    cost: [
      { id: 'yeti_hide', qty: 3 },
      { id: 'yeti_fur', qty: 3 },
      { id: 'rime_shard', qty: 1 },
    ],
  },
  {
    id: 'frost_greaves',
    name: 'Frost Greaves',
    blurb: 'Shin hides with fur cuffs and a ridge of claws down each plate.',
    cost: [
      { id: 'yeti_hide', qty: 2 },
      { id: 'yeti_fur', qty: 1 },
      { id: 'rime_shard', qty: 1 },
    ],
  },
  {
    id: 'frost_legs',
    name: 'Yeti Leg Wraps',
    blurb: 'Fur chaps bound over hide, cut from the yeti’s haunches.',
    cost: [
      { id: 'yeti_hide', qty: 2 },
      { id: 'yeti_fur', qty: 2 },
    ],
  },
  {
    id: 'frost_boots',
    name: 'Rimehide Boots',
    blurb: 'Fur-lined hide boots whose toes are the yeti’s own claws.',
    cost: [
      { id: 'yeti_fur', qty: 2 },
      { id: 'yeti_hide', qty: 1 },
      { id: 'frost_claw', qty: 1 },
    ],
  },
];

export function countItem(inv: ItemStack[], id: string): number {
  return inv.filter((s) => s.id === id).reduce((n, s) => n + s.qty, 0);
}

export function ownsItem(save: SaveData, id: string): boolean {
  if (countItem(save.inventory, id) > 0) return true;
  return Object.values(save.equipped).includes(id);
}

export function canCraft(save: SaveData, recipe: Recipe): boolean {
  if (ownsItem(save, recipe.id)) return false;
  return recipe.cost.every((c) => countItem(save.inventory, c.id) >= c.qty);
}

export function armorMitigation(save: SaveData): number {
  let n = 0;
  if (save.equipped.shield === 'frost_shield') n += 3;
  if (save.equipped.chest === 'frost_chest') n += 3;
  if (save.equipped.greaves === 'frost_greaves') n += 2;
  if (save.equipped.legs === 'frost_legs') n += 2;
  if (save.equipped.boots === 'frost_boots') n += 1;
  return n;
}

export function weaponDamageBonus(id: string | null): number {
  if (id === 'frost_hammer') return 4;
  if (id === 'frost_sword' || id === 'frost_spear') return 3;
  if (id === 'frost_bow') return 2;
  return 0;
}

export function weaponReachBonus(id: string | null): number {
  if (id === 'frost_bow') return 2.2;
  if (id === 'frost_spear') return 0.4;
  return 0;
}

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
    inventory: [{ id: 'camp_rations', qty: 5 }],
    equipped: {
      weapon: 'bronze_sword',
      shield: null,
      chest: null,
      greaves: null,
      legs: null,
      boots: null,
      hatchet: 'bronze_hatchet',
      pickaxe: 'bronze_pickaxe',
    },
  };
}
