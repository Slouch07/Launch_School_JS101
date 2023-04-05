/*
Build a program that logs when the user will retire and
how many more years the user has to work until retirement.
*/

let readline = require('readline-sync');

const CURRENT_YEAR = 2023;

function prompt(message) {
  console.log(`=> ${message}`);
}

function getCurrentAge() {
  let age = readline.question();
  return age;
}

function getRetirementAge() {
  let retire = readline.question();
  return retire;
}

function getRetirementYear(currentAge, retirementAge) {
  let retirementYear = (retirementAge - currentAge) + CURRENT_YEAR;
  return retirementYear;
}

function displayWorkYearsLeft(currentAge, retirementAge) {
  let remainingYears = retirementAge - currentAge;
  return remainingYears;
}

prompt(`What is your age?`);
let currentAge = getCurrentAge();

prompt(`At what age would you like to retire?`);
let retirementAge = getRetirementAge();

let retirementYear = getRetirementYear(currentAge, retirementAge);
let yearsLeft = displayWorkYearsLeft(currentAge, retirementAge);

prompt(`It's 2023. You will retire in ${retirementYear}.`);
prompt(`You have only ${yearsLeft} years of work to go!`);