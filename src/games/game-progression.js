import { getRandomNumber } from '../utils/randomNumber.js';

export const rulesOfGame = 'What number is missing in the progression?';

const generateProgression = (start, step, progressionLength) => {
  const progression = [];
  for (let j = 0; j < progressionLength; j += 1) {
    progression.push(start + step * j);
  }
  return progression;
};

export const gameProgression = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 11);
  const hiddenIndexOfElement = getRandomNumber(0, progressionLength - 1);
  const progressionArray = generateProgression(start, step, progressionLength);

  const progressionWithHiddenElement = [...progressionArray];
  progressionWithHiddenElement[hiddenIndexOfElement] = '..';
  const question = progressionWithHiddenElement.join(' ');

  const correctAnswer = progressionArray[hiddenIndexOfElement];

  return [question, correctAnswer];
};
