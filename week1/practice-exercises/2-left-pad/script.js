
/**
 ** Exercise 1: Pad numbers 
 * 
 * In this file use the padLeft function from padLeft.js to
 * pad the numbers to exactly 5 spaces and log them to the console
 * 
 * Expected output (replace the underscore with spaces):
 * 
 *  ___12;
 *  __846;
 *  ____2;
 *  _1236;
 * 
 * Tips:
 *   where to use `exports` and where `require`?
 */
const leftPad = require('left-pad')

let numbers = ["12", "846", "2", "123623"];

// YOUR CODE GOES HERE
numbers.forEach(number => {
  console.log(leftPad(number, 9, '_'));
})

