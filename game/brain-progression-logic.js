import { compare, cycle, getRandom } from '../src/general-logic.js';
import { task } from '../src/cli.js';

const createProgression = () => {
  const a = getRandom(1, 10);
  const b = getRandom(1, 10);
  const progressionArr = [];
  for (let i = 0; i < 10; i += 1) {
    progressionArr.push(a + b * i);
  }
  return progressionArr;
};

const cutArr = () => {
  const arr = createProgression();
  const arrNum = getRandom(0, 9);
  const arrToCut = arr;
  const hidenNum = arr[arrNum];
  arrToCut[arrNum] = '..';
  const arrStr = arr.join(' ');
  const check = task(arrStr);
  const condition = compare(hidenNum, Number(check));
  return condition;
};

const progressionCycle = () => cycle(cutArr, 'What number is missing in the progression?');

export default progressionCycle;
