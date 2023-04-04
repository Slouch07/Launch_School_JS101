/*
Build a program that randomly generates Teddy's age, and logs it to the console.

Have the age be a random number between 20 and 120 (inclusive).
*/

function displayAge(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let age = Math.floor((Math.random() * (max - min + 1)) + min);
  console.log(`Teddy is ${age} years old!`);
}

displayAge(20, 120);