import { countItem, type SaveData } from './types';

export type NpcId = 'elspeth' | 'harl' | 'nessa' | 'bram' | 'maeve' | 'calder' | 'holt' | 'odell' | 'wren' | 'marr' | 'quill' | 'pell';
export type QuestStage = 'none' | 'active' | 'done';

export interface QuestState {
  east_road: QuestStage;
  harl_commission: QuestStage;
  lanterns: QuestStage;
  hearth_boars: QuestStage;
  silk_loom: QuestStage;
  shrine_foxes: QuestStage;
  kiln_crows: QuestStage;
  claim_beetles: QuestStage;
  mire_toads: QuestStage;
  barrow_bones: QuestStage;
  gale_roost: QuestStage;
  ash_brake: QuestStage;
  wolfKills: number;
  boarKills: number;
  briarUnlocked: boolean;
  roadUnlocked: boolean;
  duskUnlocked: boolean;
  cinderUnlocked: boolean;
  delverUnlocked: boolean;
  mireUnlocked: boolean;
  boneUnlocked: boolean;
  galeUnlocked: boolean;
  ashUnlocked: boolean;
}

export function defaultQuests(): QuestState {
  return {
    east_road: 'none',
    harl_commission: 'none',
    lanterns: 'none',
    hearth_boars: 'none',
    silk_loom: 'none',
    shrine_foxes: 'none',
    kiln_crows: 'none',
    claim_beetles: 'none',
    mire_toads: 'none',
    barrow_bones: 'none',
    gale_roost: 'none',
    ash_brake: 'none',
    wolfKills: 0,
    boarKills: 0,
    briarUnlocked: false,
    roadUnlocked: false,
    duskUnlocked: false,
    cinderUnlocked: false,
    delverUnlocked: false,
    mireUnlocked: false,
    boneUnlocked: false,
    galeUnlocked: false,
    ashUnlocked: false,
  };
}

export const EAST_ROAD_KILLS = 3;
export const BOAR_KILLS = 2;
export const SILK_NEEDED = 2;
export const FUR_NEEDED = 2;
export const FEATHER_NEEDED = 2;
export const SHELL_NEEDED = 2;
export const HIDE_NEEDED = 2;
export const BONE_NEEDED = 2;
export const GALE_NEEDED = 2;
export const ASH_NEEDED = 2;

export interface DialogueOption {
  id: string;
  label: string;
}

export interface DialogueScript {
  speaker: string;
  body: string;
  options: DialogueOption[];
}

const CLOSE: DialogueOption = { id: 'close', label: 'Farewell' };

export function dialogueFor(save: SaveData, npc: NpcId): DialogueScript {
  const q = save.quests;
  if (npc === 'elspeth') {
    if (q.east_road === 'none') {
      return {
        speaker: 'Warden Elspeth',
        body: 'Traveller, Briarford sits at the end of the east road, and the briar wolves have claimed it. Fell three of them and the square will breathe again.',
        options: [
          { id: 'elspeth_accept', label: 'I will clear the road.' },
          { id: 'close', label: 'Not now.' },
        ],
      };
    }
    if (q.east_road === 'active' && q.wolfKills < EAST_ROAD_KILLS) {
      return {
        speaker: 'Warden Elspeth',
        body: `The road is still restless. You have felled ${q.wolfKills} of ${EAST_ROAD_KILLS} briar wolves.`,
        options: [{ id: 'close', label: 'I will keep hunting.' }],
      };
    }
    if (q.east_road === 'active') {
      return {
        speaker: 'Warden Elspeth',
        body: 'Three wolves down, and the east road is a road again. Take these rations. Smith Harl has been waiting on pelts, and Nessa still needs tin for the lanterns.',
        options: [{ id: 'elspeth_turnin', label: 'The road is clear.' }],
      };
    }
    return {
      speaker: 'Warden Elspeth',
      body: 'Briarford holds. Bram keeps the hearth, Maeve the loom, and Sister Calder the shrine north of the hall. Her dusk patterns open once she has fox fur. Harl’s anvil still cuts the briar set.',
      options: [CLOSE],
    };
  }

  if (npc === 'harl') {
    if (q.east_road !== 'done') {
      return {
        speaker: 'Smith Harl',
        body: 'Anvil stays cold until Warden Elspeth says the east road is clear. I will not hammer while wolves sit on my customers.',
        options: [CLOSE],
      };
    }
    if (q.harl_commission === 'none') {
      return {
        speaker: 'Smith Harl',
        body: 'Good. Bring me 3 wolf pelts, 2 whisper logs, and 1 copper ore. I will set a briar sword in your hand and open the anvil for the rest of the set.',
        options: [
          { id: 'harl_accept', label: 'I will gather the materials.' },
          { id: 'close', label: 'Give me a moment.' },
        ],
      };
    }
    if (q.harl_commission === 'active') {
      const ready = harlMaterialsReady(save);
      return {
        speaker: 'Smith Harl',
        body: ready
          ? 'Pelts, logs, and copper. That will make a sword and unlock the briar patterns: shield, vest, and boots.'
          : `Still short. I need 3 wolf pelts (${countItem(save.inventory, 'wolf_pelt')}/3), 2 whisper logs (${countItem(save.inventory, 'whisper_logs')}/2), and 1 copper ore (${countItem(save.inventory, 'copper_ore')}/1).`,
        options: ready
          ? [{ id: 'harl_turnin', label: 'Take them. Forge the sword.' }]
          : [CLOSE],
      };
    }
    return {
      speaker: 'Smith Harl',
      body: 'The anvil is yours. Sword: 1 pelt, 2 fangs, 1 copper, 1 log. Shield: 2 pelts, 1 log. Vest: 3 pelts, 1 fang. Boots: 2 pelts, 1 log. When Maeve opens the roadwarden patterns, mace, shield, chaps, and greaves share this same anvil.',
      options: [CLOSE],
    };
  }

  if (npc === 'bram') {
    if (q.hearth_boars === 'none') {
      return {
        speaker: 'Innkeeper Bram',
        body: 'The Briar Hearth is open, but the boars have rooted the bean rows south of the square. Fell two of them and I will put a roast on your pack.',
        options: [
          { id: 'bram_accept', label: 'I will clear the rows.' },
          { id: 'close', label: 'Not hungry yet.' },
        ],
      };
    }
    if (q.hearth_boars === 'active' && q.boarKills < BOAR_KILLS) {
      return {
        speaker: 'Innkeeper Bram',
        body: `The rows are still torn up. You have felled ${q.boarKills} of ${BOAR_KILLS} briar boars. Their hides stay yours — the anvil can use them.`,
        options: [{ id: 'close', label: 'I will keep hunting.' }],
      };
    }
    if (q.hearth_boars === 'active') {
      return {
        speaker: 'Innkeeper Bram',
        body: 'Two boars down, and the beans might stand a chance. Take this roast. The hides you skinned are still in your pack.',
        options: [{ id: 'bram_turnin', label: 'The rows are quieter.' }],
      };
    }
    return {
      speaker: 'Innkeeper Bram',
      body: 'Hearth’s warm. If a boar still wanders the rows, its hide and tusks are what Maeve’s roadwarden kit is cut from.',
      options: [CLOSE],
    };
  }

  if (npc === 'calder') {
    const fur = countItem(save.inventory, 'fox_fur');
    if (q.shrine_foxes === 'none') {
      return {
        speaker: 'Sister Calder',
        body: 'The wayside shrine keeps the north road. Dusk foxes have denned in the thicket beyond it. Bring me 2 fox furs and I will set a dusk cloak on your shoulders and open those patterns on the anvil.',
        options: [
          { id: 'calder_accept', label: 'I will bring the furs.' },
          { id: 'close', label: 'The thicket can wait.' },
        ],
      };
    }
    if (q.shrine_foxes === 'active' && fur < FUR_NEEDED) {
      return {
        speaker: 'Sister Calder',
        body: `The candles are still uneasy. I need ${FUR_NEEDED} fox fur (you have ${fur}). The dens are north of this shrine.`,
        options: [CLOSE],
      };
    }
    if (q.shrine_foxes === 'active') {
      return {
        speaker: 'Sister Calder',
        body: 'Two furs. That will line a Dusk Cloak, and the anvil will take fur, fangs, copper, silk, and logs for the dagger and boots.',
        options: [{ id: 'calder_turnin', label: 'Take the furs.' }],
      };
    }
    return {
      speaker: 'Sister Calder',
      body: 'Dusk patterns are on the anvil. Dagger: 1 fang, 1 fur, 1 copper, 1 log. Cloak: 3 furs, 1 silk. Boots: 2 furs, 1 log. The thicket still has foxes if you need more.',
      options: [CLOSE],
    };
  }

  if (npc === 'holt') {
    const feathers = countItem(save.inventory, 'soot_feather');
    if (q.kiln_crows === 'none') {
      return {
        speaker: 'Burner Holt',
        body: 'The west kiln should be smoking, but cinder crows keep kicking the charcoal apart. Bring me 2 soot feathers and I will set a cinder knife in your hand and open those patterns on the anvil.',
        options: [
          { id: 'holt_accept', label: 'I will bring the feathers.' },
          { id: 'close', label: 'The kiln can wait.' },
        ],
      };
    }
    if (q.kiln_crows === 'active' && feathers < FEATHER_NEEDED) {
      return {
        speaker: 'Burner Holt',
        body: `The mound is still cold. I need ${FEATHER_NEEDED} soot feathers (you have ${feathers}). The crows mob just north of this kiln.`,
        options: [CLOSE],
      };
    }
    if (q.kiln_crows === 'active') {
      return {
        speaker: 'Burner Holt',
        body: 'Two feathers. That will wrap a Cinder Knife, and the anvil will take feathers, charcoal, copper, and logs for the trousers and buckler.',
        options: [{ id: 'holt_turnin', label: 'Take the feathers.' }],
      };
    }
    return {
      speaker: 'Burner Holt',
      body: 'Cinder patterns are on the anvil. Knife: 1 feather, 1 charcoal, 1 copper, 1 log. Trousers: 2 feathers, 1 charcoal. Buckler: 2 charcoal, 1 feather, 1 copper. Miner Odell at the south claim wants beetle shells if the kiln is quiet.',
      options: [CLOSE],
    };
  }

  if (npc === 'odell') {
    const shells = countItem(save.inventory, 'beetle_shell');
    if (q.claim_beetles === 'none') {
      return {
        speaker: 'Miner Odell',
        body: 'The south claim is crawling. Ore beetles crack the copper faster than I can bag it. Bring me 2 beetle shells and I will set a delver maul in your hand and open those patterns on the anvil. Their shells take crush.',
        options: [
          { id: 'odell_accept', label: 'I will bring the shells.' },
          { id: 'close', label: 'The claim can wait.' },
        ],
      };
    }
    if (q.claim_beetles === 'active' && shells < SHELL_NEEDED) {
      return {
        speaker: 'Miner Odell',
        body: `The vein is still loud. I need ${SHELL_NEEDED} beetle shells (you have ${shells}). They graze just south of this claim, and a crush weapon splits them.`,
        options: [CLOSE],
      };
    }
    if (q.claim_beetles === 'active') {
      return {
        speaker: 'Miner Odell',
        body: 'Two shells. That will haft a Delver Maul, and the anvil will take shells, grit, copper, and logs for the vest and boots.',
        options: [{ id: 'odell_turnin', label: 'Take the shells.' }],
      };
    }
    return {
      speaker: 'Miner Odell',
      body: 'Delver patterns are on the anvil. Maul: 1 shell, 1 grit, 1 copper, 1 log. Vest: 2 shells, 1 grit. Boots: 1 shell, 1 copper, 1 log. Reed Wren at the south mire wants toad hides if the claim is quiet.',
      options: [CLOSE],
    };
  }

  if (npc === 'wren') {
    const hides = countItem(save.inventory, 'toad_hide');
    if (q.mire_toads === 'none') {
      return {
        speaker: 'Reed Wren',
        body: 'The south mire is thick with toads, and their hides still carry venom. Bring me 2 toad hides and I will set a mire dagger in your hand and open those patterns on the anvil. Slash finds the soft belly. Two pieces of one set, cloak and boots included, add a point of armour.',
        options: [
          { id: 'wren_accept', label: 'I will bring the hides.' },
          { id: 'close', label: 'The mire can wait.' },
        ],
      };
    }
    if (q.mire_toads === 'active' && hides < HIDE_NEEDED) {
      return {
        speaker: 'Reed Wren',
        body: `The pool is still croaking. I need ${HIDE_NEEDED} toad hides (you have ${hides}). They sit just south of this mire, and a slash weapon opens them.`,
        options: [CLOSE],
      };
    }
    if (q.mire_toads === 'active') {
      return {
        speaker: 'Reed Wren',
        body: 'Two hides. That will wrap a Mire Dagger, and the anvil will take hides, venom, copper, and logs for the cloak and boots. Its special is Venom, and it spends Focus.',
        options: [{ id: 'wren_turnin', label: 'Take the hides.' }],
      };
    }
    return {
      speaker: 'Reed Wren',
      body: 'Mire patterns are on the anvil. Dagger: 1 hide, 1 venom sac, 1 copper, 1 log. Cloak: 3 hides, 1 venom sac. Boots: 2 hides, 1 log. The toads are still south of the pool if you need more. Sexton Marr at the north barrow wants bones if the mire is quiet.',
      options: [CLOSE],
    };
  }

  if (npc === 'marr') {
    const bones = countItem(save.inventory, 'bones');
    if (q.barrow_bones === 'none') {
      return {
        speaker: 'Sexton Marr',
        body: 'The north barrow will not stay quiet. Restless bones walk the mound, and they strike with slash. Crush breaks them. Bring me 2 bones and I will set a bone sword in your hand and open those patterns on the anvil. A fast weapon recovers sooner. Armour soaks the style a beast bites with.',
        options: [
          { id: 'marr_accept', label: 'I will bring the bones.' },
          { id: 'close', label: 'The barrow can wait.' },
        ],
      };
    }
    if (q.barrow_bones === 'active' && bones < BONE_NEEDED) {
      return {
        speaker: 'Sexton Marr',
        body: `The mound is still walking. I need ${BONE_NEEDED} bones (you have ${bones}). They pace just north of this barrow, and a crush weapon splits them.`,
        options: [CLOSE],
      };
    }
    if (q.barrow_bones === 'active') {
      return {
        speaker: 'Sexton Marr',
        body: 'Two bones. That will haft a Bone Sword, and the anvil will take bones, skull chips, copper, and logs for the ribs and boots. Its special is Rattle, and it spends Focus.',
        options: [{ id: 'marr_turnin', label: 'Take the bones.' }],
      };
    }
    return {
      speaker: 'Sexton Marr',
      body: 'Bone patterns are on the anvil. Sword: 1 bone, 1 skull chip, 1 copper, 1 log. Ribs: 3 bones, 1 skull chip. Boots: 2 bones, 1 log. The ribs soak crush and the boots soak stab. The bones are still north of the mound if you need more. Falconer Quill at the west roost wants gale feathers if the barrow is quiet.',
      options: [CLOSE],
    };
  }

  if (npc === 'quill') {
    const feathers = countItem(save.inventory, 'gale_feather');
    if (q.gale_roost === 'none') {
      return {
        speaker: 'Falconer Quill',
        body: 'The west windbreak is not empty. Gale hawks wheel over the roost and strike with stab. Slash cuts the wings. Bring me 2 gale feathers and I will set a gale spear in your hand and open those patterns on the anvil. A long weapon reaches farther. Heavy kit drains your stamina until you are winded.',
        options: [
          { id: 'quill_accept', label: 'I will bring the feathers.' },
          { id: 'close', label: 'The roost can wait.' },
        ],
      };
    }
    if (q.gale_roost === 'active' && feathers < GALE_NEEDED) {
      return {
        speaker: 'Falconer Quill',
        body: `The hawks are still up. I need ${GALE_NEEDED} gale feathers (you have ${feathers}). They wheel just west of this roost, and a slash weapon cuts them.`,
        options: [CLOSE],
      };
    }
    if (q.gale_roost === 'active') {
      return {
        speaker: 'Falconer Quill',
        body: 'Two feathers. That will haft a Gale Spear, and the anvil will take feathers, talons, copper, and logs for the cloak and boots. Its special is Crosswind, and it spends Focus. The spear reaches long, and the cloth is light.',
        options: [{ id: 'quill_turnin', label: 'Take the feathers.' }],
      };
    }
    return {
      speaker: 'Falconer Quill',
      body: 'Gale patterns are on the anvil. Spear: 1 feather, 1 talon, 1 copper, 1 log. Cloak: 3 feathers, 1 talon. Boots: 2 feathers, 1 log. The cloak soaks slash and the boots soak crush. They are light, so the walk does not wind you. The hawks are still west of the roost if you need more. Huntsman Pell at the ash brake, north of the east road, wants shed antlers.',
      options: [CLOSE],
    };
  }

  if (npc === 'pell') {
    const antlers = countItem(save.inventory, 'ash_antler');
    if (q.ash_brake === 'none') {
      return {
        speaker: 'Huntsman Pell',
        body: 'Ash stags clash north of the east road. They strike with slash, and a stab weapon finds the gap under the rack. Bring me 2 ash antlers and I will set an antler blade in your hand and open those patterns on the anvil. Keen weapons land more often. Ward on your armour turns a bite aside.',
        options: [
          { id: 'pell_accept', label: 'I will bring the antlers.' },
          { id: 'close', label: 'The brake can wait.' },
        ],
      };
    }
    if (q.ash_brake === 'active' && antlers < ASH_NEEDED) {
      return {
        speaker: 'Huntsman Pell',
        body: `The stags are still clashing. I need ${ASH_NEEDED} ash antlers (you have ${antlers}). They stand just south of this brake, and a stab weapon splits the rack.`,
        options: [CLOSE],
      };
    }
    if (q.ash_brake === 'active') {
      return {
        speaker: 'Huntsman Pell',
        body: 'Two antlers. That will haft an Antler Blade, and the anvil will take antlers, hide, copper, and logs for the cloak and boots. Its special is Gore, and it spends Focus. The blade is keen, and the hide adds ward.',
        options: [{ id: 'pell_turnin', label: 'Take the antlers.' }],
      };
    }
    return {
      speaker: 'Huntsman Pell',
      body: 'Ash patterns are on the anvil. Blade: 1 antler, 1 hide, 1 copper, 1 log. Cloak: 3 antlers, 1 hide. Boots: 2 antlers, 1 log. The cloak soaks slash and the boots soak crush. Both add ward, so bites miss more often. The stags are still south of the brake if you need more.',
      options: [CLOSE],
    };
  }

  if (npc === 'maeve') {
    const silk = countItem(save.inventory, 'spider_silk');
    if (q.silk_loom === 'none') {
      return {
        speaker: 'Weaver Maeve',
        body: 'The loom is dressed, but the roadwarden patterns need spider silk. Thorn spiders den east of the bean rows. Bring me 2 spools and I will set a mace in your hand and open those patterns on Harl’s anvil.',
        options: [
          { id: 'maeve_accept', label: 'I will bring the silk.' },
          { id: 'close', label: 'The webs can wait.' },
        ],
      };
    }
    if (q.silk_loom === 'active' && silk < SILK_NEEDED) {
      return {
        speaker: 'Weaver Maeve',
        body: `The shuttle is waiting. I need ${SILK_NEEDED} spider silk (you have ${silk}). The dens sit east of the bean rows.`,
        options: [CLOSE],
      };
    }
    if (q.silk_loom === 'active') {
      return {
        speaker: 'Weaver Maeve',
        body: 'Two spools. That will bind a Roadwarden Mace, and the anvil will take hide, tusk, silk, copper, and logs for the rest of the set.',
        options: [{ id: 'maeve_turnin', label: 'Take the silk.' }],
      };
    }
    return {
      speaker: 'Weaver Maeve',
      body: 'Roadwarden patterns are on the anvil. Mace: 1 tusk, 1 hide, 1 copper, 1 log. Shield: 2 hides, 1 silk. Chaps: 2 hides, 2 silk. Greaves: 1 hide, 1 silk, 1 log.',
      options: [CLOSE],
    };
  }

  if (q.lanterns === 'none') {
    return {
      speaker: 'Shopkeep Nessa',
      body: 'The square lanterns drink tin, and the mine by Thornrest still has it. Bring me 2 tin ore and I will keep Briarford lit after dusk.',
      options: [
        { id: 'nessa_accept', label: 'I will bring the tin.' },
        { id: 'close', label: 'Later.' },
      ],
    };
  }
  if (q.lanterns === 'active') {
    const have = countItem(save.inventory, 'tin_ore');
    return {
      speaker: 'Shopkeep Nessa',
      body:
        have >= 2
          ? 'Two lumps of tin. The lanterns will take that, and you will have rations for the walk home.'
          : `The lanterns are still dim. I need 2 tin ore (you have ${have}).`,
      options: have >= 2 ? [{ id: 'nessa_turnin', label: 'Here is the tin.' }] : [CLOSE],
    };
  }
  return {
    speaker: 'Shopkeep Nessa',
    body: 'Stall is open, lanterns are lit. Bram feeds the square, Maeve dresses the roadwardens, Calder keeps the north shrine, Holt burns charcoal out west, and I just keep the dark off the stones.',
    options: [CLOSE],
  };
}

export function harlMaterialsReady(save: SaveData): boolean {
  return (
    countItem(save.inventory, 'wolf_pelt') >= 3 &&
    countItem(save.inventory, 'whisper_logs') >= 2 &&
    countItem(save.inventory, 'copper_ore') >= 1
  );
}

export function trackerLines(save: SaveData): string[] {
  const q = save.quests;
  const lines: string[] = [];
  if (q.east_road === 'none') lines.push('Speak with Warden Elspeth in Briarford, east of camp.');
  else if (q.east_road === 'active') {
    lines.push(
      q.wolfKills >= EAST_ROAD_KILLS
        ? 'East road: return to Warden Elspeth.'
        : `East road: briar wolves ${Math.min(q.wolfKills, EAST_ROAD_KILLS)}/${EAST_ROAD_KILLS}`,
    );
  }
  if (q.hearth_boars === 'none') lines.push('Innkeeper Bram: clear 2 briar boars from the bean rows.');
  else if (q.hearth_boars === 'active') {
    lines.push(
      q.boarKills >= BOAR_KILLS
        ? 'Bean rows: return to Innkeeper Bram.'
        : `Bean rows: briar boars ${Math.min(q.boarKills, BOAR_KILLS)}/${BOAR_KILLS}`,
    );
  }
  if (q.silk_loom === 'none') lines.push('Weaver Maeve needs 2 spider silk.');
  else if (q.silk_loom === 'active') {
    const silk = countItem(save.inventory, 'spider_silk');
    lines.push(silk >= SILK_NEEDED ? 'Loom: return to Weaver Maeve.' : `Loom: spider silk ${silk}/${SILK_NEEDED}`);
  }
  if (q.shrine_foxes === 'none') lines.push('Sister Calder needs 2 fox fur from the north thicket.');
  else if (q.shrine_foxes === 'active') {
    const fur = countItem(save.inventory, 'fox_fur');
    lines.push(fur >= FUR_NEEDED ? 'Shrine: return to Sister Calder.' : `Shrine: fox fur ${fur}/${FUR_NEEDED}`);
  }
  if (q.kiln_crows === 'none') lines.push('Burner Holt needs 2 soot feathers at the west kiln.');
  else if (q.kiln_crows === 'active') {
    const feathers = countItem(save.inventory, 'soot_feather');
    lines.push(
      feathers >= FEATHER_NEEDED ? 'Kiln: return to Burner Holt.' : `Kiln: soot feathers ${feathers}/${FEATHER_NEEDED}`,
    );
  }
  if (q.kiln_crows === 'done' && q.claim_beetles === 'none') {
    lines.push('Miner Odell needs 2 beetle shells at the south claim.');
  } else if (q.claim_beetles === 'active') {
    const shells = countItem(save.inventory, 'beetle_shell');
    lines.push(
      shells >= SHELL_NEEDED ? 'Claim: return to Miner Odell.' : `Claim: beetle shells ${shells}/${SHELL_NEEDED}`,
    );
  }
  if (q.claim_beetles === 'done' && q.mire_toads === 'none') {
    lines.push('Reed Wren needs 2 toad hides at the south mire.');
  } else if (q.mire_toads === 'active') {
    const hides = countItem(save.inventory, 'toad_hide');
    lines.push(hides >= HIDE_NEEDED ? 'Mire: return to Reed Wren.' : `Mire: toad hides ${hides}/${HIDE_NEEDED}`);
  }
  if (q.mire_toads === 'done' && q.barrow_bones === 'none') {
    lines.push('Sexton Marr needs 2 bones at the north barrow.');
  } else if (q.barrow_bones === 'active') {
    const bones = countItem(save.inventory, 'bones');
    lines.push(bones >= BONE_NEEDED ? 'Barrow: return to Sexton Marr.' : `Barrow: bones ${bones}/${BONE_NEEDED}`);
  }
  if (q.barrow_bones === 'done' && q.gale_roost === 'none') {
    lines.push('Falconer Quill needs 2 gale feathers at the west roost.');
  } else if (q.gale_roost === 'active') {
    const feathers = countItem(save.inventory, 'gale_feather');
    lines.push(
      feathers >= GALE_NEEDED ? 'Roost: return to Falconer Quill.' : `Roost: gale feathers ${feathers}/${GALE_NEEDED}`,
    );
  }
  if (q.gale_roost === 'done' && q.ash_brake === 'none') {
    lines.push('Huntsman Pell needs 2 ash antlers at the ash brake.');
  } else if (q.ash_brake === 'active') {
    const antlers = countItem(save.inventory, 'ash_antler');
    lines.push(
      antlers >= ASH_NEEDED ? 'Brake: return to Huntsman Pell.' : `Brake: ash antlers ${antlers}/${ASH_NEEDED}`,
    );
  }
  if (q.east_road === 'done' && q.harl_commission === 'none') lines.push('Smith Harl has a commission.');
  else if (q.harl_commission === 'active') lines.push('Harl: 3 pelts, 2 logs, 1 copper.');
  if (q.lanterns === 'none' && q.east_road !== 'none') lines.push('Nessa needs 2 tin ore for the lanterns.');
  else if (q.lanterns === 'active') lines.push(`Nessa: tin ore ${Math.min(countItem(save.inventory, 'tin_ore'), 2)}/2`);
  if (q.briarUnlocked) {
    const open = ['briar'];
    if (q.roadUnlocked) open.push('roadwarden');
    if (q.duskUnlocked) open.push('dusk');
    if (q.cinderUnlocked) open.push('cinder');
    if (q.delverUnlocked) open.push('delver');
    if (q.mireUnlocked) open.push('mire');
    if (q.boneUnlocked) open.push('bone');
    if (q.galeUnlocked) open.push('gale');
    if (q.ashUnlocked) open.push('ash');
    if (open.length === 1) lines.push('Briar patterns are open.');
    else lines.push(`Anvil: ${open.join(', ')}.`);
  }
  if (lines.length === 0) lines.push('Briarford is settled.');
  return lines.slice(0, 6);
}
