import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotesAction } from '../redux/Note/actions';
import { NOTES_REDUCER } from '../redux/Note/constants';
import { NOTES_LIST } from '../redux/Note/constants';
import NoteDetails from '../components/NoteDetails';
import NoteForm from '../components/NoteForm';

const Home = () => {
  const dispatch = useDispatch();
  const notesState = useSelector(state => state[NOTES_REDUCER]);
  const notesList = notesState?.[NOTES_LIST]

  useEffect(() => {
    dispatch(fetchNotesAction());
  }, []);
  return (
    <div>
      <NoteForm />
      <div>
        {notesList && notesList.map(note =>
          <NoteDetails key={note._id} note={note} />
        )}
      </div>
    </div>
  )
}

export default Home
