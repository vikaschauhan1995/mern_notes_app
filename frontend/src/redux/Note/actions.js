import { FETCH_NOTES, POST_NOTE, DELETE_NOTE_FROM_DB } from "./constants";


export function fetchNotesAction() {
  return {
    type: FETCH_NOTES
  }
}

export function postNoteAction(note) {
  return {
    type: POST_NOTE,
    payload: note
  }
}

export function deleteNoteFromDBAction(id) {
  return {
    type: DELETE_NOTE_FROM_DB,
    payload: id
  }
}