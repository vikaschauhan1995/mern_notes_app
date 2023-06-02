const mongoose = require('mongoose');
const { TITLE, DESCRIPTION } = require('./const');

const Schema = mongoose.Schema;

const notesSchema = new Schema({
  [TITLE]: {
    type: String,
    required: true,
  },
  [DESCRIPTION]: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Note', notesSchema);