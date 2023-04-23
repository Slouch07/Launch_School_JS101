/* eslint-disable max-len */

/*
Write a function that takes a year as input and returns the century. The return
value should be a string that begins with the century number, and ends with 'st',
'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.
*/

function century(year) {
  let century = Math.ceil(year / 100);
  let ending = '';
  if ((century >= 10 && century <= 20) || century.toString().endsWith('13')) {
    ending += 'th';
  } else if (century % 10 === 1) {
    ending += 'st';
  } else if (century % 10 === 2) {
    ending += 'nd';
  } else if (century % 10 === 3) {
    ending += 'rd';
  } else {
    ending += 'th';
  }
  return century + ending;
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"