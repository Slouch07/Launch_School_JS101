/*
Write a program that will ask for user's name.
The program will then greet the user.
If the user writes "name!" then the computer yells back to the user.
*/


function greeting(name) {
  if (name.includes('!')) {
    console.log((`Hi, ${name.slice(0, -1)}. Why are we yelling!!`).toUpperCase());
  } else {
    console.log(`Hi, ${name}.`);
  }
}

let readline = require('readline-sync');
let name = readline.question('What is your name?: ');

greeting(name);
