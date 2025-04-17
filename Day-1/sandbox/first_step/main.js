// main.js - Using our math module

// Import the math functions
const math = require('./math.js');

// Use each function and log the results
console.log(`Sum: 5 + 3 = ${math.sum(5, 3)}`);
console.log(`Difference: 5 - 3 = ${math.diff(5, 3)}`);
console.log(`Product: 5 * 3 = ${math.prod(5, 3)}`);
console.log(`Quotient: 5 / 3 = ${math.quot(5, 3)}`);