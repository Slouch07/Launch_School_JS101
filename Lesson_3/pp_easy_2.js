/* eslint-disable max-len */

// Q1. Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":
// let advice = "Few things in life are as important as house training your pet dinosaur.";

// console.log(advice.replace('important', 'urgent'));

// Q2: Write two distinct ways of reversing the array without mutating the original array.
//     Use reverse for the first solution, and sort for the second.

// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = numbers.slice().reverse();
// console.log(newNumbers); // [5, 4, 3, 2, 1]
// console.log(numbers); // [1, 2, 3, 4, 5]

// let nums = [1, 2, 3, 4, 5];
// let newNums = nums.slice().sort((num1, num2) => num2 - num1);
// console.log(newNums); // [ 5, 4, 3, 2, 1 ]
// console.log(nums); // [1, 2, 3, 4, 5]

// Q3: Given a number and an array, determine whether the number is included in the array.

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

// Q4: Show two different ways to put the expected "Four score and " in front of the following string.

// let famousWords = "seven years ago...";
// console.log(`Four score and ${famousWords}`);
// console.log("Four score and " + famousWords);

// // extra
// console.log("Four score and ".concat(famousWords));

// Q5: Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2,
//     so that the array becomes [1, 2, 4, 5].

// let array = [1, 2, 3, 4, 5];
// array.splice(2, 1);
// console.log(array);

// Q6: Create a new array that contains all of the values, but in an un-nested format:
// [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

// let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// let newFlintstones = flintstones.flat();
// console.log(newFlintstones);

// Q7: Create an array from this object that contains only two elements: Barney's name and Barney's number:

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// let array =  Object.entries(flintstones);

// console.log(array.filter(character => character[0] === 'Barney').flat());

// Q8: How would you check whether the objects assigned to variables numbers and table below are arrays?

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// Q9: If we have a 40-character wide table of Flintstone family members,
//     how can we center the following title above the table with spaces?

// let padding = Math.floor((40 - title.length) / 2);
// title.padStart(padding + title.length);

// Q10: Write a one-line expression to count the number of lower-case 't' characters in the following strings.

// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

// console.log(statement1.split('').filter(char => char === 't').length);
// console.log(statement2.split('').filter(char => char === 't').length);
