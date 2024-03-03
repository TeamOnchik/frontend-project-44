import { getRandomNumber } from '../utils/randomNumber.js';

export const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => !(number % 2);

export const gameEven = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
