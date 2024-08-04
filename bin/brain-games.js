#!/usr/bin/env node
import { greating } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = greating();
console.log(`Hello , ${userName}`);
