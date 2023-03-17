// A loan calculator program.

// Load JSON config file into the program.
const MESSAGES = require('./loan_calc_messages.json');

// Allow input from the user to be stored for use in the program.
const readline = require('readline-sync');

// A function to select our message prompts from the json file.
function messages(message) {
  return MESSAGES[message];
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

// // Main loop which will stop if the user chooses not to perform another calc.
while (isRunning) {

  // Greet the user.
  prompt(messages('welcome'));

  // Ask the user for the amount of the loan and store it in a variable.
  prompt('Enter the loan amount: ');
  let loanAmnt = readline.question();

  // Check if the the loanAmount is a valid number.
  while (invalidNum(loanAmnt)) {
    prompt(messages('invalidNumber'));
    loanAmnt = readline.question();
  }

  // Ask the user for the APR on the loan.
  prompt('Enter a loan APR greater than 0% (Example: 5 = 5%): ');
  let annualPercentRate = readline.question();

  while (invalidNum(annualPercentRate) || annualPercentRate <= 0) {
    prompt(messages('invalidNumber'));
    annualPercentRate = readline.question();
  }

  // Ask the user for the loan duration in years.
  prompt('Enter the loan duration (Years): ');
  let loanInYrs = readline.question();

  while (invalidNum(loanInYrs)) {
    prompt(messages('invalidNumber'));
    loanInYrs = readline.question();
  }

  // Calculate monthly interest rate.
  let monthlyInt = (annualPercentRate / 100) / 12;

  // Calculate loan duration in months.
  let loanInMnths = loanInYrs * 12;

  // Calculate monthly payment.
  // eslint-disable-next-line max-len
  let payment = loanAmnt * (monthlyInt / (1 - Math.pow((1 + monthlyInt), (-loanInMnths))));

  // Log the result to the console.
  prompt(messages('pay') + "$" + Number(payment).toFixed(2));

  // Ask the user if they would like another calculation.
  prompt(messages('anotherCalc'));
  let choice = readline.question().toLowerCase();
  while (choice[0] !== 'y' && choice[0] !== 'n') {
    console.log("Please enter 'y' or 'n'.");
    choice = readline.question().toLowerCase();
    if (choice[0] === 'y') {
      break;
    } else if (choice[0] === 'n') {
      isRunning = false;
    }
  }
  console.log('Good Bye!');
}