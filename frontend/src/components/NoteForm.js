import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { NOTE_TITLE, NOTE_DESCRIPTION, NOTES_REDUCER, POST_NOTE_RESPONSE_ERROR } from '../redux/Note/constants';
import { postNoteAction } from '../redux/Note/actions';
import '../style/NoteForm.scss';
import style from '../style/Button.module.scss';

const NoteForm = () => {
  const dispatch = useDispatch();
  const noteReducerState = useSelector(state => state[NOTES_REDUCER]);
  const initialState = {
    [NOTE_TITLE]: '',
    [NOTE_DESCRIPTION]: ''
  };
  const [state, setState] = useState(initialState);
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
        <Form.Floating className="mb-3">
          <Form.Control
            type="text" name={NOTE_TITLE} onChange={handleChange} value={state[NOTE_TITLE]}
            id="floatingInputTitle"
            placeholder="title"
          />
          <label htmlFor="floatingInputTitle">Title</label>
        </Form.Floating>

        <FloatingLabel
          controlId="floatingTextarea"
          label="Description"
          className="mb-1"
        >
          <Form.Control as="textarea" placeholder="description" name={NOTE_DESCRIPTION} onChange={handleChange} value={state[NOTE_DESCRIPTION]} />
        </FloatingLabel>
        {noteReducerState[POST_NOTE_RESPONSE_ERROR] && <p className="text-red">{noteReducerState[POST_NOTE_RESPONSE_ERROR]}</p>}
        <br />
        <div className="NoteForm__formFooter">
          <div>
            <button className={style.btn}>Add Note</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default NoteForm;