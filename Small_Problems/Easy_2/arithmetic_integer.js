/*
Write a program that prompts the user for two positive integers,
and then prints the results of the following operations on those two numbers:
addition, subtraction, product, quotient, remainder, and power.

Do not worry about validating the input.
*/

let readline = require('readline-sync');

function prompt(message) {
  console.log(`==> ${message}`);
}

function addition(num1, num2) {
  let sum = Number(num1) + Number(num2);
  return prompt(`${num1} + ${num2} = ${sum}`);
}

function subtraction(num1, num2) {
  let difference = Number(num1) - Number(num2);
  return prompt(`${num1} - ${num2} = ${difference}`);
}

function multiply(num1, num2) {
  let product = Number(num1) * Number(num2);
  return prompt(`${num1} * ${num2} = ${product}`);
}

function divide(num1, num2) {
  let quotient = Number(num1) / Number(num2);
  return prompt(`${num1} / ${num2} = ${Math.floor(quotient)}`);
}

function remainder(num1, num2) {
  let remains = Number(num1) % Number(num2);
  return prompt(`${num1} % ${num2} = ${remains}`);
}

function exponent(num1, num2) {
  let power = Number(num1) ** Number(num2);
  return prompt(`${num1} ** ${num2} = ${power}`);
}

let num1 = readline.question(prompt('Enter the first number: '));
let num2 = readline.question(prompt('Enter the second number: '));

console.log(addition(num1, num2));
console.log(subtraction(num1, num2));
console.log(multiply(num1, num2));
console.log(divide(num1, num2));
console.log(remainder(num1, num2));
console.log(exponent(num1, num2));

