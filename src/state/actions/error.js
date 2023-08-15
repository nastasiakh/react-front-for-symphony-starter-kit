import { RESET_ERRORS, SET_ERRORS } from "./actionTypes";
import { toast } from "react-toastify";

export const setErrors = (messages) => async (dispatch) => {
  try {
    console.log("error mess", messages);
    dispatch({
      type: SET_ERRORS,
      payload: messages,
    });
    toast.error(messages);
  } catch (err) {
    console.log("message", err);
  }
};

export const resetErrors = () => async (dispatch) => {
  try {
    dispatch({
      type: RESET_ERRORS,
    });
  } catch (err) {
    console.log(err);
  }
};
