/**
 * Searches for a value in an array using the linear search algorithm.
 * @param {Array} arr - The array to search in.
 * @param {*} target - The value to search for.
 * @returns {number} - The index of the target value if found, otherwise -1.
 */
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

/**
 * Searches for a value in a sorted array using the binary search algorithm.
 * @param {Array} arr - The sorted array to search in.
 * @param {*} target - The value to search for.
 * @returns {number} - The index of the target value if found, otherwise -1.
 */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(linearSearch(array, 5)); // Output: 4
console.log(binarySearch(array, 5)); // Output: 4