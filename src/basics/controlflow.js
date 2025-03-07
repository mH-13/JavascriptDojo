// Control Flow in JavaScript

//    Conditionals:
// if, else if, else for decisions.
// switch for multiple cases.
//    Loops:
// for, while, do...while for repetition.
// for...in (object keys), for...of (iterable values).

// 1. If-Else Statements

let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Use case: Checking user age to determine access to certain features.

// 2. Else-If Statements:   to specify a new condition if the first condition is false.

let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Use case: Grading system based on score ranges.

// 3. Switch Statements:   used to perform different actions based on different conditions.

let day = 3;
let dayName;

// switch (expression) { case value: // code block break; case value: // code block break; default: // code block } 
// switch evaluates the expression and executes the corresponding case.If no case matches, the default block is executed.
// The break statement is used to exit the switch statement.
// The switch statement is more concise than multiple if-else statements and more useful when comparing multiple possible values.
// less flexible, more redable, faster than if-else statements..
// not suitable for boolean expressions, complex conditions or ranges but useful for mapping values to corresponding actions.

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);

// Use case: Mapping numeric values to corresponding day names.

// 4. Ternary Operator: a shorthand for the if-else statement. It takes (three) operands.

let isMember = true;
let discount = isMember ? "10%" : "0%";

console.log(`Discount: ${discount}`); // "Discount: 10%"
// condition ? value1 : value2

// Use case: Applying discount based on membership status.

// 5. For Loop
// The for loop is used to execute a block of code a specified number of times.

for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`); 
  // Iteration = repetition of a process  
  // $ = string interpolation operator (template literals)
  // ` = backtick (template literals) 
  // ${} = placeholder for variable or expression
  // string interpolation is more readable than concatenation
  // template literals can span multiple lines, can be embed expressions and can be tagged
}
//output: Iteration 0 Iteration 1 Iteration 2 Iteration 3 Iteration 4 

// Use case: Iterating over a range of numbers.

// 6. While Loop
// The while loop is used to execute a block of code as long as a specified condition is true.

let count = 0;

while (count < 5) {
  console.log(`Count: ${count}`);
  count++;
}

// Use case: Repeating an action until a condition is met.

// 7. Do-While Loop:  similar to the while loop, but it executes the block of code at least once before checking the condition.

let num = 0;

do {
  console.log(`Number: ${num}`);
  num++;
} while (num < 5);

// Use case: Ensuring the code block runs at least once regardless of the condition.

// 8. Break Statement: used to exit a loop or switch statement prematurely.

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(`Break at ${i}`);
}

// Use case: Exiting a loop when a certain condition is met.

// 9. Continue Statement: used to skip the current iteration of a loop and continue with the next iteration.

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`Continue at ${i}`);
}

// Use case: Skipping even numbers in a loop.



//-------------------------------------------- Extra --------------------------------------------

// If-Else
let temperature = 30;
if (temperature > 25) {
  console.log("It's hot!");
} else {
  console.log("It's cool!");
}

// For Loop
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// While Loop
let c = 3;
while (c > 0) {
  console.log(c);
  c--;
}

let fruits = ["apple", "banana"];
for (let fruit of fruits) {
  console.log(fruit);     // "apple", "banana"
}