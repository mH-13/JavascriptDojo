// Variables in JavaScript

// 1. var:   The `var` keyword declares a variable, optionally initializing it to a value.
// `var` are function-scoped or globally-scoped if declared outside a function. And can be re-declared and updated.

var name = "Mehedi";
console.log(name); // Mehedi

// Re-declaring and updating
var name = "Mehedi Hasan";
console.log(name); // Mehedi Hasan

// 2. let:   `let` keyword declares a block-scoped variable, it can be updated but not re-declared within the same scope.

let age = 30;
console.log(age); // 30

// Updating
age = 31;
console.log(age); // 31

// Block scope
if (true) {
  let age = 25;
  console.log(age); //25 (inside block)
}
console.log(age); // 31 (outside block)

// 3. const:   The `const` keyword declares a block-scoped variable, it cannot be updated or re-declared.

const birthYear = 1990;
console.log(birthYear); // 1990

// Attempting to update or re-declare will result in an error
// birthYear = 1991; // Error: Assignment to constant variable
// const birthYear = 1992; // Error: Identifier 'birthYear' has already been declared

// Use cases

// 1. Using `var` for function-scoped variables
function greet() {
  var greeting = "Hello, World!";
  console.log(greeting);
}
greet(); // Hello, World!

// 2. Using `let` for block-scoped variables
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
// console.log(i); // Error: i is not defined

// 3. Using `const` for constants or values that should not change
const PI = 3.14159;
console.log(PI); // 3.14159

// Objects and arrays declared with `const` can have their contents modified
const person = {
  name: "Alice",
  age: 25
};
person.age = 26; // Allowed
console.log(person); // { name: 'Alice', age: 26 }

const numbers = [1, 2, 3];
numbers.push(4); // Allowed
console.log(numbers); // [1, 2, 3, 4]

// Variables: let (mutable), const (immutable)
let agee = 25;
const PII = 3.14;

// Data Types: string, number, boolean, null, undefined, object
let name = "Alice";
let isStudent = true;
let score = null;
let x; // undefined


// Variables and Data Types
let name1 = "John";         // String: user’s name
const age1 = 25;            // Number: fixed value
var isStudent1 = true;      // Boolean: true/false flag
let person1 = {             // Object: structured data
  name: "John",
  age: 25
};
let numbers1 = [1, 2, 3];   // Array: list of items

console.log(name1);         // "John"
console.log(person1.age);   // 25
console.log(numbers1[0]);   // 1