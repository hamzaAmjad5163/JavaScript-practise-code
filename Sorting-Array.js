// Sorting an Array
// Sorting helps organize data for better usability.

// Ascending order
let a = [1,2,3,0,13,2]    // This creates an array a with the elements [9, 3, 5, 1].
a.sort((x,y)=> x-y)       
console.log(a) 
                        //The sort() method sorts the elements of an array in place (it modifies the original array).
                        // By default, sort() converts elements to strings and sorts them lexicographically (alphabetically). This would not work correctly for numbers (e.g., [1, 10, 2] would be sorted as [1, 10, 2]).
                        // To sort numbers correctly, you need to provide a comparison function as an argument to sort().

// Output: 
// [ 0, 1, 2, 2, 3, 13 ]


// Comparison Function: (x, y) => x - y
// The comparison function takes two arguments x and y (two elements from the array).

// It returns:
// A negative number if x should come before y (ascending order).
// A positive number if x should come after y.
// 0 if x and y are equal.

// How It Works:
// For [9, 3, 5, 1], the sort() method compares pairs of elements:
// 9 - 3 = 6 (positive, so 3 comes before 9).
// 9 - 5 = 4 (positive, so 5 comes before 9).
// 9 - 1 = 8 (positive, so 1 comes before 9).
// 3 - 5 = -2 (negative, so 3 comes before 5).
// 3 - 1 = 2 (positive, so 1 comes before 3).
// 5 - 1 = 4 (positive, so 1 comes before 5).
// The final sorted array in ascending order is [1, 3, 5, 9].



// Descending order

a.sort((x,y)=> y-x)
console.log(a)

// OR you can again create an array and sort it in descending order

let b = [1,2,3,0,13,2]
b.sort((x,y)=> y-x)
console.log(b)

// Output: 
// [ 13, 3, 2, 2, 1, 0 ]


// Comparison Function: (x, y) => y - x
// It returns:
// A negative number if y should come before x (descending order).
// A positive number if y should come after x.
// 0 if x and y are equal.

// How It Works:
// For [1, 3, 5, 9], the sort() method compares pairs of elements:
// 3 - 1 = 2 (positive, so 3 comes before 1).
// 5 - 3 = 2 (positive, so 5 comes before 3).
// 9 - 5 = 4 (positive, so 9 comes before 5).
// The final sorted array in descending order is [9, 5, 3, 1].