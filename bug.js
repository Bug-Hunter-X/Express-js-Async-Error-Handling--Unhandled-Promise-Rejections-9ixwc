const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    // Error handling that doesn't use next(error) to pass to error handling middleware
    console.error('Error:', error);
    res.status(500).send('Something went wrong!');
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that might fail
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        resolve();
      } else {
        reject(new Error('Something went wrong in the async operation.'));
      }
    }, 1000);
  });
}