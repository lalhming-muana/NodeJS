var http = require('http');
http.createServer(function (request, response) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
  }).listen(8080);
  

 /* 
 
The response.writeHead() (Added in v1..0) property is an inbuilt property of the ‘http’ module which sends a response header to the request. The status code is a 3-digit HTTP status code, like 404. The last argument, headers, are the response headers. Optionally one can give a human-readable statusMessage as the second argument.

When headers have been set with response.setHeader(), they will be merged with any headers passed to response.writeHead(), with the headers passed to response.writeHead() given precedence. If this method is called and response.setHeader() has not been called, it will directly write the supplied header values onto the network channel without caching internally, and the response.getHeader() on the header will not yield the expected result. If the progressive population of headers is desired with potential future retrieval and modification, use response.setHeader() instead.

*/