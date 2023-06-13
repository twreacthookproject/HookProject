import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function saveCategoryReducer(
  state = initialState.savedCategory,
  action
) {
  switch (action.type) {
    case actionTypes.UPDATE_CATEGORY_SUCCESS:
      return action.payload;
    case actionTypes.CREATE_CATEGORY_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
