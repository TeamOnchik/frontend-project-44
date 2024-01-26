
import readlineSync from 'readline-sync';

export var userName;

export default function greetingsOfUser() {

userName = readlineSync.question('May I have your name? ');

return console.log('Hello, ' + userName + '!');

};