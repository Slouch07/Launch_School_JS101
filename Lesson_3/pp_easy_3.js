/* eslint-disable max-len */

// Q3: Write three different ways to remove all of the elements from the following array:

// let numbers = [1, 2, 3, 4];

// while (numbers.length > 0) {
//   numbers.pop();
// }

// for (let i = 4; i >= numbers.length; i -= 1) {
//   numbers.pop();
// }

// numbers.length = 0;

// numbers.splice(0, numbers.length);

// console.log(numbers);

// Q5: Can you rewrite this function so it only has one return statement and
//     does not explicitly use either true or false?

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isColorValid(color) {
//   return color === 'blue' || color === 'green';
// }

// const isColorValid = color => color === 'blue' || color === 'grean';

// const isColorValid = color => ['blue', 'green'].includes(color);