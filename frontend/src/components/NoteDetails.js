import React from 'react'
import { NOTE_DESCRIPTION, NOTE_TITLE } from '../redux/Note/constants'
import { useDispatch } from 'react-redux';
import { deleteNoteFromDBAction } from '../redux/Note/actions';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const NoteDetails = ({ note }) => {
  const dispatch = useDispatch();
  const deleteNote = (id) => {
    dispatch(deleteNoteFromDBAction(id));
  }
  return (
    <div>
      <h4><b>Title:</b>{note?.[NOTE_TITLE]}</h4>
      <p><b>Description:</b>{note?.[NOTE_DESCRIPTION]}</p>
      {/* <!-- suffix for ago --> */}
      <p>{formatDistanceToNow(new Date(note?.createdAt), { addSuffix: true })}</p>
      <span onClick={() => deleteNote(note?._id)}>Delete</span>
    </div>
  )
}

export default NoteDetails;