#!/usr/bin/env node

import { gameGcd, rulesOfGame } from '../src/games/game-gcd.js';
import gameEngine from '../src/index.js';

gameEngine(gameGcd, rulesOfGame);
