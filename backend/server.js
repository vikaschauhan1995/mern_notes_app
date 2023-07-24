require('dotenv').config({ path: './.env' });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
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

app.use(cors({
  origin: [`${process.env.FRONT_END_URL}`, 'http://3.110.94.126:8082/']
}));

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