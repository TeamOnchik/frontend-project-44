import { getRandomNumber } from '../utils/randomNumber.js';

function isPrime(num) {
  // eslint-disable-next-line no-plusplus
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

const gamePrime = () => {
  const question = getRandomNumber(2, 101);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default gamePrime;
