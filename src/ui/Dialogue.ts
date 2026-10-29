export interface DialogueChoice {
  id: string;
  label: string;
}

/** Bottom-centre talk box for town NPCs. */
export class Dialogue {
  private root: HTMLElement;
  private speakerEl: HTMLElement;
  private bodyEl: HTMLElement;
  private optionsEl: HTMLElement;
  onChoose: ((id: string) => void) | null = null;

  constructor() {
    this.root = document.getElementById('dialogue')!;
    this.speakerEl = document.getElementById('dialogue-speaker')!;
    this.bodyEl = document.getElementById('dialogue-body')!;
    this.optionsEl = document.getElementById('dialogue-options')!;
  }

  isOpen(): boolean {
    return !this.root.hidden;
  }

  show(speaker: string, body: string, options: DialogueChoice[]): void {
    this.speakerEl.textContent = speaker;
    this.bodyEl.textContent = body;
    this.optionsEl.innerHTML = '';
    for (const opt of options) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'dialogue-opt';
      btn.textContent = opt.label;
      btn.addEventListener('click', () => this.onChoose?.(opt.id));
      this.optionsEl.appendChild(btn);
    }
    this.root.hidden = false;
  }

  hide(): void {
    this.root.hidden = true;
    this.optionsEl.innerHTML = '';
  }
}
