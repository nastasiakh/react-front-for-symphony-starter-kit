import {CREATE_USER, RESET_TOKEN, SET_TOKEN} from "../actions/actionTypes";

const initialState = {
    token: null,
    userCreated: false
};

function authReducer(state = initialState, action) {

    const {type, payload} = action;

    switch (type) {

        case SET_TOKEN:
            return { ...state, token: payload};

        case CREATE_USER:
            return {...state, userCreated: true }

        case RESET_TOKEN:
            return {...state, token: null};

        default:
            return state;
    }
}

export default authReducer;