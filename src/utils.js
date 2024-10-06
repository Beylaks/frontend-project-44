// Рандомайзер чисел
const getRandom = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));
// Сравнивает ответы(если ответ число, не забываем добавить Number(task))
const compare = (trueAnswer, playerAnswer) => {
  let i;
  if (trueAnswer === playerAnswer) {
    i = true;
    console.log('Correct!');
  } else {
    i = false;
    console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.`);
  }
  return i;
};

export { getRandom, compare };
