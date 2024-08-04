import { getRandom, compare } from '../src/general-logic.js';
import { hello, task } from '../src/cli.js';

const randomMath = (a, b) => {
  let conditeon = false;
  const singNumber = getRandom(1, 3);
  if (singNumber === 1) {
    const result = a + b;
    const sum = task(`${a} + ${b}`);
    conditeon = compare(result, Number(sum));
  } else if (singNumber === 2) {
    const result = a - b;
    const sum = task(`${a} - ${b}`);
    conditeon = compare(result, Number(sum));
  } else if (singNumber === 3) {
    const result = a * b;
    const sum = task(`${a} * ${b}`);
    conditeon = compare(result, Number(sum));
  }
  return conditeon;
};

const repTasks = () => {
  const intro = hello('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    if (!randomMath(getRandom(1, 100), getRandom(1, 100))) {
      console.log(`Let's try again, ${intro}`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${intro}!`);
    }
  }
};

export default repTasks;
