/**
 * Stop and wait until something is resolved. Async & await is just syntactic sugar on top of Promises and like promises it also provides a 
 * way to maintain asynchronous operation more synchronously. So in JavaScript asynchronous operations can be handled in various versions… 
 * ES5 -> Callbac
 * ES6 -> Promise
 * ES7 -> async & await
 * You can use Async/Await to perform the Rest API request where you want the data to fully load before pushing it to the view. For Nodejs and 
 * browser programmers async/await is a great syntactic improvement. It helps the developer to implement functional programming in javascript and it 
 * also increases the code readability.
 */

// // Example: Async/Await
const myData = async () => {
    const resource = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await resource.json();
    console.log(data);
}

myData();