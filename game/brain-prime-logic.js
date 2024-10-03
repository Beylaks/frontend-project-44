import { getRandom, compare, cycle } from '../src/general-logic.js';
import { task } from '../src/cli.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const askPrime = () => {
  const num = getRandom(1, 100);
  const check = task(num);
  let answer = 'yes';
  if (!isPrime(num)) {
    answer = 'no';
  }
  const conditeon = compare(answer, check);
  return conditeon;
};

const isPrimeCycle = () => cycle(askPrime, 'Answer "yes" if given number is prime. Otherwise answer "no".');

export default isPrimeCycle;
