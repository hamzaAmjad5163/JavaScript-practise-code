/**  A lot of developers get unexpected results when they are not clear about the concept of hoisting in 
JavaScript. In Javascript, you can call a function before it is defined and you won’t get an error 
‘Uncaught ReferenceError’. The reason behind this is hoisting where the Javascript interpreter always
moves the variables and function declaration to the top of the current scope (function scope or global 
scope) before the code execution. Let’s understand this with an example. */

// Example: Take a look at the code given below.


console.log(myVar); // undefined 

// ----------------------------------------------------------------
// know
// ----------------------------------------------------------------
var myVar = "I am declared and initialized here";

console.log(myVar); // I am declared and initialized here

// OR

function hello(world) {
    console.log(world);
}
cowSays('hello world');

// output:
// hello world