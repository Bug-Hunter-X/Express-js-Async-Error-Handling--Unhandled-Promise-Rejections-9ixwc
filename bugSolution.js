const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(next);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
app.listen(3000, () => console.log('Server listening on port 3000'));

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
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