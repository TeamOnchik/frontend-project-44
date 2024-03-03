#!/usr/bin/env node

import { gamePrime, rulesOfGame } from '../src/games/game-prime.js';
import gameEngine from '../src/index.js';

gameEngine(gamePrime, rulesOfGame);
