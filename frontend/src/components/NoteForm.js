import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NOTE_TITLE, NOTE_DESCRIPTION, NOTES_REDUCER, POST_NOTE_RESPONSE_ERROR } from '../redux/Note/constants';
import { postNoteAction } from '../redux/Note/actions';


const NoteForm = () => {
  const dispatch = useDispatch();
  const noteReducerState = useSelector(state => state[NOTES_REDUCER]);
  const initialState = {
    [NOTE_TITLE]: '',
    [NOTE_DESCRIPTION]: ''
  };
  const [state, setState] = useState(initialState);
  console.log("noteReducerState=>", noteReducerState);
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (value !== '' && value !== undefined && value !== null) {
      setState({ ...state, [name]: value });
    } else {
      setState({ ...state, [name]: value });
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const note = {
      [NOTE_TITLE]: state[NOTE_TITLE],
      [NOTE_DESCRIPTION]: state[NOTE_DESCRIPTION]
    };
    dispatch(postNoteAction(note));
    setState(initialState);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Add a new note</h3>

        <label>Title:</label>
        <input type="text" name={NOTE_TITLE} onChange={handleChange} value={state[NOTE_TITLE]} />
        <br />
        <label>Description:</label>
        <input type="text" name={NOTE_DESCRIPTION} onChange={handleChange} value={state[NOTE_DESCRIPTION]} />
        {noteReducerState[POST_NOTE_RESPONSE_ERROR] && <p className="text-red">{noteReducerState[POST_NOTE_RESPONSE_ERROR]}</p>}
        <br />
        <button>Add Note</button>
      </form>
    </div>
  )
}

export default NoteForm
