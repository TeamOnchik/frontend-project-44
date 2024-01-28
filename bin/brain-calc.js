import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

export default function calcGame() {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i = i + 1) {
    const randomNumberF = Math.floor(Math.random() * 100);
    const randomNumberS = Math.floor(Math.random() * 100);
    const signs = ['+', '-', '*'];
    const randomSigns = Math.floor(Math.random() * (signs.length - 1));
    const ourSign = signs[randomSigns];
    const question = (`${randomNumberF} ${ourSign} ${randomNumberS}`);
    const result = eval(randomNumberF + ourSign + randomNumberS);

    var answer = readlineSync.question(`Question: ${question}!`);
    answer = Number(answer);
    if (answer === result) {
      console.log('You answer: ' + answer + '\nCorrect!');
      } else if (answer !== result) {
      console.log('You answer: ' + answer);
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${userName}!`);
      break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}
}