import { RESET_ERRORS, SET_ERRORS } from "../actions/actionTypes";

const initialState = {
  error: null,
};

function errorsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ERRORS:
      return { ...state, error: payload };

    case RESET_ERRORS:
      return { ...state, error: null };

    default:
      return null;
  }
}

export default errorsReducer;
