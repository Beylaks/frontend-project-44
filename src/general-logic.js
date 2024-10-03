import { hello } from './cli.js';
// Рандомайзер чисел
const getRandom = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));
// Сравнивает ответы(если ответ число, не забываем добавить Number(task))
const compare = (answer, task) => {
  let i;
  if (answer === task) {
    i = true;
    console.log('Correct!');
  } else {
    i = false;
    console.log(`${task} is wrong answer ;(. Correct answer was ${answer}.`);
  }
  return i;
};
// Цикл для игры, кладём в файл с логикой или сломается!
const cycle = (game, task) => {
  const intro = hello(task);
  for (let i = 0; i < 3; i += 1) {
    if (!game()) {
      console.log(`Let's try again, ${intro}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${intro}!`);
    }
  }
};

export { getRandom, compare, cycle };
