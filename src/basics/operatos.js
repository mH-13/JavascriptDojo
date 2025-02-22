/**
 * JavaScript Operators and Expressions
 * 
 * Operators are used to perform operations on variables and values.
 * Expressions are combinations of values, variables, and operators that compute to a value.
 */

// Arithmetic: +, -, *, /, % (modulus).
// Comparison: == (loose), === (strict), !=, !==, >, <.
// Logical: && (and), || (or), ! (not).

// 1. Arithmetic Operators
let a = 10;
let b = 5;

console.log(a + b); // Addition: 15
console.log(a - b); // Subtraction: 5
console.log(a * b); // Multiplication: 50
console.log(a / b); // Division: 2
console.log(a % b); // Modulus (Remainder): 0
console.log(a ** b); // Exponentiation: 100000

// 2. Assignment Operators
let x = 10;
x += 5; // Equivalent to x = x + 5
console.log(x); // 15

x -= 3; // Equivalent to x = x - 3
console.log(x); // 12

x *= 2; // Equivalent to x = x * 2
console.log(x); // 24

x /= 4; // Equivalent to x = x / 4
console.log(x); // 6

x %= 2; // Equivalent to x = x % 2
console.log(x); // 0

// 3. Comparison Operators
let y = 10;
let z = 20;

console.log(y == z); // Equal to: false
console.log(y != z); // Not equal to: true
console.log(y === 10); // Strict equal to: true
console.log(y !== '10'); // Strict not equal to: true
console.log(y > z); // Greater than: false
console.log(y < z); // Less than: true
console.log(y >= 10); // Greater than or equal to: true
console.log(y <= 5); // Less than or equal to: false

// 4. Logical Operators
let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse); // Logical AND: false
console.log(isTrue || isFalse); // Logical OR: true
console.log(!isTrue); // Logical NOT: false

// 5. Bitwise Operators
let m = 5; // 0101 in binary
let n = 3; // 0011 in binary

console.log(m & n); // Bitwise AND: 1 (0001 in binary)
console.log(m | n); // Bitwise OR: 7 (0111 in binary)
console.log(m ^ n); // Bitwise XOR: 6 (0110 in binary)
console.log(~m); // Bitwise NOT: -6 (inverts all bits)
console.log(m << 1); // Left shift: 10 (1010 in binary)
console.log(m >> 1); // Right shift: 2 (0010 in binary)

// 6. Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Yes

// 7. Typeof Operator
console.log(typeof 42); // number
console.log(typeof 'hello'); // string
console.log(typeof true); // boolean
console.log(typeof {}); // object
console.log(typeof undefined); // undefined
console.log(typeof null); // object (this is a known JavaScript quirk)
console.log(typeof function(){}); // function

// 8. Instanceof Operator
let arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true
console.log(arr instanceof String); // false

// 9. Comma Operator
let p = (1, 2, 3);
console.log(p); // 3 (returns the last value)