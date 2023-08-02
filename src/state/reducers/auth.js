import {RESET_TOKEN, SET_TOKEN} from "../actions/actionTypes";

const initialState = {
    token: null,
};

function authReducer(state = initialState, action) {

    const {type, payload} = action;

    switch (type) {

        case SET_TOKEN:
            return payload;

        case RESET_TOKEN:
            return null;

        default:
            return state;
    }
}

export default authReducer;