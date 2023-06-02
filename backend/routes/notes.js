const express = require('express');
const {
  createNote,
  getNotes,
  getNote,
  deleteNote,
  updateNote
} = require('../controllers/noteController');
const { TITLE, DESCRIPTION } = require('../models/notesModel/const.js');

const router = express.Router();

// get all the notes
router.get('/', getNotes);

// get a single note
router.get('/:id', getNote);

// Post a new note
router.post('/', createNote);

// Delete a note
router.delete('/:id', deleteNote);

// Update a note
router.patch('/:id', updateNote);


module.exports = router;