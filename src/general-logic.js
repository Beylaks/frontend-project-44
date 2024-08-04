const getRandom = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

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

export { getRandom, compare };
