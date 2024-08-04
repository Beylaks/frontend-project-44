import { getRandom, compare } from '../src/general-logic.js';
import { hello, task } from '../src/cli.js';

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

const brainPrime = () => {
  const intro = hello('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i <= 2; i += 1) {
    if (!askPrime()) {
      console.log(`Let's try again, ${intro}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${intro}!`);
    }
  }
};

export default brainPrime;
