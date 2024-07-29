import readlineSync from 'readline-sync';
import { compare, getRandom } from '../src/general-logic.js';
import { hello } from '../src/cli.js';

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
  let condition;
  const answer = readlineSync.question(`Вопрос: ${arrStr} 
Ответ: `);
  if (compare(hidenNum, answer)) {
    condition = true;
  } else {
    condition = false;
  }
  return condition;
};

const brainProgression = () => {
  const yourName = hello('Найди пропущенное число');
  for (let i = 0; i <= 2; i += 1) {
    const action = cutArr(createProgression());
    if (action === true) {
      console.log('Верно');
    } else {
      console.log(`Неверно ${yourName}`);
      break;
    }
    if (i === 2) {
      console.log(`Молодец, ${yourName}`);
    }
  }
};

export default brainProgression;
