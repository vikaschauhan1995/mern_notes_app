const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { EMAIL, PASSWORD } = require('./const.js');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  [EMAIL]: {
    type: String,
    required: true,
    unique: true
  },
  [PASSWORD]: {
    type: String,
    required: true,
  }
});

userSchema.statics.signup = async function (email, password) {
  const userExists = await this.findOne({ email });
  if (userExists) {
    throw Error('Email already in use');
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
}

module.exports = mongoose.model('User', userSchema);