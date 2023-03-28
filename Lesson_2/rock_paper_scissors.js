// A Rock, Paper, Scissors program.

// Import 'readline-sync' to allow for user input.
const readline = require('readline-sync');

// A constant variable to store the games valid choices.
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

// A prompt function
function prompt(message) {
  console.log(`=> ${message}`);
}

// A function to display the winner.
function displayWinner (choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
        (choice === 'paper' && computerChoice === 'scissors') ||
        (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

while (true) {

  // Ask the user to select rock, paper, or scissors.
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  // Validate the user's input.
  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = readline.question();
  }

  // Generate a random choice for the computer from VALID_CHOICES.
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  // Let the user know what the choices are.
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);

  // Call the displayWinner function
  displayWinner(choice, computerChoice);

  // Ask the user if they would like to play again.
  prompt('Would you like to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
