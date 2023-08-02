import AuthService from "../../services/auth.service";
import {SET_TOKEN} from "./actionTypes";

export const login = (credentials) => async (dispatch) => {
    try {
        const token = await AuthService.login(credentials);
        dispatch({
            type: SET_TOKEN,
            payload: token,
        });

    } catch (err) {
        console.log("Login", err);
    }
};

export const signUp = (credentials) => async (dispatch) => {
    try {
        const res = await AuthService.signUp(credentials);

        dispatch({
            type: SET_TOKEN,
            payload: res.data.token
        });
    } catch (err) {
        console.log("SignUp", err);
    }
}