import { FETCH_NOTES, POST_NOTE } from "./constants";


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