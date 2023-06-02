require('dotenv').config({ path: './.env' });
const express = require('express');


// express app
const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the app!' });
});

// listen for request
app.listen(process.env.PORT, () => {
  console.log('listen on port 8000!');
});