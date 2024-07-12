import readlineSync from 'readline-sync';

const greating = () => {
  const userName = readlineSync.question('Как вас зовут?: ');
  return userName;
};
export default greating;
