// -------------------------------------------------------------------------
// Create a new array using the map method. The new array should contain the
// square of each element of the original array.

const originalArray = [1, 2, 3, 4, 5];
const squaredArray = originalArray.map(num => num ** 2);

console.log(squaredArray); 

// Output: 
// [1, 4, 9, 16, 25]

// Explanation:
// The map() method is used to transform each element of the array.
// It takes a callback function as an argument. In this case, the callback function is num => num ** 2.
// The map() method applies this callback function to each element of the array.


// Callback Function: num => num ** 2
// This is an arrow function that takes a single argument num (representing each element of the array) and returns num ** 2.
// The ** operator is the exponentiation operator in JavaScript. So, num ** 2 means "num squared" or "num raised to the power of 2".


// How map() Works
// The map() method iterates over each element of the array and applies the callback function to it.
// For each element:

// When num = 1, num ** 2 becomes 1 ** 2 = 1.
// When num = 2, num ** 2 becomes 2 ** 2 = 4.
// When num = 3, num ** 2 becomes 3 ** 2 = 9.
// When num = 4, num ** 2 becomes 4 ** 2 = 16.
// When num = 5, num ** 2 becomes 5 ** 2 = 25.

// The map() method returns a new array with the transformed values.