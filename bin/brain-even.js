#!/usr/bin/env node

import gameEven from '../src/games/game-even.js';
import { gameEngine } from '../src/index.js';

const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

gameEngine(gameEven, rulesOfGame);
