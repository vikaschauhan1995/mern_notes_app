require('dotenv').config({ path: './.env' });
const express = require('express');
const mongoose = require('mongoose');
const notesRouter = require('./routes/notes.js');
const userRouter = require('./routes/user.js');

// express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/notes', notesRouter);
app.use('/api/user', userRouter);

// connect to db
mongoose.connect(process.env.MONGO_DB).then(() => {
  // listen for request
  app.listen(process.env.PORT, () => {
    console.log(`Connected to mongodb & listening to the port ${process.env.PORT}`);
  });
}).catch((err) => {
  console.log(err);
});