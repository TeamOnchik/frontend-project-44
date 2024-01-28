#!/usr/bin/env node
import greetingsOfUser from '../src/cli.js';
import firstGame from './brain-even.js';
import calcGame from './brain-calc.js';

console.log('Welcome to the Brain Games!');

greetingsOfUser();

//firstGame();

calcGame();
