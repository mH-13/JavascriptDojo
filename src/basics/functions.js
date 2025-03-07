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


// Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Expression (Arrow Function)
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
// Fetching data from an API.
// Event listeners.
// Callback functions.



// more about functions advanced functions

// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
} // hoisted to the top of the scope and can be called before the declaration. 

// Function Expression
const greet = function(name) {
  return `Hello, ${name}!`;
}; // not hoisted and must be declared before calling.  

// Arrow Function
const greet = (name) => `Hello, ${name}!`; // concise syntax for writing function expressions. 

// Anonymous Function assigned to a variable
const anonymousGreet = function() {
  return "Hello!";
}; // a function without a name. 

// Immediately Invoked Function Expression (IIFE) 
(function() {
  console.log("Hello!");
})(); // runs immediately after it's defined.

// Generator Function
function* greet() {
  yield "Hello";
  yield "World";
} // returns an iterator object.

// Async Function
async function greet() {
  return "Hello";
} // returns a promise.

// Async Arrow Function
const greet = async () => "Hello"; // returns a promise.

// Default Parameters
function greet(name = "World") {
  return `Hello, ${name}!`;
} // sets default values for function parameters.

// Rest Parameters
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
} // accepts any number of arguments as an array.

// Spread Operator
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
// spreads an array into individual elements.

// Higher-Order Function
function greet(name) {
  return `Hello, ${name}!`;
}

function greetUser(greet, name) {
  return greet(name);
} // a function that takes another function as an argument.

// Callback Function
function greet(name, callback) {
  return callback(name);
}

function sayHello(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice", sayHello)); // "Hello, Alice!"
// a function that's passed as an argument to another function.

// Return Statement
function greet(name) {
  return `Hello, ${name}!`;
} // specifies the value to be returned by the function.


//closure
// A closure is a function that has access to its own scope, the outer function's scope, and the global scope.
// A closure is created when an inner function is returned from an outer function.
// Closures can be used to createe private variables and functions., factory functions, partial functions. memoized functions. curried functions. event listeners. asynchronous code. higher-order functions. iterators and generators. modules. callbacks and promises. recursion. memoization. decorators. function composition. function currying. function chaining. function memoization.

