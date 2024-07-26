import readlineSync from 'readline-sync';
import { getRandom, compare } from '../src/general-logic.js';
import { hello } from '../src/cli.js';

const findSameArr = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr2.includes(arr1[i])) result.push(arr1[i]);
  }
  return result;
};

const findHighestArr = (arr) => {
  const lastSimbol = arr[arr.length - 1];
  return lastSimbol;
};

const findDividers = (num) => {
  const result = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return result;
};
const gcd = (a, b) => {
  const arr1 = findDividers(a);
  const arr2 = findDividers(b);
  const sameArrs = findSameArr(arr1, arr2);
  const result = findHighestArr(sameArrs);
  return result;
};

const askGcd = (a, b) => {
  const quation = readlineSync.question(`Найди общий делитель ${a.toString()} ${b.toString()} : `);
  return quation;
};

const compareGcd = (a, b) => {
  const result = gcd(a, b);
  const answer = askGcd(a, b);
  if (compare(answer, result)) {
    console.log(`Молодец! Ответ ${result}`);
  } else {
    return false;
  }
  return true;
};

const brainGcd = () => {
  const intro = hello('Найди наибольший общий делитель');
  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandom(1, 100);
    const secondNum = getRandom(1, 100);
    if (compareGcd(firstNum, secondNum) !== true) {
      console.log(`Неверно, ответ: ${gcd(firstNum, secondNum)}`);
      break;
    }
    if (i === 2) {
      console.log(`Молодец, ты справился ${intro} !`);
    }
  }
};

export default brainGcd;
