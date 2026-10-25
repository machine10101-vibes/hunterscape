import type { QuestState } from './quests';

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

/** Melee and ranged attack styles. A beast's weakness matches one of these. */
export type AttackStyle = 'stab' | 'slash' | 'crush' | 'ranged';

/** Which combat skill a successful blow trains, in the RuneScape sense. */
export type CombatStance = 'accurate' | 'aggressive' | 'defensive' | 'controlled';

export const STANCES: { id: CombatStance; name: string; blurb: string }[] = [
  { id: 'accurate', name: 'Accurate', blurb: 'Attack experience, and the blow lands more often.' },
  { id: 'aggressive', name: 'Aggressive', blurb: 'Strength experience, and the blow hits harder.' },
  { id: 'defensive', name: 'Defensive', blurb: 'Defence experience, and you soak a little more.' },
  { id: 'controlled', name: 'Controlled', blurb: 'Split the blow across Attack, Strength, and Defence.' },
];

export interface SaveData {
  version: 1;
  x: number;
  z: number;
  hp: number;
  maxHp: number;
  focus: number;
  stamina: number;
  stance: CombatStance;
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
  quests: QuestState;
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

export type CombatSkillId = 'strike' | 'lunge' | 'smash' | 'guard' | 'rend';

export interface CombatSkill {
  id: CombatSkillId;
  name: string;
  icon: string;
  blurb: string;
  key: string;
  unlockSkill: SkillId;
  unlockLevel: number;
  costKind: 'stamina' | 'focus' | null;
  cost: number;
  cooldown: number;
  hitMult: number;
  hitBonus: number;
  accBonus: number;
  guardSec: number;
  guardMit: number;
}

/** Learnable combat arts shown on the bottom skill bar. */
export const COMBAT_SKILLS: CombatSkill[] = [
  {
    id: 'strike',
    name: 'Strike',
    icon: '⚔',
    blurb: 'A practiced weapon blow. Always known.',
    key: '1',
    unlockSkill: 'attack',
    unlockLevel: 1,
    costKind: null,
    cost: 0,
    cooldown: 0.85,
    hitMult: 1,
    hitBonus: 0,
    accBonus: 0,
    guardSec: 0,
    guardMit: 0,
  },
  {
    id: 'lunge',
    name: 'Lunge',
    icon: '🗡',
    blurb: 'A reaching thrust that finds gaps in the guard.',
    key: '2',
    unlockSkill: 'attack',
    unlockLevel: 2,
    costKind: 'stamina',
    cost: 12,
    cooldown: 3.2,
    hitMult: 1.1,
    hitBonus: 1,
    accBonus: 0.12,
    guardSec: 0,
    guardMit: 0,
  },
  {
    id: 'smash',
    name: 'Smash',
    icon: '🔨',
    blurb: 'A heavy swing that spends strength for raw force.',
    key: '3',
    unlockSkill: 'strength',
    unlockLevel: 3,
    costKind: 'stamina',
    cost: 18,
    cooldown: 5,
    hitMult: 1.35,
    hitBonus: 3,
    accBonus: -0.04,
    guardSec: 0,
    guardMit: 0,
  },
  {
    id: 'guard',
    name: 'Guard',
    icon: '🛡',
    blurb: 'Brace and turn the next blows. Costs focus, not a swing.',
    key: '4',
    unlockSkill: 'defence',
    unlockLevel: 2,
    costKind: 'focus',
    cost: 10,
    cooldown: 8,
    hitMult: 1,
    hitBonus: 0,
    accBonus: 0,
    guardSec: 4.5,
    guardMit: 4,
  },
  {
    id: 'rend',
    name: 'Rend',
    icon: '💥',
    blurb: 'A vicious cut that opens a wound once Attack is honed.',
    key: '5',
    unlockSkill: 'attack',
    unlockLevel: 4,
    costKind: 'stamina',
    cost: 22,
    cooldown: 7,
    hitMult: 1.55,
    hitBonus: 4,
    accBonus: 0.04,
    guardSec: 0,
    guardMit: 0,
  },
];

export function combatSkillUnlocked(save: SaveData, skill: CombatSkill): boolean {
  return save.skills[skill.unlockSkill].level >= skill.unlockLevel;
}

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
  wolf_pelt: { name: 'Wolf Pelt', icon: '🐺', stackable: true },
  wolf_fang: { name: 'Wolf Fang', icon: '🦷', stackable: true },
  briar_sword: { name: 'Briar Sword', icon: '⚔', stackable: false, slot: 'weapon' },
  briar_shield: { name: 'Briar Shield', icon: '🛡', stackable: false, slot: 'shield' },
  briar_vest: { name: 'Briar Vest', icon: '🦺', stackable: false, slot: 'chest' },
  briar_boots: { name: 'Briar Boots', icon: '👢', stackable: false, slot: 'boots' },
  boar_hide: { name: 'Boar Hide', icon: '🥩', stackable: true },
  boar_tusk: { name: 'Boar Tusk', icon: '🦷', stackable: true },
  spider_silk: { name: 'Spider Silk', icon: '🕸', stackable: true },
  boar_roast: { name: 'Boar Roast', icon: '🍖', stackable: true },
  road_mace: { name: 'Roadwarden Mace', icon: '🔨', stackable: false, slot: 'weapon' },
  road_shield: { name: 'Roadwarden Shield', icon: '🛡', stackable: false, slot: 'shield' },
  road_legs: { name: 'Roadwarden Chaps', icon: '👖', stackable: false, slot: 'legs' },
  road_greaves: { name: 'Roadwarden Greaves', icon: '🦵', stackable: false, slot: 'greaves' },
  fox_fur: { name: 'Fox Fur', icon: '🦊', stackable: true },
  dusk_fang: { name: 'Dusk Fang', icon: '🦷', stackable: true },
  dusk_dagger: { name: 'Dusk Dagger', icon: '🗡', stackable: false, slot: 'weapon' },
  dusk_cloak: { name: 'Dusk Cloak', icon: '🧥', stackable: false, slot: 'chest' },
  dusk_boots: { name: 'Dusk Boots', icon: '👢', stackable: false, slot: 'boots' },
  soot_feather: { name: 'Soot Feather', icon: '🪶', stackable: true },
  charcoal: { name: 'Charcoal', icon: '⬛', stackable: true },
  cinder_knife: { name: 'Cinder Knife', icon: '🗡', stackable: false, slot: 'weapon' },
  cinder_legs: { name: 'Cinder Trousers', icon: '👖', stackable: false, slot: 'legs' },
  cinder_shield: { name: 'Cinder Buckler', icon: '🛡', stackable: false, slot: 'shield' },
  beetle_shell: { name: 'Beetle Shell', icon: '🪲', stackable: true },
  copper_grit: { name: 'Copper Grit', icon: '🟠', stackable: true },
  delver_maul: { name: 'Delver Maul', icon: '🔨', stackable: false, slot: 'weapon' },
  delver_vest: { name: 'Delver Vest', icon: '🦺', stackable: false, slot: 'chest' },
  delver_boots: { name: 'Delver Boots', icon: '👢', stackable: false, slot: 'boots' },
  toad_hide: { name: 'Toad Hide', icon: '🐸', stackable: true },
  venom_sac: { name: 'Venom Sac', icon: '💧', stackable: true },
  mire_dagger: { name: 'Mire Dagger', icon: '🗡', stackable: false, slot: 'weapon' },
  mire_cloak: { name: 'Mire Cloak', icon: '🧥', stackable: false, slot: 'chest' },
  mire_boots: { name: 'Mire Boots', icon: '👢', stackable: false, slot: 'boots' },
  bones: { name: 'Bones', icon: '🦴', stackable: true },
  skull_chip: { name: 'Skull Chip', icon: '💀', stackable: true },
  bone_sword: { name: 'Bone Sword', icon: '🗡', stackable: false, slot: 'weapon' },
  bone_ribs: { name: 'Bone Ribs', icon: '🦺', stackable: false, slot: 'chest' },
  bone_boots: { name: 'Bone Boots', icon: '👢', stackable: false, slot: 'boots' },
  gale_feather: { name: 'Gale Feather', icon: '🪶', stackable: true },
  hawk_talon: { name: 'Hawk Talon', icon: '🦅', stackable: true },
  gale_spear: { name: 'Gale Spear', icon: '🔱', stackable: false, slot: 'weapon' },
  gale_cloak: { name: 'Gale Cloak', icon: '🧥', stackable: false, slot: 'chest' },
  gale_boots: { name: 'Gale Boots', icon: '👢', stackable: false, slot: 'boots' },
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

/** Briarford anvil — opened after Smith Harl's commission. */
export const BRIAR_RECIPES: Recipe[] = [
  {
    id: 'briar_sword',
    name: 'Briar Sword',
    blurb: 'A copper-edged blade with a pelt grip and a wolf fang for a pommel.',
    cost: [
      { id: 'wolf_pelt', qty: 1 },
      { id: 'wolf_fang', qty: 2 },
      { id: 'copper_ore', qty: 1 },
      { id: 'whisper_logs', qty: 1 },
    ],
  },
  {
    id: 'briar_shield',
    name: 'Briar Shield',
    blurb: 'A whisper-wood round faced in wolf pelt, bossed in copper.',
    cost: [
      { id: 'wolf_pelt', qty: 2 },
      { id: 'whisper_logs', qty: 1 },
    ],
  },
  {
    id: 'briar_vest',
    name: 'Briar Vest',
    blurb: 'Boiled leather under a wolf-pelt collar, clasped with a fang.',
    cost: [
      { id: 'wolf_pelt', qty: 3 },
      { id: 'wolf_fang', qty: 1 },
    ],
  },
  {
    id: 'briar_boots',
    name: 'Briar Boots',
    blurb: 'Hide boots with a pelt cuff and a copper toe cap.',
    cost: [
      { id: 'wolf_pelt', qty: 2 },
      { id: 'whisper_logs', qty: 1 },
    ],
  },
];

/** Briarford anvil, after Weaver Maeve opens the roadwarden patterns. */
export const ROAD_RECIPES: Recipe[] = [
  {
    id: 'road_mace',
    name: 'Roadwarden Mace',
    blurb: 'A hide-bound haft crowned with a tusk-spiked head and a copper spike.',
    cost: [
      { id: 'boar_tusk', qty: 1 },
      { id: 'boar_hide', qty: 1 },
      { id: 'copper_ore', qty: 1 },
      { id: 'whisper_logs', qty: 1 },
    ],
  },
  {
    id: 'road_shield',
    name: 'Roadwarden Shield',
    blurb: 'A boar-hide round, bossed with a tusk and laced in spider silk.',
    cost: [
      { id: 'boar_hide', qty: 2 },
      { id: 'spider_silk', qty: 1 },
    ],
  },
  {
    id: 'road_legs',
    name: 'Roadwarden Chaps',
    blurb: 'Hide chaps bound with spider silk, cut from briar boar flanks.',
    cost: [
      { id: 'boar_hide', qty: 2 },
      { id: 'spider_silk', qty: 2 },
    ],
  },
  {
    id: 'road_greaves',
    name: 'Roadwarden Greaves',
    blurb: 'Boiled hide plates with a tusk ridge, tied on with silk.',
    cost: [
      { id: 'boar_hide', qty: 1 },
      { id: 'spider_silk', qty: 1 },
      { id: 'whisper_logs', qty: 1 },
    ],
  },
];

/** Briarford anvil, after Sister Calder opens the dusk patterns. */
export const DUSK_RECIPES: Recipe[] = [
  {
    id: 'dusk_dagger',
    name: 'Dusk Dagger',
    blurb: 'A short steel blade with a fox-fur grip and a fang pommel.',
    cost: [
      { id: 'dusk_fang', qty: 1 },
      { id: 'fox_fur', qty: 1 },
      { id: 'copper_ore', qty: 1 },
      { id: 'whisper_logs', qty: 1 },
    ],
  },
  {
    id: 'dusk_cloak',
    name: 'Dusk Cloak',
    blurb: 'A short cloak lined in dusk-fox fur and clasped in copper.',
    cost: [
      { id: 'fox_fur', qty: 3 },
      { id: 'spider_silk', qty: 1 },
    ],
  },
  {
    id: 'dusk_boots',
    name: 'Dusk Boots',
    blurb: 'Dark boots with a fox-fur cuff and a copper toe.',
    cost: [
      { id: 'fox_fur', qty: 2 },
      { id: 'whisper_logs', qty: 1 },
    ],
  },
];

/** Briarford anvil, after Burner Holt opens the cinder patterns. */
export const CINDER_RECIPES: Recipe[] = [
  {
    id: 'cinder_knife',
    name: 'Cinder Knife',
    blurb: 'A short soot-dark blade with a feathered grip and a copper pommel.',
    cost: [
      { id: 'soot_feather', qty: 1 },
      { id: 'charcoal', qty: 1 },
      { id: 'copper_ore', qty: 1 },
      { id: 'whisper_logs', qty: 1 },
    ],
  },
  {
    id: 'cinder_legs',
    name: 'Cinder Trousers',
    blurb: 'Soot-dyed trousers banded in copper, with a crow feather at the hip.',
    cost: [
      { id: 'soot_feather', qty: 2 },
      { id: 'charcoal', qty: 1 },
    ],
  },
  {
    id: 'cinder_shield',
    name: 'Cinder Buckler',
    blurb: 'A charred round with a copper boss and a feathered rim.',
    cost: [
      { id: 'charcoal', qty: 2 },
      { id: 'soot_feather', qty: 1 },
      { id: 'copper_ore', qty: 1 },
    ],
  },
];

export const DELVER_RECIPES: Recipe[] = [
  {
    id: 'delver_maul',
    name: 'Delver Maul',
    blurb: 'A copper-capped maul on a shell-bound haft. Crush.',
    cost: [
      { id: 'beetle_shell', qty: 1 },
      { id: 'copper_grit', qty: 1 },
      { id: 'copper_ore', qty: 1 },
      { id: 'whisper_logs', qty: 1 },
    ],
  },
  {
    id: 'delver_vest',
    name: 'Delver Vest',
    blurb: 'Boiled beetle plate over a miner’s vest, banded in copper.',
    cost: [
      { id: 'beetle_shell', qty: 2 },
      { id: 'copper_grit', qty: 1 },
    ],
  },
  {
    id: 'delver_boots',
    name: 'Delver Boots',
    blurb: 'Heavy boots with a shell toe and a copper hobnail.',
    cost: [
      { id: 'beetle_shell', qty: 1 },
      { id: 'copper_ore', qty: 1 },
      { id: 'whisper_logs', qty: 1 },
    ],
  },
];

export const MIRE_RECIPES: Recipe[] = [
  {
    id: 'mire_dagger',
    name: 'Mire Dagger',
    blurb: 'A reed-wrapped dagger with a venom groove. Stab. Special: Venom.',
    cost: [
      { id: 'toad_hide', qty: 1 },
      { id: 'venom_sac', qty: 1 },
      { id: 'copper_ore', qty: 1 },
      { id: 'whisper_logs', qty: 1 },
    ],
  },
  {
    id: 'mire_cloak',
    name: 'Mire Cloak',
    blurb: 'A toad-hide cloak lined in reed, clasped in copper.',
    cost: [
      { id: 'toad_hide', qty: 3 },
      { id: 'venom_sac', qty: 1 },
    ],
  },
  {
    id: 'mire_boots',
    name: 'Mire Boots',
    blurb: 'Soft hide boots with a reed wrap and a copper hobnail.',
    cost: [
      { id: 'toad_hide', qty: 2 },
      { id: 'whisper_logs', qty: 1 },
    ],
  },
];

export const BONE_RECIPES: Recipe[] = [
  {
    id: 'bone_sword',
    name: 'Bone Sword',
    blurb: 'A pale blade with a skull pommel. Slash. Measured speed. Special: Rattle.',
    cost: [
      { id: 'bones', qty: 1 },
      { id: 'skull_chip', qty: 1 },
      { id: 'copper_ore', qty: 1 },
      { id: 'whisper_logs', qty: 1 },
    ],
  },
  {
    id: 'bone_ribs',
    name: 'Bone Ribs',
    blurb: 'A ribcage cuirass. Soaks crush.',
    cost: [
      { id: 'bones', qty: 3 },
      { id: 'skull_chip', qty: 1 },
    ],
  },
  {
    id: 'bone_boots',
    name: 'Bone Boots',
    blurb: 'Bone plates over a dark boot. Soaks stab.',
    cost: [
      { id: 'bones', qty: 2 },
      { id: 'whisper_logs', qty: 1 },
    ],
  },
];

export const GALE_RECIPES: Recipe[] = [
  {
    id: 'gale_spear',
    name: 'Gale Spear',
    blurb: 'An ash spear with a brass leaf. Stab. Long reach. Special: Crosswind.',
    cost: [
      { id: 'gale_feather', qty: 1 },
      { id: 'hawk_talon', qty: 1 },
      { id: 'copper_ore', qty: 1 },
      { id: 'whisper_logs', qty: 1 },
    ],
  },
  {
    id: 'gale_cloak',
    name: 'Gale Cloak',
    blurb: 'A light slate cloak. Soaks slash.',
    cost: [
      { id: 'gale_feather', qty: 3 },
      { id: 'hawk_talon', qty: 1 },
    ],
  },
  {
    id: 'gale_boots',
    name: 'Gale Boots',
    blurb: 'Light boots with a brass spur. Soaks crush.',
    cost: [
      { id: 'gale_feather', qty: 2 },
      { id: 'whisper_logs', qty: 1 },
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

const ARMOR_BONUS: Record<string, number> = {
  frost_shield: 3,
  briar_shield: 1,
  road_shield: 2,
  cinder_shield: 1,
  frost_chest: 3,
  briar_vest: 2,
  dusk_cloak: 2,
  delver_vest: 2,
  mire_cloak: 2,
  bone_ribs: 2,
  gale_cloak: 2,
  frost_greaves: 2,
  road_greaves: 1,
  frost_legs: 2,
  road_legs: 2,
  cinder_legs: 2,
  frost_boots: 1,
  briar_boots: 1,
  dusk_boots: 1,
  delver_boots: 1,
  mire_boots: 1,
  bone_boots: 1,
  gale_boots: 1,
};

/** Two or more worn pieces from one family add a point of armour. */
const ARMOR_FAMILIES: Record<string, string[]> = {
  frost: ['frost_shield', 'frost_chest', 'frost_greaves', 'frost_legs', 'frost_boots'],
  briar: ['briar_shield', 'briar_vest', 'briar_boots'],
  road: ['road_shield', 'road_legs', 'road_greaves'],
  dusk: ['dusk_cloak', 'dusk_boots'],
  cinder: ['cinder_shield', 'cinder_legs'],
  delver: ['delver_vest', 'delver_boots'],
  mire: ['mire_cloak', 'mire_boots'],
  bone: ['bone_ribs', 'bone_boots'],
  gale: ['gale_cloak', 'gale_boots'],
};

export function setBonus(save: SaveData): number {
  const worn = new Set(Object.values(save.equipped));
  let n = 0;
  for (const pieces of Object.values(ARMOR_FAMILIES)) {
    if (pieces.filter((id) => worn.has(id)).length >= 2) n += 1;
  }
  return n;
}

export function itemArmor(id: string | null): number {
  return id ? (ARMOR_BONUS[id] ?? 0) : 0;
}

/** Which incoming style this piece soaks an extra point against. */
const ARMOR_DEFENCE: Record<string, AttackStyle> = {
  frost_shield: 'crush',
  frost_chest: 'crush',
  frost_greaves: 'crush',
  frost_legs: 'slash',
  frost_boots: 'stab',
  briar_shield: 'slash',
  briar_vest: 'slash',
  briar_boots: 'slash',
  road_shield: 'stab',
  road_legs: 'stab',
  road_greaves: 'crush',
  dusk_cloak: 'slash',
  dusk_boots: 'stab',
  cinder_shield: 'slash',
  cinder_legs: 'stab',
  delver_vest: 'crush',
  delver_boots: 'crush',
  mire_cloak: 'stab',
  mire_boots: 'slash',
  bone_ribs: 'crush',
  bone_boots: 'stab',
  gale_cloak: 'slash',
  gale_boots: 'crush',
};

export function itemDefenceStyle(id: string | null): AttackStyle | null {
  return id ? (ARMOR_DEFENCE[id] ?? null) : null;
}

/** Extra armour against the style a monster is biting with. */
export function styleMitigation(save: SaveData, style: AttackStyle): number {
  let n = 0;
  for (const id of Object.values(save.equipped)) {
    if (id && ARMOR_DEFENCE[id] === style) n += 1;
  }
  return n;
}

export function armorMitigation(save: SaveData): number {
  let n = 0;
  for (const id of Object.values(save.equipped)) n += itemArmor(id);
  return n + setBonus(save);
}

const WEAPON_DAMAGE: Record<string, number> = {
  frost_hammer: 4,
  frost_sword: 3,
  frost_spear: 3,
  frost_bow: 2,
  briar_sword: 1,
  road_mace: 2,
  dusk_dagger: 2,
  cinder_knife: 2,
  delver_maul: 3,
  mire_dagger: 2,
  bone_sword: 2,
  gale_spear: 2,
};

const WEAPON_STYLE: Record<string, AttackStyle> = {
  bronze_sword: 'slash',
  frost_sword: 'slash',
  briar_sword: 'slash',
  frost_spear: 'stab',
  dusk_dagger: 'stab',
  cinder_knife: 'stab',
  frost_hammer: 'crush',
  road_mace: 'crush',
  delver_maul: 'crush',
  mire_dagger: 'stab',
  bone_sword: 'slash',
  gale_spear: 'stab',
  frost_bow: 'ranged',
};

/** Seconds after a swing before the next one starts. Daggers are fast, mauls are heavy. */
const WEAPON_RECOVERY: Record<string, number> = {
  bronze_sword: 0.72,
  frost_sword: 0.74,
  briar_sword: 0.66,
  dusk_dagger: 0.4,
  cinder_knife: 0.42,
  mire_dagger: 0.44,
  bone_sword: 0.62,
  gale_spear: 0.68,
  frost_spear: 0.7,
  frost_bow: 0.9,
  road_mace: 1.0,
  frost_hammer: 1.16,
  delver_maul: 1.24,
};

export function weaponRecovery(id: string | null): number {
  return id ? (WEAPON_RECOVERY[id] ?? 0.72) : 0.72;
}

export function weaponSpeedLabel(id: string | null): string {
  const t = weaponRecovery(id);
  if (t <= 0.5) return 'Fast';
  if (t <= 0.9) return 'Measured';
  return 'Heavy';
}

export interface WeaponSpec {
  name: string;
  cost: number;
  blurb: string;
  /** Multiplier on the blow that spends the special. */
  mult: number;
  heal: number;
  /** Damage each second for three seconds. */
  bleed: number;
  /** Extra seconds before the target can strike back. */
  stun: number;
}

/** Every held weapon has a Focus special. Bronze is the camp default. */
export const WEAPON_SPECS: Record<string, WeaponSpec> = {
  bronze_sword: { name: 'Cleave', cost: 30, blurb: 'A wide cut.', mult: 1.45, heal: 0, bleed: 0, stun: 0 },
  frost_sword: { name: 'Rime Edge', cost: 35, blurb: 'Frost bites and slows the next strike.', mult: 1.3, heal: 0, bleed: 0, stun: 1.4 },
  frost_spear: { name: 'Impale', cost: 40, blurb: 'A deep thrust.', mult: 1.55, heal: 0, bleed: 0, stun: 0 },
  frost_hammer: { name: 'Quake', cost: 45, blurb: 'The head rings the ground.', mult: 1.6, heal: 0, bleed: 0, stun: 0.8 },
  frost_bow: { name: 'Volley', cost: 35, blurb: 'A focused shot.', mult: 1.4, heal: 0, bleed: 0, stun: 0 },
  briar_sword: { name: 'Briar Cut', cost: 30, blurb: 'Thorns keep working.', mult: 1.15, heal: 0, bleed: 2, stun: 0 },
  road_mace: { name: 'Bell Ringer', cost: 35, blurb: 'A blow that stuns.', mult: 1.25, heal: 0, bleed: 0, stun: 2 },
  dusk_dagger: { name: 'Night Nick', cost: 30, blurb: 'You take a little of the wound back.', mult: 1.2, heal: 6, bleed: 0, stun: 0 },
  cinder_knife: { name: 'Ember Jab', cost: 30, blurb: 'The edge stays hot.', mult: 1.2, heal: 0, bleed: 2, stun: 0 },
  delver_maul: { name: 'Shellbreak', cost: 40, blurb: 'Built to crack plate.', mult: 1.65, heal: 0, bleed: 0, stun: 0.6 },
  mire_dagger: { name: 'Venom', cost: 35, blurb: 'The cut keeps working.', mult: 1.1, heal: 0, bleed: 3, stun: 0 },
  bone_sword: { name: 'Rattle', cost: 32, blurb: 'The blow rings the bones.', mult: 1.25, heal: 0, bleed: 0, stun: 1.2 },
  gale_spear: { name: 'Crosswind', cost: 34, blurb: 'The thrust checks the next strike.', mult: 1.3, heal: 0, bleed: 0, stun: 1.1 },
};

export function weaponSpec(id: string | null): WeaponSpec | null {
  return id ? (WEAPON_SPECS[id] ?? null) : null;
}

export function weaponDamageBonus(id: string | null): number {
  return id ? (WEAPON_DAMAGE[id] ?? 0) : 0;
}

/** Unarmed and unknown blades swing as slash, the camp sword's style. */
export function weaponStyle(id: string | null): AttackStyle {
  return id ? (WEAPON_STYLE[id] ?? 'slash') : 'slash';
}

export interface MonsterProfile {
  level: number;
  weak: AttackStyle;
}

/** Combat level and the style that bites. Every fightable body has one. */
export const MONSTER_PROFILE: Record<string, MonsterProfile> = {
  dummy: { level: 3, weak: 'slash' },
  wolf: { level: 14, weak: 'slash' },
  crow: { level: 12, weak: 'stab' },
  spider: { level: 16, weak: 'crush' },
  fox: { level: 18, weak: 'slash' },
  beetle: { level: 20, weak: 'crush' },
  toad: { level: 17, weak: 'slash' },
  skeleton: { level: 19, weak: 'crush' },
  hawk: { level: 21, weak: 'slash' },
  boar: { level: 22, weak: 'stab' },
  orc: { level: 33, weak: 'stab' },
  yeti: { level: 42, weak: 'crush' },
};

export function monsterProfile(kind: string): MonsterProfile {
  return MONSTER_PROFILE[kind] ?? { level: 1, weak: 'slash' };
}

/** The style each body bites with. Armour that soaks that style turns more of it. */
const MONSTER_ATTACK: Record<string, AttackStyle> = {
  dummy: 'slash',
  wolf: 'slash',
  crow: 'stab',
  spider: 'crush',
  fox: 'slash',
  beetle: 'crush',
  toad: 'crush',
  skeleton: 'slash',
  hawk: 'stab',
  boar: 'stab',
  orc: 'stab',
  yeti: 'crush',
};

export function monsterAttack(kind: string): AttackStyle {
  return MONSTER_ATTACK[kind] ?? 'slash';
}

/** Flat armour a connecting blow must punch through. Wolves have none. */
const MONSTER_GUARD: Record<string, number> = {
  dummy: 0,
  wolf: 0,
  crow: 0,
  spider: 1,
  fox: 1,
  beetle: 2,
  toad: 1,
  skeleton: 1,
  hawk: 1,
  boar: 1,
  orc: 2,
  yeti: 3,
};

export function monsterGuard(kind: string): number {
  return MONSTER_GUARD[kind] ?? 0;
}

/**
 * Seconds between bites. Fast birds, measured beasts, heavy bosses.
 * Yeti and orc use the same table as their own attack loops.
 */
const MONSTER_TEMPO: Record<string, number> = {
  dummy: 1.6,
  wolf: 1.32,
  crow: 1.12,
  spider: 1.35,
  fox: 1.22,
  beetle: 1.78,
  toad: 1.48,
  skeleton: 1.55,
  hawk: 1.1,
  boar: 1.72,
  orc: 1.85,
  yeti: 2.7,
};

export function monsterTempo(kind: string): number {
  return MONSTER_TEMPO[kind] ?? 1.55;
}

export function monsterTempoLabel(kind: string): string {
  const t = monsterTempo(kind);
  if (t <= 1.25) return 'Fast';
  if (t <= 1.7) return 'Measured';
  return 'Heavy';
}

/** Kilograms worn. Heavier than the camp kit drains stamina while you walk. */
const ITEM_WEIGHT: Record<string, number> = {
  bronze_sword: 1.4,
  bronze_hatchet: 1.1,
  bronze_pickaxe: 1.2,
  frost_sword: 1.8,
  briar_sword: 1.5,
  bone_sword: 1.6,
  dusk_dagger: 0.6,
  cinder_knife: 0.7,
  mire_dagger: 0.7,
  frost_spear: 2.2,
  gale_spear: 1.6,
  frost_bow: 1.3,
  road_mace: 2.8,
  frost_hammer: 3.6,
  delver_maul: 4.2,
  frost_shield: 3.4,
  briar_shield: 1.8,
  road_shield: 2.4,
  cinder_shield: 1.2,
  frost_chest: 3.6,
  briar_vest: 1.6,
  dusk_cloak: 0.9,
  delver_vest: 2.2,
  mire_cloak: 0.8,
  bone_ribs: 2.6,
  gale_cloak: 0.7,
  frost_greaves: 2.4,
  road_greaves: 1.8,
  frost_legs: 2.2,
  road_legs: 1.6,
  cinder_legs: 1.1,
  frost_boots: 1.5,
  briar_boots: 0.9,
  dusk_boots: 0.6,
  delver_boots: 1.4,
  mire_boots: 0.6,
  bone_boots: 1.3,
  gale_boots: 0.5,
};

const CAMP_KIT_WEIGHT =
  ITEM_WEIGHT.bronze_sword + ITEM_WEIGHT.bronze_hatchet + ITEM_WEIGHT.bronze_pickaxe;

export function itemWeight(id: string | null): number {
  return id ? (ITEM_WEIGHT[id] ?? 0) : 0;
}

export function wornWeight(save: SaveData): number {
  let n = 0;
  for (const id of Object.values(save.equipped)) n += itemWeight(id);
  return Math.round(n * 10) / 10;
}

/** Weight above the bronze sword, hatchet, and pick the camp starts you with. */
export function carryBurden(save: SaveData): number {
  return Math.max(0, Math.round((wornWeight(save) - CAMP_KIT_WEIGHT) * 10) / 10);
}

/** OSRS-style combat level from the four combat skills. No prayer term yet. */
export function combatLevel(save: SaveData): number {
  const atk = save.skills.attack.level;
  const str = save.skills.strength.level;
  const def = save.skills.defence.level;
  const hp = save.skills.constitution.level;
  return Math.floor((def + hp) * 0.25 + (atk + str) * 0.325);
}

export function gearLine(id: string): string {
  const meta = ITEM_META[id];
  const name = meta?.name ?? id;
  const bits = [name];
  if (meta?.slot === 'weapon') {
    const style = weaponStyle(id);
    bits.push(style[0].toUpperCase() + style.slice(1));
    const dmg = weaponDamageBonus(id);
    if (dmg) bits.push(`+${dmg} damage`);
    const spec = weaponSpec(id);
    if (spec) bits.push(`${spec.name} (${spec.cost} focus)`);
    bits.push(weaponSpeedLabel(id));
    bits.push(`reach ${weaponReachLabel(id)}`);
  }
  const arm = itemArmor(id);
  if (arm) bits.push(`+${arm} armour`);
  const soak = itemDefenceStyle(id);
  if (soak) bits.push(`soaks ${soak}`);
  const kilos = itemWeight(id);
  if (kilos) bits.push(`${kilos.toFixed(1)} kg`);
  return bits.join(' · ');
}

/** Added to the swing's reach. Daggers step in. Spears and the bow stand off. */
const WEAPON_REACH: Record<string, number> = {
  dusk_dagger: -0.28,
  cinder_knife: -0.26,
  mire_dagger: -0.24,
  bronze_sword: 0,
  frost_sword: 0.05,
  briar_sword: 0.02,
  bone_sword: 0.04,
  road_mace: -0.08,
  frost_hammer: -0.12,
  delver_maul: -0.16,
  frost_spear: 0.4,
  gale_spear: 0.58,
  frost_bow: 2.2,
};

export function weaponReachBonus(id: string | null): number {
  return id ? (WEAPON_REACH[id] ?? 0) : 0;
}

export function weaponReachLabel(id: string | null): string {
  const r = weaponReachBonus(id);
  if (r < -0.05) return 'Short';
  if (r < 0.2) return 'Even';
  if (r < 1.2) return 'Long';
  return 'Far';
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
    stance: 'controlled',
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
    quests: {
      east_road: 'none',
      harl_commission: 'none',
      lanterns: 'none',
      wolfKills: 0,
      boarKills: 0,
      briarUnlocked: false,
      hearth_boars: 'none',
      silk_loom: 'none',
      roadUnlocked: false,
      shrine_foxes: 'none',
      duskUnlocked: false,
      kiln_crows: 'none',
      cinderUnlocked: false,
      claim_beetles: 'none',
      delverUnlocked: false,
      mire_toads: 'none',
      mireUnlocked: false,
      barrow_bones: 'none',
      boneUnlocked: false,
      gale_roost: 'none',
      galeUnlocked: false,
    },
  };
}
