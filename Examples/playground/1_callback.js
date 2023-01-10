/*
A callback function in Node.js is a function that is passed as an argument to another function and is executed after the parent function has completed. The idea behind using a callback function is to allow the parent function to continue executing code, while the callback function is executed asynchronously in the background. This allows for non-blocking, event-driven code that can handle many concurrent operations.

Here's an example of a simple callback function:

*/

function add(a, b, callback) {
    var result = a + b;
    callback(result);
}

function printResult(result) {
    console.log(result);
}

add(2, 3, printResult); 


/*
In this example, the add function takes in two numbers and a callback function as arguments. The function adds the two numbers together and then calls the callback function with the result. The printResult function is passed as the callback and logs the result to the console.

Callbacks are also used in Node.js to handle I/O operations, like reading or writing to a file.
For example, the fs (file system) module's readFile function is used to read a file, and it accepts a callback function as an argument that is executed when the file reading is completed.
*/

const fs = require('fs');
fs.readFile('file.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
});

/*

Here the callback function accepts two arguments - err and data,
which is an error object and the data which is read from file respectively.

Callback functions are important for creating efficient, non-blocking code in Node.js, but as the number of nested callbacks increases, the code can become hard to read and manage, known as Callback Hell. To solve this, JavaScript provides Promises and Async/Await

*/