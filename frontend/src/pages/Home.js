import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotesAction } from '../redux/Note/actions';
import { FETCH_NOTES_ERROR, NOTES_REDUCER } from '../redux/Note/constants';
import { NOTES_LIST } from '../redux/Note/constants';
import NoteDetails from '../components/NoteDetails';
import NoteForm from '../components/NoteForm';
import '../style/Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const notesState = useSelector(state => state[NOTES_REDUCER]);
  const notesList = notesState?.[NOTES_LIST]
  useEffect(() => {
    dispatch(fetchNotesAction());
  }, [dispatch]);
  return (
    <div>
      <div style={{ height: '100px' }} />
      <Container>
        <Row className="justify-content-sm-center">
          <Col xs="12" sm="8" md="8" lg="6">
            <NoteForm />
            {notesState[FETCH_NOTES_ERROR] && <div>{notesState[FETCH_NOTES_ERROR]}</div>}
            {notesList?.length > 0 ? notesList.map((note, index) =>
              <NoteDetails key={note?._id + index} note={note} />
            ) : <p className="font-weight-light">Noting is here</p>}
          </Col>
        </Row>
      </Container>



    </div >
  )
}

export default Home
