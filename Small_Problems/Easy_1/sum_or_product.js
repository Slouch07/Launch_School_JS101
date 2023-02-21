// Write a program that asks the user to enter an integer greater than 0, 
// then asks whether the user wants to determine the sum or the product of all 
// numbers between 1 and the entered integer, inclusive.

let rlSync = require('readline-sync');

let userInt = rlSync.question("Please enter an integer greater than 0: ");
let userChoice = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (userChoice.toLowerCase() === 's') {
  let sum = 0;
  for (let s = 1; s <= userInt; s += 1) {
    sum += s; 
  }
  console.log(`The sum of the integers between 1 and ${userInt} is ${sum}.`);
} else if (userChoice.toLowerCase() === 'p') {
  let product = 1;
  for (let p = 1; p <= userInt; p += 1) {
    product *= p;
  }
  console.log(`The product of the integers between 1 and ${userInt} is ${product}.`);
}