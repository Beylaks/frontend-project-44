import greating from '../src/cli.js';
import isEven from './brain-even.js';

console.log('Welcome to the Brain Games!');
export const userName = greating();
console.log(`Привет, ${userName}`);

isEven()