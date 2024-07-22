const getRandom = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

const compare = (answer, task) => {
  let b;
  if (answer - task === 0) {
    b = true;
  } else {
    b = false;
  }
  return b;
};

export { getRandom, compare };
