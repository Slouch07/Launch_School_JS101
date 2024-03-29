/*
Write a function that takes a non-empty string argument and returns the middle
character(s) of the string.

If the string has an odd length, you should return exactly one character.

If the string has an even length, you should return exactly two characters.
*/

function centerOf(string) {
  let middleChar = Math.floor(string.length / 2);
  if (string.length % 2 === 1) {
    console.log(string[middleChar]);
  } else {
    console.log(string.slice(middleChar - 1, middleChar + 1));
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"