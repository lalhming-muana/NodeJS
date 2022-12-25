/* 

A call stack is where normal js programs are executed.

When a node function which is not a part of JS is encountered.
it is push to the Node API.

After that, the function is transfered to the callback queue

The callback queue is monitored by the Event loop.

When the callstack is empty, the event loop piscks up the function from the 
Callback queue, puts it on the callstack where it will be finally executed. 

*/