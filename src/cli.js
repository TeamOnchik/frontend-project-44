
import readlineSync from 'readline-sync';

export default function greetingsOfUser() {

//var readlineSync = require('readline-sync');

// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');

return console.log('Hello, ' + userName + '!');

};