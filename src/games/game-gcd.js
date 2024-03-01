import { getRandomNumber } from '../utils/randomNumber.js';

const gameGcd = () => {
  let randomNumberF = getRandomNumber(1, 100);
  let randomNumberS = getRandomNumber(1, 100);
  const question = (`${randomNumberF} ${randomNumberS}`);

  while (randomNumberF !== 0 && randomNumberS !== 0) {
    if (randomNumberF > randomNumberS) {
      // eslint-disable-next-line operator-assignment
      randomNumberF = randomNumberF % randomNumberS;
    } else {
      // eslint-disable-next-line operator-assignment
      randomNumberS = randomNumberS % randomNumberF;
    }
  }

  const correctAnswer = randomNumberF + randomNumberS;

  return [question, correctAnswer];
};

export default gameGcd;
