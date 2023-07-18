import * as actionTypes from "./actionTypes";

export function getNotesSuccess(notes) {
  return { type: actionTypes.GET_NOTES_SUCCESS, payload: notes };
}

export function createNoteSuccess(note) {
  return { type: actionTypes.CREATE_NOTE_SUCCESS, payload: note };
}

export function updateNoteSuccess(note) {
  return { type: actionTypes.UPDATE_NOTE_SUCCESS, payload: note };
}

export async function saveNoteApi(note) {
  const url = "http://localhost:3000/notes/" + (note.id || "");
  const method = note.id ? "PUT" : "POST";
  const headers = { "content-type": "application/json" };
  const body = JSON.stringify(note);

  const response = await fetch(url, {
    method,
    headers,
    body
  });
  
  if (response.ok) {
    return response.json();
  }

  const error = await response.text();
  throw new Error(error);
}

export function saveNote(note) {
  return async function(dispatch) {
    try {
      const savedNote = await saveNoteApi(note);
      note.id
        ? dispatch(updateNoteSuccess(savedNote))
        : dispatch(createNoteSuccess(savedNote));
    } catch (error) {
      throw error;
    }
  };
}

export function getNotes(categoryId) {
  return async function(dispatch) {
    let url = "http://localhost:3000/notes";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    try {
      const response = await fetch(url);
      const result = await response.json();
      dispatch(getNotesSuccess(result));
    } catch (error) {
      throw error;
    }
  };
}
