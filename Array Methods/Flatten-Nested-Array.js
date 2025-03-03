// -------------------------------------------------------------------------
// Flatten a nested array. You must account for varying levels of nesting.
// -------------------------------------------------------------------------

const nestedArray = [[1, 2], [3, [4, 5]], [6, [7, [8, 9]]]]; //This is a nested array containing multiple levels of sub-arrays.
// -------------------------------------------------------------------------
// Solution 1: Using reduce() and concat()
// -------------------------------------------------------------------------
function flattenArray(arr) {
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

console.log(flattenArray(nestedArray));

// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// -------------------------------------------------------------------------
// Solution 2: Using Array.prototype.flat()
// -------------------------------------------------------------------------
console.log(nestedArray.flat(Infinity)); 
// .flat(depth) is a method that flattens nested arrays into a single-level array.
// The depth argument specifies how deep the flattening should go.
// Using .flat(Infinity) ensures all levels are flattened.


// Or

let b = nestedArray.flat(Infinity);
console.log(b);

// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]


// How .flat(Infinity) Works
// Original Nested Array: [[1, 2], [3, [4, 5]], [6, [7, [8, 9]]]
// 1. .flat(1) would flatten only the first level:  [1, 2, 3, [4, 5], 6, [7, [8, 9]]]
// 2. .flat(2) would flatten two levels:  [1, 2, 3, 4, 5, 6, 7, [8, 9]]
// 3. .flat(Infinity) flattens all levels:  [1, 2, 3, 4, 5, 6, 7, 8, 9].