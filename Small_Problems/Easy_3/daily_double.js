/*
 Write a function that takes a string argument and returns a new string that
 contains the value of the original string with all consecutive duplicate
 characters collapsed into a single character.
*/

function crunch(str) {
  let newString = "";
  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] !== str[idx + 1]) {
      newString += str[idx];
    }
  }
  console.log(newString);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""