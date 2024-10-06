import putGameInCycle from '../src/general-logic.js';
import { getRandom } from '../src/utils.js';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getIsPrimeTask = () => {
  const quastion = getRandom(1, 100);
  let trueAnswer = 'yes';
  if (!isPrime(quastion)) {
    trueAnswer = 'no';
  }
  return [trueAnswer, quastion];
};

const startBrainPrimeGame = () => putGameInCycle(getIsPrimeTask, 'Answer "yes" if given number is prime. Otherwise answer "no".');

export default startBrainPrimeGame;
