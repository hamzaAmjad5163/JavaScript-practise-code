// -------------------------------------------------------------------------
// new array using `Filtering` method
// -------------------------------------------------------------------------

const originalArray = [1, 2, 3, 4, 5];

// Filtering method to get numbers divisible by 2
const filteredArray = originalArray.filter(num => num % 2 === 0);
console.log('Filtered Array:', filteredArray);

// -------------------------------------------------------------------------
// Output:
// [ 2, 4 ]
// -------------------------------------------------------------------------
// Explanation:
// The filter() method is used to create a new array with elements that pass a test.
// It takes a callback function as an argument. In this case, the callback function is num => num % 2 === 0.
// The filter() method applies this callback function to each element of the array.
// Callback Function: num => num % 2 === 0
// This is an arrow function that takes a single argument num (representing each element of the array) and returns num % 2 === 0.
// The % operator is the modulo operator in JavaScript. It returns the remainder of a division operation.
// num % 2 === 0 checks if the number is divisible by 2 (i.e., the remainder is 0).

// How filter() Works

// The filter() method iterates over each element of the array and applies the callback function to it.
// For each element:
// When num = 1, num % 2 === 0 returns false (1 is not divisible by 2).
// When num = 2, num % 2 === 0 returns true (2 is divisible by 2).
// When num = 3, num % 2 === 0 returns false (3 is not divisible by 2).
// When num = 4, num % 2 === 0 returns true (4 is divisible by 2).
// When num = 5, num % 2 === 0 returns false (5 is not divisible by 2).
// The filter() method returns a new array with elements that satisfy the condition (i.e., numbers divisible by 2).
// In this case, the filtered array contains the numbers [2, 4].
// -------------------------------------------------------------------------


// Example 2
// Filter numbers greater than 15
let a = [10, 15, 20, 25];
let filtered = a.filter(x => x > 15);
console.log(filtered);

// Output: 
// [20, 25]
// Explanation:
// The filter() method is used to create a new array with elements that pass a test.
// It takes a callback function as an argument. In this case, the callback function is x => x > 15.
// The filter() method applies this callback function to each element of the array.
// Callback Function: x => x > 15
// This is an arrow function that takes a single argument x (representing each element of the array) and returns x > 15.
// The > operator checks if the number is greater than 15.

// How filter() Works

// The filter() method iterates over each element of the array and applies the callback function to it.
// For each element:
// When x = 10, x > 15 returns false (10 is not greater than 15).
// When x = 15, x > 15 returns false (15 is not greater than 15).
// When x = 20, x > 15 returns true (20 is greater than 15).
// When x = 25, x > 15 returns true (25 is greater than 15).
// The filter() method returns a new array with elements that satisfy the condition (i.e., numbers greater than 15).
// In this case, the filtered array contains the numbers [20, 25].