# Node.js Server Port Already in Use Error

This repository demonstrates a common error in Node.js where attempting to start a server on a port that is already in use results in an error.

## Bug Description

The `http.createServer` method creates a server instance.  Attempting to start this server using `server.listen(8080)` on a port that is occupied will throw an error, halting the application's execution.

## Bug Solution

The solution involves checking if the port is available before attempting to bind to it.  Error handling is implemented to gracefully manage the situation when the port is unavailable.  Different approaches are demonstrated, including using a library for port checking and manual port checking with a timeout.