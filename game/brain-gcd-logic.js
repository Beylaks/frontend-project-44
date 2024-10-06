import putGameInCycle from '../src/general-logic.js';
import { getRandom } from '../src/utils.js';

// Нахоит пересечение в массиве делителей
const findSameDividers = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr2.includes(arr1[i])) result.push(arr1[i]);
  }
  return result;
};

// Находит наибольший делитель из масива
const findHighestDivider = (arr) => {
  const lastSimbol = arr[arr.length - 1];
  return lastSimbol;
};

// Находит Делители для числа
const findDividers = (num) => {
  const result = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return result;
};

// находит наибольший делитель для двух чисел
const findSameHgiestDivide = (firstNum, secondNum) => {
  const dividersOfFirstNum = findDividers(firstNum);
  const dividersOfSecondNum = findDividers(secondNum);
  const sameDivders = findSameDividers(dividersOfFirstNum, dividersOfSecondNum);
  const result = findHighestDivider(sameDivders);
  return result;
};

const getGcdTask = () => {
  const numberOne = getRandom(1, 100);
  const numberTwo = getRandom(1, 100);
  const trueAnswer = findSameHgiestDivide(numberOne, numberTwo);
  const quastion = `${numberOne} ${numberTwo}`;
  return [trueAnswer, quastion];
};

const startBrainGcdGame = () => putGameInCycle(getGcdTask, 'Find the greatest common divisor of given numbers.');

export default startBrainGcdGame;
