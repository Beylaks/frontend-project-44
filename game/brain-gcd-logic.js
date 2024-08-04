import { getRandom, compare } from '../src/general-logic.js';
import { hello, task } from '../src/cli.js';

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

const compareGcd = (a, b) => {
  const result = gcd(a, b);
  const answer = Number(task(`${a} ${b}`));
  const conditeon = compare(result, answer);
  return conditeon;
};

const brainGcd = () => {
  const intro = hello('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    if (!compareGcd(getRandom(1, 100), getRandom(1, 100))) {
      console.log(`Let's try again, ${intro}`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${intro} !`);
    }
  }
};

export default brainGcd;
