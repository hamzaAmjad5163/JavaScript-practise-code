// -------------------------------------------------------------------------
// Sum of All Elements in an Array
// -------------------------------------------------------------------------

let a = [2,3,1];
let b = a.reduce((total, x) => total + x);
console.log(b);

// Output:
// 6


// The .reduce() method is used on the array a.
// .reduce() processes all elements of the array to produce a single value (in this case, the sum of all elements).
// The callback function (total, x) => total + x is executed on each element of the array, where:
// total is the accumulated sum (initially the first element of the array if no initial value is provided).
// x is the current element being processed.

// How .reduce() Works Here

// First iteration:

// total = 2 (first element of the array).
// x = 3 (second element).
// total + x = 2 + 3 = 5.
// Second iteration:

// total = 5 (accumulated sum from previous iteration).
// x = 1 (third element).
// total + x = 5 + 1 = 6.
// Now, reduce() completes execution and returns 6, which is stored in b