/**
 * This function takes two numbers as arguments and returns their sum.
 *
 * @param {number} a - The first number to be added.
 * @param {number} b - The second number to be added.
 * @returns {number} The sum of the two numbers.
 *
 * @example
 * // returns 5
 * add(2, 3);
 *
 * @example
 * // returns 10
 * add(7, 3);
 *
 * @throws {TypeError} If either argument is not a number.
 */
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  return a + b;
}


// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function Expression (Arrow Function)
const add = (a, b) => a + b;

console.log(greet("Bob")); // "Hello, Bob!"
console.log(add(2, 3)); // 5


// # Functions
// - **Declaration**: Hoisted (can be called before declaration).
// - **Expression**: Not hoisted; arrow functions are concise.



//    Types:
// Declaration: function name() {}
// Expression: const name = function() {}
// Arrow: const name = () => {}
// Anonymous: function() {}
// IIFE: (function() {})()
// Generator: function* name() {}
// Async: async function name() {}
// Async Arrow: const name = async () => {}
//
//    Arguments:
// Default: (a = 1)
// Rest: (...args)
// Spread: ...args  (function(...args) {})  (fn(...[1, 2, 3]))  (fn(1, 2, 3))

//      Features:
// Parameters, default values, rest parameters.
// Return statements.
// Callback functions. (Higher-order functions) (fn(fn2)) (fn(() => {})) (fn((a, b) => a + b)) (fn((a, b) => { return a + b; })) (fn(function() {})) (fn(function(a, b) { return a + b; })) (fn(function(a, b) { return a + b; }))   

// Function Declaration
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));    // 5

// Arrow Function
const multiply = (a, b = 2) => a * b;  // Default parameter
console.log(multiply(3));  // 6

// Rest Parameters
const sumAll = (...numbers) => numbers.reduce((sum, n) => sum + n, 0); // Rest parameter (array) 
// reduce() method reduces the array to a single value.
// sum: accumulator, n: current value, 0: initial value
// sum + n: sum of accumulator and current value
// 0: initial value of the accumulator
// sum + n: sum of accumulator and current value

console.log(sumAll(1, 2, 3, 4));  // 10

// Use Cases:
// Reusable logic (e.g., calculating totals).
// Handling button clicks in your project.