#!/usr/bin/env node

import gameCalc from '../src/games/game-calc.js';
import { gameEngine } from '../src/index.js';

const rulesOfGame = 'What is the result of the expression?';

gameEngine(gameCalc, rulesOfGame);
