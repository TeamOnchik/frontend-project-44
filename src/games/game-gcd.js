import { getRandomNumber } from '../utils/randomNumber.js';

const gameGcd = () => {

    let randomNumberF = getRandomNumber(1, 100);
    let randomNumberS = getRandomNumber(1, 100);
    const question = (`${randomNumberF} ${randomNumberS}`);

    while (randomNumberF != 0 & randomNumberS != 0) {
        if (randomNumberF > randomNumberS) {
            randomNumberF = randomNumberF % randomNumberS;
        } else {
            randomNumberS = randomNumberS % randomNumberF;
        }
    }

    const correctAnswer = randomNumberF + randomNumberS;
    
    return[question, correctAnswer];
  };
  
  export default gameGcd;
/*
  export default function gameGcd() {
    let count = 0;
    for (let i = 0; i < 3; i = i + 1) {
     
    let randomNumberF = getRandomNumber(1, 100);
    let randomNumberS = getRandomNumber(1, 100);
    const question = (`${randomNumberF} ${randomNumberS}`);

    console.log(`Question: ${question}`);
    let answer = getAnswer('You answer: ');

    while (randomNumberF != 0 & randomNumberS != 0) {
        if (randomNumberF > randomNumberS) {
            randomNumberF = randomNumberF % randomNumberS;
        } else {
            randomNumberS = randomNumberS % randomNumberF;
        }
    }

    const result = randomNumberF + randomNumberS;
    answer = Number(answer);

    gameEngine(result, answer, count);
}
}
*/