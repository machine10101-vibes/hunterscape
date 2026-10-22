import { countItem, type SaveData } from './types';

export type NpcId = 'elspeth' | 'harl' | 'nessa';
export type QuestStage = 'none' | 'active' | 'done';

export interface QuestState {
  east_road: QuestStage;
  harl_commission: QuestStage;
  lanterns: QuestStage;
  wolfKills: number;
  briarUnlocked: boolean;
}

export function defaultQuests(): QuestState {
  return {
    east_road: 'none',
    harl_commission: 'none',
    lanterns: 'none',
    wolfKills: 0,
    briarUnlocked: false,
  };
}

export const EAST_ROAD_KILLS = 3;

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
      body: 'Briarford holds. If Harl has opened his anvil, the briar set is cut from wolf pelt, fangs, copper, and whisper logs. Nessa keeps the square lit.',
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
      body: 'The anvil is yours. Sword: 1 pelt, 2 fangs, 1 copper, 1 log. Shield: 2 pelts, 1 log. Vest: 3 pelts, 1 fang. Boots: 2 pelts, 1 log.',
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
    body: 'Stall is open, lanterns are lit. Wolf pelts sell themselves to Harl — I just keep the square from going dark.',
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
  if (q.east_road === 'done' && q.harl_commission === 'none') lines.push('Smith Harl has a commission.');
  else if (q.harl_commission === 'active') lines.push('Harl: 3 pelts, 2 logs, 1 copper.');
  if (q.lanterns === 'none' && q.east_road !== 'none') lines.push('Nessa needs 2 tin ore for the lanterns.');
  else if (q.lanterns === 'active') lines.push(`Nessa: tin ore ${Math.min(countItem(save.inventory, 'tin_ore'), 2)}/2`);
  if (q.briarUnlocked) lines.push('Briarford anvil is open.');
  if (lines.length === 0) lines.push('Briarford is settled.');
  return lines.slice(0, 4);
}
