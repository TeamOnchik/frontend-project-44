import readlineSync from 'readline-sync';
import { userName } from '../src/cli.js';

export default function firstGame() {

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i = i + 1) {

  let randomNumber = Math.floor(Math.random() * 100);

  var answer = readlineSync.question(`Question: ${randomNumber}!`);

  if (randomNumber % 2 === 0) {
    switch (answer) {
      case 'yes':
        console.log(`You answer: yes\nCorrect!`);
        break;
      case 'no':
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
        break;
      default:
        console.log('Sorry. What does "' + answer + '" you said mean?');
    }

  } else if (randomNumber % 2 !== 0) {
    
    switch (answer) {
      case 'no':
        console.log(`You answer: no\nCorrect!`);
        break;
      case 'yes':
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
        break;
      default:
        console.log('Sorry. What does "' + answer + '" you said mean?');
    }
  }
}
console.log(`Congratulations, ${userName}!`);
};