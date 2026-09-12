import { defaultSave, ITEM_META, type SaveData } from './types';

const KEY = 'hunterscape_save_v1';

function sanitize(save: SaveData): SaveData {
  const equippedIds = new Set(Object.values(save.equipped).filter((id): id is string => !!id));
  save.inventory = save.inventory.filter((stack) => {
    const meta = ITEM_META[stack.id];
    if (meta && !meta.stackable && equippedIds.has(stack.id)) return false;
    return true;
  });
  return save;
}

export function loadSave(): SaveData {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultSave();
    const data = JSON.parse(raw) as SaveData;
    if (data.version !== 1) return defaultSave();
    const base = defaultSave();
    return sanitize({
      ...base,
      ...data,
      skills: { ...base.skills, ...data.skills },
      equipped: { ...base.equipped, ...data.equipped },
      inventory: data.inventory ?? base.inventory,
    });
  } catch {
    return defaultSave();
  }
}

export function writeSave(data: SaveData): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    /* ignore quota */
  }
}
