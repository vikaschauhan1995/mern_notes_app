const express = require('express');
const Note = require('../models/notesModel');
const { TITLE, DESCRIPTION } = require('../models/notesModel/const.js');

const router = express.Router();

// get all the notes
router.get('/', (req, res) => {
  res.json({ message: 'Gell all the notes' });
});

// get a single note
router.get('/:id', (req, res) => {
  res.json({ message: 'Get a single note' });
});

// Post a new note
router.post('/', async (req, res) => {
  const { title, description } = req.body;
  try {
    const note = await Note.create({ title, description });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a note
router.delete('/:id', (req, res) => {
  res.json({ message: 'Delete a note' });
});

// Update a note
router.patch('/:id', (req, res) => {
  res.json({ message: 'Update a note' });
});


module.exports = router;