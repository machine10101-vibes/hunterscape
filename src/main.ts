import { installVoxelStyle } from './rendering/voxelStyle';
import { Game } from './game/Game';

installVoxelStyle();

const canvas = document.getElementById('game-canvas');
if (!(canvas instanceof HTMLCanvasElement)) {
  throw new Error('Missing #game-canvas');
}

new Game(canvas);
