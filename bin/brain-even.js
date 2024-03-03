#!/usr/bin/env node

import { gameEven, rulesOfGame } from '../src/games/game-even.js';
import gameEngine from '../src/index.js';

gameEngine(gameEven, rulesOfGame);
