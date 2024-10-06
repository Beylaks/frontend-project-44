import { sayHello, askTask } from './cli.js';
import { compare } from './utils.js';

// Цикл для игры, кладём в файл с логикой или сломается!
const putGameInCycle = (game, nameOfTask) => {
  const intro = sayHello(nameOfTask);
  const countOfiterations = 3;
  for (let i = 1; i <= countOfiterations; i += 1) {
    const [trueAnswer, quastion] = game();
    let playerAnswer = askTask(quastion);
    if (typeof trueAnswer !== typeof playerAnswer) {
      playerAnswer = Number(playerAnswer);
    }
    if (!compare(trueAnswer, playerAnswer)) {
      console.log(`Let's try again, ${intro}!`);
      return;
    }
    if (i === countOfiterations) {
      console.log(`Congratulations, ${intro}!`);
    }
  }
};

export default putGameInCycle;
