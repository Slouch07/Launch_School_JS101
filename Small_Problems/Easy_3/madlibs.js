/*
Create a simple madlib program that prompts for a noun, a verb, an adverb,
and an adjective, and injects them into a story that you create.
*/

let rlSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function getNoun() {
  return rlSync.question(prompt('Enter a noun: '));
}

function getVerb() {
  return rlSync.question(prompt('Enter a verb: '));
}

function getAdjective() {
  return rlSync.question(prompt('Enter an adjective: '));
}

function getAdverb() {
  return rlSync.question(prompt('Enter an adverb: '));
}

let noun = getNoun();
let verb = getVerb();
let adjective = getAdjective();
let adverb = getAdverb();

console.log(`Do you walk your blue dog ${adverb}? That's hilarious!`);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);
