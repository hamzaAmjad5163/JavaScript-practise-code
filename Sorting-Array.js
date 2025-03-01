// Sorting an Array
// Sorting helps organize data for better usability.
// understand the concept as well.
// --------------------------------------------------------------------------
// Ascending order
// --------------------------------------------------------------------------
let a = [1,2,3,0,13,2]    // This creates an array a with the elements [1,2,3,0,13,2].
a.sort((x,y)=> x-y)       
console.log(a) 

                        //The sort() method sorts the elements of an array in place (it modifies the original array).
                        // By default, sort() converts elements to strings and sorts them lexicographically (alphabetically). By default, sort() converts elements to strings and sorts them lexicographically (alphabetically). This would not work correctly for numbers (e.g., [0, 1, 13, 2, 2, 3]).
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
// For [1, 2, 3, 0, 13, 2], the sort() method compares pairs of elements:
// 1 - 2 = -1 (negative, so 1 comes before 2).
// 2 - 3 = -1 (negative, so 2 comes before 3).
// 3 - 0 = 3 (positive, so 0 comes before 3).
// 3 - 13 = -10 (negative, so 3 comes before 13).
// 13 - 2 = 11 (positive, so 2 comes before 13).
// Recompare adjacent pairs until fully sorted.
// The final sorted array in ascending order is [0, 1, 2, 2, 3, 13].


// -------------------------------------------------------------------------

// Descending order
// --------------------------------------------------------------------------
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
// For [1, 2, 3, 0, 13, 2], the sort() method compares pairs of elements:
// 2 - 1 = 1 (positive, so 2 comes before 1).
// 3 - 2 = 1 (positive, so 3 comes before 2).
// 0 - 3 = -3 (negative, so 3 comes before 0).
// 13 - 0 = 13 (positive, so 13 comes before 0).
// 2 - 13 = -11 (negative, so 13 comes before 2).
// Recompare adjacent pairs until fully sorted.
// The final sorted array in descending order is [13, 3, 2, 2, 1, 0].
