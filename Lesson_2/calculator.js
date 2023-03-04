// Set default language
const LANGUAGE = 'en';

// Load JSON config file into the program.
const MESSAGES = require('./calculator_messages.json');

// Allow input from the user to be stored for use in the program.
const readline = require('readline-sync');

// A function to select which language to use.
function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}


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
  prompt(messages('welcome', LANGUAGE));

  // Ask the user for the first number.
  prompt(messages('firstNumber', LANGUAGE));

  // Store user input in a variable.
  let num1 = readline.question();

  // Check if the first number is a valid.
  while (invalidNum(num1)) {
    prompt(messages('invalidNumber', LANGUAGE));
    num1 = readline.question();
  }

  // Ask the user for the second number.
  prompt(messages('secondNumber', LANGUAGE));

  // Store user input in a variable.
  let num2 = readline.question();

  // Check if the second number is valid.
  while (invalidNum(num2)) {
    prompt(messages('invalidNumber', LANGUAGE));
    num2 = readline.question();
  }

  // Ask user which operation to perform.
  prompt(messages('operation', LANGUAGE));

  // Store user input in a variable.
  let operation = readline.question();

  // Check that the user input 1, 2, 3, or 4 only.
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('invalidChoice', LANGUAGE));
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
  prompt(messages('result', LANGUAGE) + output);

  // Ask the user if they would like another calculation.
  prompt(messages('anotherCalc', LANGUAGE));
  let choice = readline.question();
  if (choice[0].toLowerCase() !== 'y') {
    isRunning = false;
  }
}