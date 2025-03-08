// Sorting in JavaScript

// JavaScript provides a built-in method called `sort()` for sorting arrays. 
// By default, the `sort()` method sorts the elements as strings in alphabetical and ascending order.

// Example of default sorting:
let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // Output: ["apple", "banana", "cherry"]

// To sort numbers correctly, you need to provide a compare function.
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// The compare function should return:
// - A negative number if `a` should come before `b`
// - Zero if `a` and `b` are equal
// - A positive number if `a` should come after `b`

// Example of sorting objects by a property:
let items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 }
];

items.sort((a, b) => a.value - b.value);
console.log(items);
// Output: 
// [
//   { name: "The", value: -12 },
//   { name: "Magnetic", value: 13 },
//   { name: "Edward", value: 21 },
//   { name: "Sharpe", value: 37 },
//   { name: "Zeros", value: 37 },
//   { name: "And", value: 45 }
// ]

// You can also sort strings in a case-insensitive manner:
let mixedCaseFruits = ["Banana", "apple", "Cherry"];
mixedCaseFruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(mixedCaseFruits); // Output: ["apple", "Banana", "Cherry"]

// The `localeCompare` method can be used for more advanced string sorting, 
// including locale-specific sorting and ignoring diacritics.