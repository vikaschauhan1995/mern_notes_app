import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotesAction } from '../redux/Note/actions';
import { FETCH_NOTES_ERROR, NOTES_REDUCER } from '../redux/Note/constants';
import { NOTES_LIST } from '../redux/Note/constants';
import NoteDetails from '../components/NoteDetails';
import NoteForm from '../components/NoteForm';

const Home = () => {
  const dispatch = useDispatch();
  const notesState = useSelector(state => state[NOTES_REDUCER]);
  const notesList = notesState?.[NOTES_LIST]
  console.log("notesState", notesState);
  useEffect(() => {
    dispatch(fetchNotesAction());
  }, [dispatch]);
  return (
    <div>
      <NoteForm />
      <div>
        {notesState[FETCH_NOTES_ERROR] && <div>{notesState[FETCH_NOTES_ERROR]}</div>}
        {notesList && notesList.map((note, index) =>
          <NoteDetails key={note?._id + index} note={note} />
        )}
      </div>
    </div>
  )
}

export default Home
