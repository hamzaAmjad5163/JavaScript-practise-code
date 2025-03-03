// -------------------------------------------------------------------------
// Scope in JavaScript
// -------------------------------------------------------------------------
// Scope in JavaScript refers to the accessibility and visibility of variables in different parts of your code. It determines where variables and functions can be accessed.  

// #Types of Scope in JavaScript
// 1. Global Scope
// 2. Function Scope (Local Scope)
// 3. Block Scope (with `let` and `const`)
// 4. Lexical Scope (Nested Functions & Closures)

// # Global Scope
// - A variable declared outside any function or block is in the global scope.  
// - It can be accessed anywhere in the script.  

// Example:
let globalVar = "I am global"; 

function show() {
    console.log(globalVar); // Accessible
}

show();
console.log(globalVar); // Accessible everywhere


//  Function Scope (Local Scope)
// - A variable declared inside a function is in the function scope.  
// - It is not accessible outside the function.  

// Example:

function myFunction() {
    let localVar = "I am local";
    console.log(localVar); // Accessible inside the function
}

myFunction();
// Error: 
console.log(localVar); //  Error: localVar is not defined

// Hoisting

//  Block Scope (with `let` and `const`)
// - Variables declared using `let` or `const` inside `{}` (curly braces) are only available inside that block.  
// - `var` does NOT have block scope!

// Example:

{
    let blockVar = "I exist only inside this block";
    console.log(blockVar); // Accessible inside block
}

console.log(blockVar); // Error: blockVar is not defined

// `var` does NOT have block scope:
{
    var test = "I exist outside too!";
}
console.log(test); // Accessible even outside the block (bad practice!)


// *Lexical Scope (Nested Functions & Closures)
// - A function can access variables from its parent function.
// - But the parent function cannot access child function variables.  

// Example:

function outerFunction() {
    let outerVar = "I am from outer function";

    function innerFunction() {
        console.log(outerVar); // Accessible (Lexical Scope)
    }

    innerFunction();
}

outerFunction();
console.log(outerVar); //  Error: outerVar is not defined
