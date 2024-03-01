import readlineSync from 'readline-sync';

export const getAnswer = (question) => readlineSync.question(`${question} `);

export let userName = null;

export const gameEngine = (gameName, rules) => {
  console.log('Welcome to the Brain Games!');
  userName = getAnswer('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  let count = 0;
  for (let i = 0; i < 3; i = i + 1) {
    const [question, correctAnswer] = gameName();
    console.log(`Question: ${question}`);
    const answer = getAnswer('You answer: ');
      if (String(correctAnswer) === String(answer)) {
        console.log(`Correct!`);
        count = count + 1;
        } else { 
            console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
            return;
        };
  }
  if (count === 3) {
    return console.log(`Congratulations, ${userName}!`);
    
  }
};