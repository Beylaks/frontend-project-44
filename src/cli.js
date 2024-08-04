import readlineSync from 'readline-sync';

const greating = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const hello = (nameOfTheGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = greating();
  console.log(`Hello, ${userName}!`);
  if (nameOfTheGame !== '') {
    console.log(nameOfTheGame);
  }
  return userName;
};

const task = (question) => {
  const sum = readlineSync.question(`Question: ${question} 
Your answer: `);
  return sum;
};

export { greating, hello, task };
