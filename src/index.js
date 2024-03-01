import readlineSync from 'readline-sync';

export const getAnswer = (question) => readlineSync.question(`${question} `);

// eslint-disable-next-line import/no-mutable-exports
export let userName = null;

export const gameEngine = (gameName, rules) => {
  console.log('Welcome to the Brain Games!');
  userName = getAnswer('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = gameName();
    console.log(`Question: ${question}`);
    const answer = getAnswer('You answer: ');
    if (String(correctAnswer) === String(answer)) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  if (count === 3) {
    // eslint-disable-next-line consistent-return
    return console.log(`Congratulations, ${userName}!`);
  }
};
