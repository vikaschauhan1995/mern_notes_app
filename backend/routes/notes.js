const express = require('express');
const {
  createNote,
  getNotes,
  getNote,
  deleteNote,
  updateNote
} = require('../controllers/noteController');
const { TITLE, DESCRIPTION } = require('../models/notesModel/const.js');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.use(authMiddleware);

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