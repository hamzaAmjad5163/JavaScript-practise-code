/**
 * A closure is simply a function inside another function that has access to the outer function variable.
 *  Now, this definition sounds pretty much straightforward but the real magic is created with the scope. 
 * The inner function (closure) can access the variable defined in its scope (variables defined between its 
 * curly brackets), in the scope of its parent function, and in the global variables. Now here you need to 
 * remember that the outer function can not have access to the inner function variable (we have already 
 * discussed this in the scope concept). Let’s take an example and understand it in a better way. 
 */


// Example:  Below is the example of closure.

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(outerVariable, innerVariable);
    }
}
outerFunction('inner')('wow!');