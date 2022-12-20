// Synchronous request — (Default) Where the client blocks and waits for the result of the remote request before continuing execution. Asynchronous request — Where the client continues execution after initiating the request and processes the result whenever the AppServer makes it available

console.log('starting server...');

setTimeout(() => {
 console.log(' Set the timeout to 700 ms  ');  
}, 700);


setTimeout(() => {
    console.log('Set the timeout to 0 ms');
}, 0);

console.log('stopping server...');

// The code above gives the following output on the terminal
// starting server...
// stopping server...     
// Set the timeout to 0 ms
//  Set the timeout to 700 ms

// As you can see the code with a oms interval timeout gets executed after the 
// code to stop the server. 

// It means the code with timeout function is not being executed in the way
// it is sipposed to be executed. This depends on the interval design of 
// nodeJS, which will be covered in the next file