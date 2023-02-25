// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

// Allow input from the user to be stored for use in the program with readline-sync.
const readline = require('readline-sync');

// Greet the user.
console.log('Welcome to Calculator!');

// Ask the user for the first number.
console.log("What's the first number?")
// Store user input in a variable.
let firstNum = readline.question();

console.log(firstNum);