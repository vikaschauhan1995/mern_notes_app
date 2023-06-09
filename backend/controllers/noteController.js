const Note = require('../models/notesModel');
const mongoose = require('mongoose');

// get all notes
const getNotes = async (req, res) => {
  const user_id = req.user._id;
  try {
    const notes = await Note.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


// get a single note
const getNote = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'Invalid Id' });
    }
    const note = await Note.find({ _id: id });
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}




// create new note
const createNote = async (req, res) => {
  const { title, description } = req.body;

  let emptyFields = [];
  if (!title) {
    emptyFields.push('title');
  }
  if (!description) {
    emptyFields.push('description');
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill all the fields', emptyFields });
  }
  try {
    // add a document in the database
    const user_id = req.user._id;
    const note = await Note.create({ title, description, user_id });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


// delete a note
const deleteNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid Id' });
  }
  try {
    const note = await Note.findOneAndDelete({ _id: id });
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// update a note
const updateNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid Id' });
  }
  try {
    const note = await Note.findOneAndUpdate({ _id: id }, {
      ...req.body
    });
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}



module.exports = {
  createNote,
  getNotes,
  getNote,
  deleteNote,
  updateNote
}