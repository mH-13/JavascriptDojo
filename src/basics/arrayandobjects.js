// Arrays in JavaScript
// Arrays are used to store multiple values in a single variable.

let fruits = ["Apple", "Banana", "Mango"];

// Accessing array elements
console.log(fruits[0]); // Output: Apple

// Array Methods:

// 1. push() - Adds one or more elements to the end of an array and returns the new length of the array.
fruits.push("Orange");
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]

// 2. pop() - Removes the last element from an array and returns that element.
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: Orange
console.log(fruits); // Output: ["Apple", "Banana", "Mango"]

// 3. shift() - Removes the first element from an array and returns that element.
let firstFruit = fruits.shift();
console.log(firstFruit); // Output: Apple
console.log(fruits); // Output: ["Banana", "Mango"]

// 4. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift("Strawberry");
console.log(fruits); // Output: ["Strawberry", "Banana", "Mango"]

// 5. map() - Creates a new array with the results of calling a provided function on every element in the calling array.
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits); // Output: ["STRAWBERRY", "BANANA", "MANGO"]

// 6. filter() - Creates a new array with all elements that pass the test implemented by the provided function.
let longNamedFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longNamedFruits); // Output: ["Strawberry", "Banana"]

// 7. reduce() - Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
let totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0);
console.log(totalLength); // Output: 17

// Objects in JavaScript
// Objects are used to store collections of data and more complex entities.

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["reading", "gaming", "coding"]
};

// Accessing object properties
console.log(person.firstName); // Output: John
console.log(person["lastName"]); // Output: Doe

// Adding new properties
person.gender = "male";
console.log(person.gender); // Output: male

// Deleting properties
delete person.age;
console.log(person.age); // Output: undefined

// Object Methods:

// 1. Object.keys() - Returns an array of a given object's own enumerable property names.
let keys = Object.keys(person);
console.log(keys); // Output: ["firstName", "lastName", "hobbies", "gender"]

// 2. Object.values() - Returns an array of a given object's own enumerable property values.
let values = Object.values(person);
console.log(values); // Output: ["John", "Doe", ["reading", "gaming", "coding"], "male"]

// 3. Object.entries() - Returns an array of a given object's own enumerable property [key, value] pairs.
let entries = Object.entries(person);
console.log(entries); // Output: [["firstName", "John"], ["lastName", "Doe"], ["hobbies", ["reading", "gaming", "coding"]], ["gender", "male"]]

// 4. hasOwnProperty() - Returns a boolean indicating whether the object has the specified property as its own property.
console.log(person.hasOwnProperty("firstName")); // Output: true
console.log(person.hasOwnProperty("age")); // Output: false


// Arrays
let numbers = [1, 2, 3];
numbers.push(4);           // [1, 2, 3, 4]
let doubled = numbers.map(n => n * 2);  // [2, 4, 6, 8]
let evens = numbers.filter(n => n % 2 === 0);  // [2, 4]
let sum = numbers.reduce((acc, n) => acc + n, 0);  // 10

// Objects
let person = { name: "John", age: 25 };
console.log(person.name);  // "John"
console.log(Object.keys(person));  // ["name", "age"]




// Object literal
const user = {
  name: "Alice",
  age: 25,
  isAdmin: false,
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
};

console.log(user.name); // "Alice"
user.greet(); // "Hello, Alice!"

// Modify properties
user.age = 26;


// # Objects
// - Store **key-value pairs**.
// - Use `this` to access object properties internally.
// - Methods: Functions inside objects.




// Array declaration
const fruits2 = ["apple", "banana", "mango"];

// Common methods
fruits2.push("orange"); // Add to end
fruits2.pop(); // Remove from end
fruits2.map(fruit => fruit.toUpperCase()); // ["APPLE", "BANANA", "MANGO"]

// Filtering
const numbers2 = [1, 2, 3, 4];
const evenNumbers = numbers2.filter(num => num % 2 === 0); // [2, 4]


// # Arrays
// - **Methods**: `push()`, `pop()`, `map()`, `filter()`, `reduce()`.
// - `map()`: Transform elements.
// - `filter()`: Return subset based on condition.