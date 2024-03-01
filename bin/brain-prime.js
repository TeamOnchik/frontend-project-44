#!/usr/bin/env node

import gamePrime from '../src/games/game-prime.js';
import { gameEngine } from '../src/index.js';

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

gameEngine(gamePrime, rulesOfGame);
