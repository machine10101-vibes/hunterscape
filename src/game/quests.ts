import { countItem, type SaveData } from './types';

export type NpcId = 'elspeth' | 'harl' | 'nessa' | 'bram' | 'maeve' | 'calder' | 'holt';
export type QuestStage = 'none' | 'active' | 'done';

export interface QuestState {
  east_road: QuestStage;
  harl_commission: QuestStage;
  lanterns: QuestStage;
  hearth_boars: QuestStage;
  silk_loom: QuestStage;
  shrine_foxes: QuestStage;
  kiln_crows: QuestStage;
  wolfKills: number;
  boarKills: number;
  briarUnlocked: boolean;
  roadUnlocked: boolean;
  duskUnlocked: boolean;
  cinderUnlocked: boolean;
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
    wolfKills: 0,
    boarKills: 0,
    briarUnlocked: false,
    roadUnlocked: false,
    duskUnlocked: false,
    cinderUnlocked: false,
  };
}

export const EAST_ROAD_KILLS = 3;
export const BOAR_KILLS = 2;
export const SILK_NEEDED = 2;
export const FUR_NEEDED = 2;
export const FEATHER_NEEDED = 2;

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
      body: 'Cinder patterns are on the anvil. Knife: 1 feather, 1 charcoal, 1 copper, 1 log. Trousers: 2 feathers, 1 charcoal. Buckler: 2 charcoal, 1 feather, 1 copper. The crows are still north of the kiln if you need more.',
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
  if (q.east_road === 'done' && q.harl_commission === 'none') lines.push('Smith Harl has a commission.');
  else if (q.harl_commission === 'active') lines.push('Harl: 3 pelts, 2 logs, 1 copper.');
  if (q.lanterns === 'none' && q.east_road !== 'none') lines.push('Nessa needs 2 tin ore for the lanterns.');
  else if (q.lanterns === 'active') lines.push(`Nessa: tin ore ${Math.min(countItem(save.inventory, 'tin_ore'), 2)}/2`);
  if (q.briarUnlocked) {
    const open = ['briar'];
    if (q.roadUnlocked) open.push('roadwarden');
    if (q.duskUnlocked) open.push('dusk');
    if (q.cinderUnlocked) open.push('cinder');
    if (open.length === 1) lines.push('Briar patterns are open.');
    else lines.push(`Anvil: ${open.join(', ')}.`);
  }
  if (lines.length === 0) lines.push('Briarford is settled.');
  return lines.slice(0, 6);
}
