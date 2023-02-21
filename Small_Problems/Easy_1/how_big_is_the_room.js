// Build a program that asks the user to enter the length and width of a room in meters, 
// and then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

let rlSync = require('readline-sync');

let roomLength = rlSync.question("What is the length of the room in meters?: ");
let roomWidth = rlSync.question("What is the width of the room in meters?: ");

let squareMeters = roomLength * roomWidth; 
let squareFeet = (roomLength * roomWidth) * 10.7369;

console.log(`The area of the room is ${squareMeters} square meters, or ${squareFeet} square feet.`);

// Further Exploration

// let rlSync = require('readline-sync');

// let measurement = rlSync.question("Would you like to calculate the room in meters or feet?: ");
// let roomLength = rlSync.question("What is the length of the room?: ");
// let roomWidth = rlSync.question("What is the width of the room?: ");

// if (measurement.toLowerCase() === 'meters') {
//   let squareMeters = roomLength * roomWidth;
//   console.log(`The area of the room is ${squareMeters} square meters.`);
// } else if (measurement.toLowerCase() === 'feet') {
//   let squareFeet = (roomLength * roomWidth);
//   console.log(`The area of the room is ${squareFeet} square feet.`);
// } else {
//   console.log('Not a valid input.');
// }