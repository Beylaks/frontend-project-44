import readlineSync from 'readline-sync';
import { getRandom } from '../src/general-logic.js';
import { hello } from '../src/cli.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const askPrime = () => {
  const num = getRandom(1, 100);
  const answer = readlineSync.question(`Вопрос: ${num}
Ответ: `);
  let conditeon;
  if (answer === 'Yes' && isPrime(num) === true) {
    conditeon = true;
  } else if (answer === 'No' && isPrime(num) === false) {
    conditeon = true;
  } else {
    conditeon = false;
  }
  return conditeon;
};

const brainPrime = () => {
  const yourName = hello('Ответ "Да" если число простое "Yes" если No');
  for (let i = 0; i <= 2; i += 1) {
    const action = askPrime();
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

export default brainPrime;
