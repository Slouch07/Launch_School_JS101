/* eslint-disable max-len */
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

// A function to greet the user.
function greeting(str) {
  prompt(messages(str));
}

// A function to get a valid loan amount from the user.
function getLoanAmount() {
  let loanAmnt = readline.question();
  while (invalidNum(loanAmnt) || loanAmnt <= 0) {
    prompt(messages('invalidNumber'));
    loanAmnt = readline.question();
  }
  return loanAmnt;
}

// A function to get a valid loan APR from the user.
function getAPR() {
  let annualPercentRate = readline.question();
  while (invalidNum(annualPercentRate) || annualPercentRate <= 0) {
    prompt(messages('invalidNumber'));
    annualPercentRate = readline.question();
  }
  return annualPercentRate;
}

// A function to get a valid loan duration from the user.
function getLoanDuration() {
  let loanInYrs = readline.question();
  while (invalidNum(loanInYrs) || loanInYrs <= 0) {
    prompt(messages('invalidNumber'));
    loanInYrs = readline.question();
  }
  return loanInYrs;
}

// A function to calculate the monthly payment on the loan.
function monthlyPayment(loan, apr, duration) {
  let monthlyInt = (apr / 100) / 12;
  let loanInMnths = duration * 12;
  let payment = loan * (monthlyInt / (1 - Math.pow((1 + monthlyInt), (-loanInMnths))));
  return payment;
}

// A function to report the monthly payment to the user.
function reportPayment(string, payment) {
  prompt(messages(string) + "$" + Number(payment).toFixed(2));
}

// A function to get the user's decision to use the calculator again.
function anotherCalc() {
  let choice = readline.question().toLowerCase();
  while (choice !== 'yes' && choice !== 'no') {
    prompt(messages('invalidChoice'));
    choice = readline.question().toLowerCase();
    if (choice === 'yes' || choice === 'no') {
      break;
    }
  }
  return choice;
}

// A function to say good bye to the user.
function farewell() {
  console.clear();
  prompt(messages('farewell'));
}

// A variable to store the status of the calculator program.
let isRunning = true;

// // Main loop which will stop if the user chooses not to perform another calc.
while (isRunning) {

  // Clear the console.
  console.clear();

  // Greet the user.
  greeting('welcome');

  // Ask the user for the amount of the loan and store it in a variable.
  prompt(messages('loanAmnt'));
  let loanAmount = getLoanAmount();
  console.clear();

  // Ask the user for the APR on the loan.
  prompt(messages('annualPercentRate'));
  let apr = getAPR();
  console.clear();

  // Ask the user for the loan duration in years.
  prompt(messages('loanDuration'));
  let loanLength = getLoanDuration();
  console.clear();

  // Calculate the monthly payment and store the value.
  let payment = monthlyPayment(loanAmount, apr, loanLength);

  // Log the result to the console.
  reportPayment('pay', payment);

  // Ask the user if they would like another calculation.
  prompt(messages('anotherCalc'));
  let answer = anotherCalc();

  // If the user says no, terminate the program.
  if (answer === 'no') {
    isRunning = false;
  }

  // Say good bye to the user.
  farewell();
}