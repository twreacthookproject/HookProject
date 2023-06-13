import * as actionTypes from "./actionTypes";

export function getNotesSuccess(Notes) {
  return { type: actionTypes.GET_NOTES_SUCCESS, payload: Notes };
}

export function createNotesuccess(Note) {
  return { type: actionTypes.CREATE_NOTE_SUCCESS, payload: Note };
}

export function updateNotesuccess(Note) {
  return { type: actionTypes.UPDATE_NOTE_SUCCESS, payload: Note };
}

export function saveNoteApi(Note) {
  return fetch("http://localhost:3000/notes/" + (Note.id || ""), {
    method: Note.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(Note)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveNote(Note) {
  return function(dispatch) {
    return saveNoteApi(Note)
      .then(savedNote => {
        Note.id
          ? dispatch(updateNotesuccess(savedNote))
          : dispatch(createNotesuccess(savedNote));
      })
      .catch(error => {
        throw error;
      });
  };
}

export async function handleResponse(response){
  if(response.ok){
    return response.json()
  }

  const error = await response.text()
  throw new Error(error)
}

export function handleError(error){
  console.error("Bir hata oluştu")
  throw error;
}

export function getNotes(categoryId) {
  return function(dispatch) {
    let url = "http://localhost:3000/notes";
    if (categoryId) {
        url = url + "?categoryId=" + categoryId;
      }
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getNotesSuccess(result)));
  };
}
