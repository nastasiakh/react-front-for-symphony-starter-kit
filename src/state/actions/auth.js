import AuthService from "../../services/auth.service";
import { CREATE_USER, SET_TOKEN } from "./actionTypes";
import { setErrors } from "./error";
import {
  SUCCESSFUL_LOGIN,
  SUCCESSFUL_SIGNUP,
  UNAUTHORIZED,
  USER_EXISTS,
} from "./notificationTypes";
import { toast } from "react-toastify";

export const login = (credentials) => async (dispatch) => {
  try {
    const token = await AuthService.login(credentials);
    dispatch({
      type: SET_TOKEN,
      payload: token,
    });
    toast.success(SUCCESSFUL_LOGIN);
  } catch (err) {
    dispatch(setErrors(UNAUTHORIZED));
  }
};

export const signUp = (credentials) => async (dispatch) => {
  try {
    await AuthService.signUp(credentials);
    dispatch({
      type: CREATE_USER,
    });
    toast.success(SUCCESSFUL_SIGNUP);
  } catch (err) {
    dispatch(setErrors(USER_EXISTS));
  }
};
