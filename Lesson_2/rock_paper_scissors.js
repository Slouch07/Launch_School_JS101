/* eslint-disable max-len */

// A Rock, Paper, Scissors game written in JavaScript.

// Import 'readline-sync' to allow for user input.
const readline = require('readline-sync');

// An object to store the games valid choices.
const VALID_CHOICES = {
  r: 'rock',
  p: 'paper',
  s: 'scissors',
  l: 'lizard',
  sp: 'spock',
};

// An object to store valid answers to play again.
const VALID_ANSWERS = {
  y: 'y',
  yes: 'yes',
  n: 'n',
  no: 'no'
};

// Variables to store the scores for the user and computer.
let playerScore = 0;
let computerScore = 0;

// A function to update the score.
function updateScore(winner) {
  if (winner === 'user') {
    playerScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  } else {
    console.log('Score stays the same.');
  }
}

// A function for greeting the user to the game.
function welcomeUser() {
  let greeting = `Welcome to Rock, Paper, Scissors, Lizard, Spock!
  Rules of the game: 
  1. Select 1 of the 5 options.
  2. Your opponent (the computer) will randomly select one also.
  3. The selections will be compared to one another to determine who wins the game.
  - Rock beats Scissors/Lizard
  - Scissors beats Lizard/Paper
  - Paper beats Spock/Rock
  - Lizard beats Spock/Paper
  - Spock beats Rock/Scissors
  
  This is a best of 5 series. The first to 3 wins will be the grand winner!\n`;
  prompt(greeting);
}

// A function to check for a grand winner.
function checkScore() {
  if (playerScore === 3) {
    console.log('You are the grand winner!');
  } else if (computerScore === 3) {
    console.log('The computer is the grand winner!');
  } else {
    console.log(`Player score: ${playerScore} | Computer score: ${computerScore}`);
  }
}

// A function to display the users choices.
function displayChoices(choices) {
  for (let [key, value] of Object.entries(choices)) {
    console.log(`${key} ==> ${value}`);
  }
}

// A function to generate the computer's choice.
function getComputerChoice(obj) {
  let choiceArray = Object.keys(obj);
  let randomIndex = Math.floor(Math.random() * choiceArray.length);
  return choiceArray[randomIndex];
}

// A function to validate the user's input.
function validChoice(choice) {
  while (!VALID_CHOICES.hasOwnProperty(choice.toLowerCase())) {
    prompt("That's not a valid choice.");
    choice = readline.question();
  }
  return choice.toLowerCase();
}

// A function to get the users input.
function getUserChoice() {
  prompt('Choose one: ');
  displayChoices(VALID_CHOICES);
  return readline.question();
}

// A function to reset the scores to zero.
function scoreReset() {
  playerScore = 0;
  computerScore = 0;
}

// A function to allow user to view score, and separate rounds.
function nextRound() {
  prompt("Press 'Enter' to continue.");
  let next = readline.question();
  while (next !== "") {
    prompt("Please press 'Enter' to continue.");
    next = readline.question();
    if (next === "") {
      break;
    }
  }
  return console.clear();
}

// A function to ask the user if they want to play again.
function playAgain() {
  scoreReset();
  let choice = readline.question().toLowerCase();
  while (!VALID_ANSWERS.hasOwnProperty(choice)) {
    prompt("That's not a valid choice.");
    choice = readline.question().toLowerCase();
    if (VALID_ANSWERS.hasOwnProperty(choice)) {
      break;
    }
  }
  return choice;
}

// A prompt function
function prompt(message) {
  console.log(`=> ${message}`);
}

// A function to display the winner.
function displayWinner (choice, computerChoice) {
  if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
      (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
      (choice === 'lizard' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
      (choice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))) {
    prompt('You win!');
    return 'user';
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
    return 'tie';
  } else {
    prompt("Computer wins!");
    return 'computer';
  }
}

while (true) {
  console.clear();
  // Welcome the user to the game.
  welcomeUser();
  while (playerScore < 3 && computerScore < 3) {
    while (true) {
      // Ask the user for a selection.
      let selection = getUserChoice();

      // Validate the user's input.
      let choice = validChoice(selection);

      // Generate a random choice for the computer from VALID_CHOICES.
      let computerChoice = getComputerChoice(VALID_CHOICES);

      // Let the user know what has been chosen.
      prompt(`You chose ${VALID_CHOICES[choice]}, computer chose ${VALID_CHOICES[computerChoice]}.`);

      // Call the displayWinner function
      let winner = displayWinner(VALID_CHOICES[choice], VALID_CHOICES[computerChoice]);

      // Update the overall score for the user and computer.
      updateScore(winner);

      // Check if any score has reached 3 wins.
      checkScore();

      // Give the user time to read the scores, clear the console, and continue the game.
      nextRound();
      break;
    }
  }
  // Ask the user if they would like to play again.
  prompt('Would you like to play again (yes/no)?');
  let answer = playAgain();
  if (answer[0] !== 'y') break;
}