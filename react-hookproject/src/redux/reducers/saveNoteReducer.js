import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function saveNoteReducer(
  state = initialState.savedNote,
  action
) {
  switch (action.type) {
    case actionTypes.UPDATE_NOTE_SUCCESS:
      return action.payload;
    case actionTypes.CREATE_NOTE_SUCCESS:
      return action.payload;
    case actionTypes.DELETE_NOTE_SUCCESS:
        return action.payload;
    default:
      return state;
  }
}
