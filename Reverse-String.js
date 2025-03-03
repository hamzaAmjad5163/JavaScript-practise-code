// -------------------------------------------------------------------------
// Reverse a string
// -------------------------------------------------------------------------
let s = "hamza";
let b = s.split("").reverse().join("");
console.log(b);

// Output: 
// "azahm"


// This line consists of three string methods chained together:

// 1. split("")

// Converts the string into an array of individual characters.
// "hamza".split("") → ["h", "a", "m", "z", "a"].
// reverse()

// 2. Reverses the array.
// ["h", "a", "m", "z", "a"].reverse() → ["a", "z", "m", "a", "h"].
// join("")

// 3. Joins the reversed array back into a string.
// ["a", "z", "m", "a", "h"].join("") → "azmah".