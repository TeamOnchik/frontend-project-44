#!/usr/bin/env node

import gameGcd from '../src/games/game-gcd.js';
import { gameEngine } from '../src/index.js';

const rulesOfGame = 'Find the greatest common divisor of given numbers.';

gameEngine(gameGcd, rulesOfGame);
