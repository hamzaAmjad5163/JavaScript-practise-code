/**
 * In JavaScript, a callback is simply a function that is passed to another function 
 * as a parameter and is invoked or executed inside the other function. Here a 
 * function needs to wait for another function to execute or return a value and this 
 * makes the chain of the functionalities (when X is completed, then Y is executed, 
 * and it goes on.). This is the reason callback is generally used in the asynchronous
 *  operation of JavaScript to provide the synchronous capability. 
 * 
 * Example: Below is the example of callbacks
 */
function greet(name, callback) {
    console.log('Hi, I am ' + name);
    callback();
}

function goodbye() {
    console.log('Goodbye!');
}

greet('hamza', goodbye);
// Output: Hi, I am hamza
// Goodbye!
 