import putGameInCycle from '../src/general-logic.js';
import { getRandom } from '../src/utils.js';

// Хранит в себе случайное выражение
const randomMathSign = [{
  sign: '+',
  method: (n1, n2) => n1 + n2,
}, {
  sign: '-',
  method: (n1, n2) => n1 - n2,
}, {
  sign: '*',
  method: (n1, n2) => n1 * n2,
}];

const getRandomMathTask = () => {
  const numberOne = getRandom(1, 10);
  const numberTwo = getRandom(1, 10);
  const sign = getRandom(0, 2);
  const quastion = `${numberOne} ${randomMathSign[sign].sign} ${numberTwo}`;
  const trueAnswer = randomMathSign[sign].method(numberOne, numberTwo);
  return [trueAnswer, quastion];
};

const startBrainCalcGame = () => putGameInCycle(getRandomMathTask, 'What is the result of the expression?');

export default startBrainCalcGame;
