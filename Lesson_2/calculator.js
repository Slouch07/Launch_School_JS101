// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

// Allow input from the user to be stored for use in the program.
const readline = require('readline-sync');

// A function to give our messages a more distinctive look.
function prompt(message) {
  console.log(`=> ${message}`);
}

// A function to check that a valid number has been given.
function invalidNum(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

// A variable to store the status of the calculator program.
let isRunning = true;

// Main loop which will stop if the user chooses not to perform another calc.
while (isRunning) {

  // Greet the user.
  prompt('Welcome to Calculator!');

  // Ask the user for the first number.
  prompt("What's the first number?");

  // Store user input in a variable.
  let num1 = readline.question();

  // Check if the first number is a valid.
  while (invalidNum(num1)) {
    prompt("Hmm... that doesn't look like a valid number.");
    num1 = readline.question();
  }

  // Ask the user for the second number.
  prompt("What's the second number?");

  // Store user input in a variable.
  let num2 = readline.question();

  // Check if the second number is valid.
  while (invalidNum(num2)) {
    prompt("Hmm... that doesn't look like a valid number.");
    num2 = readline.question();
  }

  // Ask user which operation to perform.
  prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');

  // Store user input in a variable.
  let operation = readline.question();

  // Check that the user input 1, 2, 3, or 4 only.
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Please choose 1, 2, 3, or 4');
    operation = readline.question();
  }

  // Flow control depending on user's choice of operation.
  let output;
  switch (operation) {
    case '1':
      output = Number(num1) + Number(num2);
      break;
    case '2':
      output = Number(num1) - Number(num2);
      break;
    case '3':
      output = Number(num1) * Number(num2);
      break;
    case '4':
      output = Number(num1) / Number(num2);
      break;
  }

  // Log the result to the console.
  prompt(`The result is: ${output}`);

  prompt(`Would you like to perform another calculation? y or n`);
  let choice = readline.question();
  if (choice[0].toLowerCase() !== 'y') {
    isRunning = false;
  }
}