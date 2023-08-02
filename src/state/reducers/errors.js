import {RESET_ERRORS, SET_ERRORS,} from "../actions/actionTypes";

const initialState = [];

function errorsReducer(errors = initialState, action) {

    const {type, payload} = action;

    switch (type) {

        case SET_ERRORS:
            return payload;

        case RESET_ERRORS:
            return null;

        default:
            return null;
    }
}

export default errorsReducer;