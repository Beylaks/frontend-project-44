import { compare, getRandom, cycle } from '../src/general-logic.js';
import { task } from '../src/cli.js';

const chekEven = () => {
  const num = getRandom(1, 100);
  const ask = task(num);
  let answer = 'yes';
  if (num % 2 !== 0) {
    answer = 'no';
  }
  const conditeon = compare(ask, answer);
  return conditeon;
};

const isEvenCycle = () => cycle(chekEven, 'Answer "yes" if the number is even, otherwise answer "no"');

export default isEvenCycle;
