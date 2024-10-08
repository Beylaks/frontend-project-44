import readlineSync from 'readline-sync';

const greating = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};
// Приветствие перед каждой игрой
const sayHello = (nameOfTheGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = greating();
  console.log(`Hello, ${userName}!`);
  if (nameOfTheGame !== '') {
    console.log(nameOfTheGame);
  }
  return userName;
};
// Хранит в себе ответ для сравнения результатов
const askTask = (question) => {
  const sum = readlineSync.question(`Question: ${question} 
Your answer: `);
  return sum;
};

export { greating, sayHello, askTask };
