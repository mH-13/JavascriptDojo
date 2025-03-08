

// Searching in JavaScript

// JavaScript provides several methods to search for elements within arrays, strings, and objects. Here are some of the most commonly used methods:

// #### Searching in Arrays

// 1. **`indexOf`**:
//   - **Description**: Returns the first index at which a given element can be found in the array, or -1 if it is not present.
//   - **Syntax**: `array.indexOf(searchElement, fromIndex)`
//   - **Example**:
  // ```javascript
  const fruitsArray = ['apple', 'banana', 'mango', 'orange'];
  console.log(fruitsArray.indexOf('mango')); // 2
  console.log(fruitsArray.indexOf('grape')); // -1
  // ```

// 2. **`lastIndexOf`**:
//   - **Description**: Returns the last index at which a given element can be found in the array, or -1 if it is not present.
//   - **Syntax**: `array.lastIndexOf(searchElement, fromIndex)`
//   - **Example**:
  // ```javascript
  const numbers = [2, 5, 9, 2];
  console.log(numbers.lastIndexOf(2)); // 3
  console.log(numbers.lastIndexOf(7)); // -1
  // ```

// 3. **`find`**:
//   - **Description**: Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
//   - **Syntax**: `array.find(callback(element[, index[, array]])[, thisArg])`
//   - **Example**:
  // ```javascript
  const numbersArray = [4, 9, 16, 25];
  const found = numbersArray.find(element => element > 10);
  console.log(found); // 16
  // ```

// 4. **`findIndex`**:
//   - **Description**: Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, -1 is returned.
//   - **Syntax**: `array.findIndex(callback(element[, index[, array]])[, thisArg])`
//   - **Example**:
  // ```javascript
  const numbers = [4, 9, 16, 25];
  const index = numbers.findIndex(element => element > 10);
  console.log(index); // 2
  // ```

// 5. **`includes`**:
//   - **Description**: Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
//   - **Syntax**: `array.includes(valueToFind, fromIndex)`
//   - **Example**:
  // ```javascript
  const fruits = ['apple', 'banana', 'mango', 'orange'];
  console.log(fruits.includes('mango')); // true
  console.log(fruits.includes('grape')); // false
  // ```

// #### Searching in Strings

// 1. **`indexOf`**:
//   - **Description**: Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.
//   - **Syntax**: `string.indexOf(searchValue, fromIndex)`
//   - **Example**:
  // ```javascript
  const str = 'Hello, world!';
  console.log(str.indexOf('world')); // 7
  console.log(str.indexOf('JavaScript')); // -1
  // ```

// 2. **`lastIndexOf`**:
//   - **Description**: Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.
//   - **Syntax**: `string.lastIndexOf(searchValue, fromIndex)`
//   - **Example**:
  // ```javascript
  const str = 'Hello, world! Hello, universe!';
  console.log(str.lastIndexOf('Hello')); // 14
  console.log(str.lastIndexOf('JavaScript')); // -1
  // ```

// 3. **`includes`**:
//   - **Description**: Determines whether one string may be found within another string, returning true or false as appropriate.
//   - **Syntax**: `string.includes(searchString, position)`
//   - **Example**:
  // ```javascript
  const str = 'Hello, world!';
  console.log(str.includes('world')); // true
  console.log(str.includes('JavaScript')); // false
  // ```

// 4. **`search`**:
//   - **Description**: Executes a search for a match between a regular expression and this String object.
//   - **Syntax**: `string.search(regexp)`
//   - **Example**:
  // ```javascript
  const str = 'The quick brown fox jumps over the lazy dog.';
  const regex = /quick/;
  console.log(str.search(regex)); // 4
  // ```

// 5. **`match`**:
//   - **Description**: Retrieves the result of matching a string against a regular expression.
//   - **Syntax**: `string.match(regexp)`
//   - **Example**:
  // ```javascript
  const str = 'The quick brown fox jumps over the lazy dog.';
  const regex = /quick/;
  console.log(str.match(regex)); // ["quick"]
  // ```

// #### Searching in Objects

// 1. **`hasOwnProperty`**:
//   - **Description**: Returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
//   - **Syntax**: `object.hasOwnProperty(property)`
//   - **Example**:
  // ```javascript
  const obj = { name: 'John', age: 30 };
  console.log(obj.hasOwnProperty('name')); // true
  console.log(obj.hasOwnProperty('gender')); // false
  // ```

// 2. **`in`**:
//   - **Description**: Returns true if the specified property is in the specified object or its prototype chain.
//   - **Syntax**: `property in object`
//   - **Example**:
  // ```javascript
  const obj = { name: 'John', age: 30 };
  console.log('name' in obj); // true
  console.log('gender' in obj); // false
  // ```

// These are some of the most common methods for searching in JavaScript. Each method has its own use case and can be chosen based on the specific requirements of the task at hand.