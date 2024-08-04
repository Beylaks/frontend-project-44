import { compare, getRandom } from '../src/general-logic.js';
import { hello, task } from '../src/cli.js';

const chekEven = (num) => {
  const ask = task(num);
  let answer = 'yes';
  if (num % 2 !== 0) {
    answer = 'no';
  }
  const conditeon = compare(ask, answer);
  return conditeon;
};

const isEven = () => {
  const intro = hello('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    if (!chekEven(getRandom(1, 100))) {
      console.log(`Let's try again, ${intro}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${intro}!`);
    }
  }
};

export default isEven;
