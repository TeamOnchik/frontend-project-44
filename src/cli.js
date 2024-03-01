import readlineSync from 'readline-sync';

const userName = () => {
  console.log('Welcome to the Brain Games!');
  const askName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${askName}!`);
};
export default userName;
