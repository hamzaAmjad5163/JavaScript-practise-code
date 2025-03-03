// The spread operator (...) in JavaScript is a powerful and concise syntax that allows you to "spread" or "unpack" elements from an iterable (like an array, string, or object) into individual elements. It is commonly used in various scenarios to simplify code and make it more readable.
// What Does the Spread Operator Do?
// The spread operator takes an iterable (e.g., an array) and "expands" it into its individual elements


// -------------------------------------------------------------------------
// Find a minimum value in an array
// -------------------------------------------------------------------------
let a = [2, 20, 10, 3];
let b = Math.min(...a);
console.log(b);

// Output:
// 2

// Math.min() is a built-in JavaScript function that returns the smallest of the numbers passed to it.
// The spread operator (...) is used to "spread" the elements of the array a into individual arguments for Math.min().
// Without the spread operator, Math.min(a) would not work because Math.min() expects individual numbers, not an array.
// Math.min(...a) is equivalent to Math.min(2, 20, 10, 3).

// The smallest value in the array [2, 20, 10, 3] is 2.
// So, b will be 2, and this is printed to the console.

// -------------------------------------------------------------------------
// Find a maximum value in an array
// -------------------------------------------------------------------------

let c = [2, 20, 10, 3];
let d = Math.max(...c);
console.log(d);

// Output:
// 20

// Math.max() is a built-in JavaScript function that returns the largest of the numbers passed to it.
// The spread operator (...) is used to "spread" the elements of the array c into individual arguments for Math.max().
// Without the spread operator, Math.max(c) would not work because Math.max() expects individual numbers, not an array.
// Math.max(...c) is equivalent to Math.max(2, 20, 10, 3).

// The largest value in the array [2, 20, 10, 3] is 20.
// So, d will be 20, and this is printed to the console.
