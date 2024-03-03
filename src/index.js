import readlineSync from 'readline-sync';

const gameEngine = (gameName, rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = gameName();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('You answer: ');
    if (String(correctAnswer) === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
