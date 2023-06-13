import * as actionTypes from '../actions/actionTypes';

const initialState = {
  currentUser: null,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        currentUser: null,
        error: action.payload,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    default:
      return state;
  }
}