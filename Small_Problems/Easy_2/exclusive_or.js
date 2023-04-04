/*
Write a function named xor that takes two arguments, and returns true if
exactly one of its arguments is truthy, false otherwise.
*/

function xor(arg1, arg2) {
  if ((arg1 || arg2) && (arg1 !== arg2)) {
    return true;
  }
  return false;
}


console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor('', 'true') === true);    // true
console.log(xor('', 0) === false);        // true
console.log(xor('', '') === false);       // true