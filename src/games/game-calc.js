import { getRandomNumber } from '../utils/randomNumber.js';

export const rulesOfGame = 'What is the result of the expression?';
const signs = ['+', '-', '*'];

const calculate = (firstNumber, secondNumber, sign) => {
  switch (sign) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error('Unknown operator!');
  }
};

export const gameCalc = () => {
  const operator = signs[getRandomNumber(0, signs.length - 1)];
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);

  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator).toString();
  return [question, correctAnswer];
};
