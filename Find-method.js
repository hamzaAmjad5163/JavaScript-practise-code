// ----------------------------------------------------------------
// Find an Element Matching a Condition in an Array
// ----------------------------------------------------------------

// The find() method is used to search for the first element in the array that satisfies a condition.
// It takes a callback function as an argument. In this case, the callback function is x => x > 10.
// The find() method applies this callback function to each element of the array until it finds an element that satisfies the condition.

// Callback Function: x => x > 10
// This is an arrow function that takes a single argument x (representing each element of the array) and checks if x is greater than 10.
// If the condition x > 10 is true, find() returns that element.

let a = [5, 10, 15, 20];
let b = a.find(x => x > 10);
console.log(b);

// How find() Works

// The find() method iterates over each element of the array and applies the callback function to it.
// For each element:
// When x = 5, 5 > 10 is false → move to the next element.
// When x = 10, 10 > 10 is false → move to the next element.
// When x = 15, 15 > 10 is true → find() stops and returns 15.