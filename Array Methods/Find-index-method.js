// -------------------------------------------------------------------------
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
// -------------------------------------------------------------------------


let a = ['cat', 'dog', 'mouse'];
let b = a.findIndex(x => x === 'mouse');
console.log(b);

// Output: 
// 2  (i-e) mouse

// Explanation:
// The findIndex() method is used to find the index of the first element in the array that satisfies a condition.
// It takes a callback function as an argument. In this case, the callback function is x => x === 'mouse'.
// The findIndex() method applies this callback function to each element of the array until it finds an element that satisfies the condition.
// Callback Function: x => x === 'mouse'
// This is an arrow function that takes a single argument x (representing each element of the array) and checks if x is equal to 'mouse'.
// If the condition x === 'mouse' is true, findIndex() returns the index of that element.
// In this case, the element 'mouse' is at index 2 in the array.
// The findIndex() method returns the index 2.

// How findIndex() Works:

// The findIndex() method iterates over each element of the array and applies the callback function to it.

// For each element:
// When x = 'cat', 'cat' === 'mouse' is false → move to the next element.
// When x = 'dog', 'dog' === 'mouse' is false → move to the next element.
// When x = 'mouse', 'mouse' === 'mouse' is true → findIndex() returns the index 2.
// The index of the element 'mouse' in the array is 2.
// -------------------------------------------------------------------------