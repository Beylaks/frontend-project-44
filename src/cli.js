import readlineSync from 'readline-sync';

const greating = () => {
  const userName = readlineSync.question('Как вас зовут?: ');
  return userName;
};

const hello = (nameOfTheGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = greating();
  console.log(`Привет, ${userName}`);
  console.log(nameOfTheGame);
  return userName;
};

export { greating, hello };
