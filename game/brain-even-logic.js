import readlineSync from 'readline-sync';
import userName from '../bin/brain-games.js';

const getRandom = (min, max) => (Math.round(min - 0.5 + Math.random() * (max - min + 1))
);

const isEven = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandom(1, 100);
    const answer = readlineSync.question(`Чётное или нет: ${randomNumber} `);
    if (randomNumber % 2 === 0 && answer === 'да') {
      console.log('Правильно!');
      if (i === 2) {
        console.log(`Поздравляю ${userName}, вы гений!`);
      }
    } else if (randomNumber % 2 === 1 && answer === 'нет') {
      console.log('Правильно!');
      if (i === 2) {
        console.log(`Поздравляю ${userName}, вы гений!`);
      }
    } else {
      console.log(`давай попробуем ещё раз ${userName}`);
      break;
    }
  }
};
export default isEven;
