import { getRandom } from '../src/utils.js';
import putGameInCycle from '../src/general-logic.js';

const getRandomIsEvenTask = () => {
  const numForQuastion = getRandom(1, 100);
  let trueAnswer = 'yes';
  if (numForQuastion % 2 !== 0) {
    trueAnswer = 'no';
  }
  return [trueAnswer, numForQuastion];
};

const startBrainEvenGame = () => putGameInCycle(getRandomIsEvenTask, 'Answer "yes" if the number is even, otherwise answer "no"');

export default startBrainEvenGame;
