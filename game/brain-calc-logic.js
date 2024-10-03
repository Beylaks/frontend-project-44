import { getRandom, compare, cycle } from '../src/general-logic.js';
import { task } from '../src/cli.js';

const math = [{
  sign: '+',
  method: (n1, n2) => n1 + n2,
}, {
  sign: '-',
  method: (n1, n2) => n1 - n2,
}, {
  sign: '*',
  method: (n1, n2) => n1 * n2,
}];

const randomMath = () => {
  const numberOne = getRandom(1, 10);
  const numberTwo = getRandom(1, 10);
  const sign = getRandom(0, 2);
  const quastion = task(`${numberOne} ${math[sign].sign} ${numberTwo}`);
  const answer = math[sign].method(numberOne, numberTwo);
  return compare(answer, Number(quastion));
};

const randomMathCycle = () => cycle(randomMath, 'What is the result of the expression?');

export default randomMathCycle;
