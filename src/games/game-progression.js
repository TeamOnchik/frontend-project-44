import { getRandomNumber } from '../utils/randomNumber.js';

const gameProgression = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const progressionLength = getRandomNumber(5, 11);
  const hideElement = getRandomNumber(0, progressionLength - 1);

  const progression = [];

  // eslint-disable-next-line no-plusplus
  for (let j = 0; j < progressionLength; j++) {
    progression.push(start + step * j);
  }

  // eslint-disable-next-line no-shadow
  function hideNumber(progression, hideElement) {
    const p = [...progression];
    p[hideElement] = '..';
    return p;
  }

  const progToShow = hideNumber(progression, hideElement).join(' ');

  const question = `${progToShow}`;

  const correctAnswer = progression[hideElement];

  return [question, correctAnswer];
};

export default gameProgression;
