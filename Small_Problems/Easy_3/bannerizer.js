/* eslint-disable max-len */

// Write a function that will take a short line of text, and write it to the console log within a box.

function logInBox(text) {
  console.log(`+${'-'.repeat(text.length + 2)}+`);
  console.log(`|${' '.repeat(text.length + 2)}|`);
  console.log(`| ${text} |`);
  console.log(`|${' '.repeat(text.length + 2)}|`);
  console.log(`+${'-'.repeat(text.length + 2)}+`);
}

logInBox('Who let the dogs out!!');

