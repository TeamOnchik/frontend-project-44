#!/usr/bin/env node

import { gameCalc, rulesOfGame } from '../src/games/game-calc.js';
import gameEngine from '../src/index.js';

gameEngine(gameCalc, rulesOfGame);
