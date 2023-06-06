const mongoose = require('mongoose');
const { TITLE, DESCRIPTION, USER_ID } = require('./const');

const Schema = mongoose.Schema;

const notesSchema = new Schema({
  [TITLE]: {
    type: String,
    required: true,
  },
  [DESCRIPTION]: {
    type: String,
    required: true,
  },
  [USER_ID]: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Note', notesSchema);