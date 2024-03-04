import { getRandomNumber } from '../utils/randomNumber.js';

export const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const isGreatest = (randomNumberFirst, randomNumberSecond) => {
  let randomFirst = randomNumberFirst;
  let randomSecond = randomNumberSecond;
  while (randomFirst !== 0 && randomSecond !== 0) {
    if (randomFirst > randomSecond) {
      randomFirst %= randomSecond;
    } else {
      randomSecond %= randomFirst;
    }
  }
  return randomFirst + randomSecond;
};

export const gameGcd = () => {
  const numberFirst = getRandomNumber(1, 100);
  const numberSecond = getRandomNumber(1, 100);
  const question = `${numberFirst} ${numberSecond}`;
  const correctAnswer = isGreatest(numberFirst, numberSecond);

  return [question, correctAnswer];
};
