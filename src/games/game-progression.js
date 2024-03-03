import { getRandomNumber } from '../utils/randomNumber.js';

export const rulesOfGame = 'What number is missing in the progression?';

const hideNumber = (progression, hideElement) => {
  const p = [...progression];
  p[hideElement] = '..';
  return p;
};

const generateProgression = (progression, start, step, progressionLength) => {
  for (let j = 0; j < progressionLength; j += 1) {
    progression.push(start + step * j);
  }
  return progression;
};

export const gameProgression = () => {
  const progression = [];
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 11);
  const hideElement = getRandomNumber(0, progressionLength - 1);
  const progressionArray = generateProgression(progression, start, step, progressionLength);

  const question = hideNumber(progressionArray, hideElement).join(' ');

  const correctAnswer = progression[hideElement];

  return [question, correctAnswer];
};
