import putGameInCycle from '../src/general-logic.js';
import { getRandom } from '../src/utils.js';

// Создаём случайную прогрессию
const createProgression = () => {
  const a = getRandom(1, 10);
  const b = getRandom(1, 10);
  const progressionArr = [];
  for (let i = 0; i < 10; i += 1) {
    progressionArr.push(a + b * i);
  }
  return progressionArr;
};
// Возвращяем Прогрессию и скрытое число
const getHidenNumTask = () => {
  const progression = createProgression();
  const hidenNum = getRandom(0, 9);
  const hidenNumInProgression = progression;
  const trueAnswer = progression[hidenNum];
  hidenNumInProgression[hidenNum] = '..';
  const quastion = progression.join(' ');
  return [trueAnswer, quastion];
};

const startBrainProgressionGame = () => putGameInCycle(getHidenNumTask, 'What number is missing in the progression?');

export default startBrainProgressionGame;
