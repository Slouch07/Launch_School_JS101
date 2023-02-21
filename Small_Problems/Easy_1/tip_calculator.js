// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. 
// The program must compute the tip, and then log both the tip and the total amount of the bill to the console.

let rlSync = require('readline-sync');

let billAmt = Number(rlSync.question("What is the bill total?: "));
let tipPercentage = Number(rlSync.question("What percent would you like to tip?: "));

let tipAmt = billAmt * (tipPercentage / 100);
let billTotal = (billAmt + tipAmt);

console.log(`The tip is $${tipAmt.toFixed(2)}`);
console.log(`The total is $${billTotal.toFixed(2)}`);