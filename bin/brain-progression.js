#!/usr/bin/env node

import gameProgression from '../src/games/game-progression.js';
import { gameEngine } from '../src/index.js';

const rulesOfGame = 'What number is missing in the progression?';

gameEngine(gameProgression, rulesOfGame);
