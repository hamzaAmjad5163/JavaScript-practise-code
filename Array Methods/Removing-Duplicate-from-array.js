// -------------------------------------------------------------------------
// Removing Duplicate from array
// -------------------------------------------------------------------------
// Method 1: Using Set() 


let a = [1,1,1,2,3,4,2,2,2,2,4]
let b = [...new Set(a)]
console.log(b)

// Output:
// [ 1, 2, 3, 4 ]
// The Set object in JavaScript lets you store unique values of any type, whether primitive values or object references.

// How It Works:
// A Set is a built-in JavaScript object that only allows unique values.
// When you pass an array to new Set(array), it automatically removes duplicates.
// The spread operator (...) converts the Set back into an array.

// =============================================== OR ===============================================================//


// -------------------------------------------------------------------------
// Method 2: Using filter() and indexOf()

let array = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = array.filter((value, index) => array.indexOf(value) === index);
console.log(uniqueArray); 

// Output: 
// [1, 2, 3, 4, 5]

// How It Works:
// The filter method creates a new array with only the elements that pass a test.
// array.indexOf(value) returns the first index of the value in the array.
// If the current index (index) matches the first index (array.indexOf(value)), it means the value is unique (not a duplicate).