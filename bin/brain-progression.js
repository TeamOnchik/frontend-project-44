#!/usr/bin/env node

import { gameProgression, rulesOfGame } from '../src/games/game-progression.js';
import gameEngine from '../src/index.js';

gameEngine(gameProgression, rulesOfGame);
