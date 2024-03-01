import { getRandomNumber } from '../utils/randomNumber.js';

const isEven = (number) => !(number % 2);

const gameEven = () => {

  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  
  return[question, correctAnswer];
};

export default gameEven;