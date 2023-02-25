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
let num1 = readline.question();

// Ask the user for the second number.
console.log("What's the second number?")

// Store user input in a variable.
let num2 = readline.question();

// Ask user which operation to perform.
console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');

// Store user input in a variable.
let operation = readline.question();

// Flow control depending on user's choice of operation.
let output;
if (operation === '1') {
  output = Number(num1) + Number(num2);
} else if (operation === '2') {
  output = Number(num1) - Number(num2);
} else if (operation === '3') {
  output = Number(num1) * Number(num2);
} else if (operation === '4') {
  output = Number(num1) / Number(num2);
} 

// Log the result to the console.
console.log(`The result is: ${output}`);