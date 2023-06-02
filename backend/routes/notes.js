
const express = require('express');

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
router.post('/', (req, res) => {
  res.json({ message: 'Post a new note' });
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