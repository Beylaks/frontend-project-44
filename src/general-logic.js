import { sayHello, askTask } from './cli.js';
import { compare } from './utils.js';

// Цикл для игры, кладём в файл с логикой или сломается!
const putGameInCycle = (game, nameOfTask) => {
  const intro = sayHello(nameOfTask);
  for (let i = 0; i < 3; i += 1) {
    const quastionAndAnswer = game();
    const trueAnswer = quastionAndAnswer[0];
    const quastion = quastionAndAnswer[1];
    let playerAnswer = askTask(quastion);
    if (typeof trueAnswer !== typeof playerAnswer) {
      playerAnswer = Number(playerAnswer);
    }
    if (!compare(trueAnswer, playerAnswer)) {
      console.log(`Let's try again, ${intro}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${intro}!`);
    }
  }
};

export default putGameInCycle;
