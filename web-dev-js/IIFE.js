// -------------------------------------------------------------------------
// IIFE - Immediately Invoked Function Expression
// -------------------------------------------------------------------------

//  IIFE (Immediately Invoked Function Expression) in JavaScript  

// # What is an IIFE?  
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs immediately after it is defined.  

//  Syntax of IIFE:
javascript
(function() {
    console.log("I am an IIFE and I run immediately!");
})();

//  Key Characteristics of IIFE:  
// 1. Wrapped in parentheses `(function() { ... })` – This makes it an expression.  
// 2. Immediately invoked with `()` at the end.  
// 3. Does NOT pollute the global scope since its variables are confined inside it.  


// ## Why Use IIFE?
// 🔹 To Avoid Global Scope Pollution  
// - Variables inside an IIFE don’t leak into the global scope.  
// javascript
(function() {
    let a = "I am inside IIFE";
    console.log(a);
})();

console.log(a); //  Error: a is not defined


// 🔹 For Data Privacy (Encapsulation)  
// - You can create private variables using an IIFE.  
// javascript
let counter = (function() {
    let count = 0; // Private variable

    return {
        increment: function() {
            count++;
            console.log("Counter:", count);
        },
        decrement: function() {
            count--;
            console.log("Counter:", count);
        }
    };
})();

counter.increment(); // Counter: 1
counter.increment(); // Counter: 2
counter.decrement(); // Counter: 1
console.log(counter.count); //  Undefined (count is private)


// 🔹 To Execute Code Immediately  
// - Useful when you need setup code that should run once.  
// javascript
(function() {
    console.log("Setup complete!");
})();



// ## Different Types of IIFE  

//  Named IIFE
javascript
(function myIIFE() {
    console.log("This is a named IIFE");
})();

// Note: The function is named `myIIFE`, but you cannot call it again since it's not stored in a variable.

//  Arrow Function IIFE
javascript
(() => {
    console.log("Arrow function IIFE");
})();


// IIFE with Parameters

(function(name) {
    console.log("Hello, " + name);
})("Hamza");

// Output:  

// Hello, Hamza


// IIFE Returning a Value
let result = (function() {
    return "IIFE returned this value";
})();
console.log(result);