# Express.js Async Error Handling: Unhandled Promise Rejections

This repository demonstrates a common error in Express.js applications involving unhandled promise rejections within asynchronous request handlers.  Improper error handling can lead to silent server crashes, particularly problematic in production environments where debugging is challenging.

## Problem
The `bug.js` file shows an Express.js route handler that performs an asynchronous operation. If the asynchronous operation fails, the error is caught, but not properly handled using Express's error handling middleware. This results in a silent crash or unexpected behavior without a clear indication of the error cause.

## Solution
The `bugSolution.js` file presents a corrected approach. By using `next(error)` to pass the error to the Express error-handling middleware, the application can gracefully handle errors, log them appropriately, and return informative responses to the client.