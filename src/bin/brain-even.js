#!/usr/bin/env node
import Even, { gameDescription } from '../games/even';
import Manager from '../games/manager';
import welcome from '..';

console.log('Welcome to the Brain Games!');
console.log(gameDescription);
const name = welcome();
const man = new Manager(name, new Even());
man.startGame();