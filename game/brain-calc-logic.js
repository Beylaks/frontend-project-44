import readlineSync from 'readline-sync';
import { getRandom, compare } from '../src/general-logic.js';
import { hello } from '../src/cli.js';

const sum = (a, b) => {
  const quation = readlineSync.question(`${a.toString()} + ${b.toString()} : `);
  return quation;
};

const min = (a, b) => {
  const quation = readlineSync.question(`${a.toString()} - ${b.toString()} : `);
  return quation;
};

const mult = (a, b) => {
  const quation = readlineSync.question(`${a.toString()} * ${b.toString()} : `);
  return quation;
};

const mathSum = (a, b) => {
  const result = a + b;
  const answer = sum(a, b);
  if (compare(answer, result)) {
    console.log(`Молодец! Ответ ${result}`);
  } else {
    return false;
  }
  return true;
};

const mathMinus = (a, b) => {
  const result = a - b;
  const answer = min(a, b);
  if (compare(answer, result)) {
    console.log(`Молодец! Ответ ${result}`);
  } else {
    return false;
  }
  return true;
};

const mathMult = (a, b) => {
  const result = a * b;
  const answer = mult(a, b);
  if (compare(answer, result)) {
    console.log(`Молодец! Ответ ${result}`);
  } else {
    return false;
  }
  return true;
};

const randomMath = (a, b) => {
  const status = getRandom(1, 3);
  switch (status) {
    case 1:
      return mathSum(a, b);
    case 2:
      return mathMinus(a, b);
    case 3:
      return mathMult(a, b);
    default:
      return null;
  }
};

const repTasks = () => {
  const intro = hello('Каков результат данного выражения?');
  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandom(1, 100);
    const secondNum = getRandom(1, 100);
    if (randomMath(firstNum, secondNum) !== true) {
      console.log('Неверно, попробуё ещё раз!');
      break;
    }
    if (i === 2) {
      console.log(`Молодец, ты справился ${intro} !`);
    }
  }
};

export default repTasks;
