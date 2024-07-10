import readlineSync from "readline-sync";

const greating = () => {
  const userName = readlineSync.question("Как тебя зовут?: ");
  return userName;
};
export default greating;
