import { compare, getRandom } from '../src/general-logic.js';
import { hello, task } from '../src/cli.js';

const createProgression = () => {
  const a = getRandom(1, 10);
  const b = getRandom(1, 10);
  const progressionArr = [];
  for (let i = 0; i < 10; i += 1) {
    progressionArr.push(a + b * i);
  }
  return progressionArr;
};

const cutArr = (arr) => {
  const arrNum = getRandom(1, 10);
  const arrToCut = arr;
  const hidenNum = arr[arrNum];
  arrToCut[arrNum] = '..';
  const arrStr = arr.join();
  const check = task(arrStr);
  const condition = compare(hidenNum, Number(check));
  return condition;
};

const brainProgression = () => {
  const intro = hello('What number is missing in the progression?');
  for (let i = 0; i <= 2; i += 1) {
    if (!cutArr(createProgression())) {
      console.log(`Let's try again, ${intro}`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${intro} !`);
    }
  }
};

export default brainProgression;
