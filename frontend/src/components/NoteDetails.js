import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NOTE_DESCRIPTION, NOTE_TITLE } from '../redux/Note/constants'
import { useDispatch } from 'react-redux';
import { deleteNoteFromDBAction } from '../redux/Note/actions';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import '../style/NoteDetails.scss';

const NoteDetails = ({ note }) => {
  const dispatch = useDispatch();
  const deleteNote = (id) => {
    dispatch(deleteNoteFromDBAction(id));
  }
  return (
    <Card className="mt-2">
      <Card.Body>
        <Card.Title><strong>Title:</strong> {note?.[NOTE_TITLE]}</Card.Title>
        <Card.Text>
          <strong>Description:</strong> {note?.[NOTE_DESCRIPTION]}
        </Card.Text>
        <samp>{formatDistanceToNow(new Date(note?.createdAt), { addSuffix: true })}</samp>
        <Button variant="primary" style={{ float: 'right' }} onClick={() => deleteNote(note?._id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
  // return (
  //   <div>
  //     <h4><b>Title:</b>{note?.[NOTE_TITLE]}</h4>
  //     <p><b>Description:</b>{note?.[NOTE_DESCRIPTION]}</p>
  //     {/* <!-- suffix for ago --> */}
  //     <p>{formatDistanceToNow(new Date(note?.createdAt), { addSuffix: true })}</p>
  //     <span onClick={() => deleteNote(note?._id)}>Delete</span>
  //   </div>
  // )
}

export default NoteDetails;