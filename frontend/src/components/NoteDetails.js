import React from 'react'
import { NOTE_DESCRIPTION, NOTE_TITLE } from '../redux/Note/constants'

const NoteDetails = ({ note }) => {
  return (
    <div>
      <h4><b>Title:</b>{note[NOTE_TITLE]}</h4>
      <p><b>Description:</b>{note[NOTE_DESCRIPTION]}</p>
      <p>{note.createdAt}</p>
    </div>
  )
}

export default NoteDetails;